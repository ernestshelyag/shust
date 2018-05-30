function header () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 70) {
      $('.header-top__info-block').slideUp();
    }
    else {
      $('.header-top__info-block').slideDown();
    }
  });
}
