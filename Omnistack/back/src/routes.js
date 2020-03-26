const express = require('express');

const OngController = require('./controller/OngController')

const IncidentController = require('./controller/IncidentController')

const ProfileController = require('./controller/ProfileController')

const SessionController = require('./controller/SessionController')

const routes = express.Router();

routes.get('/ongs/busca', OngController.getOng);

routes.post('/ongs',OngController.create);

routes.post('/incidents',IncidentController.createIncident);

routes.get('/incidents/busca', IncidentController.getIncident);

routes.delete('/incidents/:id', IncidentController.delIncident);

routes.get('/profile', ProfileController.index);

routes.post('/sessions',SessionController.create);
module.exports = routes;
    