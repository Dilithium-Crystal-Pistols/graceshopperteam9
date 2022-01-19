const router = require("express").Router();

const Cart = require("../db/models/Cart");
const CartItem = require("../db/models/CartItem");
const Product = require("../db/models/Product");
const User = require("../db/models/User");

//Route for when user clicks his/her cart
//price, name, quantity
router.get("/:cartId", async (req, res) => {
  try {
    const cart = await Cart.findByPk(req.params.cartId);
    const products = await cart.getProducts();
    let currentCart = [];
    for (let i = 0; i < products.length; i++) {
      currentCart.push({
        userId: cart.userId,
        cartId: cart.id,
        productId: products[i].dataValues.id,
        name: products[i].dataValues.name,
        imageUrl: products[i].dataValues.imageUrl,
        price: products[i].dataValues.price,
        description: products[i].dataValues.description,
        productType: products[i].dataValues.productType,
        quantity: products[i].dataValues.cartItem.quantity,
      });
    }
    res.send(currentCart);
  } catch (error) {
    console.log(error);
  }
});

router.delete("/:cartId/:productId", async (req, res) => {
  try {
    const cart = await Cart.findByPk(req.params.cartId);
    const cartItems = await CartItem.findOne({
      where: {
        cartId: cart.id,
        productId: req.params.productId,
      },
    });
    await cartItems.destroy();
    res.sendStatus(200).redirect("/:cartId");
  } catch (err) {
    console.log(err);
  }
});

router.put("/:cartId/:productId", async (req, res) => {
  try {
    const cart = await Cart.findByPk(req.params.cartId);
    const cartItem = await CartItem.findOne({
      where: {
        cartId: cart.id,
        productId: req.params.productId,
      },
    });
    res.send(await cartItem.update(cartItem, cartItem.quantity));
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
