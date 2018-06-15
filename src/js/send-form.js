function sendForm () {

  // validations

  $('input[type=email]').on('input', function () {
    var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
    if (pattern.test($(this).val())) {
      $(this).parent().removeClass('form-err');
      $(this).parent().addClass('form-correct');
    } else {
      $(this).parent().removeClass('form-correct');
      $(this).parent().addClass('form-err');
    }
  });

  // - - - - -

  $('input[type=password], input[type=text]').on('input', function () {
    var value = $(this).val();
    if (value !== '') {
      $(this).parent().removeClass('form-err');
      $(this).parent().addClass('form-correct');
    } else {
      $(this).parent().removeClass('form-correct');
    }
  });

  // - - - - -

  $('.modal__input_phone, .callback__input_phone, .contacts__input_phone').inputmask({
    mask: '+7(999)999-99-99',
    showMaskOnHover: false
  });

  $('.modal__input_phone, .callback__input_phone, .contacts__input_phone').on('input', function () {
    var pattern = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{3,10}$/;
    if (pattern.test($(this).val())) {
      $(this).parent().removeClass('form-err');
      $(this).parent().addClass('form-correct');
    } else {
      $(this).parent().removeClass('form-correct');
      $(this).parent().addClass('form-err');
    }
  });

  // form enter

  $('#form-enter').submit(function (e) {
    var mail = $(this).find('.modal__input_mail');
    var pass = $(this).find('.modal__input_pass');
    var errorFlag = false;
    var data = $(this).serialize();
    var validateMail = function () {
      if (mail.parent().hasClass('form-correct')) {
        return true;
      } else {
        return false;
      }
    };
    e.preventDefault();
    // checking form
    if (!validateMail() || mail.val() === '') {
      mail.parent().addClass('form-err');
      errorFlag = true;
    } else if (pass.val() === '') {
      pass.parent().addClass('form-err');
      errorFlag = true;
    } else {
      errorFlag = false;
    }
    // sending form
    if (!errorFlag) {
      $.ajax({
        url: this.dataset.url,
        type: "post",
        data: data,
        success: function () {
          // clean form after send
          $('#form-enter')[0].reset();
          mail.parent().removeClass('.form-correct');
          pass.parent().removeClass('.form-correct');
        }
      });
    }
  });

  // form registration

  $('#form-reg').submit(function (e) {
    var name = $(this).find('.modal__input_name');
    var mail = $(this).find('.modal__input_mail');
    var pass = $(this).find('.modal__input_pass');
    var errorFlag = false;
    var data = $(this).serialize();
    var validateMail = function () {
      if (mail.parent().hasClass('form-correct')) {
        return true;
      } else {
        return false;
      }
    };
    e.preventDefault();
    // checking form
    if (name.val() === '') {
      name.parent().addClass('form-err');
      errorFlag = true;
    } else if (!validateMail() || mail.val() === '') {
      mail.parent().addClass('form-err');
      errorFlag = true;
    } else if (pass.val() === '') {
      pass.parent().addClass('form-err');
      errorFlag = true;
    } else {
      errorFlag = false;
    }
    // sending form
    if (!errorFlag) {
      $.ajax({
        url: this.dataset.url,
        type: "post",
        data: data,
        success: function () {
          // clean form after send
          $('#form-reg')[0].reset();
          name.parent().removeClass('.form-correct');
          mail.parent().removeClass('.form-correct');
          pass.parent().removeClass('.form-correct');
        }
      });
    }
  });

  // form appointment

  $('.modal__form_appointment').submit(function (e) {
    var name = $(this).find('.modal__input_name');
    var phone = $(this).find('.modal__input_phone');
    var errorFlag = false;
    var data = $(this).serialize();
    var validatePhone = function () {
      if (phone.parent().hasClass('form-correct')) {
        return true;
      } else {
        return false;
      }
    };
    e.preventDefault();
    // checking form
    if (name.val() === '') {
      name.parent().addClass('form-err');
      errorFlag = true;
    } else if (!validatePhone() || phone.val() === '') {
      phone.parent().addClass('form-err');
      errorFlag = true;
    } else {
      errorFlag = false;
    }
    // sending form
    if (!errorFlag) {
      $.ajax({
        url: this.dataset.url,
        type: "post",
        data: data,
        success: function () {
          // clean form after send
          $('.modal__form_appointment')[0].reset();
          name.parent().removeClass('.form-correct');
          phone.parent().removeClass('.form-correct');
          // - - - - -
          modalSuccess();
        }
      });
    }
  });

  // form callback

  $('.callback__form_callback').submit(function (e) {
    var phone = $(this).find('.callback__input_phone');
    var errorFlag = false;
    var data = $(this).serialize();
    var validatePhone = function () {
      if (phone.parent().hasClass('form-correct')) {
        return true;
      } else {
        return false;
      }
    };
    e.preventDefault();
    // checking form
    if (!validatePhone() || phone.val() === '') {
      phone.parent().addClass('form-err');
      errorFlag = true;
    } else {
      errorFlag = false;
    }
    // sending form
    if (!errorFlag) {
      $.ajax({
        url: this.dataset.url,
        type: "post",
        data: data,
        success: function () {
          // clean form after send
          $('.callback__form_callback')[0].reset();
          phone.parent().removeClass('.form-correct');
          // - - - - -
          modalSuccess();
        }
      });
    }
  });

  // contacts-page callback

  $('.contacts__form').submit(function (e) {
    var name = $(this).find('.contacts__input_name');
    var phone = $(this).find('.contacts__input_phone');
    var errorFlag = false;
    var data = $(this).serialize();
    var validatePhone = function () {
      if (phone.parent().hasClass('form-correct')) {
        return true;
      } else {
        return false;
      }
    };
    e.preventDefault();
    // checking form
    if (name.val() === '') {
      name.parent().addClass('form-err');
      errorFlag = true;
    } else if (!validatePhone() || phone.val() === '') {
      phone.parent().addClass('form-err');
      errorFlag = true;
    } else {
      errorFlag = false;
    }
    // sending form
    if (!errorFlag) {
      $.ajax({
        url: this.dataset.url,
        type: "post",
        data: data,
        success: function () {
          // clean form after send
          $('.contacts__form')[0].reset();
          name.parent().removeClass('.form-correct');
          phone.parent().removeClass('.form-correct');
          // - - - - -
          modalSuccess();
        }
      });
    }
  });

  function modalSuccess () {
    $.magnificPopup.open({
      items: {
        src: '#success-popup'
      }
    });
    function fun() {
      $.magnificPopup.close({
        items: {
          src: '#success-popup'
        }
      });
    }
    setTimeout(fun, 2000);
  }

}
