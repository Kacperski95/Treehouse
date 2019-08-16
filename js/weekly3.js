// hamburger menu toggle
const burger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

const changeNav = () => {
    burger.classList.toggle('active');
    nav.classList.toggle('active');
}

burger.addEventListener('click', () => changeNav());

