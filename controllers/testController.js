const models = require("../models");

// JUST FOR TESTING
const test = async (req, res) => {
  // 1:1 / A user has one address OR an address belongs to one user
  // 1:M / A user has many posts
  // M:M / A post belong to many categories
  // const user = await models.User.findByPk(1, { include: models.Address });
  // const post = await models.User.findByPk(1, { include: models.Post });
  // const post = await models.Post.findByPk(15, { include: models.User });
  // const address = await models.Address.findByPk(1, { include: models.User });
  // const post = await models.Post.findByPk(1, { include: [models.Category] });
  // const category = await models.Category.findByPk(1, { include: [models.Post] });
  // res.status(200).json({ category });
};

module.exports = test;
