var knex = require('knex')({
    client: 'mysql2',
    connection: {
      host : 'us-cdbr-east-05.cleardb.net',
      user : 'b1b8f06b97b82f',
      password : 'e57af8ec',
      database : 'heroku_67ce7d114d5e9a8'
    }
  });

module.exports = knex;