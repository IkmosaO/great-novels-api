/* eslint-disable no-console */
const models = require('../models')

const getAllAuthors = async (request, response) => {
  try {
    const authorsData = await models.Authors.findAll()

    return response.send(authorsData)
  } catch (error) {
    console.log(error)

    return response.status(500).send('Unable to retrieve authors, try again')
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

    return response.status(500).send('Unable to get author,please try again later')
  }
}

const getAuthorByLastName = async (request, response) => {
  try {
    const { lastName } = request.params

    const foundAuthor = await models.Authors.findOne({
      where: {
        nameLast: { [models.Op.like]: `%${lastName.toLowerCase()}%` },
      }
    })

    return foundAuthor ? response.send(foundAuthor) : response.sendStatus(404)
  } catch (error) {
    console.log(error)

    return response.status(500).send('Unable to get author, try again')
  }
}

module.exports = {
  getAllAuthors,
  getAuthor,
  getAuthorByLastName
}
