const router = require('express').Router();

const Poster = require('../db/models/Poster');



router.get('/', async (req, res) => {
    try {
        const posters = await Poster.findAll();
        res.send(posters);
    } catch (error) {
        console.log(error);
    }
});

router.get('/:posterId', async (req, res) => {
    try {
        const myPoster = await Poster.findByPk(req.params.posterId);
        console.log('LOGGING myPoster: ', myPoster)
        res.send(myPoster)
    } catch (error) {
        console.log(error);
    }
});

router.post('/', async (req, res) => {
    try {
        const myPoster = await Poster.create(req.body)
        res.status(201).send(myPoster)
    } catch (error) {
        console.log(error);
    };
});

router.delete('/:posterId', async (req, res) => {
    try {
        const poster = await Poster.findByPk(req.params.posterId);
        if (poster) {
            await poster.destroy()
        };
        res.send(poster);
    } catch (error) {
        console.log(error);
    }
});

router.put('/:posterId', async (req, res) => {
    try {
        const poster = await Poster.findByPk(req.params.posterId);
        res.send(await poster.update(req.body))
    } catch (error) {
        console.log(error);
    };
});

module.exports = router