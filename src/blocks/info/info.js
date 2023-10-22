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