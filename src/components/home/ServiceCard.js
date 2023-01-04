import React from "react";

const ServiceCard = ({ service }) => {
  const { title, icon, price, info } = service;
  return (
    <div className="card hover:shadow-xl">
      <figure className="px-10 pt-10">
        <img src={icon} alt={title} title={title} className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h3 className="card-title">{title}</h3>
        <h3 className="card-title text-primary">${price}</h3>
        <p className="text">{info}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
