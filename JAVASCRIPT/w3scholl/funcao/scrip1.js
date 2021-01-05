function mostrarElevado(x, y) {
    return document.getElementById("funcao").innerHTML = x ** y;

}

function mostrarCelcius(x) {
    return document.getElementById("funcao").innerHTML = 32 - (9 * x)
}

function mostrarFibonnaci(x, y) {

    
}

function mostrarPrimos(num) {
    for(let i = 2; i < num; i++)
    if(num % i === 0) {
        return document.getElementById("funcao").innerHTML = false;

    }; 
    return document.getElementById("funcao").innerHTML = true;

}

function mostrarFatorial(x, y) {
    return document.getElementById("funcao").innerHTML = x ** y;

}

function mostrarPerfeito(x, y) {
    return document.getElementById("funcao").innerHTML = x ** y;

}

function mostrarRicci(x, y) {
    return document.getElementById("funcao").innerHTML = x ** y;

}