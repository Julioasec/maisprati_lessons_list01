let prompt = require('prompt-sync')() // Chamada do método prompt-sync


let amount = Number(prompt("Informe a quantidade de maçãs compradas: "))
let value = 0
if (amount < 0) {
    return console.log("Valor inválido!");
    
}

if(amount < 12){
    value = amount * 0.30   
    return console.log("O total da compra foi "+ value);
    
}
value = amount * 0.25
return console.log("O total da compra foi "+ value);
 