import React, { useEffect, useState } from "react";
import servicesApi from "../../api/servicesApi";
import ServiceCard from "../../components/home/ServiceCard";

const AllServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    // all service api
    servicesApi.get("service").then((res) => setServices(res.data));
  }, [services]);
  return (
    <div className="service md:px-20 py-28">
      <h2>
        Our Awesome <span className="text-primary">Services</span>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 my-20">
          {services.map((service) => (
            <ServiceCard key={service._id} service={service} />
          ))}
        </div>
      </h2>
    </div>
  );
};

export default AllServices;
