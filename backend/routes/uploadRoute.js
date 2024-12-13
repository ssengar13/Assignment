const express = require("express");
const router = express.Router();
const { uploadImages, deleteImages } = require("../controller/uploadController");
const { uploadPhoto, blogImgResize } = require("../middlewares/uploadImages");

router.post("/upload", uploadPhoto.array('images', 10), blogImgResize, uploadImages);
router.delete("/delete-image/:id", deleteImages);

module.exports = router;