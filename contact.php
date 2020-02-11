<?php
$error = '';
if(!$error)
{

$name_tema = "=?utf-8?b?". base64_encode($name) ."?=";

$subject ="Новая заявка на кальян";
$subject1 = "=?utf-8?b?". base64_encode($subject) ."?=";
/*
rustem.salimov.2021@mail.ru
*/
$message1 ="\n\nИмя: ".$name."\n\nТелефон: " .$tel."\n\nE-mail: " .$email."\n\nСообщение: ".$message."\n\n";	


$header = "Content-Type: text/plain; charset=utf-8\n";

$header .= "From: Новая заявка <u555730kr@hookanhome.ru>\n\n";
if(!$_POST['emailto'])
{	
$mail = mail("rustem.salimov.2021@mail.ru", $subject1, $_POST['message'], $header);
} else {
$mail = mail($_POST['emailto'], $subject1, $_POST['message'], $header);
}

echo $_POST['message'];
}
?>