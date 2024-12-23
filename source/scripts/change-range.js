const range = document.querySelector('.range');
const sliderElement = range.querySelector('.range__container');
const valueElement = range.querySelectorAll('.input-text__input');
const valueMinElement = range.querySelector('.input-text__input--min');
const valueMaxElement = range.querySelector('.input-text__input--max');

const onSliderUpdate = () => {
 const valueArray = sliderElement.noUiSlider.get();
  valueMinElement.value = valueArray[0];
  valueMaxElement.value = valueArray[1];
};

const createRange = (min, max, step, start, end) => {
  noUiSlider.create(sliderElement, {
    range: { min, max },
    start: [start, end],
    step,
    connect: [false, true, false],
    format: {
      to: (value) => Number(Math.round(value)),
      from: (value) => Number(Math.round(value)),
    }
  });

  sliderElement.noUiSlider.on('update', onSliderUpdate);
};

valueElement.forEach((element) => {
  element.addEventListener('change', () => {
    sliderElement.noUiSlider.set([valueMinElement.value, valueMaxElement.value]);
  });
});

export { createRange };

