// записывать успешные формы в файл forms.log
define('HAS_WRITE_TXT', true);
// писать предупреждения и ошибки в лог
define('HAS_WRITE_LOG', true);
// необходимо ли отправлять уведомление пользователю на почту
define('HAS_SEND_NOTIFICATION', false);
// тема письма
define('SUBJECT_FOR_CLIENT', 'Ваше сообщение доставлено');
// отправлять письмо на указанный адрес email
define('HAS_SEND_EMAIL', true);
// добавить файлы в тело письма в виде ссылок (В противном случае прикрепить)
define('HAS_ATTACH_IN_BODY', false);
// базовый URL-адрес (используется, если составления полного URL для ссылок, добавляемых в тело письма)
define('BASE_URL', 'https://domain.com');
// настройка почты (отправка осуществляется через SMTP)
define('EMAIL_SETTINGS', [
  'addresses' => ['manager@domain.com'], // кому необходимо отправить письмо
  'from' => ['no-reply@domain.com', 'Имя сайта'], // от какого email и имени необходимо отправить письмо
  'subject' => 'Сообщение с формы обратной связи', // тема письма
  'host' => 'ssl://smtp.yandex.ru', // SMTP-хост
  'username' => 'name@yandex.ru', // // SMTP-пользователь
  'password' => '*********', // SMTP-пароль
  'port' => '465' // SMTP-порт
]);