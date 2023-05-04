const fs = require('fs')
const jsonTestes = fs.readFileSync('../dados/testes.json')

function getTestes(){
    return JSON.parse(jsonTestes)
}

function gravarTeste(dados){
    let testes = JSON.parse(fs.readFileSync('../dados/testes.json'))

    testes.push(dados)

    try {
        fs.writeFileSync('../dados/testes.json', JSON.stringify(testes))        
    } catch (error){
        throw new error
    }
}

module.exports = {
    getTestes: getTestes,
    gravarTeste : gravarTeste
}