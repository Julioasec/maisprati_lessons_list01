let prompt = require('prompt-sync')() // Chamada do método prompt-sync

let sum = 0;


for(let i = 0; i < 5; i++){
    sum += Number(prompt(`Informe o número ${i+1}: `))

}

console.log("A soma é igual a : " + sum );
