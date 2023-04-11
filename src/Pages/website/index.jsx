import React, { useEffect, useState } from 'react';
import Development from './Development';
import Tariffs from './tariffs';
import style from './website.module.css'

import starPurple from '../../img/starPurple.png'
import starBlue from '../../img/starBlue.png'
import StarScroll from '../../Components/ScrollEffects';


const Website = () => {

    return (
        <main className={style.main}>
            <StarScroll top={'6%'} left={'25%'} img={starPurple} width={'20px'} time={'0.4s'} />
            <StarScroll top={'30px'} left={'85%'} img={starPurple} width={'50px'} time={'0.5s'} />
            <StarScroll top={'10%'} left={'45%'} img={starBlue} width={'50px'} time={'0.5s'} />
            <StarScroll top={'17%'} left={'80%'} img={starPurple} width={'50px'} time={'0.5s'} />
            <StarScroll top={'22%'} left={'25%'} img={starBlue} width={'30px'} zIndex={'-1'} time={'0.6s'} />
            <StarScroll top={'55%'} left={'75%'} img={starPurple} width={'30px'} zIndex={'-1'} time={'0.5s'} />
            <StarScroll top={'35%'} left={'90%'} img={starBlue} width={'30px'} zIndex={'-1'} time={'0.4s'} />
            <StarScroll top={'47%'} left={'60%'} img={starBlue} width={'30px'} zIndex={'-1'} time={'0.3s'} />
            <StarScroll top={'70%'} left={'50%'} img={starBlue} width={'30px'} zIndex={'-1'} time={'0.5s'} />
            <StarScroll top={'50%'} left={'10%'} img={starPurple} width={'30px'} zIndex={'-1'} time={'0.7s'} />
            <StarScroll top={'70%'} left={'17%'} img={starBlue} width={'30px'} zIndex={'-1'} time={'0.4s'} />
            <StarScroll top={'60%'} left={'90%'} img={starPurple} width={'30px'} zIndex={'-1'} time={'0.5s'} />
            <Development />
            <Tariffs />
        </main>
    );
};

export default Website;