<?php 
$whatever=$_POST['whatever'];
$username=$_POST['username'];
$email=$_POST['email'];
$msg=$_POST['msg'];

$token = "471247762:AAHWY9wW9GklHberYj0Z6k29zvDi9BCkMSs";
$chat_id = "-273744793";

$message = "
Имя формы: ".htmlspecialchars($whatever)."<br />
Имя заказчика: ".htmlspecialchars($username)."<br />
Его эл.почта : ".htmlspecialchars($email)."<br />
Сообщение: ".htmlspecialchars($msg);

require_once('prod/vendor/phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$mail->isSMTP();
$mail->Host = 'smtp.gmail.com';
$mail->SMTPAuth = true;
$mail->Username = 'graverlaserkzn@gmail.com';
$mail->Password = 'pass';
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;


$arr = array(
  'Имя формы: ' => htmlspecialchars($whatever),
  'Имя заказчика: ' => $username,
  'Его эл.почта: ' => $email,
  'Сообщение: ' => $msg
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

$mail->setFrom('graverlaserkzn@gmail.com', 'Заявка с Лазер-Гравер');
$mail->addAddress('galeev-12@mail.ru');
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
}


?>