let prompt = require('prompt-sync')() // Chamada do método prompt-sync.

let age = Number(prompt("Informe uma idade: ")) // recebendo a idade do usuário.

// aciona caso a idade seja negativa
if(age < 0){
    return console.log("Idade inválida");
    
}

// classifica a categoria de acordo com a idade
if(age >= 0 && age <= 11 ){
    return console.log("Categoria criança");
    
}else if(age >= 12 && age <= 17){
    return console.log("Categoria adolescente");
    
}else if( age >= 18 && age <= 59){
    return console.log("Categoria Adulto");
    
}else{
    return console.log("Categoria idoso");

}

    