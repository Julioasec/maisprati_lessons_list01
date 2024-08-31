let prompt = require('prompt-sync')() // Chamada do método prompt-sync

let number = Number(prompt("Informe um número: ")) // recebendo o número informado pelo usuário


// valida se o número é par ou ímpar
if (number % 2 === 0) {
    return console.log("O número " + number + " é par");
}
   return console.log("O número" + number + " é ímpar");

    
