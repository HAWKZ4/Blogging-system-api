const jwt = require("jsonwebtoken");

const checkAuth = (req, res, next) => {
  let token;
  token = req.cookies.jwt;

  if (token) {
    try {
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
      req.userData = decodedToken;
      next();
    } catch (error) {
      throw new Error("Not authorized, token failed");
    }
  } else {
    throw new Error("Not authroized, no token");
  }
};

module.exports = checkAuth;
