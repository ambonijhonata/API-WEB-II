function cadastrarResultado(){    
    var body = {
        teste: "teste 01",
        qtd_perguntas : 3,
        qtd_acertos: 2
    }

    const request = fetch('http://localhost:8080/resultados');
    
}