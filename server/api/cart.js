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
    const cartItems = await CartItem.findAll({
      where: {
        cartId: cart.id,
      },
    });
    const products = await Product.findAll({
      include: [
        {
          model: Cart,
          where: {
            id: cart.id,
          },
        },
      ],
    });
    // const currentCart = {
    //     userId: cart.userId,
    //     products: products,
    //     cartItems: cartItems
    // }

    //console.log("finalCart: ", currentCart);

    console.log(products[0].product)
    //const products = await cart.getProducts();
    //console.log("PRODUCTS: ", products[0].product)
    //console.log("CART PROTOTYPE: ", Cart.prototype)
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
