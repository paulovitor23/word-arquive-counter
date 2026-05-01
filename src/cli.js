import fs from 'fs';
import trataErros from './trataErros.js';
import {contaPalavras} from './index.js';
import { montaSaidaArquivo } from './helpers.js';
import { Command } from 'commander';

const program = new Command();

program
.version('0.0.1')
.option('-t, --texto <string>','caminho do texto a ser processado')
.option('-d, --destino <string>', 'caminho da pasta que salva o arquivo resultados')
.action((options) => {
    const {texto, destino} = options 
    if (!texto || !destino){
        console.error("erro! favor inserir caminho de origem e destino!")
        program.help();
        return;
    }
})

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];
const endereco = caminhoArquivo[3];

function processaArquivo(texto, destino){
    fs.readFile(texto,'utf-8', (erro,texto)=>{
    try{
        if(erro) throw erro;
        const resultado = contaPalavras(texto);
        criaESalvaArquivo(resultado, destino)
    }
    catch(erro){
        trataErros(erro);
    }
})
}



async function criaESalvaArquivo(listaPalavras, enderecoArquivo){
    const arquivoNovo = `${enderecoArquivo}/resultado.txt`
    const textoPalavras = montaSaidaArquivo(listaPalavras);

    try {
        await fs.promises.writeFile(arquivoNovo,textoPalavras);
        console.log("arquivo criado")
    } catch(erro){
        throw erro
    }
}