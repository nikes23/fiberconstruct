
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

  $html = '<!DOCTYPE html> 
<html lang="de"> 
 <head> 
  <meta charset="UTF-8"> 
  <title>Sie haben eine neue Kontaktanfrage erhalten</title> 
 </head> 
<body>
<table style="background-color: #3d3d3d; width: 100%; padding: 10px;"> 
<tr> 
 <td> 
  <h2 style="color: #fbb900;">Neue Kontaktanfrage bei Fiber Construct</h2> 
  <h3 style="color: #fbb900;">Kontaktdaten</h3b>
  <ul>
    <li>Vorname: $name</li>
    <li>Nachname: $lastname</li>
    <li>E-Mail: $email</li>
    <li>Betreff: $subject</li>
    <li>Datenschutzerklärung: Akzeptiert</li>
    </ul>
  <h3 style="color: #fbb900;">Nachricht:</h3>
    <p>$message</p>
 </td> 
</tr> 
<tr> 
 <th> 
  <img src="cid:TBP" alt="Wortbergen"> 
 </th> 
</tr> 
</table> 

</body> 
</html>';

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
