import noUiSlider from 'nouislider';
const slider = document.getElementById('slider') as noUiSlider.Instance;
const card = document.querySelectorAll('.card');
const cardPrice = document.querySelectorAll('.card-price');

noUiSlider.create(slider, {
    start: [0, 100],
    connect: true,
    range: {
        min: 0,
        max: 100,
    },
    tooltips: {
        to: function (numericValue) {
            return numericValue.toFixed(1);
        },
    },
});

slider.noUiSlider.on('update', function (values: number[]) {
    card.forEach((el, i) => {
        const price = Number(cardPrice[i].textContent?.match(/\d+/g)?.join(''));
        const minVal = values[0];
        const maxVal = values[1];

        if (price > minVal && price < maxVal) {
            el.classList.remove('hidden');
            el.classList.add('show');
        } else {
            el.classList.add('hidden');
            el.classList.remove('show');
        }
    });
});
