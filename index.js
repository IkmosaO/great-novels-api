/* eslint-disable no-console */
const express = require('express')
const { getAllAuthors, getAuthor, getAuthorByLastName } = require('./controllers/authors')
const { getAllGenres, getGenre } = require('./controllers/genres')
const { getAllNovels, getNovel } = require('./controllers/novels')

const app = express()

app.get('/authors', getAllAuthors)
app.get('/authors/:id', getAuthor)
app.get('/authors/:lastName', getAuthorByLastName)

app.get('/genres', getAllGenres)
app.get('/genres/:id', getGenre)

app.get('/novels', getAllNovels)
app.get('/novels/:id', getNovel)

app.listen(1337, () => {
  console.log('listening on port 1337...')
})
