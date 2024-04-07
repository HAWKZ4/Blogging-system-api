const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "uploads/");
  },
  filename(req, file, cb) {
    cb(null, new Date().getTime() + path.extname(file.originalname).toLowerCase());
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(new Error("Unsupported files"), false);
  }
};

const upload = multer({
  storage,
  limits: {
    fileSize: 1024 * 1024 * 10,
  },
  fileFilter,
});

const uploadCheck = (req, res) => {
  if (req.file.filename) {
    res.status(201).json({
      message: "Image uploaded successfully",
      url: req.file.filename,
    });
  } else {
    res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = {
  upload,
  uploadCheck,
};
