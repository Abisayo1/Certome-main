import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";

import { RxArrowTopRight } from "react-icons/rx";
import { BiRightArrowAlt } from "react-icons/bi";

import { ServiceData } from "../constants";

const FeaturesSession3 = () => {
  const handlePrev = () => {
    const swiper = document.querySelector(".swiper").swiper;
    swiper.slidePrev();
  };

  const handleNext = () => {
    const swiper = document.querySelector(".swiper").swiper;
    swiper.slideNext();
  };

  return (
    <div className="flex items-center justify-center flex-col h-auto bg-white py-10 relative">
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 300,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
          
        }}
        modules={[FreeMode, Pagination]}
        className="w-full max-w-[90%] lg:max-w-[80%]"
      >
        {ServiceData.map((item) => (
          <SwiperSlide key={item.title}>
            <div className="flex flex-col gap-6 mb-14 group relative shadow-lg text-black rounded-xl px-6 py-8 h-[250px] w-full sm:w-[215px] md:w-[250px] lg:w-[350px] xl:w-[400px] overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.backgroundImage})` }}
              />
              <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
              <div className="relative flex flex-col gap-3">
                <item.icon className="text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px]" />
                <h1 className="text-xl lg:text-2xl">{item.title}</h1>
                <p className="lg:text-[18px]">{item.content}</p>
              </div>
              <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-black group-hover:text-blue-500 group-hover:rotate-45 duration-100" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Arrows */}
      <div
        onClick={handlePrev}
        className="absolute bottom-5 left-5 sm:left-[100px] z-10 cursor-pointer"
      >
        <BiRightArrowAlt
          style={{
            fontSize: "30px",
            transform: "rotate(180deg)", // Rotate for left arrow
            color: "blue",
            transition: "color 0.2s",
          }}
          className="hover:text-blue-600"
        />
      </div>
      <div
        onClick={handleNext}
        className="absolute bottom-5 left-[60px] sm:left-[140px] z-10 cursor-pointer"
      >
        <BiRightArrowAlt
          style={{
            fontSize: "30px",
            color: "blue",
            transition: "color 0.2s",
          }}
          className="hover:text-blue-600"
        />
      </div>
    </div>
  );
};

export default FeaturesSession3;
