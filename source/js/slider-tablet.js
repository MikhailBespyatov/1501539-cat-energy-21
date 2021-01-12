let sliderTablet = document.querySelector('.slider');
let sliderControlTablet = document.querySelector('.slider__control');
let buttonBeforeTablet = document.querySelector('.button-slider--before');
let buttonAfterTablet = document.querySelector('.button-slider--after');

buttonBefore.addEventListener('click', function() {
    sliderTablet.classList.add('slider--before');
    sliderControlTablet.classList.add('slider__control--before');

    if (sliderTablet.classList.contains('slider--after')) {
        sliderTablet.classList.remove('slider--after');
        sliderTablet.classList.add('slider--before')
    }

    if (sliderControlTablet.classList.contains('slider__control--after')) {
        sliderControlTablet.classList.remove('slider__control--after');
        sliderControlTablet.classList.add('slider__control--before');
    }
});

buttonAfterTablet.addEventListener('click', function() {
    sliderTablet.classList.add('slider--after');
    sliderControlTablet.classList.add('slider__control--after');

    if (sliderTablet.classList.contains('slider--before')) {
        sliderTablet.classList.remove('slider--before');
        sliderTablet.classList.add('slider--after')
    }

    if (sliderControlTablet.classList.contains('slider__control--before')) {
        sliderControlTablet.classList.remove('slider__control--before');
        sliderControlTablet.classList.add('slider__control--after');
    }
});