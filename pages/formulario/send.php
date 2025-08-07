<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  $nome = $_POST['nome'] ?? '';
  $email = $_POST['email'] ?? '';
  $telefone = $_POST['telefone'] ?? '';
  $estado = $_POST['estado'] ?? '';
  $cidade = $_POST['cidade'] ?? '';
  $mensagem = $_POST['mensagem'] ?? '';

  $destinatario = "contato@transformasie.com.br"; // Seu e-mail real
  $assunto = "Nova solicitação de orçamento via site";

  $corpo = "
    <strong>Nome:</strong> $nome<br>
    <strong>E-mail:</strong> $email<br>
    <strong>Telefone:</strong> $telefone<br>
    <strong>Estado:</strong> $estado<br>
    <strong>Cidade:</strong> $cidade<br>
    <strong>Mensagem:</strong><br>$mensagem
  ";


  $headers = "MIME-Version: 1.0\r\n";
  $headers .= "Content-type: text/html; charset=UTF-8\r\n";
  $headers .= "From: contato@transformasie.com.br\r\n"; // ou qualquer e-mail do seu domínio
  $headers .= "Reply-To: $email\r\n"; // isso permite responder ao cliente corretamente
  if (mail($destinatario, $assunto, $corpo, $headers)) {
    http_response_code(200);
    echo "Mensagem enviada com sucesso!";
  } else {
    http_response_code(500);
    echo "Erro ao enviar a mensagem.";
  }
} else {
  http_response_code(403);
  echo "Acesso negado.";
}
?>