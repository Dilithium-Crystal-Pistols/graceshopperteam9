const Sequelize = require('sequelize')
const db = require('../db')
module.exports = db.define('cart', {

    totalPrice: {
        type: Sequelize.INTEGER,
        validate: {
            notEmpty: true
        },
        allowNull: false,
        defaultValue: 0
    }

})
