import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Blog1 from "../img/blog1.jpg";
import Blog2 from "../img/blog-2.jpg";
import Blog3 from "../img/blog3.jpg";

const RecentPost = () => {
    const posts = [
        {
            id: 1,
            title: 'How to Build a Scalable Web App',
            date: 'Dec 10, 2024',
            author: 'John Doe',
            image: Blog1,
            excerpt: 'This is an overview of how to build a scalable web application...',
        },
        {
            id: 2,
            title: 'Understanding React Lifecycle Methods',
            date: 'Dec 5, 2024',
            author: 'Jane Smith',
            image: Blog2,
            excerpt: 'Learn about React lifecycle methods and their usage in modern React apps...',
        },
        {
            id: 3,
            title: 'CSS Grid Layout: A Complete Guide',
            date: 'Nov 30, 2024',
            author: 'Michael Lee',
            image: Blog3,
            excerpt: 'An in-depth guide to mastering CSS Grid Layout, a powerful tool for responsive designs...',
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <section className="recent-posts">
            <h2 className="post-heading mb-5">Recent Blogs</h2>
            <Slider {...settings}>
                {posts.map(post => (
                    <div key={post.id} className="post-box">
                        <div className="post-img">
                            <img src={post.image} alt={post.title} />
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
                ))}
            </Slider>
        </section>
    );
};

export default RecentPost;
