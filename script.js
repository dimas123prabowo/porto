const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav .nav_icon');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('slide');
});
