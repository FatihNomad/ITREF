import React from 'react';
import style from './topMain.module.css'
import { Link, animateScroll as scroll } from "react-scroll";

const TopMain = () => {
    return (
        <div className={style.bg} id='topMain'>
            <div className={`${style.title_box}`}>
                <h1 className='notranslate'>
                    <span>IT </span><span>REF</span>
                </h1>
                <Link
                    to="aboutCompany"
                    spy={true}
                    smooth={true}
                    offset={-120}
                    duration={800}
                    className={style.more_btn}
                >ПОДРОБНЕЕ</Link>
            </div>
        </div>
    );
};

export default TopMain;