const express = require('express')
const { celebrate } = require('celebrate')

const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const createOngValidator = require('./validators/createOngValidator')
const headerAuthorizationValidator = require('./validators/headerAuthorizationValidator')
const incidentDelValidator = require('./validators/incidentDelValidator')
const pageValidator = require('./validators/pageValidator')

const routes = express.Router()

routes.post('/sessions', SessionController.create )

routes.get('/ongs', OngController.index)
routes.post('/ongs', celebrate(createOngValidator), OngController.create)

routes.get('/profile', celebrate(headerAuthorizationValidator), ProfileController.index)

routes.get('/incidents', celebrate(pageValidator), IncidentController.index)
routes.post('/incidents', IncidentController.create)
routes.delete('/incidents/:id', celebrate(incidentDelValidator), IncidentController.delete)

module.exports = routes