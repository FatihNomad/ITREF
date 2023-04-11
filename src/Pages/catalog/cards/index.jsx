import React from 'react';
import style from './cards.module.css'
import { VscDebugBreakpointLogUnverified } from 'react-icons/vsc';
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';

const Cards = ({ img, name, text, link }) => {

    return (
        <Link
            className={style.card}
            spy={true}
            offset={-30}
            duration={800}
            smooth={true}
            to='header' >
            <NavLink to={`/${link}`}>

                <div>
                    <div className={style.top}>
                        <div className={style.header}>
                            <img src={img} alt="img" />
                            <h2>{name}</h2>
                        </div>
                    </div>
                    <div className={style.bottom}>
                        <div className={style.description}>
                            {
                                text?.map((e, index) => (
                                    <li key={index}><i><VscDebugBreakpointLogUnverified className={style.iconsDone} color='#fff' /></i><p className={style.text}>{e}</p> </li>

                                ))
                            }
                        </div>
                        <button className={style.btn}>Перейти</button>

                    </div>
                </div>
            </NavLink>
        </Link>
    );
};

export default Cards;