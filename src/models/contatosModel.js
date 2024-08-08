var contatos = []

function adicionarContato(nome, telefone, email){
    contatos.push({
        id: Date.now(),
        nome: nome,
        telefone: telefone, 
        email: email
    })
}

function listarContatos(){
    return contatos
}

module.exports = {
   adicionarContato,
   listarContatos
}