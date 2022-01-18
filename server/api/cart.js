
const Cart = require('../db/models/Cart');
const CartItem = require('../db/models/CartItem');
const User = require('../db/models/User');

const router = require('express').Router();
router.get('/', async(req, res) => {
    try {

        res.send("Hello from cart")
        // res.send({ token: await User.authenticate(req.body)});
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

router.get("/:id", async (req, res) => {
  try {
    console.log("car items hit");
  } catch (error) {
    console.log(error);
  }
});

router.post('/:id', async(req, res) => {
    try {
        console.log(process.env.JWT)
        // check if is logged in

        // let cartCreated = await Cart.findOrCreate({
        //     where: {
        //         userId: ///
        //     }
        // })
     res.send('Hello from single product added')
    } catch (error) {
        console.log(error)
    }
})

router.delete('/:id', async(req, res) => {
    try {

    } catch (error) {
        console.log(error)
    }
})


router.put('/:id', async (req, res) => {
    try {
        res.send("hello from update cart")
    } catch (error) {
        console.log(error);
    };
});

module.exports = router
