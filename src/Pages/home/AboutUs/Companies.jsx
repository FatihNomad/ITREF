import React, { useEffect, useState } from 'react';
import style from './companies.module.css'
import { AnimationOnScroll } from 'react-animation-on-scroll'

import aboutUs from '../../../img/home/aboutUS.png'
const AboutUs = () => {



    return (
        <>
            <section className={style.companies} id='aboutCompany'>

                <div className={style.container}>
                    <h2>{`< о нас />`}</h2>
                    <div className={style.team_cp}>
                        <article className={style.about_co}>

                            <p>Команда IT-REF специализируется на создании и обслуживании сайтов, которые являются отражением ваших идей в Интернете. Мы разрабатываем программы и приложения, которые помогут вам эффективно управлять вашим бизнесом и облегчат вашу жизнь. Не забывая о важных элементах современной коммуникации, мы также создаем интеллектуальные боты, которые упростят ваше общение с клиентами и партнерами.</p>
                            <p>Мы уделяем внимание каждой детали, чтобы предложить вам лучшие решения, и вы можете быть уверены, что мы окажем вам полную поддержку во всем процессе реализации всех ваших идей. Мы считаем, что сложные проекты - это не препятствие, а вызов, и мы готовы встретить его вместе с вами.</p>
                        </article>

                        <div className={style.our_team}>
                            <AnimationOnScroll className={style.boxImg} animateOnce={true} animateIn=" animate__animated animate__backInRight">
                                <img className={style.persons} src={aboutUs} alt='aboutUs'></img>
                            </AnimationOnScroll>
                        </div>


                    </div>
                </div>

            </section>
        </>
    );
};

export default AboutUs;