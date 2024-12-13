const express = require("express");
const { createBlog, updateBlog, getBlog, getAllBlog, deleteBlog, likeBlog, dislikeBlog, uploadImages } = require("../controller/blogController");
const { uploadPhoto, blogImgResize } = require("../middlewares/uploadImages");
const router = express.Router();

router.post("/", createBlog);
router.put("/upload/:id", uploadPhoto.array('images', 2), blogImgResize, uploadImages);
router.put("/likes", likeBlog);
router.put("/dislikes", dislikeBlog);
router.put("/:id", updateBlog);
router.get("/:id", getBlog);
router.get("/", getAllBlog);
router.delete("/:id", deleteBlog);

module.exports = router;