<!DOCTYPE html>
<html>
<body>

<?php
//Exercicio 1
	$variavel = "é nota ";
    echo "PHP $variavel";

    $a = 100;
    $b = 10;
    echo $a*$b;
?> 
<?php
//Exercicio 2
	function myTeste(){
    	echo "Ira retornar uma função javascript";
    }
    myTeste();

?>

<?php
//Exercicio 3
function myTest() {
  $x = 5; // local scope
  echo "<p>Variable x inside function is: $x</p>";
} 
myTest();

// using x outside the function will generate an error
echo "<p>Variable x outside function is: $x</p>";
?>
</body>
</html>
