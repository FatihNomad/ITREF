import style from './header.module.css'
import logo from '../../img/logo.png'
import { Link, animateScroll as scroll } from "react-scroll";
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import arrow from '../../img/home/arrow.png'
import BurgerMenu from './BurgerMenu/index';
import Forms from './../Forms/index';
const Header = () => {
    const [visibilityBox, setVisibilityBox] = useState(false);
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
        const centerY = window.innerHeight / 5;
        const translateX = (centerX - x) * (scaleAmount - 1);
        const translateY = (centerY - y) * (scaleAmount - 1);

        const radians = Math.atan2(y - centerY, x - centerX);
        const degrees = radians * (50 / Math.PI);
        return {
            transform: `scale3d(${scaleAmount}, ${scaleAmount}, 1) translate3d(${translateX}px, ${translateY}px, 0) rotateY(${degrees}deg)`,
        };
    };
    window.addEventListener('click', e => setVisibilityBox(false))
    return (
        <>
            <header className={style.header} id='header'>
                <div className={style.navigation}>
                    <nav className={style.navi}>
                        <Link
                            spy={true}
                            smooth={true}
                            offset={-30}
                            duration={800}
                            to='header' >
                            <NavLink to={'/'}><img className={style.logo} src={logo} alt="logo" /></NavLink>
                        </Link>
                        <div className={style.boxMenu}>
                            <BurgerMenu />
                            <ul className={style.menu}>
                                <li>
                                    <Link
                                        onClick={() => setVisibilityBox(false)}
                                        spy={true}
                                        smooth={true}
                                        offset={-30}
                                        duration={800}
                                        to='header' >
                                        <NavLink className={({ isActive }) =>
                                            isActive ? style.activeMenu_item : style.menu_item
                                        } to={'/'}>Главная</NavLink>
                                    </Link></li>
                                <li>
                                    <Link

                                        onClick={() => setVisibilityBox(!visibilityBox)}
                                        className={style.dropdownContent}>
                                        <p className={style.servicesItm}> Услуги <img style={{ transform: visibilityBox ? 'rotate(90deg)' : 'rotate(180deg)' }} src={arrow} alt="arrow" /></p>
                                        {


                                            <div className={style.moveEffectTransition} style={getTransformStyle()}>
                                                <div className={visibilityBox ? `${style.mouseLeaveEffectNone} ` : `${style.mouseLeaveEffect} animate__animated animate__flipOutY`}
                                                    onMouseLeave={() => setVisibilityBox(false)}
                                                >
                                                    <div
                                                        onMouseMove={handleMouseMove}
                                                        onMouseLeave={handleMouseLeave}
                                                        className={visibilityBox ? `${style.selection} animate__animated animate__flipInY` : `${style.selectionNon} animate__animated animate__flipOutY`}>
                                                        <Link
                                                            id={style.disabledStyle}

                                                            smooth={false}
                                                            to='header' >
                                                            <NavLink id={style.servicesMenu} to={'/catalog'}> Все услуги <img className={style.arrowIcon} src={arrow} alt="arrow" /></NavLink>
                                                        </Link>
                                                        <Link
                                                            id={style.disabledStyle}

                                                            smooth={false}
                                                            to='header' >
                                                            <NavLink id={style.servicesMenu} to={'/catalog/seo&add'}> Доп услуги <img className={style.arrowIcon} src={arrow} alt="arrow" /></NavLink>
                                                        </Link>
                                                        <Link
                                                            id={style.disabledStyle}

                                                            smooth={true}
                                                            to='tariffs' >
                                                            <NavLink id={style.servicesMenu} to={'/catalog/websiteDev'}> Разработка сайтов <img className={style.arrowIcon} src={arrow} alt="arrow" /></NavLink>
                                                        </Link>
                                                        <Link
                                                            id={style.disabledStyle}

                                                            smooth={false}
                                                            to='header' >
                                                            <NavLink id={style.servicesMenu} to={'/catalog/design'}> Услуги дизайнера <img className={style.arrowIcon} src={arrow} alt="arrow" /></NavLink>
                                                        </Link>
                                                        <Link
                                                            id={style.disabledStyle}

                                                            smooth={false}
                                                            to='header' >
                                                            <NavLink id={style.servicesMenu} to={'/catalog/bot'}> Чат боты <img className={style.arrowIcon} src={arrow} alt="arrow" /></NavLink>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                    </Link>

                                </li>

                                <li>
                                    <Link
                                        onClick={() => setVisibilityBox(false)}
                                        spy={true}
                                        offset={-30}
                                        duration={800}
                                        smooth={true}
                                        to='header' >
                                        <NavLink className={({ isActive }) =>
                                            isActive ? style.activeMenu_item : style.menu_item
                                        } to={'/contacts'}> Контакты </NavLink>
                                    </Link>
                                </li>
                            </ul>
                            <button className={style.button_heder_conect} onClick={() => setIsVisible(true)}>Связаться с нами</button>

                        </div>
                    </nav>
                </div>
                {isVisible ? <Forms name={'Консультация'} visible={setIsVisible} /> : null}

            </header >
        </>
    );
};

export default Header;