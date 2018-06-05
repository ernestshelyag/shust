function reviewSliders () {
  $('.review__slider_video').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    appendArrows: '.review__arrs_v',
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
        breakpoint: 1045,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 568,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
  $('.review__slider_text').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    appendArrows: '.review__arrs_t',
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
    responsive: [{
      breakpoint: 960,
      settings: {
        slidesToShow: 1
      }
    }]
  });
}
