import React, { useEffect, useState } from 'react';
import style from './scrollEffect.module.css'
const StarScroll = ({ top, left, img, width, zIndex, time }) => {
    const [scrollPosition, setScrollPosition] = useState(0);
    useEffect(() => {
        window.addEventListener('scroll', (e) => setScrollPosition(window.pageYOffset));
        return () => {
            window.removeEventListener('scroll', (e) => setScrollPosition(window.pageYOffset));
        };
    }, []);
    const handleMove = () => (`translateY(${scrollPosition * 0.2}px)`)

    return (
        <img style={{
            transform: handleMove(),
            transition: `transform ${time} ease-out `,
            top: `${top}`,
            left: `${left}`,
            width: `${width}`,
            zIndex: `${zIndex}`,
        }} className={style.parallaxEffectScroll} src={img} alt="star" />
    );
};

export default StarScroll;