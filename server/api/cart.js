const router = require("express").Router();

const { user } = require("pg/lib/defaults");
const Cart = require("../db/models/Cart");
const CartItem = require("../db/models/CartItem");
const Product = require("../db/models/Product");
const User = require("../db/models/User");

const hasToken = async (req, res, next) => {
  const user = await User.findByToken(req.headers.authorization);
  if (user) {
    req.user = user;
    next();
  } else {
    next(new Error("User is not logged in"));
  }
};

//Route for when user clicks his/her cart
//price, name, quantity
router.get("/", hasToken, async (req, res, next) => {
  try {
    const user = req.user;
    const cart = await Cart.findOne({
      where: {
        userId: user.id,
        inProgress: true,
      },
      include: [
        {
          model: Product,
        },
      ],
    });
    res.send(cart);
  } catch (error) {
    next(error);
  }
});

router.delete("/:productId", hasToken, async (req, res, next) => {
  try {
    const user = req.user;
    const cart = await Cart.findOne({
      where: {
        userId: user.id,
        inProgress: true,
      },
    });
    const cartItems = await CartItem.findOne({
      where: {
        cartId: cart.id,
        productId: req.params.productId,
      },
    });
    await cartItems.destroy();
    res.send(cartItems);
  } catch (err) {
    next(err);
  }
});

router.put("/:productId", hasToken, async (req, res, next) => {
  try {
    const user = req.user;
    const cart = await Cart.findOne({
      where: {
        userId: user.id,
        inProgress: true,
      },
    });
    const cartItem = await CartItem.findOne({
      where: {
        cartId: cart.id,
        productId: req.params.productId,
      },
    });
    await cartItem.update({
      quantity: req.body.quantity,
    });
    res.send(cartItem);
  } catch (err) {
    next(err);
  }
});

router.post("/:productId", hasToken, async (req, res, next) => {
  try {
    const user = req.user;

    const [ cart ] = await Cart.findOrCreate({
      where: {
        userId: user.id,
        inProgress: true,
      },
    })

    let [ cartItem ] = await CartItem.findOrCreate({
      where: {
        cartId: cart.dataValues.id,
        productId: req.params.productId,
      },
    });

    await cartItem.update({
      quantity: cartItem.dataValues.quantity + 1,
    });
    res.send(cartItem);
  } catch (error) {
    next(error);
  }
});


router.get("/checkout", hasToken, async (req, res) => {
  try {
    const user = req.user;
    const cart = await Cart.findOne({
      where: {
        userId: user.id,
        inProgress: true,
      },
      include: [
        {
          model: Product,
        },
      ],
    });
    res.send(cart);
  } catch (error) {
    console.log(error);
  }
});

router.put("/checkout", hasToken, async (req, res) => {
  console.log('////////////Hello from PUT ROUTE')
  try {
    const user = req.user;
    const cart = await Cart.findOne({
      where: {
        userId: user.id,
        inProgress: true,
      },
      include: [
        {
          model: Product,
        },
      ],
    });
    cart.update({ inProgress: false })
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
