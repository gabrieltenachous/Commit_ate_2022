function exercicio1(){
    document.getElementById("dados").innerHTML = 6 + 8 + "Valor"
}

function exercicio2(){
    var explicacao = "No java não é possivel criar a mesmo nome de variavel"+
    " se não retornaria este erro:"
    var explicacao = "Mas javascript é diferente posso criar dinamicamente as mesma variaveis"
    document.getElementById("dados").innerHTML = explicacao

}
function exercicio3(){
    
    document.getElementById("dados").innerHTML = ' "Valor"'

}
function exercicio4(){
    var pessoas =["Gabriel,Jonas,Giovane"]
    document.getElementById("dados").innerHTML = pessoas

}
function exercicio5(){
    var animais = {
        nome: ['Bob', 'Smith'],
        idade: 15,
        interesses: ["correr","dormir"],
        bio: function(){
            return this.nome[0] + " Have " + this.idade + " He Loves    " + this.interesses[0];
        },
    };
    document.getElementById("dados").innerHTML =animais.bio();

}
  
function exercicio6(){

    var x;
    var y = undefined;
    document.getElementById("dados").innerHTML = x + "  " + y;

}
function exercicio7(){
    var x = null;

    document.getElementById("dados").innerHTML =  x;

}
function exercicio8(){
    var x,y,a,b;
    x={}
    y=null;
    a=[];
    b = Function
    document.getElementById("dados").innerHTML = typeof x +" / "+typeof y +" / "+typeof a +" / "+typeof b +" / ";

}