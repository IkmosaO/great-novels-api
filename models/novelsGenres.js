const NovelsGenres = (connection, Sequelize, Genres, Novels) => {
  return connection.define('novelsGenres', {
    genreId: { type: Sequelize.INTEGER, primaryKey: true, references: { model: Genres, key: 'id' } },
    novelId: { type: Sequelize.INTEGER, primaryKey: true, references: { model: Novels, key: 'id' } }
  }, { paranoid: true })
}

module.exports = NovelsGenres


