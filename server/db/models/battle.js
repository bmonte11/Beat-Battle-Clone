const Sequelize = require('sequelize')
const db = require('../db')

const Battle = db.define('battle', {
  title: {
    type: Sequelize.STRING
  },
  voteCount: {
    type: Sequelize.INTEGER
  }
})

module.exports = Battle
