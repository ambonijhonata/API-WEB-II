
function cadastrarPergunta() {
    var body = {
        pergunta: "Qual a nota do grupo?",
        opcaoA: "10",
        opcaoB: "9",
        opcaoC: "8",
        opcaoD: "7",
        resposta: "10"
    }

    const request = fetch('http://localhost:8080/pergunta?teste=teste 01', {
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

    const request = fetch('http://localhost:8080/perguntas?descteste=teste 02')
    console.log(request.JSON())
}