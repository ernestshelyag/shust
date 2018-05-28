function workWithSlider () {
  $('.work-with__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    appendArrows: '.work-with__arrs',
    prevArrow: '<button type="button" class="slick-prev">prev</button>',
    nextArrow: '<button type="button" class="slick-next">next</button>',
    responsive: [{
      breakpoint: 767,
      settings: {
        arrows: true
      }
    }]
  });
};
