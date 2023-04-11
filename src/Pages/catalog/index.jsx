import React from 'react';
import Cards from './cards';
import style from './catalog.module.css'
import img from './../../img/services/website.png'
import img1 from '../../img/services/additional.png'
import img2 from '../../img/services/designer.png'
import img3 from '../../img/services/bots.png'
import starPurple from '../../img/starPurple.png'
import starBlue from '../../img/starBlue.png'
import StarScroll from './../../Components/ScrollEffects/index';

const Catalog = () => {
    return (
        <main className={style.main}>
            <div className={style.container}>
                <StarScroll top={'5%'} left={'15%'} img={starBlue} width={'20px'} time={'0.4s'} zIndex={'-1'} />
                <StarScroll top={'35%'} left={'70%'} img={starPurple} width={'30px'} time={'0.4s'} zIndex={'-1'} />
                <StarScroll top={'22%'} left={'85%'} img={starBlue} width={'50px'} time={'0.8s'} zIndex={'-1'} />
                <StarScroll top={'41%'} left={'40%'} img={starPurple} width={'20px'} time={'0.3s'} zIndex={'-1'} />
                <StarScroll top={'52%'} left={'85%'} img={starPurple} width={'50px'} time={'0.4s'} zIndex={'-1'} />
                <StarScroll top={'62%'} left={'50%'} img={starBlue} width={'40px'} time={'0.4s'} zIndex={'-1'} />
                <StarScroll top={'82%'} left={'20%'} img={starPurple} width={'20px'} time={'0.4s'} zIndex={'-1'} />
                <Cards link={'catalog/websiteDev'} img={img} name={'Разработка сайтов'} text={['Техническая Поддержка сайта и его улучшение.', 'Разработка сайта.',]} />
                <Cards link={'catalog/seo&add'} img={img1} name={'Допольнительные услуги'} text={['SEO оптимизация.', 'Контекстная реклама.',]} />
                <Cards link={'catalog/design'} img={img2} name={'Услуги Дизайнера'} text={['Разработка индивидуального  дизайна для сайта.', 'Создание логотипов.']} />
                <Cards link={'catalog/bot'} img={img3} name={'Чат боты '} text={['Создание чат ботов.']} />
            </div>
        </main>
    );
};

export default Catalog;