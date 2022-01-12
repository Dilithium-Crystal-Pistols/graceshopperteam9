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

})
