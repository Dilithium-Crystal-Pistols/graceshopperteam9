const router = require('express').Router();

// const { NUMBER } = require('sequelize/dist');
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
        console.log('this is the body ', req.body)
        const poster = await Poster.findByPk(req.params.posterId);   
        console.log("this the Poster",poster);
        res.send(await poster.update({
            name: req.body.name,
            price: Number(req.body.price),
            description: req.body.description,
            imageUrl: req.body.imageUrl,
            productType:req.body.productType
        }))
        console.log("after presumed update",poster);
    } catch (error) {
        console.log(error);
    };
});

module.exports = router
