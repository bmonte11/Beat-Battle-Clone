const Sequelize = require('sequelize')
const db = require('../db')

const Track = db.define('track', {
  title: {
    type: Sequelize.STRING
  },
  upvote: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  downvote: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  }
})
