const router = require('express').Router();

const Cart = require('../db/models/Cart');
const CartItem = require('../db/models/CartItem');
const User = require('../db/models/User')

router.get('/', async(req, res) => {
    try {
        //Need a find or create request to get said user's cart
        
        const cart = await Cart.findAll({
            include: [CartItem]
        });
        res.send(cart)
    } catch(error) {
        console.log(error)
    }
})

module.exports = router