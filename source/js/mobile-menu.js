var navMain = document.querySelector('.main-navigation');
var navToggle = document.querySelector('.main-navigation__toggle');
var header = document.querySelector('.header');

navMain.classList.remove('main-navigation--nojs');
header.classList.remove('header--nojs');

navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('main-navigation--closed')) {
    navMain.classList.remove('main-navigation--closed');
    navMain.classList.add('main-navigation--opened');
    } else {
    navMain.classList.add('main-navigation--closed');
    navMain.classList.remove('main-navigation--opened');
    }
});
