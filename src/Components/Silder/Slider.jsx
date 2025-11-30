import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import img1 from '../../assets/image/G1.jpg';
import img2 from '../../assets/image/G2.jpg';
import img3 from '../../assets/image/G3.jpg';

const Slider = () => {
  return (
    <div className="mt-4">
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <img
            className="w-full h-[250px] sm:h-[400px] md:h-[500px] object-cover"
            src={img1}
            alt="Game Image 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[250px] sm:h-[400px] md:h-[500px] object-cover"
            src={img2}
            alt="Game Image 2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[250px] sm:h-[400px] md:h-[500px] object-cover"
            src={img3}
            alt="Game Image 3"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
