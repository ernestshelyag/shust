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

  imageWrapper();
});


function imageWrapper(){
  $('.format li img').each(function(){
    $(this).wrap('<div class="format__image"></div>');
  });
  $('.review__item img').each(function(){
    $(this).wrap('<div class="review__image"></div>');
  });

  $('.work-with__item img').each(function(){
    $(this).wrap('<div class="work-with__image"></div>');
  });
  
}