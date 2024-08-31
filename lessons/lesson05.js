let prompt = require('prompt-sync')() // Chamada do método prompt-sync

let weight = Number(prompt("Informe o Peso: "))
let height = Number(prompt("Informe a altura em metros: "))
let imc = 0
let imcString = null

if (weight <= 0 && height <= 0) {
    console.log("Altura ou peso inválidos");
    
}else{
    imc = weight / (height*height)
}

 imcString = "Seu imc é " + imc 

if (imc < 18.5) {
    imcString += ". Você está com baixo peso."
}else if (imc >= 18.5 && imc <= 24.9) {
    imcString += ". Você está com peso normal."
}else if (imc >= 25.0 && imc <= 29.9) {
    imcString += ". Você está com sobrepeso."
}else{
    imcString += ". Você está com obesidade."
}
 console.log(imcString);
 

