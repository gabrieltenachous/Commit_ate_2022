function utilizandoBreak() {
    //termina uma iteração de um loop
    var texto = '';
    for (let i = 0; i < 10; i++) {
        if (i === 5) {
            break;
        }
        texto = texto + i + '<br/>';
    }
    document.getElementById("breakOn").innerHTML = texto;
}

function utilizandoContinue() {
    //Salta um loop e contunua o loop
    var texto = '';
    for (let i = 0; i < 10; i++) {
        if (i === 0) {
            continue;
        }
        texto = texto + i + '<br/>';
    }
    document.getElementById("breakOn").innerHTML = texto;
}

function utilizandoDebugger() {
    //Interrompe a execução do JavaScript e chama (se disponível) a função de depuração 
    var texto = '';
    for (let i = 0; i < 10; i++) {
        if (i === 0) {
            debugger;
        }
        texto = texto + i + '<br/>';
    }
    document.getElementById("breakOn").innerHTML = texto;
}

function utilizandoDoWhile() {
    //Executa um bloco de declarações e repete o bloco, enquanto uma condição é verdadeira

    var texto = '';
    var i = 0;
    do {
        i++;
        texto = texto + i + '<br/>';
    } while (i < 5);
    document.getElementById("breakOn").innerHTML = texto;
}

function utilizandoFor() {
    //Marca um bloco de declarações a serem executadas, desde que uma condição seja verdadeira

    var texto = '';
    for (let i = 0; i < 10; i++) {
        texto = texto + i + '<br/>';
    }
    document.getElementById("breakOn").innerHTML = texto;
}

function utilizandoFunction() {
    //Declara uma função

    var texto = 'Ja to usando funcoes';
    document.getElementById("breakOn").innerHTML = texto;
}

function utilizandoIf() {
    //Marca um bloco de declarações a serem executadas, dependendo de uma condição
    var texto = 'Arroz Frio';
    if (texto == 'Arroz Quente') {

        document.getElementById("breakOn").innerHTML = texto;
    } else {
        document.getElementById("breakOn").innerHTML = "Arroz Frio";
    }
}

function utilizandoReturnSemConsole() {
    //Sai de uma função

    return "Retorna uma String";
}

function utilizandoReturnComConsole() {
    //Sai de uma função
    console.log(utilizandoReturnSemConsole())
}

function utilizandoSwitch() {
    //Marca um bloco de declarações a serem executadas, dependendo de diferentes casos 
    var texto = 'Banana';
    debugger;
    switch (texto) {
        
        case "Banana":
            texto = 'Banana is Good';
            break;
        case "Orange":
            texto = 'Orange is Good'
            break; 
        default:
            texto: 'Não deu certo...';
    }
    document.getElementById("breakOn").innerHTML = texto;
}


function utilizandoTryCatch() {
     //Implementa o tratamento de erros em um bloco de declarações
    try {
        adaksdjasji("nem existe isso malukco");
    } catch (error) {
        document.getElementById("breakOn").innerHTML = error;
    }

}