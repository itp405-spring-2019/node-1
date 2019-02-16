const knex = require('knex');

module.exports = {
  all() {
    return new Promise((resolve, reject) => {
      let knex = connect();
      knex.select().from('genres').then((results) => {
        let genres = results.map((genre) => {
          let { GenreId, Name } = genre;
          return {
            id: GenreId,
            name: Name
          };
        });

        resolve(genres);
      });
    });
  },
  find(id) {
    return new Promise((resolve, reject) => {
      let knex = connect();
      knex
        .select()
        .from('genres')
        .where('GenreId', id)
        .first()
        .then((genre) => {
          if (!genre) {
            return reject();
          }

          let { GenreId, Name } = genre;
          resolve({
            id: GenreId,
            name: Name
          });
        });
    });
  }
};

function connect() {
  return require('knex')({
    client: 'sqlite3',
    connection: {
      filename: 'database/database.sqlite'
    }
  });
}
