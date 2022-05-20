let burg = document.querySelector('.burg');
let navMenu =document.querySelector('.nav__menu');

burg.addEventListener('click', mobileMenu);

function mobileMenu() {
    burg.classList.toggle('active');
    navMenu.classList.toggle('active');
}

const navLink = document.querySelectorAll('.href');

navLink.forEach(n=> n.addEventListener('click', closeMenu));

function closeMenu() {
    burg.classList.remove('active');
    navMenu.classList.remove('active');
}