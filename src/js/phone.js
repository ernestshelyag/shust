function phone () {
  $('input[name*="phone"]').inputmask({
    mask: '+7(999)999-99-99',
    showMaskOnHover: false
  });
}
