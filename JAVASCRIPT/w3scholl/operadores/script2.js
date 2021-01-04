function doisIgual(){
    var a = 12;
    let b = "12";
    if(a==b){
        document.getElementById("operadores").innerHTML = "A = B independente do Tipo!";
    }else{
        document.getElementById("operadores").innerHTML = "Incorreto";

    }
}

function tresIgual(){
    var a = 12;
    let b = "12";
    if(a===b){
        document.getElementById("operadores").innerHTML = "A = B independente do Tipo!";
    }else{
        document.getElementById("operadores").innerHTML = "Não deu certo porque uma variavel é string e outra é um number";

    }
}

function umDiferente(){
    var a = 12;
    let b = "12";
    if(a!=b){
        document.getElementById("operadores").innerHTML = "A != B independente do Tipo!";
    }else{
        document.getElementById("operadores").innerHTML = "Não deu certo porque uma variavel é string e outra é um number";

    }
}

function doisDiferente(){
    var a = 12;
    let b = "12";
    if(a!==b){
        document.getElementById("operadores").innerHTML = "A = B independente do Tipo!";
    }else{
        document.getElementById("operadores").innerHTML = "Não deu certo porque uma variavel é string e outra é um number";

    }
}

function operadorTernario(){
    var idade;
    //função de diminuir o if 
    document.getElementById("operadores").innerHTML = idade = 18 > 20 ? "adulto" : "criança"
}

function type_of(){
    var idade = 12;
    document.getElementById("operadores").innerHTML = typeof(idade)

}

function instance_of(){
    var pessoa = {} 
    document.getElementById("operadores").innerHTML = pessoa instanceof Function

}

function tresMaior(){
    //formula de bits x na base y
    var a=-23;b=13;
    document.getElementById("operadores").innerHTML = a>>>b

}

function outros(){
    var a=10;b=12;
    document.getElementById("operadores").innerHTML = a || b != 2131232 ? "tem variavel 20":"Nao tem variavel 13"
}
