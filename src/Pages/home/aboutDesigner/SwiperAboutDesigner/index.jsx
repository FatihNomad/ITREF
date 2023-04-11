import React from 'react';
import style from './swiper.module.css'
import 'swiper/css/bundle';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay } from "swiper";


import slide1 from '../../../../img/home/slide1.webp'
import slide3 from '../../../../img/home/slide3.webp'

const SwiperAboutDesigner = () => {
    return (
        <>
            <Swiper
                effect={"cards"}
                grabCursor={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                modules={[EffectCards, Autoplay]}

                className={style.swiperDesigner}
            >

                <SwiperSlide className={style.swiperSlide}><a href="https://www.itv.kg/"><img src={slide1} alt="slide" /></a></SwiperSlide>
                <SwiperSlide className={style.swiperSlide}><a href="https://moiki.kg/"><img src={slide3} alt="slide" /></a></SwiperSlide>
            </Swiper>
        </>
    );
};

export default SwiperAboutDesigner;