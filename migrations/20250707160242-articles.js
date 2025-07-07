const articles = require('./ArticleDatabase.json');

module.exports = {
  async up(db) {
    await db.collection('articles').insertMany(articles);
  },

  // async down(db) {},
};
