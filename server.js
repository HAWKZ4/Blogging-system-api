const express = require("express");
const app = express();
const http = require("http");
const postRoutes = require("./routes/postRoutes");
const userRoutes = require("./routes/userRoutes");
const commentRoutes = require("./routes/commentRoutes");

require("dotenv").config();

const port = 3000;

const server = http.createServer(app);

app.use(express.json());

app.use("/posts", postRoutes);
app.use("/users", userRoutes);
app.use("/comments", commentRoutes);

server.listen(port, () => {
  console.log(`Running on port ${port}`);
});
