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
const getAuthorByIdentifier = async (request, response) => {
  try {
    const { identifier } = request.params

    const foundAuthor = await models.Authors.findOne({
      where: {
        [models.Op.or]: [
          { nameLast: { [models.Op.like]: `%${identifier.toLowerCase()}%` } },
          { id: { [models.Op.like]: `%${identifier}%` } }
        ]
      },
      include: [{
        model: models.Novels,
        include: [{
          model: models.Genres
        }]
      }]
    })

    return foundAuthor ? response.send(foundAuthor) : response.sendStatus(404)
  } catch (error) {
    console.log(error)

    return response.status(500).send('Unable to get author, try again')
  }
}

module.exports = {
  getAllAuthors,
  getAuthorByIdentifier
}
