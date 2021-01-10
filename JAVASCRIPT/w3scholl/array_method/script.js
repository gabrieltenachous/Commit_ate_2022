/*
1) Retorne o array somente separado com aspas(,);
2) Retorne o array somente separado com vees (*);
3) Remova e capture a última índice do array;
4) Remova e capture o primeiro índice do array;
5) Adicione e capture o primeiro índice do array;
6) Delete um indice e deixe ele underfined
7) Em um array de 10 elementos traga somente do 2 à 7 indices
8) Junte dois arrays
 */
var nome1 = ["Gabriel", "Joao", "Rodrigo", "Felipes"]
var nome2 = ["Frank", "Felps", "Rodrigo", "Gabriel"]
var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function mostrarArray1() {
    document.getElementById("demo").innerHTML = nome1.toString();
}
function mostrarArray2() {
    document.getElementById("demo").innerHTML = nome1.join("/")

}
function mostrarArray3() {
    var a = nome1.pop();
    document.getElementById("demo").innerHTML = "Nome1: " + nome1 + "<br>" + "A:" + a
}
function mostrarArray4() {
    var a = nome1.shift();
    document.getElementById("demo").innerHTML = "Nome1: " + nome1 + "<br>" + "A:" + a

}
function mostrarArray5() {
    var a = nome1.unshift("Joaozinho");
    document.getElementById("demo").innerHTML = "Nome1: " + nome1 + "<br>" + "A:" + a
}
function mostrarArray6() {
    delete nome1[0];
    document.getElementById("demo").innerHTML = "Nome1: " + nome1;
}
function mostrarArray7() {
    var a = numeros.splice(1, 6)
    document.getElementById("demo").innerHTML = "Nome1: " + numeros +"<br> A:" + a;

}
function mostrarArray8() {
    var a = nome1.concat(nome2)
    document.getElementById("demo").innerHTML = a;

 }