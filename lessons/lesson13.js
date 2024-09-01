let prompt = require('prompt-sync')() // Chamada do método prompt-sync

let count = 0;
let sum = 0;
let number = 0
do {
    number = Number(prompt("Insira um número ou 0 para encerrar: ")) 
    sum += number 
    count++
} while (number != 0);

console.log("A média é : "+ sum/count);
