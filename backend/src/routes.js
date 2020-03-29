const express = require('express')
const { celebrate } = require('celebrate')

const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const validation = require('./validators/validation')

const routes = express.Router()

routes.post('/sessions', SessionController.create )

routes.get('/ongs', OngController.index)
routes.post('/ongs', celebrate(validation.createOng), OngController.create)

routes.get('/profile', celebrate(validation.authorizationHeader), ProfileController.index)

routes.get('/incidents', celebrate(validation.pageId), IncidentController.index)
routes.post('/incidents', IncidentController.create)
routes.delete('/incidents/:id', celebrate(validation.delIncident), IncidentController.delete)

module.exports = routes