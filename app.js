const passData = document.querySelector('.pass-data');
const portalFrame = document.querySelector('#portalFrame');
console.log('portal script');

passData.addEventListener('click', function () {
    portalFrame.contentWindow.postMessage('foo', '*');
});

const obj = {
    a: 1,
    b: 2
};

portalFrame.contentWindow.postMessage(JSON.stringify(obj), '*');
