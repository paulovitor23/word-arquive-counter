export default function trataErros(error) {
    if (error.code === 'ENOENT') {
        console.error('Arquivo não encontrado')}
        else {
            console.error(`Outro erro ocorreu: ${error.code}`)
        }
}
