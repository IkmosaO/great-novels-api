/* eslint-disable no-console */
const express = require('express')
const { getAllAuthors } = require('./controllers/authors')

const app = express()

app.get('/authors', getAllAuthors)

app.listen(1337, () => {
  console.log('listening on port 1337...')
})
