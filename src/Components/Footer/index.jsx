import React, { useState } from 'react';
import s from './footer.module.css'
import logo from '../../img/logo.png'
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';


const Footer = () => {



    return (
        <footer className={s.footer}>
            <div className={s.container}>
                <div className={s.box}>
                    <p>
                        <span className={s.oneSpan}>Инстаграм:</span>
                        <span><a className={s.twoSpan} href="https://instagram.com/it_ref?igshid=YmMyMTA2M2Y=" target="_blank">@it_ref</a></span>
                    </p>
                    <p>
                        <span className={s.oneSpan}>Емайл:</span>
                        <span><a className={s.twoSpan} href="mailto:itrefcode@gmail.com">itrefcode@gmail.com</a></span>
                    </p>
                </div>
                <div className={s.box}>
                    <img src={logo} alt="logo" />

                    <Link style={{ display: window.screen.width <= 992 ? 'none' : 'block' }} duration={false} to='header'><NavLink to={'/privacy-policy'}>Политика конфиденциальности</NavLink></Link>
                    <p style={{ display: window.screen.width < 992 ? 'none' : 'block' }}>® IT-REF.kg 2022-2023</p>
                </div>
                <div className={s.box}>
                    <p>
                        <span className={s.oneSpan}>Телеграм:</span>
                        <span><a className={s.twoSpan} href="https://t.me/it_reff" target="_blank">@it_ref</a></span>
                    </p>
                    <p>
                        <span className={s.oneSpan}>Телефон:</span>
                        <span><a className={s.twoSpan} href="tel:+996501605883">+996 501 605 883</a></span>
                    </p>
                </div>
                <div style={{ display: window.screen.width <= 992 ? '' : 'none' }} className={s.private}>
                    <Link duration={false} to='header'><NavLink to={'/privacy-policy'}>Политика конфиденциальности</NavLink></Link>
                    <p >® IT-REF.kg 2022-2023</p>
                </div>
            </div>

        </footer >
    );
};

export default Footer;