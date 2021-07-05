// IMPORTS

const util = require("util");
const crypto = require("crypto");
const multer = require("multer");

const constant = require("../config/constants/constants");

// File Uploader class from multer

module.exports = class Uploader {
  constructor() {
    const storageOptions = multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, constant.image_path());
      },
      filename: function (req, res, cb) {
        crypto.pseudoRandomBytes(16, function (err, raw) {
          cb(null, raw.toString("hex") + Date.now() + "." + file.originalname);
        });
      },
    });

    this.upload = multer({ storage: storageOptions });
  }

  async startUpload(req, res) {
    let filename;

    try {
      const upload = util.promisify(this.upload.any());

      await upload(req, res);

      filename = req.files[0].filename;
    } catch (err) {
      res.status(500).json({
        message: "Error uploading, please try again later.",
      });
    }

    return res.status(200).json({
      fileUploaded: filename,
    });
  }
};
