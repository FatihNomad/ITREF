import React, { useState } from 'react';
import s from './context.module.css'
import context from '../../../img/seo/ImgReklama.png'
import Brifcard from '../../../Components/brifcard';
import asisstant from '../../../img/seo/snejana.png'
import OrderCard from '../../../Components/orderCard';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Forms from './../../../Components/Forms/index';
const ContextAd = () => {
    const [isVisible, setIsVisible] = useState(false)

    return (
        <section className={s.context_section}>
            <div className={s.container}>
                <div className={s.context_ad}>
                    <div className={s.context_ad_text}>
                        <article>
                            <h2>{`< Контекстная реклама />`}</h2>
                            <p>
                                Контекстная реклама в Бишкеке,что дает мгновенный результат. Посредством контекстной рекламы можно привлечь на ваш сайт посетителей, которые наиболее охотно совершат покупку. И вот почему: при поиске нужного товара и услуги пользователь увидит ваше объявление в первой строке поисковой выдачи и вместо того, чтобы искать подходящий вариант, с большей вероятностью пройдет по вашей релевантной ссылке на страницу товара или услуги.
                            </p>
                        </article>
                    </div>
                    <div className={s.context_img}>
                        <AnimationOnScroll className={s.boxImg} animateOnce={true} animateIn=" animate__animated animate__backInRight">
                            <img src={context} alt="img" />
                        </AnimationOnScroll>
                    </div>
                </div>

                <div className={s.advantages_context}>
                    <h2>Преимущества контекстной рекламы:</h2>
                    <ul className={s.advantages_list}>

                        <AnimationOnScroll animateOnce={true} animateIn=" animate__animated animate__fadeInLeft">

                            <li>Даёт мгновенный результат в виде переходов на сайт и/или целевых звонков.</li>
                        </AnimationOnScroll>
                        <AnimationOnScroll animateOnce={true} animateIn=" animate__animated animate__fadeInLeft">

                            <li>Гибкое планирование бюджета, можно начинать с небольших вложений в контекстную рекламу.</li>
                        </AnimationOnScroll>
                        <AnimationOnScroll animateOnce={true} animateIn=" animate__animated animate__fadeInLeft">

                            <li>Гибкие настройки и очень точный таргетинг на вашу целевую аудиторию.</li>
                        </AnimationOnScroll>
                        <AnimationOnScroll animateOnce={true} animateIn=" animate__animated animate__fadeInLeft">

                            <li> Можно адаптировать объявления на один и тот же товар и услугу под каждую группу клиентов и запросов.</li>
                        </AnimationOnScroll>
                        <AnimationOnScroll animateOnce={true} animateIn=" animate__animated animate__fadeInLeft">

                            <li>Контекстную рекламу можно подстроить под особенности вашего сайта.</li>
                        </AnimationOnScroll>
                        <AnimationOnScroll animateOnce={true} animateIn=" animate__animated animate__fadeInLeft">

                            <li>Мы настраиваем текстовые объявления, графическую рекламу (КМС), ремаркетинг, рекламу на youtube и gmail. Все форматы гибко таргетируются. </li>
                        </AnimationOnScroll>
                    </ul>

                </div>
                <div className={s.order}>
                    <div className={s.brifcard}>
                        <Brifcard link={'https://forms.gle/dEdmj5FcgmpoLGdu9'} text={'Бриф на контекстную рекламу'} />
                    </div>
                    <div className={s.context_asist}>


                        <div className={s.order_text}>
                            <p>Запуск 3-5 дней.<span> Стоимость от 13 000 сом</span></p>
                            <p>
                                Консультант по рекламе в интернете :

                            </p>
                        </div>
                        <div className={s.order_card}>
                            <div className={s.order_card_img}>
                                <img src={asisstant} alt="context asisstant" />
                            </div>
                            <div className={s.order_name}>

                                <h3>Снежана</h3>
                                <ul>
                                    <li><a href="tel:+996 770 534 943">+996 770 534 943</a></li>
                                    <li><a href="mailto:el@hm.kg">E-mail: el@hm.kg</a> </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

                <div className={s.price}>
                    <OrderCard visible={setIsVisible} />
                    <p>от 12 000 сом</p>
                </div>
            </div>
            {isVisible ? <Forms name={'Контекстная реклама'} visible={setIsVisible} /> : null}

        </section >
    );
};

export default ContextAd;