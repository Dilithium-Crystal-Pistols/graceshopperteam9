const router = require('express').Router();

const Cart = require('../db/models/Cart');
const CartItem = require('../db/models/CartItem');
const User = require('../db/models/User')
router.get('/', async(req, res) => {
    try {
        //how do we access the user ??

        //Need a find or create request to get said user's cart
        // const userId = await User.findOrCreate()
        // console.log(user)
        // const userCart = User.getCart();
        // const cart = await Cart.getItems();
        // res.send(cart)
    } catch(error) {
        console.log(error)
    }
})

module.exports = router
