const express = require('express')
const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')


const routes = express.Router()

// Métodos HTTP
routes.get('/', (req, res) =>{
    return res.json({evento:"Semana Omnistack"})
})

routes.get('/ongs', OngController.index)

routes.post('/ongs', OngController.create);

routes.get('/incidents', IncidentController.index)

routes.post('/incidents', IncidentController.create);

routes.get('/profile', ProfileController.index)

routes.delete('/incidents/:id', IncidentController.delete)

routes.post('/sessions', SessionController.create)

module.exports = routes;