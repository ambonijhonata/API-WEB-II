function cadastrarResultado(){    
    var body = {
        teste: "teste 01",
        qtd_perguntas : 3,
        qtd_acertos: 2
    }

    const request = fetch('http://localhost:8080/resultado', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            'Accept': 'application/json, text/plain, */*'
        },
        body: JSON.stringify(body),
    });

    request.then(res => {
        if(res.status == 200){
            return alert('sucesso')
        }
    })
    
    request.catch(error => alert(error))    
}

function getResultados(){
    const request = fetch('http://localhost:8080/resultados')
}