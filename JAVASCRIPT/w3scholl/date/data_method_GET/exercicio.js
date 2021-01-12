//1-Get the year as a four digit number (yyyy)
//2-Get the month as a number (0-11)
//3-Get the day as a number (1-31)
//4-Get the hour (0-23)
//5-Get the minute (0-59)
//6-Get the second (0-59)
//7-Get the millisecond (0-999)
//8-Get the time (milliseconds since January 1, 1970)
//9-Get the weekday as a number (0-6)
//10-Get the time. ECMAScript 5.
var arrayDias = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado"]
var ano = new Date().getFullYear();
var mes = new Date().getMonth() + 1;
var diaDoMes = new Date().getDate();
var dia = new Date().getDate();
var horas = new Date().getHours();
var minutos = new Date().getMinutes();
var segundo = new Date().getSeconds();
var milisegundo = new Date().getMilliseconds();
var milisegundo1970 = new Date().getTime();
var diaDaSemana = new Date().getDay();
var horarioAgora = Date.now();
console.log(dia + "/" + mes + "/" + ano + " " + horas + ":" + minutos + ":" + segundo + ":" + milisegundo + "\nDia do Mes: " + diaDoMes + "\nMilisegundo(desde 1970):" + milisegundo1970);
console.log("Dia da Semana: " + arrayDias[diaDaSemana])
console.log("Horario Agora: " + horarioAgora)

//Segue o mesmo criteirio para o UTC
/*
getUTCDate()	    Same as getDate(), but returns the UTC date
getUTCDay()	        Same as getDay(), but returns the UTC day
getUTCFullYear()	Same as getFullYear(), but returns the UTC year
getUTCHours()	    Same as getHours(), but returns the UTC hour
getUTCMilliseconds()Same as getMilliseconds(), but returns the UTC milliseconds
getUTCMinutes()	    Same as getMinutes(), but returns the UTC minutes
getUTCMonth()	    Same as getMonth(), but returns the UTC month
getUTCSeconds()	    Same as getSeconds(), but returns the UTC seconds
 */