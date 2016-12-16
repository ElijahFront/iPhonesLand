(function() {
  $('.form .button').on('click', function(e){
    e.preventDefault();

    var $this = $(this);

    var name = $('input[name="upper_form_name"]'),
        phone = $('input[name="upper_form_tel"]');

    if (name.val() != '' && phone.val() != ''){
      $.post('send_email.php', $('.form').serialize(), function(data) {
        console.log('ok');
        name.val('');
        phone.val('');
        $this.val('Заявка отправлена!')
      })
    }

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


// MOUSE PARALLAX


(function() {
  console.log('hey');
  $(window).on('mousemove', function(e){
    var mouseX = e.pageX,
        mouseY = e.pageY,
        w = (window.innerWidth/2),  // для изменения начальной точки центра на середину окна
        h = (window.innerHeight/2),
        MoveX = ((w*0.01) - mouseX)*0.05,
        MoveY = ((h*0.01) - mouseY)*0.05;
          console.log(MoveY);

    $('.carralax-container').css({
    'background-position' : `${MoveX}px center`});  // the main idea is here. it would also be conscious to set varieties out of the 'transform3d' property

    });

})();
