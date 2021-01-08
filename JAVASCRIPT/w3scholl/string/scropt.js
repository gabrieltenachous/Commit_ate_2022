function mostrarTamanho(x) {
    var txt = x.length;
    document.getElementById("demo").innerHTML = txt
}

function mostrarAspas() {
    document.getElementById("demo").innerHTML = " bom dia \" kkkk \" "
}

function mostrarString() { 
    console.log(
        "Utilizando \\b: Gabriel \b Oliveira \n" +
        "Utilizando \\f: Gabriel\fOliveira \n" +
        "Utilizando \\n: Gabriel\nOliveira \n" +
        "Utilizando \\r: Gabriel\rOliveira \n" +
        "Utilizando \\t: Gabriel\tOliveira \n" +
        "Utilizando \\v: Gabriel\vOliveira \n");
}