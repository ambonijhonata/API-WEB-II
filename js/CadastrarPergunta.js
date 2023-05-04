
function cadastrarPergunta() {
    var body = {
        pergunta: "otra vez?",
        opcaoA: "Não",
        opcaoB: "Sim",
        resposta: "Sim"
    }

    const request = fetch('http://localhost:8080/pergunta?teste=teste 04', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            'Accept': 'application/json, text/plain, */*'
        },
        body: JSON.stringify(body),
    })

    request.then(res => {
        if (res.status == 201) {
            return alert('sucesso')
        }
    })

    request.catch(error => alert(error))
}

function getPerguntasByTeste() {

    const request = fetch('http://localhost:8080/perguntas?descTeste=teste1')
    console.log(request.JSON())
}