function diplomSlider () {
  $('.diplom-slider__slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    appendArrows: '.diplom-slider__arrs',
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
        breakpoint: 1000,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 712,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 528,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  });
  $('.slick-track').lightGallery();
}
