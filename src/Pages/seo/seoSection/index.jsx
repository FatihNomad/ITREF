import React, { useState } from 'react';
import s from './seo.module.css'
import seo from '../../../img/seo/seo.png'
import Brifcard from '../../../Components/brifcard';
import OrderCard from '../../../Components/orderCard';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Forms from './../../../Components/Forms/index';


const Seo = () => {
    const [hovered, setHovered] = useState(false);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false)

    const handleMouseMove = (event) => {
        setHovered(true);
        setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    const getTransformStyle = () => {
        if (!hovered) {
            return { transform: 'scale(1) rotate(0deg)' };
        }

        const scaleAmount = 1.05;
        const x = cursorPosition.x;
        const y = cursorPosition.y;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        const translateX = (centerX - x) * (scaleAmount - 1);
        const translateY = (centerY - y) * (scaleAmount - 1);

        const radians = Math.atan2(y - centerY, x - centerX);
        const degrees = radians * (0 / Math.PI);
        return {
            transform: `scale3d(${scaleAmount}, ${scaleAmount}, 1) translate3d(${translateX}px, ${translateY}px, 0) rotate(${degrees}deg)`,
        };
    };
    return (
        <section>
            <div className={s.container}>
                <div className={s.seo_opt}>
                    <AnimationOnScroll className={s.seo_img} animateOnce={true} animateIn=" animate__animated animate__backInLeft">
                        <img src={seo} alt="seo"
                            className={s.moveEffectTransition}
                            draggable={true}
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                            style={getTransformStyle()} />
                    </AnimationOnScroll>
                    <div className={s.seo_main}>
                        <article>
                            <h1>{`< SEO оптимизация />`}</h1>
                            <div className={s.seo_text}>
                                <p>
                                    SEO оптимизация - это процесс улучшения видимости и рейтинга веб-сайта в поисковых системах. Это делается путем оптимизации контента, тегов, метаданных и других элементов сайта, чтобы они соответствовали алгоритмам поисковых систем. SEO оптимизация помогает увеличить трафик на сайт, улучшить его ранжирование и привлечь больше потенциальных клиентов. Она является важной составляющей цифрового маркетинга и может значительно повлиять на успех вашего бизнеса в Интернете.
                                </p>
                            </div>
                        </article>
                        <div className={s.brifcard}>
                            <Brifcard link='https://forms.gle/5W4i51g1HZS9ZkyT6' text='Бриф на SEO оптимизацию' />
                        </div>

                        <div className={s.order}>
                            <OrderCard visible={setIsVisible} />
                            <p>договорная цена</p>
                        </div>
                    </div>
                </div>
            </div>
            {isVisible ? <Forms name={'SEO оптимизация '} visible={setIsVisible} /> : null}

        </section>
    );
};

export default Seo;