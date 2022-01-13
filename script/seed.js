'use strict'

const {db, models: {User,Poster,SuperHero, CartItem, Cart} } = require('../server/db')

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }) // clears db and matches models to tables
  console.log('db synced!')

  // Creating Users
  const users = await Promise.all([

    User.create({ fName: 'John', lName: 'Smith', email: 'john123@gmail.com', address: '3578 Audry St Zip code 11587, Brooklyn NY', username: 'jsmith', password: '123', isAdmin:false })
  ])



  const superHeros = await Promise.all([
    SuperHero.create({name:"Superman"}),
    SuperHero.create({name:"Batman"})
  ])
  const posters = await Promise.all([
    Poster.create({ name: "Superman", price: 20.00, description: "literally Superman",superheroId:1, productType: 'Poster'}),
    Poster.create({ name: "Batman", price: 22.00, description: "literally Batman",superheroId:2, productType: 'Poster' })
  ]);

  const cartItems = await Promise.all([
    CartItem.create({ quantity: 2}),
    CartItem.create({ quantity: 1})
  ]);

  const carts = await Promise.all([
    Cart.create({ userId: 1})
  ]);

  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
  return {
    users: {
      John: users[0]
    }

  }
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
