function heroSlider() {
  $('.hero-slider-text').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.hero-slider-img',
    arrows: false,
    dots: true,
    // autoplay: true,
    // autoplaySpeed: 5000,
    appendArrows: '.hero-slider__arrs',
    appendDots: '.hero-slider__dots',
    prevArrow: '<button type="button" class="slick-prev">prev</button>',
    nextArrow: '<button type="button" class="slick-next">next</button>',
    responsive: [{
      breakpoint: 767,
      settings: {
        arrows: true,
        dots: false
      }
    }]
  });
  $('.hero-slider-img').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.hero-slider-text',
    dots: false,
    arrows: false,
    fade: true,
    speed: 1000,
    cssEase: 'linear'
  });
}
