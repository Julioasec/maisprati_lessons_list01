let prompt = require('prompt-sync')() // Chamada do método prompt-sync

let sideA = Number(prompt("Informe o lado A: "))
let sideB = Number(prompt("Informe o lado B: "))
let sideC = Number(prompt("Informe o lado C: "))


if (sideA < sideB + sideC && sideB < sideA + sideC && sideC < sideA + sideB) {

    if (sideA === sideB && sideB === sideC){
        return console.log("Triângulo Equilátero");
            
    } else if(sideA === sideB || sideA === sideC || sideB === sideC) {
        return console.log("Triângulo Isósceles");
        
    }else if(sideA < sideB || sideA > sideB && sideB < sideC || sideB > sideC){
        return console.log("Triângulo escaleno");
        
    }


}


