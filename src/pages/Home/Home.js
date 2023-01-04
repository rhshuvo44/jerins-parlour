import React from "react";
import Banner from "../../components/home/Banner";
import Screen from "../../components/home/Screen";
import Service from "../../components/home/Service";
import "../../style/Home.css";

const Home = () => {
  return (
    <div>
      <Banner />
      <Service />
      <Screen />
    </div>
  );
};

export default Home;
