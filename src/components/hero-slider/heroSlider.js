function heroSlider() {
  $('.hero-slider-text').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.hero-slider-img',
    arrows: false,
    dots: true,
    // autoplay: true,
    // autoplaySpeed: 5000,
    appendDots: '.hero-slider__dots',
    prevArrow: '<button type="button" class="slick-prev">' +
    '             <svg class="sprite__icon icon arr-prev">\n' +
    '               <use xlink:href="\'+sliderarrs+\'#arr-prev"></use>\n' +
    '             </svg>' +
    '           </button>',
    nextArrow: '<button type="button" class="slick-prev">' +
    '             <svg class="sprite__icon icon arr-next">\n' +
    '               <use xlink:href="\'+sliderarrs+\'#arr-next"></use>\n' +
    '             </svg>' +
    '           </button>'
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
