const hero = document.querySelector('.hero');
const bullitList = hero.querySelector('.slider-pagination');
const bullits = hero.querySelectorAll('.slider-pagination__button');
const sliderList = hero.querySelector('.slider__list');
const slides = hero.querySelectorAll('.slider__item');
const sliderPrev = hero.querySelector('.slider-button-prev');
const sliderNext = hero.querySelector('.slider-button-next');

const changeSlider = () => {
  const setTabindex = () => {
    slides.forEach((item) => {
      item.querySelectorAll('a').forEach((link) => {
        link.tabIndex = -1
      })
    });

    document.querySelector('.slider__item--current').querySelectorAll('a').forEach((link) => {
      link.tabIndex = 0;
    })
  }

  setTabindex();

  const setActiveBullet = (index) => {
    document.querySelector('.slider-pagination__button--current').classList.remove('slider-pagination__button--current');
    Array.from(bullits)[index].classList.add('slider-pagination__button--current');
  };

  const shiftSlider = (index) => {
    let totalWidth = window.screen.width;

    if (totalWidth >= 1440) {
      sliderList.style.transform = `translateX(${-1440 * index}px)`;
    } else {
      sliderList.style.transform = `translateX(${-1 * totalWidth * index}px)`;
    }
  };

  const setActiveScreen = (index) => {
    document.querySelector('.slider__item--current').classList.remove('slider__item--current');
    Array.from(slides)[index].classList.add('slider__item--current');
    setTabindex();
  };

  const isSliderButtonDisabled = (index) => {
    sliderPrev.disabled = index === 0;
    sliderNext.disabled = index === slides.length - 1;
  };

  bullitList.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('slider-pagination__button')) {
      const activeBullit = evt.target;
      const indexCurrentBullit = Array.from(bullits).indexOf(activeBullit);
      setActiveScreen(indexCurrentBullit);
      shiftSlider(indexCurrentBullit);
      setActiveBullet(indexCurrentBullit);
    }
  });

  sliderPrev.addEventListener('click', () => {
    const currentSlider = document.querySelector('.slider__item--current');
    const currentIndex = Array.from(slides).indexOf(currentSlider);
    const newCurrentIndex = currentIndex - 1 >= 0 ? currentIndex - 1 : 0;
    setActiveScreen(newCurrentIndex);
    shiftSlider(newCurrentIndex);
    setActiveBullet(newCurrentIndex);
    isSliderButtonDisabled(newCurrentIndex);

    hero.classList = [`hero`];
    hero.classList.add(`hero--${newCurrentIndex + 1}`)
  });

  sliderNext.addEventListener('click', () => {
    const currentSlider = document.querySelector('.slider__item--current');
    const currentIndex = Array.from(slides).indexOf(currentSlider);
    const newCurrentIndex = currentIndex + 1 < slides.length ? currentIndex + 1 : slides.length;
    setActiveScreen(newCurrentIndex);
    shiftSlider(newCurrentIndex);
    setActiveBullet(newCurrentIndex);
    isSliderButtonDisabled(newCurrentIndex);

    hero.classList = [`hero`];
    hero.classList.add(`hero--${newCurrentIndex + 1}`);
  });
};

export { changeSlider };
