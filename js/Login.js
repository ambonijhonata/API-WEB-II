function login(){    
    const URL = '/login'
    var inputUsuario = document.getElementById('usuario')
    var inputSenha = document.getElementById('senha')
    
    let data = {
        usuario: inputUsuario.value,
        senha : inputSenha.value
    }         
        
    fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=UTF-8'
        },
        body: JSON.stringify(data)
        
      })
      .then(response => {
        
        if(response.ok){
            alert('login valido')
            window.location.href = "../html/main.html"
        }else{
            alert('login invalido')
        }
      })
      .then(data => console.log(data))
      .catch(error => console.error(error));    
}