import React from "react";
import InnerHeaderBanner from "../components/InnerHeaderBanner";
import InnerHeader from "../components/InnerHeader";
import Footer from "../components/Footer";
import blogHeader from '../img/blog-header.jpg'
import Blogs from '../components/Blogs'

const Blog = () => {
    return (
        <>
            <InnerHeader />
            <InnerHeaderBanner name={"Blogs"} img={blogHeader} />
            <Blogs />
            <Footer />
        </>
    );
};

export default Blog;
