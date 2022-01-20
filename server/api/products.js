const router = require("express").Router();

const CartItem = require("../db/models/CartItem");
const Product = require("../db/models/Product");
const Cart = require("../db/models/Cart");


router.get("/", async (req, res, next) => {
  try {
    const products = await Product.findAll();
    res.send(products);
  } catch (err) {
    next(err);
  }
});

router.get("/posters", async (req, res, next) => {
  try {
    const products = await Product.findAll(
      {where: {productType: 'Poster'}}
    );
    res.send(products);
  } catch (err) {
    next(err);
  }
});

router.get("/keychains", async (req, res, next) => {
  try {
    const products = await Product.findAll(
      {where: {productType: 'Keychain'}}
    );
    res.send(products);
  } catch (err) {
    next(err);
  }
});

router.get("/:productId", async (req, res, next) => {
  try {
    const myProduct = await Product.findByPk(req.params.productId);
    res.send(myProduct);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    res.status(201).send(await Product.create(req.body));
  } catch (err) {
    next(err);
  }
});

router.delete("/:productId", async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.productId);
    if (product) {
      await product.destroy();
    }
    res.send(product);
  } catch (err) {
    next(err);
  }
});

router.put("/:productId", async (req, res,next) => {
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
  } catch (err) {
    next(err);
  }
});



module.exports = router;
