var data = new Date().getHours();
console.log(data)
if(data>6 || data<11){
    console.log("bom dia")
}else if(data>12 || 18<data){
    console.log("boa tarde");
}else if(18 || 23){
    console.log("boa noite");
}else if(0 || 5){
    console.log("Dormindo...");
}