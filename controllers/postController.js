// Get all posts
const index = (req, res) => {
  const posts = "Posts List";
  res.send(posts);
};

module.exports = { index };
