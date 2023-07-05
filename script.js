const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.onclick = () => {
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
};

window.onscroll = () => {
    hamburger.classList.remove('active');
    menu.classList.remove('active');
};