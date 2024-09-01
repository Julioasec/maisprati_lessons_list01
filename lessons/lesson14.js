let prompt = require('prompt-sync')() // Chamada do método prompt-sync

let number = Number(prompt("Informe um número: "));
let sum = 1;

for(let i = number; i >= 1; i--){
    sum *= i    
}

console.log(number+"!" + " é igual a: " + sum);
