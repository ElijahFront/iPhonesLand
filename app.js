// Send post request to the php file in order to send email

(function() {
  $('.form .button').on('click', function(e){
    e.preventDefault();

    var $this = $(this);

    var name = $('input[name="upper_form_name"]'),
        phone = $('input[name="upper_form_tel"]');
    var phoneLength = phone.val().split('').length;


    if (name.val() != '' && phone.val() != '' && phoneLength >= 6){
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

//timer
(function(){

  var showDays = true;
  var textSize = 0.05;

  if ($(window).width() <= 780){
    showDays = false;
    textSize = 0.1;
  }

  $(".promo_timer").TimeCircles({
                start: true, // determines whether or not TimeCircles should start immediately.
    animation: "smooth", // smooth or ticks. The way the circles animate can be either a constant gradual rotating, slowly moving from one second to the other.
    count_past_zero: true, // This option is only really useful for when counting down. What it does is either give you the option to stop the timer, or start counting up after you've hit the predefined date (or your stopwatch hits zero).
    circle_bg_color: "#60686F", // determines the color of the background circle.
    use_background: false, // sets whether any background circle should be drawn at all.
    fg_width: 0.05, //  sets the width of the foreground circle.
    bg_width: 1.2, // sets the width of the backgroundground circle.
    text_size: textSize, // This option sets the font size of the text in the circles.
    total_duration: "Auto", // This option can be set to change how much time will fill the largest visible circle.
    direction: "Clockwise", // "Clockwise", "Counter-clockwise" or "Both".
    use_top_frame: false,
    start_angle: 0, // This option can be set to change the starting point from which the circles will fill up.
    time: { //  a group of options that allows you to control the options of each time unit independently.
    Days: {
      show: showDays,
      text: "Days",
      color: "#f7c82c"
    },
    Hours: {
      show: true,
      text: "Hours",
      color: "#f7c82c"
    },
    Minutes: {
      show: true,
      text: "Minutes",
      color: "#f7c82c"
    },
    Seconds: {
      show: true,
      text: "Seconds",
      color: "#f7c82c"
    }
    }
  });
})();
