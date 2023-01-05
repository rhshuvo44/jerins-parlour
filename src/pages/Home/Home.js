import React from "react";
import Banner from "../../components/home/Banner";
import Contact from "../../components/home/Contact";
import Screen from "../../components/home/Screen";
import Service from "../../components/home/Service";
import Testimonial from "../../components/home/Testimonial";
import Footer from "../../layout/Footer";
import "../../style/Home.css";

const Home = () => {
  return (
    <>
      <Banner />
      <Service />
      <Screen />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
