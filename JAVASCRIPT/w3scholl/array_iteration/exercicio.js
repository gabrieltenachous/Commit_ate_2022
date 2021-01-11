 // *COM OS METODOS ITERATIVOS DO ARRAY UTILIZE PARA CADA EXERCICIO ; 
//1) Retorne todos os valores desse vetor;
var text = "";
var numeros = [12,31,42,6,1,5,8]
function exercicio1(value){
    text += value+",";
}
numeros.forEach(exercicio1)
console.log(text)

//2) mutiplique todos os valores por 2;
numeros = [12,31,42,6,1,5,8]
function exercicio2(value){
    return value * 2;
}
var maps = numeros.map(exercicio2).join();
console.log(maps)

//3) mostrar somente valores maiores que 25;
numeros = [12,31,42,6,1,5,8]
function exercicio3(value){
    return value > 25;
}
var filtrar = numeros.filter(exercicio3);
console.log(filtrar);

//4) somatoria de todo array;
numeros = [12,31,42,6,1,5,8]
function exercicio4(value){
    return value += value;
}
var somatoria = numeros.reduce(exercicio4);
console.log(somatoria)

//5) retorne true ou false se o valor for sempre maior que 0;
numeros = [12,31,42,6,1,5,8]
function exercicio5(value){
    return value >0;
}
var verdade = numeros.every(exercicio5);
console.log(verdade);
//6) retorne true ou false se o valor for apensa uma vez maior que 25;
numeros = [12,13,42,6,1,5,8]
function exercicio6(value){
    return value>40;
}
var vadadeMesmo = numeros.some(exercicio6);
console.log(vadadeMesmo);
//7) encontrar o indice de acordo com o parametro;
numeros = [1,1,42,6,1,5,8]
function exercicio7(value){
    return value == 8
}
var indice = numeros.findIndex(exercicio7);
console.log(indice)

// 8) entrocar o valor de acordo com o parametro; 
numeros = [1,1,42,6,1,5,8]
function exercicio8(value,valho){
    return value >18
}
var indice = numeros.find(exercicio8);
console.log(indice)