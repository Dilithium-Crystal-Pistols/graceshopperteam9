const Sequelize = require('sequelize')
const db = require('../db')
module.exports = db.define('cart', {

    totalPrice: {
        type: Sequelize.FLOAT,
        validate: {
            notEmpty: true
        },
        allowNull: false,
        defaultValue: 0
    }

})
