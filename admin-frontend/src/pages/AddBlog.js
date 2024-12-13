import React, { useState } from "react";
import CustomInput from "../components/CustomInput";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { InboxOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";

const { Dragger } = Upload;

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescChange = (value) => {
    setDesc(value);
  };

  const handleUpload = async (fileList) => {
    const formData = new FormData();

    fileList.forEach((file) => {
      formData.append("images", file.originFileObj);
    });

    try {
      const response = await fetch("http://localhost:3000/api/image/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        setUploadedImageUrl(result); // Save uploaded image URLs
        message.success("Images uploaded successfully!");
      } else {
        message.error("Failed to upload images.");
      }
    } catch (error) {
      console.error("Upload Error:", error);
      message.error("An error occurred during image upload.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const blogData = {
      title,
      description: desc,
      image: uploadedImageUrl,
    };

    try {
      const response = await fetch("http://localhost:3000/api/blog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blogData),
      });

      if (response.ok) {
        const data = await response.json();
        message.success("Blog added successfully!");
        setTitle("");
        setDesc("");
        setUploadedImageUrl("");
        console.log("Blog Response:", data);
      } else {
        message.error("Failed to add the blog.");
      }
    } catch (error) {
      console.error("Error:", error);
      message.error("An error occurred while adding the blog.");
    }
  };

  const props = {
    name: "file",
    multiple: true,
    beforeUpload: () => false, // Prevent Ant Design's default upload behavior
    onChange(info) {
      if (info.fileList.length > 0) {
        handleUpload(info.fileList);
      }
    },
  };

  return (
    <div>
      <h3 className="mb-4 title">Add Blog</h3>
      <div>
        <form onSubmit={handleSubmit}>
          <Dragger {...props}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
            <p className="ant-upload-hint">
              Support for a single or bulk upload.
            </p>
          </Dragger>
          <div className="mt-4 mb-4">
            <CustomInput
              type="text"
              label="Enter Blog Title"
              value={title}
              onChange={handleTitleChange}
            />
          </div>
          <ReactQuill theme="snow" value={desc} onChange={handleDescChange} />
          <button
            type="submit"
            className="btn btn-success border-0 rounded-3 mt-4"
          >
            Add Blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBlog;
