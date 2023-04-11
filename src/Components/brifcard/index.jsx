import React from 'react';
import style from './brifcard.module.css'

const Brifcard = ({ link, text }) => {
    return (
        <a className={style.download_button} href={link} target='_blank' rel='noreferrer' title={text}>
            <div className={style.docs}>
                <svg className={style.css_i6dzq1} strokeLinejoin="round" strokeLinecap="round" fill="none" strokeWidth="2" stroke="currentColor" height="30" width="30" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line y2="13" x2="8" y1="13" x1="16"></line><line y2="17" x2="8" y1="17" x1="16"></line><polyline points="10 9 9 9 8 9"></polyline>
                </svg>
                <p>{text} </p>
            </div>
        </a>


    );
};

export default Brifcard;