const { Router } = require('express');

const DevController = require('./controlers/DevController');
const SearchController = require('./controlers/SearchController');

const routes = Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.get('/search', SearchController.index);
routes.put('/search', SearchController.update);
routes.delete('/search', SearchController.destroy);

module.exports = routes;