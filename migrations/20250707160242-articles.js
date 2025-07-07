const articles = require('./ArticleDatabase.json');
const database = require('./database.json');

module.exports = {
  async up(db, client) {
    await db.collection('articles').insertMany(articles);
  },

  async down(db, client) {
    await db.collection('article').insertMany(database);
  },
};
