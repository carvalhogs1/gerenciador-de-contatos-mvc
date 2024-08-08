var contatosModel = require('../models/contatosModel')

function exibirContatos(request, response){

    var contatos = contatosModel.listarContatos()

    console.log('contatos:', contatos)

    response.render('index')
}

function exibirNovoContato(request, response){
    response.render('adicionarContato')
}

function adicionarContato(request, response){
    console.log('Chegou na adicionarContato')
    console.log(request.body)
    var nome = request.body.nome
    var telefone = request.body.telefone
    var email = request.body.email

    contatosModel.adicionarContato(nome, telefone, email)
    response.redirect('/')
}


module.exports = {
    exibirContatos,
    exibirNovoContato,
    adicionarContato
}