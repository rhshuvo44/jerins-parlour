import React from "react";
import { Link, useNavigate } from "react-router-dom";
import icon1 from "../../assets/icons/Group 1372.png";
import icon2 from "../../assets/icons/Group 1373.png";
import icon3 from "../../assets/icons/Group 1374.png";
import PrimaryButton from "../shared/PrimaryButton";
import ServiceCard from "./ServiceCard";
const ser = [
  {
    title: "Anti Age Face Treatment",
    icon: icon1,
    price: 119,
    info: "We craft stunning and amazing web UI, using a well drrafted UX to fit your product.",
  },
  {
    title: "Hair Color & Styleing",
    icon: icon2,
    price: 99,
    info: "Amazing flyers, social media posts and brand representations that would make your brand stand out.",
  },
  {
    title: "Skin Care Treatment",
    icon: icon3,
    price: 299,
    info: "With well written codes, we build amazing apps for all platforms, mobile and web apps in general.",
  },
];
const Service = () => {
  const navigate = useNavigate();

  const allService = () => {
    navigate("/allServices");
  };
  return (
    <div className="service md:px-20 py-20">
      <h2>
        Our Awesome <span className="text-primary">Services</span>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 my-20">
          {ser.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
        <PrimaryButton onClick={allService}>
          <Link to="/allService">Explore more</Link>
        </PrimaryButton>
      </h2>
    </div>
  );
};

export default Service;
