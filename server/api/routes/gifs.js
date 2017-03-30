import express from 'express';
import Gif from '../models/gif.js';
import Auth from '../middlewares/authorization.js';

let router = express.Router();

module.exports = (app) => {
    var gif = new Gif();

    router.get('/', gif.findAll);

    router.get('/:id', gif.findById);

    router.post('/', gif.create);

    router.put('/:id', gif.update);

    router.delete('/:id', gif.delete);

    app.use('/gifs', router);

};
