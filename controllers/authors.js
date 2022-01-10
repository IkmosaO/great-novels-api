const models = require('../models')

const getAllAuthors = async (request, response) => {
  try {
    const authorsData = await models.Authors.findAll()

    return response.send(authorsData)
  } catch (error) {
    return response.status(500).send('Unable to retrieve Authors, try again')
  }
}

module.exports = { getAllAuthors }
