const express = require('express')
const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')
const { celebrate, Segments, Joi} = require('celebrate')

const routes = express.Router()

// Métodos HTTP
routes.get('/', (req, res) =>{
    return res.json({evento:"Semana Omnistack"})
})

routes.get('/ongs', OngController.index)

routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2)

    })
}) ,OngController.create); // middlewares

routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page : Joi.number(),
    })
}), IncidentController.index)

routes.post('/incidents',celebrate({
    [Segments.BODY]: Joi.object().keys({
        tittle: Joi.string().required(),
        description : Joi.required(),
        value: Joi.number().required(),
    }),
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
}) ,IncidentController.create);

routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown()
}) , ProfileController.index)

routes.delete('/incidents/:id',celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id : Joi.number().required(),
    })
}) , IncidentController.delete)

routes.post('/sessions', celebrate({
    [Segments.BODY]: Joi.object().keys({
        id: Joi.string().required()
    })
}), SessionController.create)

module.exports = routes;