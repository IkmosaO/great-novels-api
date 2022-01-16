const Sequelize = require('sequelize')
const AuthorsModel = require('./authors')
const connection = new Sequelize('greatnovelsDB', 'novels', 'n0v3lS', {
  host: 'localhost', dialect: 'mysql',
})

const Authors = AuthorsModel(connection, Sequelize)

module.exports = { Authors }
