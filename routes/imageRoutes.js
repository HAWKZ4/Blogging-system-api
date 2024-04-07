const express = require("express");
const router = express.Router();
const checkAuth = require("../middlewares/authMiddleware");
const { upload, uploadCheck } = require("../helpers/imageUploader");

router.post("/upload", checkAuth, upload.single("image"), uploadCheck);

module.exports = router;
