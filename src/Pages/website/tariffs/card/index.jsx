import React, { useState } from 'react';
import OrderCard from '../../../../Components/orderCard';
import style from './cardTariffs.module.css'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Forms from '../../../../Components/Forms';


const Card = ({ name, li, text, price, deadline, possibilities, dop }) => {

    const [isVisible, setIsVisible] = useState(false)


    return (
        <>
            <AnimationOnScroll animateOnce={true} animateIn=" animate__animated animate__bounceInUp">
                <div className={style.container}>
                    <h2 className={style.name}>{name}</h2>
                    <div className={style.wrapper}>
                        <div className={style.title}>
                            <h2 className={style.dopPaketUslug}>{possibilities}</h2>

                            <ul className={style.boxLi}>
                                {
                                    li?.map((e, index) => (
                                        <li key={index}>{e}</li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className={style.title}>
                            <h2 className={style.dopPaketUslug}>{dop ? dop : 'Доп. пакет услуг:'} </h2>
                            {
                                text?.map((e, index) => (
                                    <p className={style.text} key={index}>{e}</p>
                                ))
                            }
                            <div className={style.btnAndPrice}>
                                <div className={style.boxPrice}>
                                    <p className={style.deadline}>{deadline}</p>
                                    <p className={style.price}>{price}</p>
                                </div>
                                <div className={style.btn}>
                                    <OrderCard visible={setIsVisible} />
                                </div >
                            </div>
                        </div>
                    </div>

                </div>
            </AnimationOnScroll>
            {isVisible ? <Forms name={name} visible={setIsVisible} /> : null}
        </>

    );
};

export default Card;