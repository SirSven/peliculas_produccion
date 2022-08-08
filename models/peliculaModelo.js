const mongoose = require('mongoose')

const peliculaEsquema = new mongoose.Schema({
    title: {type: String},
    release_year: {type: String},
    locations: {type: String},
    production_company:{type: String},
    director:{type: String},
    writer:{type: String},
    actor_1:{type: String},
    actor_2:{type: String},
    actor_3:{type: String}
})

module.exports = mongoose.model('Pelicula', peliculaEsquema)