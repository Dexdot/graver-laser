<?php 

$whatever=$_POST['whatever'];
$username=$_POST['username'];
$phone=$_POST['phone'];

$message = "
Имя формы: ".htmlspecialchars($whatever)."<br />
Имя заказчика: ".htmlspecialchars($username)."<br />
Его телефон : ".htmlspecialchars($phone);

require_once('prod/vendor/phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

if( $whatever == "'Обратный звонок'" ) { 
	$token = "token";
	$chat_id = "-chatid";
	$mail->addAddress('graver-laser@yandex.ru');
}

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
  'Телефон: ' => $phone
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

$mail->setFrom('graverlaserkzn@gmail.com', 'Обратный звонок с Лазер-Гравер');
$mail->isHTML(true);

$mail->Subject = 'Обратный звонок с Лазер-Гравер';
$mail->Body    = $message;


if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Message has been sent';
}

?>