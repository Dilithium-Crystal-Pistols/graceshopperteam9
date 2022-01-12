//this is the access point for all things database related!

const db = require('./db')

const User = require('./models/User')
const Poster = require('./models/Poster');
const SuperHero = require('./models/SuperHero');
const Cart = require('./models/Cart');
const CartItem = require('./models/CartItem');

//associations could go here!

//One-to-Many
SuperHero.hasMany(Poster);
Poster.belongsTo(SuperHero);

//Many-to-Many
CartItem.belongsToMany(Poster, {through: 'CartItem_Poster'});
Poster.belongsToMany(CartItem, {through: 'CartItem_Poster'});

//One-to-Many
CartItem.belongsTo(Cart);
Cart.hasMany(CartItem);

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

Cart.getItems = async function() {
  const items = await Cart.findAll({
    include: [{
      model: CartItem 
    }],
  });
  return items;
}

//===================================

module.exports = {
  db,
  models: {
    User,
    SuperHero,
    Poster,
    Cart,
    CartItem
  },
}
