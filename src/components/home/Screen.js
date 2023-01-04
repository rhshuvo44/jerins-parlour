import React from "react";
import screen from "../../assets/images/engin-akyurt-g-m8EDc4X6Q-unsplash 1.png";

const Screen = () => {
  return (
    <div className=" screen hero min-h-screen bg-[#E5E5E5]">
      <div className="hero-content flex-col lg:flex-row md:px-20">
        <img src={screen} className="md:w-1/2 " alt="" />
        <div className="px-16">
          <h2 className="text-5xl font-bold">
            Let us handle your screen{" "}
            <span className="text-primary">Professionally</span>.
          </h2>
          <p className="py-6 text">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <div className="grid grid-cols-2">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title text-primary">500+</h2>
                <p>Happy Customer</p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h2 className="card-title text-primary">16+</h2>
                <p>Total Service</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Screen;
