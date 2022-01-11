//this is the access point for all things database related!

const db = require('./db')

const User = require('./models/User')



const Poster = require('./models/Poster');
const SuperHero = require('./models/SuperHero');

//associations could go here!

SuperHero.hasMany(Poster);
Poster.belongsTo(SuperHero);

module.exports = {
  db,
  models: {
    User,
    SuperHero,
    Poster
  },
}
