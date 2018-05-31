$(window).on('load', function () {
  $('body').show();
  $('.preloader').delay(100).fadeOut('slow');
});

$(function () {
  header();
  heroSlider();
  phone();
  workWithSlider();
  reviewSliders();
  diplomSlider();
  students();
  questions();
  modals();
});
