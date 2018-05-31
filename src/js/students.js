function students () {
  $('.students__pdf-title').click(function () {
    $(this).toggleClass('active');
    $(this).siblings('.students__items-hiding').slideToggle();
  });
  // -
  $('[data-tab]').on('click', function () {
    $(this).addClass('active').siblings('[data-tab]').removeClass('active');
    $('[data-content=' + $(this).data('tab') + ']').addClass('active').siblings('[data-content]').removeClass('active');
  });
}
