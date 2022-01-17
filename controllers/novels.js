/* eslint-disable no-console */
const models = require('../models')

const getAllNovels = async (request, response) => {
  try {
    const novelsData = await models.Novels.findAll({
      include: [
        { model: models.Authors },
        { model: models.Genres }
      ]
    })

    return response.send(novelsData)
  } catch (error) {
    console.log(error)

    return response.status(500).send('Unable to retrieve Novels, try again')
  }
}

const getNovel = async (request, response) => {
  try {
    const { id } = request.params
    const novelData = await models.Novels.findOne({
      where: { id },
      include: [
        { model: models.Authors },
        { model: models.Genres }
      ]
    })

    return novelData ? response.send(novelData) : response.sendStatus(404)
  } catch (error) {
    console.log(error)

    return response.status(500).send('Unable to retrieve Novel, try again')
  }
}

module.exports = { getAllNovels, getNovel }
