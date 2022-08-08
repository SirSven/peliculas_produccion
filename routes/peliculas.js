const express = require('express')
var mongodb = require('mongodb')
const router = express.Router()
const Pelicula = require('../models/peliculaModelo')

//Filtrar busqueda
function filtrarBusqueda(request) {
    let parametroDirector = request.query.director
    let parametroAño = request.query.release_year
    let query = {}
    if (parametroDirector !== undefined && parametroAño !== undefined) {
        query = { director: parametroDirector, release_year: parametroAño }
    }
    if (parametroDirector !== undefined && parametroAño === undefined) {
        query = { director: parametroDirector }
    }
    if (parametroDirector === undefined && parametroAño !== undefined) {
        query = { release_year: parametroAño }
    }
    return query
}

//Obtener peliculas
router.get('/', async (request, response) => {
    try {
        const peliculas = await Pelicula.find(filtrarBusqueda(request))
        response.json({data: peliculas,  contador: peliculas.length})
    } catch (err) {
        response.status(500).json({ message: err.message })
    }
})

//Crear pelicula
router.post('/', async (request, response) => {
    const pelicula = new Pelicula({
        title: request.body.title,
        release_year: request.body.release_year,
        locations: request.body.locations,
        production_company: request.body.production_company,
        director: request.body.director,
        writer: request.body.writer,
        actor_1: request.body.actor_1,
        actor_2: request.body.actor_2,
        actor_3: request.body.actor_3
    })
    try {
        const nuevaPelicula = await pelicula.save()
        response.status(201).json(nuevaPelicula)
    } catch (err) {
        response.status(400).json({ message: err.message })
    }
})

module.exports = router