const Sequelize = require('sequelize')
const db = require('../db')

module.exports = db.define('cartItem', {

    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },

    priceAtCheckout: {
        type: Sequelize.INTEGER,
        validate: {
            notEmpty:true
        },
        allowNull: false,
        defaultValue: 0 
        // will be solidified at checkout and can never change after checkout
        // if Cart.inProgress = 0, then this will be populated with the price at that point and will never change
    },

})
