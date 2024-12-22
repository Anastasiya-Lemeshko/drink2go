import { isEscapeKey } from './utils.js';

const userNav = document.querySelector('.header__user-nav');
const burgerMenu = document.querySelector('.js-toggle-button');

const openMobileMenu = () => {
  userNav.classList.remove('header__user-nav--closed');
  userNav.classList.add('header__user-nav--opened');
  document.addEventListener('keydown', onDocumentKeydown);
};

const closeMobileMenu = () => {
  userNav.classList.remove('header__user-nav--opened');
  userNav.classList.add('header__user-nav--closed');
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
    if (userNav.classList.contains('header__user-nav--opened')) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });
};

export { toggleBurgerMenu };
