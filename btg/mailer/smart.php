<?php 

$user_name = $_POST['user_name'];
$user_phone = $_POST['user_phone'];

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'denisv_2018@mail.ru';                 // Наш логин
$mail->Password = 'fofdkgt567';                           // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
 
$mail->setFrom('denisv_2018@mail.ru', 'Денис Денисов');   // От кого письмо 
$mail->addAddress('vbdenis@yandex.ru');     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заказан звонок с сайта BTG';
$mail->Body    = '
	Пользователь оставил заявку на сайте <br>
	Имя: ' . $user_name . '; <br>
	Телефон: ' . $user_phone . '';
// $mail->AltBody = 'Это альтернативный текст';

if (!$mail->send()) {
	echo 'Error';
} else {
	header('location: ../thx.html');
}

?>