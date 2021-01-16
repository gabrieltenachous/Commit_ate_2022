/**
1) existe no javascript 10 tipos de variaveis mostre o tipo de cada um deles
2) descubra se o valor é um array em uma função e se é uma data
3) Booleano para String / Data para String / String para Number
*/

function exercicio1() {
    console.log(typeof exercicio1); //function
    console.log(typeof 13); //number
    console.log(typeof ["", "", ""]); //object
    console.log(typeof {}) //object
    console.log(typeof new Date());//object
    console.log(typeof "string");//string
    console.log(typeof true);//boolean
    console.log(typeof Math);//object
    console.log(typeof NaN);
    console.log(typeof null);
    console.log("string".constructor);
}

function exercicio2(variavel) {
    return variavel.constructor.toString().indexOf("Array")>-1;
}

function exercicio3(){ 
    console.log(typeof String(true)); 
    console.log(typeof Number(true));
    console.log(typeof String(new Date))
}
exercicio1();
console.log(exercicio2([12]));
exercicio3();