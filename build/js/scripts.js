
$(function () {
  var infoContent = $('.info__content');

  $(infoContent).on('click', function () {
    if ($(this).children().hasClass('info__accordion-btn--open')) {
      $(this).children('.info__accordion-btn').removeClass('info__accordion-btn--open');
      $(this).children('.info__accordion-area').removeClass('info__accordion-area--open');
    } else {
      $('.info__accordion-btn').removeClass('info__accordion-btn--open');
      $('.info__accordion-area').removeClass('info__accordion-area--open');
      $(this).children('.info__accordion-btn').addClass('info__accordion-btn--open');
      $(this).children('.info__accordion-area').addClass('info__accordion-area--open');
    }
  });

  $(document).on('click', function (e) {
    if ( ! infoContent.is(e.target) && infoContent.has(e.target).length === 0) {
      $('.info__accordion-btn').removeClass('info__accordion-btn--open');
      $('.info__accordion-area').removeClass('info__accordion-area--open');
    }
  })
});
var menuArea = $('.header__menu-area');
var burgerBtn = $('.header__burger-btn');

$(function () {
    $(burgerBtn).on('click', function () {
        $(this).toggleClass('header__burger-btn--open');
        $(menuArea).toggleClass('header__menu-area--open');
    });
});
$(function () {
    $('.header__enter-btn').on('click', function () {
        $('.modal').addClass('modal--open');
    });
    $('.modal__btn-close').on('click', function () {
        $('.modal').removeClass('modal--open');
    });
});



$(function () {
    $('.header__help-btn').on('click', function () {
        $('.popup').toggleClass('popup--open');
    });
});