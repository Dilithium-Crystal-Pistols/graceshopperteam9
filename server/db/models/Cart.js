const Sequelize = require('sequelize')
const db = require('../db')

module.exports = db.define('cart', {

    //Yes currently in progress = 1
    //Order already complete = 0
    inProgress: {
        type: Sequelize.INTEGER,
        validate: {
            notEmpty: true
        },
        allowNull:false,
        defaultValue: 1
    }

})
