import React from "react";
import Banner from "../../components/home/Banner";
import Contact from "../../components/home/Contact";
import Screen from "../../components/home/Screen";
import Service from "../../components/home/Service";
import Testimonial from "../../components/home/Testimonial";
import "../../style/Home.css";

const Home = () => {
  return (
    <div>
      <Banner />
      <Service />
      <Screen />
      <Testimonial />
      <Contact />
    </div>
  );
};

export default Home;
