$(function () {
    $('.header__enter-btn').on('click', function () {
        $('.modal').addClass('modal--open');
    });
    $('.modal__btn-close').on('click', function () {
        $('.modal').removeClass('modal--open');
    });
});