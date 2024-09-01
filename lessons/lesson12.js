let prompt = require('prompt-sync')() // Chamada do método prompt-sync

let number = Number(prompt("Insira um número: "))

for(let i = 0; i<= 10; i++){
    console.log(number + "X" +i + " = " + number*i );
    
}