const router = require('express').Router();

const SuperHero = require('../db/models/SuperHero');
router.get('/', async (req, res,next) => {
    try {
        const superHeros = await SuperHero.findAll();
        res.send(superHeros);
    } catch (err) {
        next(err);
      }
});

module.exports = router