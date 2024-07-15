import React, { useContext, useEffect, useState } from "react";
import "./blog.css";
import Swal from "sweetalert2";
import axios from "axios";
import Cookies from "js-cookie";

const Blog = () => {
  const [images, setImages] = useState([]);



  const handleDeleteImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Blog submitted:", { images });
  };




  const [blogImages, setBlogImages] = useState([]);
  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files).slice(0, 4 - blogImages.length);
    const newImages = files.map((file) => URL.createObjectURL(file));
    setImages((prevImages) => [...prevImages, ...newImages]);
    setBlogImages((prevImages) => [...prevImages, ...newImages]);
  };
  



  const token = Cookies.get("token");
  const [Blog, setBlog] = useState();
  const [newBlog, setnewBlog] = useState();

  const addBlog = async () => {
    // console.log(id)
    
    try {
      // console.log(newBlog , Blog)
      const res = await axios.post(
        `http://localhost:5000/blog/create`,
        { title: newBlog, description: Blog , imgs:blogImages },
        
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log(res.data);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "User has been updated",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        window.location.reload();
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="blog-container">
      <header
        className="blog-header"
        style={{ backgroundImage: `url(./images/Backgroundblog.svg)` }}
      >
        <h5>Blog</h5>
      </header>

      <div className="blog-content">
        <form onSubmit={addBlog} role="form">
          <div className="blog-top-section">
            <div className="title-container">
              <label htmlFor="title" className="title-label">
                Title
              </label>
              <input
                type="text"
                id="title"
                placeholder="Enter title"
                onChange={(e) => setnewBlog(e.target.value)}
              />
            </div>

            <div className="category-container">
              <select
                name="category"
                className="category-select"
                defaultValue="categories"
              >
                <option value="categories" disabled>
                  Categories
                </option>
                <option value="marketing">Marketing</option>
                <option value="graphic-design">Graphic Design</option>
                <option value="web-development">Web Development</option>
              </select>
            </div>
          </div>
          <div className="blog-middle-section">
            <textarea 
                onChange={(e) => setBlog(e.target.value)} placeholder="Write your blog content here..."></textarea>
          </div>
        </form>
        <div className="blog-bottom-section">
          <label htmlFor="image-upload" className="add-image-label">
            <div className="circle-plus"></div>
            <span>Add Image</span>
          </label>
          <input
            type="file"
            id="image-upload"
            className="image-upload"
            accept=".png,.svg,.jpeg,.jpg"
            onChange={handleImageUpload}
            
            
          />

          <div className="image-preview-container">
            {images.map((image, index) => (
              <div key={index} className="image-preview-card">
                <img
                  src={image}
                  alt={`Preview ${index + 1}`}
                  className="image-preview"
                />
                <button
                  onClick={() => handleDeleteImage(index)}
                  className="delete-image-btn"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
          <div className="image-preview-container"></div>

          {/* Blog submission button */}
          <button onClick={addBlog} className="blog-submit-btn">
            Publish Blog
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
