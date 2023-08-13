const menuOpen = document.querySelector('.menu-open');
const menuClose = document.querySelector('.menu-close');
const menu = document.querySelector('.menu');

const accordionBtn = document.querySelectorAll('.accordion__btn');
const accordionInfo = document.querySelectorAll('.accordion__info');

const footerYear = document.querySelector('.footer__year');

// Burger Menu
menuOpen.addEventListener('click', () => menu.classList.toggle('hidden'));
menuClose.addEventListener('click', () => menu.classList.toggle('hidden'));

// Accordion
accordionBtn.forEach((item) => {
  item.addEventListener('click', () => accordionInfo.forEach((item) => item.classList.toggle('hidden')));
});

// Current Year
footerYear.textContent = new Date().getFullYear();