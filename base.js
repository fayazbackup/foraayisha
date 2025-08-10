const msgBox = document.querySelector('.message-box');
const body = document.querySelector('body');

msgBox.addEventListener('mouseenter', () => {
    body.classList.add('blur-bg');
});
msgBox.addEventListener('mouseleave', () => {
    body.classList.remove('blur-bg');
});

msgBox.addEventListener('click', () => {
    window.location.href = "index1.html"; // Change to your target page
});
