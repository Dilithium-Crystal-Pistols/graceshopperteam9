const router = require("express").Router();

const CartItem = require("../db/models/CartItem");
const Product = require("../db/models/Product");
const Cart = require("../db/models/Cart");
const User = require('../db/models/User')

const isAdmin = async (req, res, next) => {
  const user = await User.findByToken(req.headers.authorization);
  console.log(user);
  if (user.isAdmin === true) {
    req.user = user;
    next();
  } else {
    next(new Error('No User or Not an Admin'))
  };
};
router.get("/",async (req, res,next) => {
  try {
    const products = await Product.findAll();
    res.send(products);
  } catch (error) {
    console.log(error);
    next(error)
  }
});

router.get("/:productId",async (req, res,next) => {
  try {
    const myProduct = await Product.findByPk(req.params.productId);
    console.log("LOGGING myProduct: ", myProduct);
    res.send(myProduct);
  } catch (error) {
    console.log(error);
    next(error)
  }
});

router.post("/",isAdmin, async (req, res,next) => {
  try {
    res.status(201).send(await Product.create(req.body));
  } catch (error) {
    console.log(error);
    next(error)
  }
});

router.delete("/:productId",isAdmin, async (req, res,next) => {
  try {
    const product = await Product.findByPk(req.params.productId);
    if (product) {
      await product.destroy();
    }
    res.send(product);
  } catch (error) {
    console.log(error);
    next(error)
  }
});

router.put("/:productId",isAdmin, async (req, res,next) => {
  try {
    console.log("this is the body ", req.body);
    const product = await Product.findByPk(req.params.productId);
    console.log("this the Product", product);
    res.send(
      await product.update({
        name: req.body.name,
        price: Number(req.body.price),
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        productType: req.body.productType,
      })
    );
    console.log("after presumed update", product);
  } catch (error) {
    console.log(error);
    next(error)
  }
});

router.post("/:productId/:cartId", async (req, res) => {
  try {
    const cart = await Cart.findOrCreate(
      {where: {inProgress: true}});

    const cartItem = await CartItem.findOne({
      where: {
        cartId: cart.id,
        productId: req.params.productId,
      },
    });
    //First need to check if item is already in cart. If it is, add to the quantity.
    if (cartItem) {
      res.send(
        await cartItem.update({
          quantity: cartItem.quantity+1,
        })
      );
    // Else, create a new CartItem
    } else {
      let newCartItem = await CartItem.create({
        quantity: 1,
        productId: req.params.productId,
        cartId: req.params.cartId,
      });
      res.send(await newCartItem);
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
