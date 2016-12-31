<?php
  session_start ();
  if (isset($_POST["upper_form_tel"])){
    $name = htmlspecialchars ($_POST["upper_form_name"]);
    $tel = htmlspecialchars ($_POST["upper_form_tel"]);
    $_SESSION["name"] = $name;
    $_SESSION["tel"] = $tel;
    $subject = "Landing Page message";
    $theme = "Имя: $name\nНомер телефона: $tel\n";

    // $subject = "=?utf-8?B?".base64_decode($subject)."?=";
  /*  $error_email = "";
    $error = false;

    if ($email = "" || !preg_match ("/@/", $email)) {
      $error_email = "Введите корректный email";
      $error = true;
    }
    if (!$error) { */
      $headers = "From : $email\r\nReply-to: $email\r\nContent-type: text/plain; charset=utf-8\r\n";
      mail ('1380888@mail.ru', $subject, $theme, $headers);
      // header ("Location: mailSent.php");
      exit;

  }

?>
