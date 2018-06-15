function students () {
  // $('.students__pdf-title').click(function () {
  //   $(this).toggleClass('active');
  //   $(this).siblings('.students__items-hiding').slideToggle();
  // });
  $('.students__pdf-title').click(function () {
    // -
    $('.students__pdf-title').not($(this)).removeClass('active');
    $('.students__items-hiding').slideUp(600);
    // -
    if ($(this).hasClass('active')) {
      $('.students__pdf-title').removeClass('active');
      $('.students__items-hiding').slideUp(600);
    } else {
      $(this).addClass('active');
      $(this).next('.students__items-hiding').slideDown(600);
    }
  });
  // -
  $('[data-tab]').on('click', function () {
    $(this).addClass('active').siblings('[data-tab]').removeClass('active');
    $('[data-content=' + $(this).data('tab') + ']').addClass('active').siblings('[data-content]').removeClass('active');
  });
}
