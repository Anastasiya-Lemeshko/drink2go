const sliderElement = document.querySelector('.range__container');
const valueMinElement = document.querySelector('.input-text__input--min');
const valueMaxElement = document.querySelector('.input-text__input--max');

const onSliderUpdate = () => {
 const valueArray = sliderElement.noUiSlider.get();
  valueMinElement.value = valueArray[0];
  valueMaxElement.value = valueArray[1];
};

const createSlider = (min, max, step) => {    // единоразово создает слайдер
  noUiSlider.create(sliderElement, {
    range: { min, max },
    start: [min, max],
    step,
    connect: [false, true, false],
    format: {
      to: (value) => Number(Math.round(value)),
      from: (value) => Number(Math.round(value)),
    }
  });

  sliderElement.noUiSlider.on('update', onSliderUpdate);
};

createSlider(0, 900, 1);
