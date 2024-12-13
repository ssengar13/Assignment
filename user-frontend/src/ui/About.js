import React from 'react'
import AOS from "aos";
import '../../node_modules/aos/dist/aos.css'
import about_img from '../img/about-image.jpg'
import InnerHeaderBanner from '../components/InnerHeaderBanner';
import InnerHeader from '../components/InnerHeader';
import Footer from '../components/Footer';
import abtHeader from '../img/about-header.jpg'
import { useEffect } from 'react';
import Team from '../components/Team';
import ClientList from '../components/ClientList';

const About = () => {
   useEffect(() => {
      AOS.init();
      AOS.refresh();
   }, []);

   return (
      <>
         <InnerHeader />
         <InnerHeaderBanner name={"About Us"} img={abtHeader} />

         <main id="main">
            <section id="about" className="about">
               <div className="container" data-aos="fade-up">
                  <div className="section-header">
                     <h2>About Us</h2>
                     <i>Innovating Tomorrow, Today – BOP's Journey to Transform the Future of Technology</i>
                  </div>
                  <div className="row gy-4 align-items-center" data-aos="fade-up">
                     <div className="col-lg-6">
                        <img src={about_img} className="img-fluid" alt="Helping Clients achieve their Vision" title="Helping Clients achieve their Vision" />
                     </div>
                     <div className="col-lg-6">
                        <p> BOP, founded in 2014 in Pune by three visionary entrepreneurs, is a technical consultancy at the forefront of the rapidly evolving 3D technology space. We specialize in scalable, highly available applications and bespoke platforms, designed specifically for tech-driven startups.</p>
                        <p> We believe in the uniqueness of each client’s needs and understand that a deep market understanding sets us apart. Our team is committed to creating solutions that address current challenges while future-proofing businesses, driving sustainable growth through innovation and tailored approaches.</p>
                        <p> Staying ahead of technological trends, BOP delivers expert guidance and innovative services to enterprises looking to scale globally. Our commitment to excellence and customer success ensures that we consistently provide impactful, growth-oriented solutions for every client.</p>
                        <p> Let us help you elevate your business to new heights with tailored solutions that make an impact and foster growth.</p>
                     </div>
                  </div>
               </div>
            </section>

            <div id="vision" className="vision aos-init" data-aos="fade-up" data-aos-delay="300">
               <div className="container">
                  <div className="row gy-4">
                     <div className="col-lg-4 aos-init">
                        <div className="card-item">
                           <div className="row">
                              <div className="col-xl-12">
                                 <div className="card-body">
                                    <h4 className="card-title">Our Vision</h4>
                                    <p>To be the leading provider of innovative, scalable, and reliable technology solutions that empower businesses to thrive in a digital-first world. We envision a future where businesses leverage cutting-edge technology to drive sustainable growth, enhance performance, and shape industries globally.</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className="col-lg-4 aos-init">
                        <div className="card-item">
                           <div className="row">
                              <div className="col-xl-12">
                                 <div className="card-body">
                                    <h4 className="card-title">Our Mission</h4>
                                    <p>At BOP, our mission is to deliver tailored technology solutions that help businesses solve complex challenges and unlock new opportunities. By focusing on scalable applications and bespoke platforms, we aim to empower startups and enterprises to reach their full potential and excel in an ever-evolving technological landscape.</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className="col-lg-4 aos-init" data-aos="fade-up" data-aos-delay="300">
                        <div className="card-item">
                           <div className="row">
                              <div className="col-xl-12">
                                 <div className="card-body">
                                    <h4 className="card-title">Our Values</h4>
                                    <p>At BOP, we uphold the values of innovation, integrity, and excellence. We are committed to delivering solutions that are not only technically advanced but also aligned with the unique needs of each client. By fostering a culture of trust, collaboration, and continuous improvement, we ensure the success and satisfaction of our clients.</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>

                  </div>
               </div>
            </div>
            <Team />
            <div className='py-5'>
               <ClientList />
            </div>
         </main>
         <Footer />

      </>
   )
}

export default About