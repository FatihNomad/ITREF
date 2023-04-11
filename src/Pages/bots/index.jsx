import React, { useEffect, useRef, useState } from 'react';
import Brifcard from '../../Components/brifcard';
import style from './bots.module.css'
import Typed from 'typed.js';

import bots from '../../img/bots/bots.png'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import OrderCard from './../../Components/orderCard/index';
import starPurple from '../../img/starPurple.png'
import starBlue from '../../img/starBlue.png'
import StarScroll from './../../Components/ScrollEffects/index';
import Forms from './../../Components/Forms/index';

const Bot = () => {
    const el = useRef(null);
    const [hovered, setHovered] = useState(false);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {

        const typed = new Typed(el.current, {
            strings: [' повышать эффективность работы', ' избежать ненужного ожидания', 'всегда быть на связи', ' улучшать уровень обслуживания', ' предоставлять интерактивные возможности'],
            startDelay: 400,
            typeSpeed: 90,
            backSpeed: 50,
            backDelay: 900,
            smartBackspace: true,
            loop: true,
            showCursor: true,
        });

        return () => {
            typed.destroy();
        };
    }, []);



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
        <main className={style.main}>
            <StarScroll top={'5%'} left={'15%'} img={starBlue} width={'20px'} time={'0.4s'} zIndex={'-1'} />
            <StarScroll top={'25%'} left={'50%'} img={starPurple} width={'30px'} time={'0.4s'} zIndex={'-1'} />
            <StarScroll top={'12%'} left={'75%'} img={starBlue} width={'50px'} time={'0.8s'} zIndex={'-1'} />
            <StarScroll top={'55%'} left={'35%'} img={starPurple} width={'20px'} time={'0.3s'} zIndex={'-1'} />
            <StarScroll top={'52%'} left={'90%'} img={starPurple} width={'50px'} time={'0.4s'} zIndex={'-1'} />
            <StarScroll top={'82%'} left={'50%'} img={starBlue} width={'40px'} time={'0.4s'} zIndex={'-1'} />
            <StarScroll top={'82%'} left={'20%'} img={starPurple} width={'20px'} time={'0.4s'} zIndex={'-1'} />


            <section className={style.logo_design}>
                <div className={style.container}>
                    <div className={style.logoDesign_info}>
                        <h2>{`< Чат боты />`}</h2>

                        <h2 id={style.tabText}>С чат-ботом можно <span ref={el} /></h2>

                        <div className={style.logoDesign_text}>
                            <p>Чат-боты - это программы, которые могут общаться с пользователями через чат-окна на сайтах,
                                мессенджерах или социальных сетях. Они могут предоставлять широкий спектр услуг, таких как
                                ответы на часто задаваемые вопросы, обработку заказов, бронирование услуг, предоставление
                                информации о продуктах и услугах, и многое другое. Чат-боты также могут быть полезными для
                                автоматизации рутинных задач, таких как сбор контактных данных или опросов. Они доступны 24/7
                                и способствуют улучшению пользовательского опыта и эффективности бизнеса.
                            </p>
                        </div>
                        <div className={style.order}>
                            <Brifcard link={'https://forms.gle/SLkpQVW8d8Du4ZxG7'} text={'Бриф на разработку бота'} />
                            <p>от 4 000 сом</p>
                        </div>
                        <div className={style.order_btn}>
                            <OrderCard visible={setIsVisible} />
                        </div>
                    </div>
                    <AnimationOnScroll className={style.logoDesign_img} animateOnce={true} animateIn=" animate__animated animate__backInRight">
                    </AnimationOnScroll>
                </div>
                {isVisible ? <Forms name={'Чат боты '} visible={setIsVisible} /> : null}

            </section>
        </main>
    );
};

export default Bot;