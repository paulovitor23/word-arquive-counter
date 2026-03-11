const fs = require('fs');

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2]

fs.readFile(link,'utf-8', (erro,texto)=>{
    console.log(texto)
})

//criar um array com as palavras
//contar as ocorrencias
//objeto com cada frequencia de palavras

function verificaPalavrasDuplicadas(texto){
    const listaPalavras = texto.split(" ")
    const resultado = {}
    // objeto[propriedade] = valor;
    listaPalavras.forEach(palavra => {
        resultado[palavra] = (resultado[palavra] || 0) + 1 
    })
    console.log(resultado)
}