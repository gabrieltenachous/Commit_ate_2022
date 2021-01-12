/*
1)Crie 4 jeitos diferentes de criar um objeto(conchete vazio,conchete com valores de data,com string e milisegundo
2)Faça um método converte uma data em um formato mais legível:toDateString()
3)Testa alguns metodos :D
*/
//1)O método converte uma data em um formato mais legível:toDateString()
//Instanciando outra Data ou vazio
var data = new Date(new Date);
console.log(data);

console.log(data.getHours()+":"+data.getMinutes()+":"+data.getSeconds())
//String
data = new Date("2000-01-13 12:13:00")
console.log(data)
//Milisegundo
data = new Date();
console.log(Number(data))
//2)Faça um método converte uma data em um formato mais legível:toDateString()
console.log(data.toDateString())