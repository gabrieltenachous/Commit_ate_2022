<?php
$nome = "Hcode";
$site = "www.hcode.com.br";

$ano = 1990;
$salario = 5500.99;
$bloqueado = false;
////////////////////

$frutas = array("abacaxi","laranja","manga","Limao","<br>");
echo $frutas[2];
echo $frutas[4];
$nascimento = new DateTime();
//echo var_dump($nascimento);
/////////////////////////////
$arquivo = fopen("exemplo3.php","r");
var_dump($arquivo);

$null = NULL;

?>