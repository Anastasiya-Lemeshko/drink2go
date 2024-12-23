import { toggleBurgerMenu } from './open-mobile-menu.js';
import { changeSlider } from './change-slider.js';
import { createRange } from './change-range.js';
import './hide-pagination-button.js';

document.addEventListener('DOMContentLoaded', () => {
  toggleBurgerMenu();
  changeSlider();
  createRange(0, 970, 1, 0, 900);
});
