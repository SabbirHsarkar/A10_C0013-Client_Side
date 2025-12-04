import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import img1 from "../../assets/image/G1.jpg";
import img2 from "../../assets/image/G2.jpg";
import img3 from "../../assets/image/G3.jpg";

const Slider = () => {
  return (
    <div className="mt-6 px-3">
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass:
            "swiper-pagination-bullet-active bg-gradient-to-r from-indigo-500 to-pink-500",
        }}
        autoplay={{ delay: 3000 }}
        effect="fade"
        speed={500}
        loop={true}
        className="rounded-2xl overflow-hidden shadow-2xl"
      >
        {[img1, img2, img3].map((img, index) => (
          <SwiperSlide key={index}>
            {/* IMAGE */}
            <div className="relative">
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-full h-[260px] sm:h-[420px] md:h-[520px] object-cover"
              />

              {/* DARK */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

              {/* TEXT*/}
              <div className="absolute bottom-10 left-8 text-white space-y-2">
                <h2 className="text-2xl sm:text-4xl font-extrabold drop-shadow-lg">
                  Explore Your Dream Home
                </h2>
                <p className="text-sm sm:text-lg text-white/80 drop-shadow">
                  Premium Real Estate Deals & Listings
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
