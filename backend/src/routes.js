/**Importação da biblioteca express*/
const express = require('express');

const SessionsController = require('./controllers/SessionsController');
const OngController = require('./controllers/OngController');
const ProfileController = require('./controllers/ProfileController');
const IncidentController = require('./controllers/IncidentController');

/**Desacoplamento do módulo de rotas do express em uma variável*/
const routes = express.Router();

/**Criação da rota raiz
routes.get('/', (request, response) =>{
    return response.send('Be a hero!');
});
*/

routes.post('/sessions', SessionsController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents',IncidentController.index);
routes.post('/incidents',IncidentController.create);
routes.delete('/incidents/:id',IncidentController.delete);

/** Exportação de uma variável */
module.exports = routes;