//this is the access point for all things database related!

const db = require('./db')

const User = require('./models/User')
const Poster = require('./models/Poster');
const SuperHero = require('./models/SuperHero');
const Cart = require('./models/Cart');

//associations could go here!

//One-to-Many
SuperHero.hasMany(Poster);
Poster.belongsTo(SuperHero);

//Many-to-Many
Cart.belongsToMany(Poster, {through: 'Cart_Poster'});
Poster.belongsToMany(Cart, {through: 'Cart_Poster'});

// One-to-One
Cart.belongsTo(User);
User.hasOne(Cart);

//CREATE OUR METHODS
User.getCart = async function() {
  const cart = await User.findAll({
    include: [{
      model: Cart
    }],
  });
  return cart;
}

//===================================

module.exports = {
  db,
  models: {
    User,
    SuperHero,
    Poster,
    Cart
  },
}
