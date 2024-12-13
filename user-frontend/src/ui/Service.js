import React from "react";
import InnerHeaderBanner from "../components/InnerHeaderBanner";
import InnerHeader from "../components/InnerHeader";
import Footer from "../components/Footer";
import serviceHeader from '../img/services-header.jpg'
import ServiceList from '../components/ServiceList'

const Service = () => {
  return (
    <>
      <InnerHeader />
      <InnerHeaderBanner name={"Services"} img={serviceHeader} />
      <ServiceList />
      <Footer />
    </>
  );
};

export default Service;
