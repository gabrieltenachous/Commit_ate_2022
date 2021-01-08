function mostrarElevado(x, y) {
    return document.getElementById("funcao").innerHTML = x ** y;

}

function mostrarCelcius(x) {
    return document.getElementById("funcao").innerHTML = 32 - (9 * x)
}

function mostrarFibonnaci(x) {
    var fib = [];
    fib[0] = 0;
    fib[1] = 1;

    for (var i = 2; i < x; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]
        console.log(fib[i])
    }
}

function mostrarPrimos(num) {
    for (let i = 2; i < num; i++)
        if (num % i === 0) {
            return document.getElementById("funcao").innerHTML = false;

        };
    return document.getElementById("funcao").innerHTML = true;

}

function mostrarFatorial(x) {
    if(x==1 || x==0){
        console.log(1)
    }else{
        for(var i=x-1;i>=1;i--){
            x *=i;
        }
    }
    console.log(x)
}


function mostrarPerfeito(x) {
    return document.getElementById("funcao").innerHTML = 2**(x-1)*((2**x)-1);

}

function mostrarRicci(x,y) { 
    var fib = [];
    fib[0] = 0;
    fib[1] = 1;
    
    for (var i = 2; i < x; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]
        console.log(fib[i])
    }

}