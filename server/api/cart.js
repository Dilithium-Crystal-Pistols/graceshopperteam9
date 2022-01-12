const router = require("express").Router();

const Cart = require("../db/models/Cart");

router.get("/", async (req, res) => {
  try {
    //console.log('WHAT IS REQ?!: ', req.headers)
    const cart = await Cart.findAll({
      //where: { userId : req.auth.id},
    });
    res.send(cart);
  } catch (error) {
    console.log(error);
  }
});

module.exports= router