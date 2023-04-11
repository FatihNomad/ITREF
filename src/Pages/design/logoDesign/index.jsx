import React, { useState } from 'react';
import style from './logodesign.module.css'
import Brifcard from '../../../Components/brifcard';
import OrderCard from '../../../Components/orderCard';
import logoDesign from '../../../img/designer/logo_design.png'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Forms from './../../../Components/Forms/index';

const LogoDesign = () => {
    const [isVisible, setIsVisible] = useState(false)

    const [hovered, setHovered] = useState(false);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

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
        <section className={style.logo_design}>
            <div className={style.container}>
                <AnimationOnScroll className={style.logoDesign_img} animateOnce={true} animateIn=" animate__animated animate__backInLeft">

                    <img
                        className={style.moveEffectTransition}
                        draggable={true}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        style={getTransformStyle()}
                        src={logoDesign} alt="LogoDesign" />
                </AnimationOnScroll>
                <div className={style.logoDesign_info}>
                    <h2>{`< Создание логотипа />`}</h2>
                    <div className={style.logoDesign_text}>
                        <p>Наша компания предлагает услугу создания логотипов для различных бизнесов и проектов. Мы понимаем, что логотип является визитной карточкой компании и его создание должно быть профессиональным и оригинальным.</p>
                        <p>Наши дизайнеры имеют многолетний опыт в создании логотипов для различных сфер бизнеса и умеют передать суть и философию компании в графическом символе.</p>
                        <p>Мы работаем над созданием логотипа в тесном взаимодействии с нашими клиентами, чтобы полностью понимать их потребности и желания. Мы предлагаем несколько вариантов логотипов для выбора, и работаем с клиентом над дальнейшими изменениями и доработками до тех пор, пока они не будут полностью удовлетворены результатом.</p>
                    </div>
                    <div className={style.order}>
                        <Brifcard link={'https://forms.gle/ThMQvEizTFKbvi5a9'} text={'Бриф на создание логотипа'} />
                        <p>от 2 000 сом</p>
                    </div>
                    <div className={style.order_btn}>
                        <OrderCard visible={setIsVisible} />
                    </div>
                </div>

            </div>
            {isVisible ? <Forms name={'Создание логотипа'} visible={setIsVisible} /> : null}

        </section>
    );
};

export default LogoDesign;