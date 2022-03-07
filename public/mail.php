
<?php
require './PHPMailer/class.phpmailer.php';

//if($_POST['first_name'] && $_POST['email'] && $_POST['message'] && $_POST['topic']) {
if ( $_SERVER['REQUEST_METHOD'] == 'POST' ) {

  $name = $_POST['firstname'];
  $lastname = $_POST['lastname'];
  $email = $_POST['mail'];
  $message = $_POST['message'];
  $subject = $_POST['subject'];
  $formcontent="Vorname: $name \n Nachname: $lastname \n Email: $email \n Betreff: $subject \n Nachricht: $message";
  $mailheader = "Absender: $email \r\n";

  $mail = new PHPMailer;
  $mail->IsSMTP(); // telling the class to use SMTP
  $mail->Host       = "mx01.rz-inside.net"; // SMTP server
  //$mail->SMTPDebug  = 1;                     // enables SMTP debug information (for testing)
                                       // 1 = errors and messages
                                       // 2 = messages only
  $mail->Port       = 25;                    // set the SMTP port for the MAIL server
  $mail->setFrom('webmaster@fiberconstruct.de', 'Kontaktformular'); // TODO
  $mail->addAddress('info@fiberconstruct.de', 'Fiberconstruct GmbH'); //TODO

  $mail->addReplyTo($email, "$name $lastname");
  $mail->Subject = "Kontaktformular: $subject";
  $mail->Body     = $formcontent;
  if(!$mail->send()) {
    echo 'Nachricht konnte nicht gesendet werden, bitte versuchen Sie es erneut.';
    echo 'Mailer error: ' . $mail->ErrorInfo;
  } else {
    echo 'Nachricht wurde gesendet.';
    header( "refresh:5;url=index.html" );
  }
}
//else {
//echo 'Missing info'
//}
?>
