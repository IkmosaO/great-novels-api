const Sequelize = require('sequelize')
const greatAuthorsModel = require('./authors')
const connection = new Sequelize('greatnovelsDB', 'novels', 'n0v3lS', {
  host: 'localhost', dialect: 'mysql',
})

const Authors = greatAuthorsModel(connection, Sequelize)

module.exports = { Authors }
