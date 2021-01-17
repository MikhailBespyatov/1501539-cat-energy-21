let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');
navMain.classList.remove('main-nav--opened');
navMain.classList.add('main-nav--closed');

navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('main-nav--closed')) {
        navMain.classList.remove('main-nav--closed');
        navMain.classList.add('main-nav--opened');
    } else {
        navMain.classList.add('main-nav--closed');
        navMain.classList.remove('main-nav--opened');
    }
});

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
