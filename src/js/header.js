function header () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 70) {
      $('.header-top__info-block').slideUp();
    }
    else {
      $('.header-top__info-block').slideDown();
    }
    if ($(window).scrollTop() > 70 && $('.sidebar').hasClass('active')) {
      $('#burger-btn').click();
    }
  });
  // - - - - -
  if ($(window).scrollTop() > 70) {
    $('.header-top__info-block').hide();
  }
  $('#burger-btn').click(function () {
    $('.burger__lines-block, .burger__mid-line, .sidebar, .sidebar__link').toggleClass('active');
  });
  $('.sidebar').click(function () {
    $('#burger-btn').click();
  });
}
