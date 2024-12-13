import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { posts } from '../Data';

const Blogs = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 6;

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const totalPages = Math.ceil(posts.length / postsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <section className="recent-posts">
            <h2 className="post-heading mb-5">Recent Blogs</h2>
            <div className="container">
                <div className="row">
                    {currentPosts.map(post => (
                        <div key={post.id} className="col-md-4 mb-5">
                            <div className="post-box">
                                <div className="post-img">
                                    <img src={post.image} alt={post.title} className="img-fluid" />
                                </div>
                                <div className="post-content">
                                    <div className="meta">
                                        <span className="post-date">{post.date}</span>
                                        <span className="post-author">{post.author}</span>
                                    </div>
                                    <h4 className="post-title">{post.title}</h4>
                                    <p className="excerpt">{post.excerpt}</p>
                                    <Link to={`/blog/${post.id}`} className="readmore">
                                        Read More <i className="bi bi-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="pagination mt-4 align-item-center d-flex justify-content-center">
                    {[...Array(totalPages)].map((_, index) => (
                        <button
                            key={index}
                            className={`page-btn ${currentPage === index + 1 ? 'active' : ''}`}
                            onClick={() => handlePageChange(index + 1)}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blogs;
