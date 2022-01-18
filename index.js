/* eslint-disable no-console */
const express = require('express')
const { getAllAuthors, getAuthorByIdentifier } = require('./controllers/authors')
const { getAllGenres, getGenre } = require('./controllers/genres')
const { getAllNovels, getNovelByIdentifier } = require('./controllers/novels')

const app = express()

app.get('/authors', getAllAuthors)
app.get('/authors/:identifier', getAuthorByIdentifier)

app.get('/genres', getAllGenres)
app.get('/genres/:id', getGenre)

app.get('/novels', getAllNovels)
app.get('/novels/:identifier', getNovelByIdentifier)

app.listen(1337, () => {
  console.log('listening on port 1337...')
})
