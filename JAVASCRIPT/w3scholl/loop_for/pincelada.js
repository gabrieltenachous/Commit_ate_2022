
//1) utilize o for com 3,2 e 1 argumento separado por ";"
var smarthphones = ["samsung","lg","iphone","pixel google"]
for(var i=0;i<smarthphones.length;i++){
    console.log("Parametro 3:"+smarthphones[i])
}
var i=0;
for(;i<smarthphones.length;i++){
    console.log("Parametro 2:"+smarthphones[i])
}
i=0
for(;i<smarthphones.length;){
 
    console.log("Parametro 1:"+smarthphones[i])   
    i++;
}
//2) trabalhe com a repetição for/in declarando um array de animais

var animal = ["cavalo","cachorro","gato","aranha"]
for(valor in animal){
    console.log("Usando for/in"+animal[valor])
}


//3) use a repetição for/of declarando um array de jogos

var animal = ["cavalo","cachorro","gato","aranha"]
for(valor of animal){ 
    console.log(valor)
}
