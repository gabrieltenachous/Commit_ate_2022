var nomes = ["Leona","Viego","Xerath"];
console.log(isArray(nomes))
function isArray(myArray){
    return myArray.constructor.toString().indexOf("Array") > -1
}