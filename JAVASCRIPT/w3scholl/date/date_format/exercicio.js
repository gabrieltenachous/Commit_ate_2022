/*1) Mostre o padrão date ISO e escrva numa string de data
  2) Converta em milisegundo a data e vice-versa */

var date = new Date("2020-01-13T14:00:00Z");
console.log(date)

date = Date.parse(new Date);
console.log(date);

date = new Date(date)
console.log(date);