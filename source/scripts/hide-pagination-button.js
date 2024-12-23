const pagination = document.querySelector('.pagination');
const pages = pagination.querySelectorAll('.pagination__link');
const buttonPrev = pagination.querySelector('.pagination__button--prev');
const buttonNext = pagination.querySelector('.pagination__button--next');

const isFirstPage = pages[0].classList.contains('pagination__link--current');
const isLastPage = pages[pages.length - 1].classList.contains('pagination__link--current');

if (isFirstPage) {
  buttonPrev.classList.add('pagination__button--hidden');
} else if (isLastPage) {
  buttonNext.classList.add('pagination__button--hidden');
} else {
  buttonPrev.classList.remove('pagination__button--hidden');
  buttonNext.classList.remove('pagination__button--hidden');
}

