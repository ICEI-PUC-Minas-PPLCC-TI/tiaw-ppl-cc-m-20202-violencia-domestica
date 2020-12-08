<?php
// using SendGrid's PHP Library
// https://github.com/sendgrid/sendgrid-php
require 'vendor/autoload.php'; // If you're using Composer (recommended)
// Comment out the above line if not using Composer
// require("./sendgrid-php.php");
// If not using Composer, uncomment the above line
$nome = $_POST['nome'];
$emailF = $_POST['email'];
$assunto = $_POST['assunto'];
$mensagem = $_POST['mensagem'];

$email = new \SendGrid\Mail\Mail();
$email->setFrom("1295943@sga.pucminas.br", $nome);
$email->setSubject($assunto);
$email->addTo("1295943@sga.pucminas.br", "Fenixa");
$email->addContent(
    "text/email", $emailF
);
$email->addContent(
    "text/plain", $mensagem
);
$sendgrid = new \SendGrid(getenv('SENDGRID_API_KEY'));
try {
    $response = $sendgrid->send($email);
    print ('<html> Caro Usuário <br>');
    print $response->statusCode() . "\n";
    print_r($response->headers());
    print $response->body() . "\n";
    print ('</html>');
} catch (Exception $e) {
    echo 'Caught exception: ',  $e->getMessage(), "\n";
}
?>