const expressRouter = require('express');
const crud = require('../Controllers/crudController');

function routes() {
    const router = expressRouter.Router();
    const controller = crud();

    const query = (sp:string) => {
        return async function(req:any, res:any) {
            req.sql = { sp };
            await controller.crud(req, res);
        }
    }

    //Actor
    router.route('/actor')
        .get(query('GetActor'))
        .post(query('AddActor'))
        .put(query('UpdateActor'))
        .delete(query('DeleteActor'))

    router.route('/actor/:Id')
        .get(query('GetActor'))
        .put(query('UpdateActor'))
        .delete(query('DeleteActor'))

    //Film
    router.route('/film')
        .get(query('GetFilm'))
        .post(query('AddFilm'))
        .put(query('UpdateFilm'))
        .delete(query('DeleteFilm'))

    router.route('/film/:Id')
        .get(query('GetFilm'))
        .put(query('UpdateFilm'))
        .delete(query('DeleteFilm'))

    //Genre
    router.route('/genre')
        .get(query('GetGenre'))
        .post(query('AddGenre'))
        .put(query('UpdateGenre'))
        .delete(query('DeleteGenre'))

    router.route('/genre/:Id')
        .get(query('GetGenre'))
        .put(query('UpdateGenre'))
        .delete(query('DeleteGenre'))

    //FilmActor
    router.route('/filmActor')
        .get(query('GetFilmActor'))
        .post(query('AddFilmActor'))
        .delete(query('DeleteFilmActor')) 

    router.route('/filmActor/:Id')
        .get(query('GetFilmActor'))
        .delete(query('DeleteFilmActor'))

    router.route('/film/:filmId/actor/:actorId')
        .get(query('GetFilmActor'))
        .post(query('AddFilmActor'))

        router.route('/actor/:actorId/film/:filmId')
        .get(query('GetFilmActor'))
        .post(query('AddFilmActor'))

    return router;
};

module.exports = routes;