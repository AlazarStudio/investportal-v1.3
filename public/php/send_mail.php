<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fio = $_POST['fio'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $comment = $_POST['comment'];
    $orgName = $_POST['orgName'];

    if (empty($subject) && !empty($orgName)) {
        $subject = "Организация " + $orgName;
    }

    $to = 'reception@investkchr.ru';
    $subject = "Новое сообщение: $subject";
    $message = "ФИО: $fio\nТелефон: $phone\nEmail: $email\nСообщение: $comment";
    $headers = "From: $email";

    if (mail($to, $subject, $message, $headers)) {
        echo "Сообщение отправлено успешно!";
    } else {
        echo "Ошибка при отправке сообщения.";
    }
} else {
    echo "Некорректный метод запроса.";
}
?>
