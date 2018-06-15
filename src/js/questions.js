function questions () {
  $('body').on('click', '.questions li', function () {
    // -
    $('.questions li').not($(this)).removeClass('active');
    $('.questions p').slideUp(600);
    // -
    if ($(this).hasClass('active')) {
      $('.questions li').removeClass('active');
      $('.questions p').slideUp(600);
    } else {
      $(this).addClass('active');
      $(this).children('p').slideDown(600);
    }
  });
}
