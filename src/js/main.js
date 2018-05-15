const navButton = document.getElementById('nav-button');
const menuMobile = document.querySelector('.nav-mobile__menu-mobile');
const menuMobileComputed = getComputedStyle(document.querySelector('.nav-mobile__menu-mobile'));

navButton.addEventListener('click', menuToggle);

function menuToggle(e) {
  if (menuMobileComputed.display === 'none') {
    menuMobile.style.display = 'flex';
  } else {
    menuMobile.style.display = 'none';
  }
}