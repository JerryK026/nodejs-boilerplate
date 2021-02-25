// production. 배포한 후(heroku 등)에서 활용할 때.

module.exports = {
  mongoURI: process.env.MONGO_URI, //heroku와 똑같이 해주어야 함.
};
