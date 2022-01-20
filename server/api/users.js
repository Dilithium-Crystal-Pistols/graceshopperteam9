const router = require("express").Router();
const {
  models: { User },
} = require("../db");
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and username fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      // attributes: ['id', 'username']
    });
    console.log(users.map((user) => user.dataValues));
    const userArr = [];
    users.map((user) => userArr.push(user.dataValues));
    res.send(userArr);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res,next ) => {
  try {
    res.status(200).send(await User.findByPk(req.params.id));
  } catch (err) {
    next(err);
  }
});

router.post("/add-user", async (req, res, next) => {
  try {
    const myUser = await User.create(req.body, {
      include: [
        {
          association: User.Cart,
        },
      ],
    });
    res.status(200).send(myUser);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res,next) => {
  try {
    const myUser = User.findByPk(req.params.id);
    res.status(200).send(await myUser.update(req.body));
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const myUser = await User.findByPk(req.params.id);
    await myUser.destroy();
  } catch (err) {
    next(err);
  }
});
