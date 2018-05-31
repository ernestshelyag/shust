function questions () {
  $('.questions__item').click(function () {
    // -
    $('.questions__item').not($(this)).removeClass('active');
    $('.questions__text').slideUp(600);
    // -
    if ($(this).hasClass('active')) {
      $('.questions__item').removeClass('active');
      $('.questions__text').slideUp(600);
    } else {
      $(this).addClass('active');
      $(this).find('.questions__text').slideDown(600);
    }
  });
}
