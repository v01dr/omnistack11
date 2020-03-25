const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Criação de rota / recurso
 */

/**
 * Métodos HTTP:
 * 
 * GET: buscar informação do backend
 * POST: criar informação no backend
 * PUT: alterar uma informação no backend
 * DELETE: remover informação no backend
 */

/**
 * Tipos de parâmetros
 * 
 * Query Params: parâmetros nomeados enviados na rota após '?' e concatenadas com '&' (Filtros, paginação, etc.) /rota?id=1&nome=joao
 * Route Params: parâmetros para identificar um único recursos /rota:id
 * Request Body: corpo da requisição utilizado para criar ou alterar recursos
 */

/**
 * SQL: MySQL, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */

app.listen(3333);