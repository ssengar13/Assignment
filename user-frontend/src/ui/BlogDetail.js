import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { posts } from '../Data';
import InnerHeaderBanner from "../components/InnerHeaderBanner";
import InnerHeader from "../components/InnerHeader";
import Footer from "../components/Footer";
import blogHeader from '../img/blog-header.jpg'


const BlogDetail = () => {
    const { id } = useParams();
    const post = posts.find(post => post.id === parseInt(id));

    if (!post) {
        return <div>Post not found</div>;
    }

    return (
        <>
            <InnerHeader />
            <InnerHeaderBanner name={"Blogs"} img={blogHeader} />
            <section className="blog-detail">
                <div className="container">
                    <div className="blog-details">
                        <div className="post-img">
                            <img src={post.image} alt={post.title} />
                        </div>

                        <h1 className="title">{post.title}</h1>

                        <div className="meta-top">
                            <ul>
                                <li><i className="bi bi-calendar"></i>{post.date}</li>
                                <li><i className="bi bi-person"></i>{post.author}</li>
                            </ul>
                        </div>

                        <div className="content">
                            <p>{post.excerpt}</p>
                        </div>

                        <div className="content">
                            <h3>Details:</h3>
                            <p>{post.fullContent}</p>
                        </div>

                        <Link to="/blogs" className="back-btn py-5">
                            <i className="bi bi-arrow-left"></i> Back to Blog List
                        </Link>
                    </div>
                </div>
            </section>
            <Footer />
        </>

    );
};

export default BlogDetail;
