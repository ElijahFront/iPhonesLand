<?php

if(isset($_POST['tel'])) {



    // EDIT THE 2 LINES BELOW AS REQUIRED

    $email_to = "you@yourdomain.com";

    $email_subject = "iPhones Landing";





    function died($error) {

        // your error code can go here

        echo "We are very sorry, but there were error(s) found with the form you submitted. ";

        echo "These errors appear below.<br /><br />";

        echo $error."<br /><br />";

        echo "Please go back and fix these errors.<br /><br />";

        die();

    }



    // validation expected data exists

    if(!isset($_POST['name']) ||

        !isset($_POST['tel'])) {

        died('We are sorry, but there appears to be a problem with the form you submitted.');

    }


    $first_name = $_POST['name']; // required

    $telephone = $_POST['tel']; // not required



    $error_message = "";

    $string_exp = "/^[A-Za-z .'-]+$/";

  if(!preg_match($string_exp,$first_name)) {

    $error_message .= 'The First Name you entered does not appear to be valid.<br />';

  }


  if(strlen($error_message) > 0) {

    died($error_message);

  }

    $email_message = "Form details below.\n\n";



    function clean_string($string) {

      $bad = array("content-type","bcc:","to:","cc:","href");

      return str_replace($bad,"",$string);

    }



    $email_message .= "Имя: ".clean_string($first_name)."\n";

    $email_message .= "Телефон: ".clean_string($telephone)."\n";

// create email headers

$headers = 'From: '.$email_from."\r\n".

'Reply-To: '.$email_from."\r\n" .

'X-Mailer: PHP/' . phpversion();

@mail($email_to, $email_subject, $email_message, $headers);

?>
