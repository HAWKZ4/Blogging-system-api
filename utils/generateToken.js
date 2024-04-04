const jwt = require("jsonwebtoken");

const generateToken = (res, email, userId) => {
  const token = jwt.sign(
    {
      email,
      userId,
    },
    process.env.JWT_SECRET,
    { expiresIn: "30d" }
  );
  // Set JWT as HTTP secure cookie
  res.cookie("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict",
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 Days
  });
};

module.exports = generateToken;
