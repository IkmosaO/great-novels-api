/* eslint-disable no-console */
const models = require('../models')

const getAllGenres = async (request, response) => {
  try {
    const genresData = await models.Genres.findAll()

    return response.send(genresData)
  } catch (error) {
    console.log(error)

    return response.status(500).send('Unable to retrieve Genres, try again')
  }
}

const getGenre = async (request, response) => {
  try {
    const { id } = request.params

    const genreData = await models.Genres.findOne({
      where: { id },
      include: [{
        model: models.Novels,
        include: [{
          model: models.Authors
        }]
      }]
    })

    return genreData ? response.send(genreData) : response.sendStatus(404)
  } catch (error) {
    console.log(error)

    return response.status(500).send('Unable to retrieve Genre, try again')
  }
}

module.exports = {
  getAllGenres,
  getGenre
}
