
function mostrarCarro() {

    carro = {
        cor: "Amarela",
        nome: "Fiat",
        ano: 2000,
        //posso criar funcao dentro de objeto
        carta: function () {
            alert(carro.cor+" : "+ carro.nome+ " : "+carro.ano);
        },
        //posso criar objeto dentro de objeto
        farol:{
            estrutura:["vidro","plastico"],
            beleza:["lindo","feio"]
        }
    } 
    carro.nome="Mustang"
    console.log(carro.carta())
    console.log(carro["ano"])
    console.log(carro.farol.beleza[1])
} 