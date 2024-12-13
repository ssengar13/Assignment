import React from "react";
import career from "../img/careers-img.jpg";
import careerHeader from "../img/blog-header.jpg";
import InnerHeaderBanner from "../components/InnerHeaderBanner";
import InnerHeader from "../components/InnerHeader";
import Footer from "../components/Footer";

const Career = () => {
    return (
        <>
            <InnerHeader />
            <InnerHeaderBanner name={"Apply Now"} img={careerHeader} />

            <main id="main">
                <section id="blog" className="blog">
                    <div className="container" data-aos="fade-up">
                        <div className="section-header">
                            <h2>
                                Do what you LOVE, Inviting you to build a great future with us
                            </h2>
                        </div>

                        <div className="row gy-4 blog-details">
                            <div className="col-lg-6">
                                <img
                                    src={career}
                                    className="img-fluid"
                                    alt="Do what you LOVE, Inviting you to build a great future with us"
                                    title="Do what you LOVE, Inviting you to build a great future with us"
                                />
                            </div>
                            <div className="col-lg-6">
                                <p>
                                    At the heart of every successful business lies its people. They are the driving force steering the organization toward growth and innovation. As our business continues to expand, we are constantly seeking passionate and talented individuals to join our team and grow alongside us.
                                </p>
                                <p>
                                    We believe in nurturing talent with a long-term vision, providing opportunities for personal and professional growth across diverse roles. If you have the right attitude and big aspirations, you’ll thrive in our dynamic and inspiring work environment, where exceptional growth opportunities await.
                                </p>
                                <div className="content">
                                    <blockquote>
                                        <p>
                                            Please send your resumes to<br />
                                            <a href="work@consultbop.com">
                                                work@consultbop.com
                                            </a>
                                        </p>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default Career;