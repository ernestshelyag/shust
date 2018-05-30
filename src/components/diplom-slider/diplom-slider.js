function diplomSlider () {
  $('.diplom-slider__slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    appendArrows: '.diplom-slider__arrs',
    prevArrow: '<button type="button" class="slick-prev">' +
    '             <svg class="sprite__icon icon arr-prev">\n' +
    '               <use xlink:href="img/sprite.svg#arr-prev"></use>\n' +
    '             </svg>' +
    '           </button>',
    nextArrow: '<button type="button" class="slick-prev">' +
    '             <svg class="sprite__icon icon arr-next">\n' +
    '               <use xlink:href="img/sprite.svg#arr-next"></use>\n' +
    '             </svg>' +
    '           </button>',
    responsive: [{
      breakpoint: 767,
      settings: {
        arrows: true
      }
    }]
  });
}
