/*
1) Retorne os números arredondados com o numero exponencial,
outro em decimal e com os numeros precisos
2) Retorna a qualquer valor em numerico e tambem utilize o 
milissegundos.
3) Devolva números inteiros e flutuante 
4) Exemplifique o uso de numeros maximo ,minimos, infinito
positivo e infinito negativo.
*/
function exercicio1() {
    var a = 10.657491
    var b = "Exponential:" + a.toExponential(4) + "<br>" +
        "Fixed:" + a.toFixed(4) + "<br>" + "Preciso" + a.toPrecision(4);
    document.getElementById("demo").innerHTML = b;
}

function exercicio2() {
    a = false;
    b = true;
    c = "10"; 
    d = "10 dsadasdasd"
    e= Infinity;
    f= 'a';
    g = new Date();
    console.log(Number(a))
    console.log(Number(b))
    console.log(Number(c)) 
    console.log(Number(d)) 
    console.log(Number(e))
    console.log(Number(f))
    console.log(Number(g))
}

function exercicio3(){
    var a = 10.12

    console.log("Flutuante considera os valores depois da virgula: "+parseFloat(a)) 
    console.log("Inteiro desconsidera os valores da virgula: "+parseInt(a))
}

function exercicio4(){
    var a = Number.MAX_VALUE; 
    var b = Number.MIN_VALUE; 
    console.log("maximo:"+a + "Minimo:"+ b)
}