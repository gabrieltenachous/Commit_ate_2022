/*
1)Trabalhe com expoentes retornando 123000000 e 0.00123
2)Deixe o resultado 0.2+0.1 100% preciso!
3)Tente transformar o resultado em 30:
var x = 10;
var y = 20;
var z = "The result is: " + x + y;
4)Tente disparar 1 Not a number e Infinity
5)Faça uma multiplicação em loop em que chegue no infinito
6)Utilizo metodo numerico que torne da base 10 para base 2,8,16,32,10
 */

function myFunction1() {
    var a = 123e6;
    var b = 12e-3;
    document.getElementById("demo").innerHTML = a + " " + b;
}

function myFunction2() {
    var a = 0.2;
    var b = 0.1;
    document.getElementById("demo").innerHTML = (a * 10 + b * 10) / 10;
}

function myFunction3() {
    var x = 10;
    var y = 20;
    console.log(`The result is: + ${x + y}`); 
}

function myFunction4() {
    var x = 0;
    var y = "sdsad";
    document.getElementById("demo").innerHTML= "Numerico dividio por string:" + x/y + "<br> Numeros divididos por 0: "+ 2/0;
}

function myFunction5(){
    var myNumber = 2;
    while(myNumber != Infinity){
        console.log(myNumber = myNumber * myNumber);
    }
}

function myFunction6(){
    var myNumber = 10;
    document.getElementById("demo").innerHTML = "Base 2:"+ myNumber.toString(2) + "<br>Na base 10: " +myNumber.toString(10) + "<br>Na base 8: " + myNumber.toString(8) + "<br>Na base 16: " + myNumber.toString(16)
}