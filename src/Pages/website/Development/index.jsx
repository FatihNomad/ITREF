import React from 'react';
import style from './development.module.css'
import webSites from '../../../img/webSite/webSites.png'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import TypeSlide from './typeSlide';
import Brifcard from '../../../Components/brifcard';


const Development = () => {

    return (
        <section>
            <div className={style.container}>
                <div className={style.wrapper}>
                    <div className={style.boxDevelopment}>
                        <h1>{'< Разработка сайта />'}</h1>
                        <p>Мы предлагаем услугу разработки сайтов для компаний и
                            бизнесов любого уровня. Мы создадим для вас современный
                            и удобный сайт, который поможет вам расширить свой бизнес
                            и привлечь новых клиентов.
                        </p>
                        <AnimationOnScroll className={style.boxImg} animateOnce={true} animateIn=" animate__animated animate__backInLeft">
                            <img src={webSites} alt="img" />
                        </AnimationOnScroll>
                    </div>
                    <div className={style.boxTypeSite}>
                        <h2>{'< Типы сайтов />'}</h2>
                        <div className={style.scrollBox}>
                            <div><TypeSlide /></div>
                        </div>
                    </div>
                </div>
                <div className={style.brif}>
                    <Brifcard link={'https://forms.gle/DjKk8kURuzhetjDw9'} text={'Бриф на разработку сайта'} />
                </div>
            </div>

        </section>
    );
};

export default Development;