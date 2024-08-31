let prompt = require('prompt-sync')() // Chamada do método prompt-sync

let grade = Number(prompt("Informe uma nota: ")) // recebe a nota do usuário

if (grade > 10 || grade < 0) {
     return console.log("Nota inválida");
    
}

if(grade >= 7){
    return console.log("Aprovado!");
    
}else if(grade <= 6 && grade >= 4){
  return console.log("Recuperação!");
    
}

return console.log("Reprovado!");
