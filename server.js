const express = require("express");
const app = express();
const http = require("http");
const postRoutes = require("./routes/postRoutes");
const port = 3000;

const server = http.createServer(app);

app.use(express.json());

app.use("/posts", postRoutes);

server.listen(port, () => {
  console.log(`Running on port ${port}`);
});
