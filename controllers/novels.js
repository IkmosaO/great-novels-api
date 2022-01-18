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

const getNovelByIdentifier = async (request, response) => {
  try {
    const { identifier } = request.params

    const foundNovel = await models.Novels.findOne({
      where: {
        [models.Op.or]: [
          { title: { [models.Op.like]: `%${identifier.toLowerCase()}%` } },
          { id: { [models.Op.like]: `%${identifier}%` } }
        ]
      },
      include: [
        { model: models.Authors },
        { model: models.Genres }
      ]
    })

    return foundNovel ? response.send(foundNovel) : response.sendStatus(404)
  } catch (error) {
    console.log(error)

    return response.status(500).send('Unable to get Novel, try again')
  }
}

module.exports = { getAllNovels, getNovelByIdentifier }
