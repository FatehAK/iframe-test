(function () {
    const passData = document.querySelector('.pass-data');
const portalFrame = document.querySelector('#portalFrame');
console.log('portal script');

const obj = {
    a: 1,
    b: 2
};

passData.addEventListener('click', function () {
    portalFrame.contentWindow.postMessage('foo', 'https://react-client-side.netlify.com/');
    portalFrame.contentWindow.postMessage(JSON.stringify(obj), 'https://react-client-side.netlify.com/');
});

portalFrame.addEventListener('load', function() {
    portalFrame.contentWindow.postMessage('cool', 'https://react-client-side.netlify.com/');
});

})();
