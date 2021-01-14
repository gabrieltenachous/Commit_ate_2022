<?php
require "exemplo8.php";
$resultado = somar(10,20);
echo $resultado; 
$nomes = array();
array_push($nomes,array(
    'nome'=>'João',
    'idade'=>20
));
array_push($nomes,array(
    'nome'=>'Felipe',
    'idade'=>32
));
echo'<br>';
echo json_encode($nomes);
$json = '[{"nome":"Jo\u00e3o","idade":20},{"nome":"Felipe","idade":32}]';
$dado =  json_decode($json,true); 
var_dump($dado);
?>