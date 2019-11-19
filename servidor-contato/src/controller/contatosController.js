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

const getByName = (request,response) =>{
  const nomeParams = request.params.nome
  const filtro = {nome: nomeParams}//recebe o nome dado pelo parametro

  contatosCollection.find(filtro, (error, contato) => {
    if(error){
      return response.status(500).send(error)
    }else{
      return response.status(200).send(contato)
    }
  })
}


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

  
}

module.exports = {
  getAll,
  add,
  getByName
}
