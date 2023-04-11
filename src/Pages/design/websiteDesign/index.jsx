import React, { useState } from 'react';
import style from './design.module.css'
import Brifcard from '../../../Components/brifcard';
import SwiperDesigner from './swiperDedign/index';
import OrderCard from '../../../Components/orderCard';
import Forms from './../../../Components/Forms/index';
const WebsiteDesign = () => {
    const [isVisible, setIsVisible] = useState(false)

    return (
        <section className={style.design_section}>
            <div className={style.container}>
                <div className={style.website_design}>
                    <div className={style.design_text}>
                        <h1>{`< Дизайн для сайта />`}</h1>
                        <article>
                            <p className={style.design_text_p}>
                                Наша услуга дизайн для сайта - это комплексный подход к созданию визуальной концепции вашего онлайн-присутствия. Мы учитываем особенности вашего бренда, целевую аудиторию и цели сайта, чтобы создать уникальный дизайн, который будет отображать вашу уникальность и эффективно работать для достижения ваших целей. Мы уделяем внимание каждой детали, от макета до цветовой схемы и типографии, чтобы создать современный и функциональный дизайн, который привлечет ваших пользователей и улучшит их взаимодействие с вашим сайтом.
                            </p>
                        </article>
                        <div className={style.order}>
                            <Brifcard link={'https://forms.gle/JqJTVnM9LPi5CD2d8'} text={'Бриф на разработку дизайна'} />
                            <p>
                                от 4 000 сом
                            </p>
                        </div>
                        <div className={style.order_btn}>
                            <OrderCard visible={setIsVisible} />
                        </div>
                    </div>

                    <SwiperDesigner />

                </div>

            </div>
            {isVisible ? <Forms name={'Дизайн для сайта'} visible={setIsVisible} /> : null}

        </section>

    );
};

export default WebsiteDesign;