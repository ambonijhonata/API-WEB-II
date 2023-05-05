const loginController = require('../controller/LoginController')
const cadastrarTesteController = require('../controller/CadastrarTesteController')
const cadastrarPerguntaController = require('../controller/CadastrarPerguntaController')
const resultadoController = require('../controller/ResultadosController')

const express = require('express')
const path = require('path')
const PORT = 8080
const bodyParser = require('body-parser');

const app = express()

app.use(bodyParser.json());
app.use('/', express.static(path.join(__dirname, '../')))

//index
app.get('/', (req, res) => {                
      res.sendFile(path.join(__dirname, '../html/login.html'))
});

app.post('/login', (req, res) => {         
    const json = req.body.usuario
    console.log(json)         
    if(loginController.login(req.body.usuario, req.body.senha)){
        res.sendStatus(200)        
    }else{
        res.sendStatus(401);
    }
})

//retorna todos os testes
app.get('/testes', (req, res) => {
    res.sendFile(path.join(__dirname, '../dados/testes.json'))
})

//cadastra um teste
app.post('/teste', (req, res) => {  
    try {
      cadastrarTesteController.gravarTeste(req.body)
      res.sendStatus(201)
    } catch (error){
      res.sendStatus(400)
    }    
})

/*cadastra uma pergunta par um teste. Passar via query a descrição do teste
localhost:8080/pergunta?teste=nomedoteste
*/
app.post('/pergunta', (req, res) => {
    //chama o model    
    try {        
        cadastrarPerguntaController.gravarPergunta(req.body, req.query.teste)
        res.sendStatus(201)
    } catch (error){
      res.sendStatus(400)
    }    
})

/*retorna as perguntas de um determinado teste
  localhost:8080/pergunta?teste=nomedoteste -> vai retornar as perguntas do teste passado na query
*/
app.get('/perguntas', (req, res) => {
    let teste = req.query.descteste
    let data = cadastrarPerguntaController.getPerguntasByTest(teste)
    
    if(data == undefined){
        res.sendStatus(404)
    }else{
        res.send(cadastrarPerguntaController.getPerguntasByTest(teste))
    }
   
})

app.get('/resultados', (req, res) => {
    res.send(resultadoController.getResultados())    
})

app.post('/resultado', (req, res) => {
    try{
        resultadoController.gravarResultado(req.body)
        res.sendStatus(200)
    }catch(error){
        res.sendStatus(400)
    }
})

app.listen(PORT, ()=> {
    console.log('rodando na porta ' + PORT);
})