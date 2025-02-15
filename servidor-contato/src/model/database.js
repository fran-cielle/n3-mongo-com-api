const mongoose = require("mongoose")

//DB_URL é a nossa string de concexão
const DB_URL = "mongodb://localhost:27017/reprograma"

const connect = () =>{
    mongoose.connect(DB_URL, { userNewUrlParser: true})
    const connection = mongoose.connection
    connection.on('error',() => console.error('Erro ao conectar no mongo'))

    connection.once('open', ()=> console.log('Conectamos ao Mongo!'))
}

module.exports = {connect}