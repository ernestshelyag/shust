function modals () {
  // forms - focus mail
  $('.header-top__enter').magnificPopup({
    type: 'inline',
    preloader: false,
    removalDelay: 300,
    mainClass: 'my-mfp-animate',
    focus: '.modal__input_mail',
    callbacks: {
      beforeOpen: function () {
        if ($(window).width() < 700) {
          this.st.focus = false;
        } else {
          this.st.focus = '.modal__input_mail';
        }
      }
    }
  });
  // forms - focus name
  $('.hero-slider-text__btn,' +
    '.test-block__btn,' +
    '.modal__reg,' +
    '.price__top-btn,' +
    '.price-item__btn').magnificPopup({
    type: 'inline',
    preloader: false,
    removalDelay: 300,
    mainClass: 'my-mfp-animate',
    focus: '.modal__input_name',
    callbacks: {
      beforeOpen: function () {
        if ($(window).width() < 700) {
          this.st.focus = false;
        } else {
          this.st.focus = '.modal__input_name';
        }
      }
    }
  });
  // video
  $('.btn-play, .video li a, .review__slider_video a').magnificPopup({
    mainClass: 'my-mfp-video',
    removalDelay: 300,
    disableOn: 700,
    type: 'iframe',
    preloader: false
  });
}
