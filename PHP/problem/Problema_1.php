 
<?php
/*Good morning! Here's your coding interview problem for today.
This problem was asked by Uber.
Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.
For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].
Follow-up: what if you can't use division?
*/
$array = [1,2,3,4,5]; 
$arrayNew = [];
$valor = 1;
for ($x = 0; $x < 5; $x++) {
    for($y=0;$y<5;$y++){ 
        if($x != $y){
            
            $valor *= $array[$y]; 
        }
    }
    $arrayNew[$x]=$valor;
$valor = 1;
}

for($x=0;$x<count($arrayNew);$x++){
    echo " . ".$arrayNew[$x];
}
?>