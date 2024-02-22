function onInputPrefix(target) {
    const element = document.querySelector('.page-header > h1');
    element.textContent = 'No. ' + target.value + '000';
}

function onInputName(target) {
    const element = document.querySelector('.page-content > .name');
    element.textContent = target.value;
}

function onInputTitle(target) {
    const element = document.querySelector('.page-content > .title');
    element.textContent = target.value;
}

function onInputPhone(target) {
    const element = document.querySelector('.page-content > .phone');
    element.textContent = target.value;
}

function onInputEmail(target) {
    const element = document.querySelector('.page-content > .email');
    element.textContent = target.value;
}

function onSubmit() {
    const pageOriginal = document.querySelector('.page-preview');
    const pageClone = pageOriginal.cloneNode(true);

    let prefix = document.querySelector('#prefix').value;
    let numCopies = document.querySelector('#copies').value;

    if (!prefix) prefix = 'No. {Prefix}';
    if (!numCopies) numCopies = 1;
    
    var openWindow = window.open("", "title", "attributes");
    for (let i = 0; i < numCopies; i++) {
        const header = pageClone.querySelector('.page-header > h1');
        header.textContent = prefix + i.toString().padStart(3, '0');
        openWindow.document.write(pageClone.outerHTML);
    }
    const stylesheet = document.querySelector('style');
    const stylesheetClone = stylesheet.cloneNode(true);
    openWindow.document.head.appendChild(stylesheetClone);
    openWindow.document.close();
    openWindow.onload = () => {
        openWindow.focus();
        openWindow.print();
        openWindow.close();
    }
}