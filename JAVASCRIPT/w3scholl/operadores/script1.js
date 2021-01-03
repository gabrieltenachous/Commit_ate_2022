var x=10,y=5,z;
function adicionar(){
   z = x + y;
   document.getElementById("expressao").innerHTML = z;
}

function subtrair(){
    z = x - y;
    document.getElementById("expressao").innerHTML = z;
 }
 function multiplicar(){
    z = x * y;
    document.getElementById("expressao").innerHTML = z;
 }
 function exponencial(){
    z = x ** y;
    document.getElementById("expressao").innerHTML = z;
 }
 function divisao(){
    z = x / y;
    document.getElementById("expressao").innerHTML = z;
 }
 function restoDivisao(){
    z = x % y;
    document.getElementById("expressao").innerHTML = z;
 }
 function incremento(){
    z = x + y;
    z++;
    document.getElementById("expressao").innerHTML = z;
 }
 function descremento(){
    z = x + y;
    z--;
    document.getElementById("expressao").innerHTML = z;
 } 