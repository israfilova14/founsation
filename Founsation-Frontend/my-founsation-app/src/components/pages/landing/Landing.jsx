import React from 'react'
import "../landing/Landing.scss"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import image1 from "../../../assets/images/hero_1.jpg"
import image2 from "../../../assets/images/hero_2.jpg"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Landing = () => {
  return (
    <div className="landing-page">
       <div className="landing-page-top">
       <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
    >
        <SwiperSlide>
            <img src={image1} alt="" className='swiper-image'/>
            
        </SwiperSlide>
        <SwiperSlide>
            <img src={image2} alt="" className='swiper-image'/>
        </SwiperSlide>
      </Swiper>
       </div>
    <div className="activity-goals">
        <div className="goal-1 goal">
          <h2>RESCUE AN ORPHAN</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
            nihil. Odio blanditiis amet at
          </p>
        </div>
        <div className="goal-2 goal">
          <h2>FEED THE HUNGRY</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
            nihil. Odio blanditiis amet at
          </p>
        </div>
        <div className="goal-3 goal">
          <h2>FREE EDUCATION</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
            nihil. Odio blanditiis amet at
          </p>
        </div>
      </div>
    </div>

  )
}

export default Landing