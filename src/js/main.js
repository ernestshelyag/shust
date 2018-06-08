$(window).on('load', function () {
  $('body').show();
  $('.preloader').delay(100).fadeOut('slow');
});

$(function () {

  header();

  heroSlider();

  workWithSlider();

  reviewSliders();

  diplomSlider();

  students();

  questions();

  modals();

  sendForm();

  select();

});
