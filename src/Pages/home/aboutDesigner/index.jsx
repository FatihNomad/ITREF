import React from 'react';
import { Link } from 'react-scroll';
import style from './aboutDesigner.module.css'
import SwiperAboutDesigner from './SwiperAboutDesigner/index';
import { NavLink } from 'react-router-dom';

const AboutDesigner = () => {


    return (
        <section className={style.box}>

            <div className={style.container}>
                <div className={style.boxWrapper}>
                    <div className={style.boxText} >
                        <h2>{'<  Наши работы />'}</h2>
                        <p>Хотим показать нашу скромную, но уникальную коллекцию работ.
                            Каждый сайт, над которым мы работаем, становится для нас особенным,
                            ведь мы вкладываем в него все наше мастерство и творческий потенциал.
                            Нам действительно важно создать не просто сайт, а настоящее произведение
                            искусства, которое будет радовать и приносить пользу на долгие годы.
                            Мы надеемся, что Вы оцените нашу работу так же высоко, как и мы ценим каждый из наших проектов.
                        </p>
                        <button className={style.btn}><Link smooth={false} to='header' ><NavLink to={'/catalog/design'}>Услуги дизайнера</NavLink> </Link></button>
                    </div>
                    <div className={style.boxSwiper}>
                        <SwiperAboutDesigner />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutDesigner;