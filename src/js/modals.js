function modals () {
  // enter
  $('#enter').click(function () {
    $('#modal-enter').fadeIn();
  });
  $('#modal-enter .modal__close-btn').click(function () {
    $('#modal-enter').fadeOut();
  });
  // reg
  $('#reg').click(function () {
    $('#modal-enter').fadeOut();
    $('#modal-reg').fadeIn();
  });
  $('#modal-reg .modal__close-btn').click(function () {
    $('#modal-reg').fadeOut();
  });
  // appointment
  $('.hero-slider-text__btn, .price__top-btn, .price-item__btn').click(function () {
    $('#modal-appointment').fadeIn();
  });
  $('#modal-appointment .modal__close-btn').click(function () {
    $('#modal-appointment').fadeOut();
  });
}
