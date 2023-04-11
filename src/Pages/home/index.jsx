import React from 'react';
import style from './home.module.css'
import TopMain from './topMain/index';
import AboutUs from './AboutUs/Companies';
import Benefits from './benefits/Benefits';
import AboutDesigner from './aboutDesigner';
import Tools from './Tools';
import starPurple from '../../img/starPurple.png'
import starBlue from '../../img/starBlue.png'
import StarScroll from './../../Components/ScrollEffects/index';



const Home = () => {
    return (
        <main className={style.main}>
            <StarScroll top={'20%'} left={'25%'} img={starPurple} width={'20px'} time={'0.4s'} />
            <StarScroll top={'25%'} left={'85%'} img={starBlue} width={'50px'} time={'0.5s'} />
            <StarScroll top={'30%'} left={'55%'} img={starPurple} width={'30px'} time={'0.5s'} />
            <StarScroll top={'40%'} left={'60%'} img={starBlue} width={'30px'} time={'0.6s'} />
            <StarScroll top={'35%'} left={'20%'} img={starPurple} width={'20px'} time={'0.4s'} />
            <StarScroll top={'42%'} left={'10%'} img={starPurple} width={'50px'} time={'0.7s'} />
            <StarScroll top={'50%'} left={'40%'} img={starPurple} width={'30px'} time={'0.5s'} />
            <StarScroll top={'53%'} left={'80%'} img={starBlue} width={'30px'} time={'0.4s'} />
            <StarScroll top={'57%'} left={'20%'} img={starBlue} width={'50px'} time={'0.5s'} />
            <StarScroll top={'64%'} left={'55%'} img={starPurple} width={'50px'} time={'0.9s'} />
            <StarScroll top={'63%'} left={'25%'} img={starPurple} width={'20px'} time={'0.5s'} />
            <TopMain />
            <AboutUs />
            <Benefits />
            <AboutDesigner />
            <Tools />
        </main>
    );
};

export default Home;