/* eslint-disable no-console */
const models = require('../models')

const getAllAuthors = async (request, response) => {
  try {
    const authorsData = await models.Authors.findAll()

    return response.send(authorsData)
  } catch (error) {
    console.log(error)

    return response.status(500).send('Unable to retrieve Authors, try again')
  }
}

const getAuthor = async (request, response) => {
  try {
    const { id } = request.params

    const anAuthor = await models.Authors.findOne({
      where: { id },
      include: [{
        model: models.Novels,
        include: [{
          model: models.Genres
        }]
      }]
    })

    return anAuthor ? response.send(anAuthor) : response.sendStatus(404)
  } catch (error) {
    console.log(error)

    return response.status(500).send('Unable to get employer,please try again later')
  }
}

module.exports = {
  getAllAuthors,
  getAuthor
}
