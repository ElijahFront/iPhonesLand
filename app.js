(function() {
  $('.form .button').on('click', function(e){
    e.preventDefault();

    var name = $('input[name="upper_form_name"]').value(),
        phone = $('input[name="upper_form_tel"]').value();

    $.post('send_email.php', {name:name, tel:phone})
  })
})();

(function() {
  $('.promo_button').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({scrollTop : 0},800, function () {
      $('input[name="upper_form_name"]').focus();
    });
		return false;
  })
})();

(function () {

  var days_offset = 6;

  var date = new Date().getTime();
  date += 1000*60*60*24*days_offset;
  date = new Date(date);
  var year = date.getFullYear(),
      month = date.getMonth() + 1,  //отсчет начинается с 0, поэтому прибавляем 1
      day = date.getDate(),
      hours = date.getHours(),
      minutes = date.getMinutes(),
      seconds = date.getSeconds();


      var expireDate = `${year}-${month}-${day} 00:00:00`;

      $('.promo_timer').attr('data-date', expireDate)
})();
