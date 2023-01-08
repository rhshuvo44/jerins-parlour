import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import servicesApi from "../../api/servicesApi";
import PrimaryButton from "../shared/PrimaryButton";
import ServiceCard from "./ServiceCard";

const Service = () => {
  const [services, setServices] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    // all service api
    servicesApi.get("service").then((res) => setServices(res.data));
  }, [services]);
  const newServices = [...services];
  const serviceSlice = newServices.reverse().slice(0, 3);
  // navigate all services page
  const allService = () => {
    navigate("/allServices");
  };
  return (
    <div className="service md:px-20 py-20">
      <h2>
        Our Awesome <span className="text-primary">Services</span>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 my-20">
          {serviceSlice.map((service) => (
            <ServiceCard key={service._id} service={service} />
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
