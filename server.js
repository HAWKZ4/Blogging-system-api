const express = require("express");
const app = express();
const http = require("http");
const path = require("path");
const postRoutes = require("./routes/postRoutes");
const userRoutes = require("./routes/userRoutes");
const commentRoutes = require("./routes/commentRoutes");
const imageRoutes = require("./routes/imageRoutes");
const cookieParser = require("cookie-parser");
const errorHandler = require("./middlewares/errorMiddlware");

require("dotenv").config();

const port = 3000;

const server = http.createServer(app);

app.use(cookieParser());
app.use(express.json());

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/posts", postRoutes);
app.use("/users", userRoutes);
app.use("/comments", commentRoutes);
app.use("/images", imageRoutes);

app.use(errorHandler);

server.listen(port, () => {
  console.log(`Running on port ${port}`);
});
