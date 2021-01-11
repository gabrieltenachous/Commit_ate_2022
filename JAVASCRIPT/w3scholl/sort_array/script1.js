/*
1-Ordena o array com método array em ordem alfabética
2-Ordene sem método de ordem alfabética(Fisher Yate)
3-Ordene inversamente em ordem alfabética com o método array
4-Ordene inversamente sem método de ordem alfabética(Fisher Yate)
5-Ordene os valores numerico com metodo array
6-Ordene os valores numerico sem metodo array(Fisher Yate)
7-Faça uma função que aparece aleatoriamente os valores do vetor
8-Vetor aleatorio    (Fisher Yate)
9-Utilize o metodo Max e Min para achar o menor e o valor maximo(numerico e valores).
10-Max e Min para achar o menor e o valor máximo(Fisher Iate)//numéricos
11-Ordene array com objeto em ordem numérica e outro com ordem alfabética 
 */
var a = [12, 31, 1, 255, 2, 99, 13, 4, 4]
var b = ["Joao", "Maximus", "Gabriel", "Allbert", "Jorge"]
function myFunction() {
    b = ["Joao", "Maximus", "Gabriel", "Allbert", "Jorge"]
    document.getElementById("demob").innerHTML = b
}
function myFunction1() {
    document.getElementById("demob").innerHTML = b.sort();
}



function myFunction2() {
    document.getElementById("demob").innerHTML = b.sort();
}

function myFunction3() {
    document.getElementById("demob").innerHTML = b.reverse();
}
function myFunction4() {
    document.getElementById("demob").innerHTML = b.sort();

}
function myFunction5() {
    document.getElementById("demoa").innerHTML = a.sort(function (a, b) { return a - b })
}
 
function myFunction7() {
    a.sort(function (a, b) { return 0.5 - Math.random() })
    document.getElementById("demoa").innerHTML = a
}
function myFunction8() {
    var i, j, k;
  for (i = a.length -1; i > 0; i--) {
    j = Math.floor(Math.random() * i)
    k = a[i]
    a[i] = a[j]
    a[j] = k
  }
  document.getElementById("demo").innerHTML = a;
}

function myFunction9() {
    a.sort(function (a, b) { return a - b });
    b.sort();
    document.getElementById("democ").innerHTML = "Min:" + a[0] + "Max:" + a[a.length - 1] + "<br>" +
        "Max:" + b[b.length - 1] + " Min:" + b[0];

}

function myFunction10() {
    var maior = 0, menor = 0;

    for (var i = 0; i < a.length; i++) {
        if (a[i] > a[maior]) {
            maior = i;
        }
        if (a[i] < a[menor]) {
            menor = i;
        }
    }
    document.getElementById("demoa").innerHTML = "Max:" + a[maior] + "Menor:" + a[menor];
}
function myFunction11() {
    var c = [{ idade: 2021, nome: "Mustang" },
    { nome: "Fiat", idade: 2089 },
    { nome: "Corola", idade: 2000 }]
    c.sort(function (a, b) { return a.idade - b.idade });
    var total = "Para Numero:<br>" + c[0].idade + "  " + c[0].nome + "<br>" +
        c[1].idade + "  " + c[1].nome + "<br>" +
        c[2].idade + "  " + c[2].nome + "<br><br>"

    c.sort(function (a, b) {
        var x = a.nome.toLowerCase();
        var y = b.nome.toLowerCase();
        if (x < y) {
            return -1;
        } else {
            return 1;
        }
    });
    total += "Para Letras:<br>" + c[0].idade + "  " + c[0].nome + "<br>" +
        c[1].idade + "  " + c[1].nome + "<br>" +
        c[2].idade + "  " + c[2].nome + "<br>"
    document.getElementById("democ").innerHTML = total;
}
