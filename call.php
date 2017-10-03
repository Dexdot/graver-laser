<?php 
$whatever=$_POST['whatever'];
$username=$_POST['username'];
$phone=$_POST['phone'];
$message = "
Имя формы: ".htmlspecialchars($whatever)."<br />
Имя пользователя: ".htmlspecialchars($username)."<br />
Телефон : ".htmlspecialchars($phone);

require_once('prod/vendor/phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$mail->isSMTP();
$mail->Host = 'smtp.gmail.com';
$mail->SMTPAuth = true;
$mail->Username = 'd3xdot@gmail.com';
$mail->Password = 'password';
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;

$mail->setFrom('d3xdot@gmail.com', 'Заявка с Лазер-Гравер');
$mail->addAddress('dolotter@bk.ru');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);

$mail->Subject = 'Заявка с Лазер-Гравер';
$mail->Body    = $message;

if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Message has been sent';
    // echo 'thanks.html';
}

?>