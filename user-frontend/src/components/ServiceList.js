import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    icon: "bi bi-google-play",
    color: "#122656",
    title: "Highly Available Apps",
    description:
      "We Create apps which are highly available i.e they can withstand a huge amount of traffic as well as concurrent users going in and out of the app without the app completely crashing or without affecting the SLA.",
    link: "/services",
  },
  {
    id: 2,
    icon: "bi bi-gear-wide-connected",
    color: "#122656",
    title: "Workflow automation",
    description:
      "We can simplify, streamline, and enhance your business operations by automating workflows using our innovative tool. This allows you to reduce manual efforts, increase efficiency, and focus on scaling your business effectively.",
    link: "/services",
  },
  {
    id: 3,
    icon: "bi bi-braces-asterisk",
    color: "#122656",
    title: "Web Development",
    description:
      "Our skilled team of developers specializes in designing and developing tailored websites that align perfectly with your business needs. From concept to creation, we deliver high-quality websites efficiently, ensuring a seamless online presence.",
    link: "/services",
  },
  {
    id: 4,
    icon: "bi bi-badge-3d",
    color: "#122656",
    title: "Real time 3D customisation",
    description:
      "Using our state of the art tool we can make your product 3D and give the end user real time customisation which is a one of a kind experience",
    link: "/services",
  },
  {
    id: 5,
    icon: "bi bi-stars",
    color: "#122656",
    title: "Technical consulting",
    description:
      "We provide innovative and reliable solutions to tackle your technical challenges. Our top-notch consultancy services ensure your business achieves efficiency and excellence.",
    link: "/services",
  },
  {
    id: 6,
    icon: "bi bi-cloud-upload",
    color: "#122656",
    title: "Technical incubation",
    description:
      "We support startups in growing and thriving by providing them with the necessary resources, mentorship, and collaborative space to transform their ideas into successful ventures.",
    link: "/services",
  },
];

const ServiceList = () => {
  return (
    <section id="services-list" className="services-list">
      <div className="container">
        <div className="section-header text-center mb-5">
          <h2>What We Do?</h2>
          <p className="text-muted">
            We offer a complete range of services. We understand the market like none other which helps us provide solutions for all your needs.
          </p>
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
          {services.map((service) => (
            <div className="col" key={service.id}>
              <div className="service-box text-center p-5 border rounded h-100 d-flex flex-column">
                <div className="icon mb-3" style={{ color: service.color, fontSize: "2.5rem" }}>
                  <i className={service.icon}></i>
                </div>
                <h4 className="title mb-3">
                  <Link to={service.link} className="stretched-link text-decoration-none text-dark">
                    {service.title}
                  </Link>
                </h4>
                <p className="description text-muted flex-grow-1">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceList;