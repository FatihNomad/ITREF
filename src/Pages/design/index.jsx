import React from 'react';
import s from './design.module.css'
import LogoDesign from './logoDesign';
import WebsiteDesign from './websiteDesign';
import starPurple from '../../img/starPurple.png'
import starBlue from '../../img/starBlue.png'
import StarScroll from '../../Components/ScrollEffects';

const Design = () => {
    return (
        <main className={s.main}>
            <StarScroll top={'5%'} left={'15%'} img={starBlue} width={'20px'} time={'0.4s'} zIndex={'-1'} />
            <StarScroll top={'10%'} left={'50%'} img={starPurple} width={'30px'} time={'0.5s'} zIndex={'-1'} />
            <StarScroll top={'30%'} left={'20%'} img={starBlue} width={'50px'} time={'0.7s'} zIndex={'-1'} />
            <StarScroll top={'52%'} left={'85%'} img={starPurple} width={'50px'} time={'0.4s'} zIndex={'-1'} />
            <StarScroll top={'45%'} left={'35%'} img={starBlue} width={'30px'} time={'0.5s'} zIndex={'-1'} />
            <StarScroll top={'83%'} left={'25%'} img={starPurple} width={'40px'} time={'0.8s'} zIndex={'-1'} />
            <StarScroll top={'60%'} left={'50%'} img={starBlue} width={'40px'} time={'0.4s'} zIndex={'-1'} />
            <StarScroll top={'70%'} left={'15%'} img={starPurple} width={'50px'} time={'0.6s'} zIndex={'-1'} />
            <StarScroll top={'75%'} left={'65%'} img={starBlue} width={'20px'} time={'0.3s'} zIndex={'-1'} />
            <StarScroll top={'80%'} left={'85%'} img={starBlue} width={'20px'} time={'0.7s'} zIndex={'-1'} />
            <WebsiteDesign />
            <LogoDesign />
        </main>
    );
};

export default Design;