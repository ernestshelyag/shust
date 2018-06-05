function workWithSlider () {
  $('.work-with__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    appendArrows: '.work-with__arrs',
    prevArrow: '<button type="button" class="slick-prev">' +
    '             <svg class="sprite__icon icon arr-prev">\n' +
    '               <use xlink:href="\'+sliderarrs+\'#arr-prev"></use>\n' +
    '             </svg>' +
    '           </button>',
    nextArrow: '<button type="button" class="slick-prev">' +
    '             <svg class="sprite__icon icon arr-next">\n' +
    '               <use xlink:href="\'+sliderarrs+\'#arr-next"></use>\n' +
    '             </svg>' +
    '           </button>',
    responsive: [
      {
        breakpoint: 1180,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
}
