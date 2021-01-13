//retorne numeros aleatorios de 0 - 100 e 100 - 200
randomIntFromInterval(100, 105);
function randomIntFromInterval(min, max) {
    console.log(Math.floor(Math.random()*(max - min + 1)) + min);
}

var random2 = Math.floor(Math.random() * 100);
console.log(random2)