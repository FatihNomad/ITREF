import React, { useState } from 'react';
import style from './Burger.module.css'
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import Forms from './../../Forms/index';

const BurgerMenu = () => {
    const [burgerActive, setBurgerActive] = useState(false)
    const [isVisible, setIsVisible] = useState(false)

    return (
        <>
            <div className={style.burgerMenu}>
                <div onClick={() => setBurgerActive(!burgerActive)} className={burgerActive ? style.menu_btn_active : style.menu_btn}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className={burgerActive ? `${style.menu_active}  ` : `${style.menu} `}>
                    <nav className={style.navi}>
                        <ul >
                            <li> <Link id={style.disabledStyle}

                                smooth={false}
                                to='header' > <NavLink onClick={() => setBurgerActive(!burgerActive)} className={({ isActive }) =>
                                    isActive ? style.activeMenu_item : style.menu_item} to={'/'}> Главная </NavLink></Link></li>
                            <li> <Link id={style.disabledStyle}

                                smooth={false}
                                to='header' > <NavLink onClick={() => setBurgerActive(!burgerActive)} to={'/catalog'}> Все услуги </NavLink></Link></li>
                            <li> <Link id={style.disabledStyle}

                                smooth={false}
                                to='header' > <NavLink onClick={() => setBurgerActive(!burgerActive)} className={({ isActive }) =>
                                    isActive ? style.activeMenu_item : style.menu_item} to={'/catalog/seo&add'}> Доп услуги </NavLink></Link></li>
                            <li> <Link id={style.disabledStyle}

                                smooth={false}
                                to='header' > <NavLink onClick={() => setBurgerActive(!burgerActive)} className={({ isActive }) =>
                                    isActive ? style.activeMenu_item : style.menu_item} to={'/catalog/websiteDev'}> Разработка сайтов </NavLink></Link></li>
                            <li> <Link id={style.disabledStyle}

                                smooth={false}
                                to='header' > <NavLink onClick={() => setBurgerActive(!burgerActive)} className={({ isActive }) =>
                                    isActive ? style.activeMenu_item : style.menu_item} to={'/catalog/design'}> Услуги дизайнера </NavLink></Link></li>
                            <li> <Link id={style.disabledStyle}

                                smooth={false}
                                to='header' > <NavLink onClick={() => setBurgerActive(!burgerActive)} className={({ isActive }) =>
                                    isActive ? style.activeMenu_item : style.menu_item} to={'/catalog/bot'}> Чат боты </NavLink></Link></li>
                            <li> <Link id={style.disabledStyle}

                                smooth={false}
                                to='header' > <NavLink onClick={() => setBurgerActive(!burgerActive)} className={({ isActive }) =>
                                    isActive ? style.activeMenu_item : style.menu_item} to={'/contacts'}> Контакты </NavLink></Link></li>
                            <button className={style.button_heder_conect} onClick={() => {
                                setIsVisible(true)
                                setBurgerActive(!burgerActive)
                            }}>Связаться с нами</button>

                        </ul>

                    </nav>
                </div>
            </div >
            {isVisible ? <Forms name={'Консультация'} visible={setIsVisible} /> : null}

        </>
    );
};

export default BurgerMenu;