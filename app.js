const express = require("express");

const app = express();

const postRoutes = require("./routes/postRoutes");

app.use("/posts", postRoutes);

module.exports = app;
