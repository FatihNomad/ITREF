import React from 'react';
import style from './typeSlide.module.css'
import 'swiper/css/bundle';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import cardVisitka from '../../../../img/webSite/cardVisitka.png'
import internetShop from '../../../../img/webSite/internetShop.svg'
import corporativ from '../../../../img/webSite/corporativ.svg'
import cotalog from '../../../../img/webSite/cotalog.svg'
import landing from '../../../../img/webSite/landing.svg'

const TypeSlide = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                loop
                pagination={{
                    clickable: true,
                }}
                grabCursor={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Autoplay]}
                className={style.typeSlide}
            >
                <SwiperSlide className={style.Slide}>
                    <div className={style.wrapper}>
                        <div className={style.boxName}>
                            <h3>Сайт визитка</h3>
                            <img id={style.imgIcon} src={cardVisitka} alt="img" />
                        </div>
                        <p className={style.text}>Сайт-визитка - это небольшой веб-сайт, который содержит основную  информацию о компании, продуктах или услугах, контактную информацию и другие важные детали. Обычно сайт-визитка состоит из одной или нескольких страниц, и может использоваться для привлечения новых клиентов или представления компании в Интернете.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={style.Slide}>
                    <div className={style.wrapper}>
                        <div className={style.boxName}>
                            <h3>Сайт Landing</h3>
                            <img id={style.imgIcon} src={landing} alt="img" />
                        </div>
                        <p className={style.text}>Лендинг используют в маркетинге для рекламы и продажи товара или услуги, сбора контактных данных потенциальных покупателей (лидов), проверки вероятного спроса. Лендинг пейдж (англ. landing page — посадочная страница) презентует продукт, снимает возражения и подводит пользователя к целевому действию</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={style.Slide}>
                    <div className={style.wrapper}>
                        <div className={style.boxName}>
                            <h3>Сайт Каталог</h3>
                            <img id={style.imgIcon} src={cotalog} alt="img" />
                        </div>
                        <p className={style.text}>Каталог — это вид коммерческого сайта, на котором представлен весь ассортимент компании с подробным описанием. Это прекрасный способ проинформировать покупателей о том, какие товары и услуги предоставляет предприятие. Такой ресурс ещё называют витриной.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={style.Slide}>
                    <div className={style.wrapper}>
                        <div className={style.boxName}>
                            <h3>Корпоративный сайт</h3>
                            <img id={style.imgIcon} src={corporativ} alt="img" />
                        </div>
                        <p className={style.text}>Корпоративный сайт —  инструмент для развития бизнеса через сеть Интернет.  Его задача повышать имидж, расширять географию привлекать клиентов и партнеров. При этом ждать такого результата стоит лишь от профессионально разработанного ресурса. </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={style.Slide}>
                    <div className={style.wrapper}>
                        <div className={style.boxName}>
                            <h3>Интернет магазин</h3>

                            <img id={style.imgIcon} src={internetShop} alt="img" />
                        </div>
                        <p className={style.text}>Интернет-магазин - это электронная коммерция, которая позволяет пользователям покупать и продавать товары и услуги через Интернет. Он представляет собой веб-сайт, где пользователи могут просмотреть каталог товаров и услуг, выбрать нужный товар или услугу, оплатить их и оформить доставку.

                        </p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default TypeSlide;