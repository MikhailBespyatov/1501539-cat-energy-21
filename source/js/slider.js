let sliderImg = document.querySelector('.slider__img-mobile');
let sliderToggle = document.querySelector('.slider__toggle');
let buttonBefore = document.querySelector('.button-slider--before');
let buttonAfter = document.querySelector('.button-slider--after');

buttonBefore.addEventListener('click', function() {
    sliderImg.classList.add('slider__img-mobile--before');
    sliderToggle.classList.add('button-slider--before');

    if (sliderImg.classList.contains('slider__img-mobile--after')) {
        sliderImg.classList.remove('slider__img-mobile--after');
        sliderImg.classList.add('slider__img-mobile--before');
    }

    if (sliderToggle.classList.contains('slider__toggle--after')) {
        sliderToggle.classList.remove('slider__toggle--after');
        sliderToggle.classList.add('slider__toggle--before');
    }
});

buttonAfter.addEventListener('click', function() {
    sliderImg.classList.add('slider__img-mobile--after');
    sliderToggle.classList.add('button-slider--after')

    if (sliderImg.classList.contains('slider__img-mobile--before')) {
        sliderImg.classList.remove('slider__img-mobile--before');
        sliderImg.classList.add('slider__img-mobile--after');
    }

    if (sliderToggle.classList.contains('slider__toggle--before')) {
        sliderToggle.classList.remove('slider__toggle--before');
        sliderToggle.classList.add('slider__toggle--after');
    }
});