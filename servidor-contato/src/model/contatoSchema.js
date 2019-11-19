const mongoose = require('mongoose')
const Schema = mongoose.Schema

//objeto com nossos campos tem que fazer para todos os campos
const contatoSchema = new Schema({
    _id:{
        type: mongoose.Schema.Types.ObjectId, //tipos dos dados
        auto: true, //é autogerado
        required: true // é obrigatorio
    },
    nome:{
        type: String,
        required: true
    },
    celular:{
        type: String,
        required: true
    }
})

//cria um obj de coleção com todos os métodos
const contatosCollection = mongoose.model('contato', contatoSchema)

module.exports = contatosCollection

