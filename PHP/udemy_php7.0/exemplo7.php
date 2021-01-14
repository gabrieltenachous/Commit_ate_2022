<?php

$numero = 12;
$frase = "Isso é uma Frase para PHP";
echo 'numero: $numero <br>';

echo "numero: $numero <br>";
echo strtoupper($frase);
echo '<br>';
echo strtolower($frase);
echo '<br>';
echo ucfirst($frase); 
echo '<br>';
$frase =  str_replace("o",'0',$frase);
echo $frase;
echo '<br>';
$txt = substr($frase,0,12);
echo $txt;
echo "<br>";

$java = substr($frase,0,strpos($frase,'P')) ."Java";
echo $java;
?>