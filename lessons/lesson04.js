let prompt = require('prompt-sync')() // Chamada do método prompt-sync
let option = 0

let showMenu = () => {
    console.log("\nMenu de opções:");
    console.log("Para a opção 1 digite 1");
    console.log("Para a opção 2 digite 2");
    console.log("Para a opção 3 digite 3");
    console.log("Para sair digite 0 \n");

    
    
}


do {
    showMenu()
   option  = Number(prompt("Informe uma opção: " )) // recebe a opção do usuário



switch (option) {
    case 1:
        console.log("\nOpção 1 Selecionada. \n");
        
        continue;


    case 2:
        console.log("\nOpção 2 selecionada. \n");
        
        continue;


    case 3:
        console.log("\nOpção 3 selecionada. \n");
        
        continue;

    case 0:
        console.log("\nFim do programa. \n");
        
        break;
    default:
        console.log("Opção inválida! \n");
        
        continue;

}
    } while (option !== 0);
