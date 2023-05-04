const { error } = require('console')
const fs = require('fs')

function getTestes() {
    return JSON.parse(testesJson)
}

function gravarPergunta(dados, descTeste) {
    let testes = JSON.parse(fs.readFileSync('../dados/testes.json'))
    testes.map(teste => {
        if (teste.nome_teste == descTeste) {
            teste.perguntas.push(dados)
        }
    })    
    
    try {
        fs.writeFileSync('../dados/testes.json', JSON.stringify(testes))
    } catch (error) {
        alert(error)
    }
}

function getPerguntasByTest(descTeste) {
    let testes = JSON.parse(fs.readFileSync('../dados/testes.json'))
    
    return testes.find(teste => teste.nome_teste == descTeste);    
}

module.exports = {
    gravarPergunta: gravarPergunta,
    getPerguntasByTest: getPerguntasByTest
}