<?php
$a = 12;
$b =13;
$c = 11;
echo "Concatenar:".$a;
echo "<br>Soma:".($a + $b)."<br>Subtração".($a-$b);
echo "<br>Vezes(*),Dividir(/),Ao quadrado(**):".($a*$b)."<br>";
echo "Igual(==) IguaType(===): ";
var_dump($a==$b);
var_dump($a===$b);
echo "Spacechip: ".($b <=> $a);
?>