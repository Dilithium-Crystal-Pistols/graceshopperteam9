const router = require("express").Router();

const Product = require("../db/models/Product");

router.get("/", async (req, res) => {
  try {
    const products = await Product.findAll();
    res.send(products);
  } catch (error) {
    console.log(error);
  }
});

router.get("/:productId", async (req, res) => {
  try {
    const myProduct = await Product.findByPk(req.params.productId);
    console.log("LOGGING myProduct: ", myProduct);
    res.send(myProduct);
  } catch (error) {
    console.log(error);
  }
});

router.post("/", async (req, res) => {
  try {
    res.status(201).send(await Product.create(req.body));
  } catch (error) {
    console.log(error);
  }
});

router.delete("/:productId", async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.productId);
    if (product) {
      await product.destroy();
    }
    res.send(product);
  } catch (error) {
    console.log(error);
  }
});


router.put('/:productId', async (req, res) => {
  try {
      console.log('this is the body ', req.body)
      const product = await Product.findByPk(req.params.productId);   
      console.log("this the Product",product);
      res.send(await product.update({
          name: req.body.name,
          price: Number(req.body.price),
          description: req.body.description,
          imageUrl: req.body.imageUrl,
          productType:req.body.productType
      }))
      console.log("after presumed update",product);
  } catch (error) {
      console.log(error);
  };
});

module.exports = router;
