function adicionarTeste() {

    var body = {
        nome_teste: "teste 01",
        perguntas: []
    }

    const request = fetch('http://localhost:8080/teste', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            'Accept': 'application/json, text/plain, */*'
        },
        body: JSON.stringify(body),
    });

    request.then(res => {
        if(res.status == 201){
            return alert('sucesso')
        }
    })
    
    request.catch(error => alert(error))
}

function getTestes() {

    const request = fetch('http://localhost:8080/testes');
}