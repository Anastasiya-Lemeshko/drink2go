const sliderElement = document.querySelector('.range__container');
const valueMinElement = document.querySelector('.input-text__input--min');
const valueMaxElement = document.querySelector('.input-text__input--max');

const onSliderUpdate = () => {
 const valueArray = sliderElement.noUiSlider.get();
  valueMinElement.value = valueArray[0];
  valueMaxElement.value = valueArray[1];
};

const createSlider = (min, max, step, start, end) => {    // единоразово создает слайдер
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

createSlider(0, 970, 1, 0, 900);
