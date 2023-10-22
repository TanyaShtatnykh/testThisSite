var menuArea = $('.header__menu-area');
var burgerBtn = $('.header__burger-btn');

$(function () {
    $(burgerBtn).on('click', function () {
        $(this).toggleClass('header__burger-btn--open');
        $(menuArea).toggleClass('header__menu-area--open');
    });
});