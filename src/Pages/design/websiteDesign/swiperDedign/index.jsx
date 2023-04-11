import React from 'react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/bundle'
import './slide.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import swiper1 from '../../../../img/designer/swiper.png'
import swiper2 from '../../../../img/designer/swiper2.jpg'
import swiper3 from '../../../../img/designer/swiper3.webp'
import swiper4 from '../../../../img/designer/swiper4.webp'
const SwiperDesigner = () => {
    return (
        <>
            <Swiper
                modules={[Navigation]}
                slidesPerView={1}
                navigation
                loop
                spaceBetween={30}
                className='SwiperDesigner'

            >
                <SwiperSlide className='swiperCard'><img src={swiper1} alt="" /></SwiperSlide>
                <SwiperSlide className='swiperCard'><img src={swiper2} alt="" /></SwiperSlide>
                <SwiperSlide className='swiperCard'><img src={swiper3} alt="" /></SwiperSlide>
                <SwiperSlide className='swiperCard'><img src={swiper4} alt="" /></SwiperSlide>
            </Swiper>
        </>
    );
};

export default SwiperDesigner;