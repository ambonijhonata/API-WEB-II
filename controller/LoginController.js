const fs = require('fs')

function login(user, pass){        
    const jsonUsuarios = fs.readFileSync('../dados/usuarios.json')
    const jsonFormatted = JSON.parse(jsonUsuarios)
    var retorno = false
    jsonFormatted.items.forEach(item => {       
        if(item.usuario == user && item.senha == pass){            
            retorno = true
        }        
    });    
    return retorno
}

module.exports = {
    login: login
}