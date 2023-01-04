import React from "react";
import { Link, useNavigate } from "react-router-dom";
import bannerImg from "../../assets/images/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beauty-cosmetics-facial-treatment-concept 1.png";
import PrimaryButton from "../shared/PrimaryButton";
const Banner = () => {
  const navigate = useNavigate();
  const appon = () => {
    navigate("/modal");
  };
  return (
    <div className="banner bg-[#E5E5E5]">
      <div className="card lg:card-side md:p-20">
        <div className="card-body mt-28 md:w-1/2">
          <h2 className="card-title">BEAUTY SALON FOR EVERY WOMEN</h2>
          <p className="mt-10 text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
            commodo ipsum duis laoreet maecenas. Feugiat{" "}
          </p>
          <div className="card-actions">
            <PrimaryButton onClick={appon}>
              <Link to="/modal">Get an Appointment</Link>
            </PrimaryButton>
          </div>
        </div>
        <figure className="md:w-1/2 h-1/2">
          <img src={bannerImg} alt="Album" className="w-[484px] h-[478px]" />
        </figure>
      </div>
    </div>
  );
};

export default Banner;
