let prompt = require('prompt-sync')() // Chamada do método prompt-sync

let number = Number(prompt("Informe um número: "))

for(let i = 0; i< 10; i++){
    console.log(i+1 + " - "+ number);
    
}