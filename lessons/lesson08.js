let prompt = require('prompt-sync')() // Chamada do método prompt-sync

let number1 = Number(prompt("Informe o valor 1: "))
let number2 = Number(prompt("Informe o valor 2: "))

if (number1 < number2) {
    return console.log(number1, number2);
    
}
    
return console.log(number2, number1);

