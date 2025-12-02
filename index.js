const prompt = require("prompt-sync")()

const senhaCaracteres = {
    especiais: ["!", "@", "#", "$", "%", "&", "*", "-", "+"],  
    numeros: ["0","1","2","3","4","5","6","7","8","9"],        
    letras: [
        "a","b","c","d","e","f","g","h","i","j",
        "k","l","m","n","o","p","q","r","s","t",
        "u","v","w","x","y","z"
    ]                                                         
}

function gerarSenhas(tamanhoSenha){
    let todos = []

    for(let i = 0; i < senhaCaracteres.especiais.length; i++){
        todos.push(senhaCaracteres.especiais[i])
    }

    for(let i = 0; i < senhaCaracteres.numeros.length; i++){
        todos.push(senhaCaracteres.numeros[i])
    }

    for(let i = 0; i < senhaCaracteres.letras.length; i++){
        todos.push(senhaCaracteres.letras[i])
    }

    let senha = ""
    for(let i = 0; i < tamanhoSenha; i++){
        let aleatorio = Math.floor(Math.random() * todos.length)
        senha += todos[aleatorio]
    }

    return senha
}

let pergunta

do{
console.log("=========Gerador de senhas=========")
let tamanho = parseInt(prompt("Digite o tamanho da senha: "))
console.log("\nSenha gerada:", gerarSenhas(tamanho), "\n")

pergunta = prompt("Deseja fazer uma nova senha[s/n]: ").toLowerCase()
}while(pergunta != "n")

console.log("Obrigado por usar o meu programa")