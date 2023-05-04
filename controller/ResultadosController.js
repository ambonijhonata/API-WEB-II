const fs = require('fs')

function gravarResultado(dados){
    let testes = JSON.parse(fs.readFileSync('../dados/resultados.json'))
    
    testes.push(dados)

    console.log(dados)

    try {
        fs.writeFileSync('../dados/resultados.json', JSON.stringify(testes))        
    } catch (error){
        throw new error
    }
}

function getResultados(){        
    return JSON.parse(fs.readFileSync('../dados/resultados.json'))
}

module.exports = {
    gravarResultado : gravarResultado,
    getResultados : getResultados
}