import { isEscapeKey } from './utils.js';

const header = document.querySelector('.header');
const burgerMenu = document.querySelector('.js-toggle-button');

const openMobileMenu = () => {
  header.classList.remove('header--mobile-menu-closed');
  header.classList.add('header--mobile-menu-opened');
  document.addEventListener('keydown', onDocumentKeydown);
};

const closeMobileMenu = () => {
  header.classList.remove('header--mobile-menu-opened');
  header.classList.add('header--mobile-menu-closed');
  document.removeEventListener('keydown', onDocumentKeydown);
};

function onDocumentKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeMobileMenu();
  }
}

const toggleBurgerMenu = () => {
  burgerMenu.addEventListener('click', () => {
    if (header.classList.contains('header--mobile-menu-opened')) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });
};

export { toggleBurgerMenu };
