const router = require("express").Router();

const CartItem = require("../db/models/CartItem");
const Product = require("../db/models/Product");
const Cart = require("../db/models/Cart");
const User = require("../db/models/User");

const isAdmin = async (req, res, next) => {
  const user = await User.findByToken(req.headers.authorization);
  console.log(user);
  if (user.isAdmin === true) {
    req.user = user;
    next();
  } else {
    next(new Error("No User or Not an Admin"));
  }
};

router.get("/", async (req, res, next) => {
  try {
    const products = await Product.findAll();
    res.send(products);
  } catch (error) {
    next(error);
  }
});

router.get("/:productId", async (req, res, next) => {
  try {
    const myProduct = await Product.findByPk(req.params.productId);
    res.send(myProduct);
  } catch (error) {
    next(error);
  }
});

router.post("/", isAdmin, async (req, res, next) => {
  try {
    res.status(201).send(await Product.create(req.body));
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.delete("/:productId", isAdmin, async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.productId);
    if (product) {
      await product.destroy();
    }
    res.send(product);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.put("/:productId", isAdmin, async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.productId);
    res.send(
      await product.update({
        name: req.body.name,
        price: Number(req.body.price),
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        productType: req.body.productType,
      })
    );
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;
