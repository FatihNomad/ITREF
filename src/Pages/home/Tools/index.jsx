import React, { useState } from 'react';
import style from './tools.module.css'
import imgTools from '../../../img/home/tools.png'
const Tools = () => {
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
        <>
            <section className={style.shadowBox}>
                <div className={style.container}>
                    <div className={style.boxText}>
                        <h2>{'< инструменты />'}</h2>
                        <p>Мы не ограничиваемся использованием только одной библиотеки при создании
                            сайтов. Наша команда опытных разработчиков использует те технологии, которые
                            наилучшим образом соответствуют потребностям наших клиентов и их бизнес-целям.
                            Мы разрабатываем сайты на разных библиотеках по мере необходимости, включая
                            такие популярные технологии, как React.js, Next.js, Django, Flask и многие
                            другие. Мы постоянно следим за новыми тенденциями и технологическими разработками,
                            чтобы предложить нашим клиентам самые передовые решения и помочь им оставаться на
                            шаг впереди конкурентов.
                        </p>
                        <marquee direction="left" className={style.strokeRun}>
                            HTML5  CSS  JavaScript  Three.js  Next.js  React.js  Typescript  Redux Toolkit  Django  RestAPI  Flask  FastApi  postgresql  MySQL  Redis  Celery  Aiogram
                        </marquee>
                    </div>
                    <div className={style.boxImg}>
                        <img className={style.moveEffectTransition}
                            draggable={true}
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                            style={getTransformStyle()} src={imgTools} alt="img" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Tools;