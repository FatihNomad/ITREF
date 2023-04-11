import React, { useState, useEffect } from 'react';
import style from './benefits.module.css'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import { MdOutlineDone } from 'react-icons/md';
import imgBenefist from '../../../img/home/benefest.png'
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';



const Benefits = () => {

    return (
        <>
            <div id='Benefits'>
            </div>
            <div className={style.effectScroll}>

                <AnimationOnScroll animateOnce={true} animateIn=" animate__animated animate__fadeInUp">
                    <section className={style.benefits}>

                        <div className={style.container}>
                            <h2 className={`notranslate ${style.header}`}>{`< преимущества />`}</h2>
                            <div className={style.text_benefits}>
                                <div className={style.box_img}>
                                    <AnimationOnScroll className={style.boxImg} animateOnce={true} animateIn=" animate__animated animate__backInLeft">
                                        <img src={imgBenefist} alt="benefits_img" draggable={true} />
                                    </AnimationOnScroll>
                                </div>
                                <div className={style.benefits_box}>
                                    <AnimationOnScroll animateOnce={true} animateIn=" animate__animated animate__fadeInRight">
                                        <p ><MdOutlineDone className={style.iconsDone} color='#d071ec' />Техническая поддержка 24 / 7. Мы не оставляем наших клиентов наедине с проблемой.</p>
                                    </AnimationOnScroll>
                                    <AnimationOnScroll animateOnce={true} animateIn=" animate__animated animate__fadeInRight">
                                        <p><MdOutlineDone className={style.iconsDone} color='#d071ec' />Удобная и понятная для управления сайтом административная панель. А также с детальной инструкцией и видео объяснением.</p>
                                    </AnimationOnScroll>
                                    <AnimationOnScroll animateOnce={true} animateIn=" animate__animated animate__fadeInRight">
                                        <p><MdOutlineDone className={style.iconsDone} color='#d071ec' />Вносите коррективы в план работ без лишней бюрократии и долгих согласований.</p>
                                    </AnimationOnScroll>
                                    <AnimationOnScroll animateOnce={true} animateIn=" animate__animated animate__fadeInRight">
                                        <p><MdOutlineDone className={style.iconsDone} color='#d071ec' />Смотрите на первые результаты через 5 дней после начала проекта. </p>
                                    </AnimationOnScroll>
                                    <AnimationOnScroll animateOnce={true} animateIn=" animate__animated animate__fadeInRight">
                                        <p><MdOutlineDone className={style.iconsDone} color='#d071ec' />Дальнейшее курирование сайта (модернизация , дополнение). </p>
                                    </AnimationOnScroll>
                                    <AnimationOnScroll animateOnce={true} animateIn=" animate__animated animate__fadeInRight">
                                        <p><MdOutlineDone className={style.iconsDone} color='#d071ec' />Креативный подход к работе . Смелые дизайнерские решения .</p>
                                    </AnimationOnScroll>
                                    <AnimationOnScroll animateOnce={true} animateIn=" animate__animated animate__fadeInRight">
                                        <p><MdOutlineDone className={style.iconsDone} color='#d071ec' />Поэтапная оплата</p>
                                    </AnimationOnScroll>
                                    <button className={style.boxBtn}>
                                        <Link
                                            duration={800}
                                            smooth={false}

                                            to='header' >
                                            <NavLink className={style.menu_item}
                                                to={'/catalog'}>Наши Услуги </NavLink>
                                        </Link></button>
                                </div>
                            </div>
                        </div>
                    </section>
                </AnimationOnScroll>
            </div>
        </>

    );
};

export default Benefits;