//connecta com o bd 
const contatosCollection = require("../model/contatoSchema")

const getAll = (request, response) => {
  // console.log(request.url)
  // response.status(200).send(contatosCollection)
  contatosCollection.find((error,contatos) =>{
    if(error){
      return response.status(500).send(error)
    }else{
      return response.status(200).send(contatos)
    }
  })
};



const add = (request, response) => {
  //novo objeto para nossa nova coleção
  const contatoDoBody = request.body//objeto json que veio no body
  const contato = new contatosCollection(contatoDoBody) //pega o objeto do body e transforma em um objeto para o banco| o new é uma função construtora

  contato.save((error) =>{
    // if (error !== null && !== undefined)
    if (error){
      return response.status(400).send(error)
    }else {
      return response.status(201).send(contato)
    }
  })

  // let contato = request.body
  // let baseDados = model.agenda.contatos
  // contato.id = Math.random().toString(36).substr(-8)

  // if (!contato.nome || !contato.dataNascimento || !contato.celular) {
  //   response.status(400).send("Dados inválidos");
  // } else {
  //   if (baseDados.find(dado => dado.nome === contato.nome)) {
  //     response.status(400).send("Contato já cadastrado")
  //   } else {
  //     model.agenda.contatos.push(contato)
  //     response.status(201).send(contato)
  //   }
  // }

}

module.exports = {
  getAll,
  add
}
