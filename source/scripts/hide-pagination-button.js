const pagination = document.querySelector('.pagination');
const pages = pagination.querySelectorAll('.pagination__link');
const buttonPrev = pagination.querySelector('.pagination__button--prev');
const buttonNext = pagination.querySelector('.pagination__button--next');

const isFirstPage = pages[0].classList.contains('pagination__link--current');
const isLastPage = pages[pages.length - 1].classList.contains('pagination__link--current');

const classToDisable = 'pagination__button--disabled';
const classToHide = 'pagination__button--hidden';

const checkPageNumber = (classToBlock) => {
  if (isFirstPage) {
    buttonPrev.classList.add(classToBlock);
  } else if (isLastPage) {
    buttonNext.classList.add(classToBlock);
  } else {
    buttonPrev.classList.remove(classToBlock);
    buttonNext.classList.remove(classToBlock);
  }
};

const blockPaginationButton = () => {
  let totalWidth = window.screen.width;

  if (totalWidth >= 768) {
    checkPageNumber(classToHide);
  } else {
    checkPageNumber(classToDisable);
  }
};

export { blockPaginationButton }
