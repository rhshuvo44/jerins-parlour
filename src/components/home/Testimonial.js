import React from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import team from "../../assets/images/Ellipse 90.png";
import { AiFillStar } from "react-icons/ai";
const Testimonial = () => {
  return (
    <div className="testimonial h-screen p-20">
      <h2>Testimonials</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="testimonial-card text-left">
            <div className="card-top flex">
              <div className="avatar">
                <div className="w-24 rounded-full">
                  <img src={team} alt="" />
                </div>
              </div>
              <div className="card-top-text mx-5 mt-5">
                <h3>ripon</h3>
                <h4>web developer</h4>
              </div>
            </div>
            <div className="card-text">
              <p className="text py-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                commodo ipsum duis laoreet maecenas. Feugiat
              </p>
              <div>
                <AiFillStar size={24} color="#FFAC0C" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial-card text-left">
            <div className="card-top flex">
              <div className="avatar">
                <div className="w-24 rounded-full">
                  <img src={team} alt="" />
                </div>
              </div>
              <div className="card-top-text mx-5 mt-5">
                <h3>ripon</h3>
                <h4>web developer</h4>
              </div>
            </div>
            <div className="card-text">
              <p className="text py-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                commodo ipsum duis laoreet maecenas. Feugiat
              </p>
              <div>
                <AiFillStar size={24} color="#FFAC0C" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial-card text-left">
            <div className="card-top flex">
              <div className="avatar">
                <div className="w-24 rounded-full">
                  <img src={team} alt="" />
                </div>
              </div>
              <div className="card-top-text mx-5 mt-5">
                <h3>ripon</h3>
                <h4>web developer</h4>
              </div>
            </div>
            <div className="card-text">
              <p className="text py-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                commodo ipsum duis laoreet maecenas. Feugiat
              </p>
              <div>
                <AiFillStar size={24} color="#FFAC0C" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial-card text-left">
            <div className="card-top flex">
              <div className="avatar">
                <div className="w-24 rounded-full">
                  <img src={team} alt="" />
                </div>
              </div>
              <div className="card-top-text mx-5 mt-5">
                <h3>Nash Patrik</h3>
                <h4>CEO, Manpol</h4>
              </div>
            </div>
            <div className="card-text">
              <p className="text py-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                commodo ipsum duis laoreet maecenas. Feugiat
              </p>
              <div>
                <AiFillStar size={24} color="#FFAC0C" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default Testimonial;
