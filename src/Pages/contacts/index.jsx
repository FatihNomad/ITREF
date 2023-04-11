import React from 'react';
import style from './contacts.module.css'
import tel from './../../img/contacts/tel.png'
import watsapp from './../../img/contacts/watsapp.png'
import telegram from './../../img/contacts/telegram.png'
import email from './../../img/contacts/email.png'
import insta from './../../img/contacts/instagram.png'

const Contacts = () => {
    return (
        <main className={style.main}>
            <div className={style.container}>
                <div className={style.box_information}>
                    <div className={style.description}>
                        <h1>{`< Контакты />`}</h1>
                        <p>Если у вас остались какие-то вопросы или вы хотите получить дополнительную информацию, не стесняйтесь связаться с нами. Мы всегда готовы ответить на любые ваши запросы!</p>
                    </div>
                    <div className={style.box_contact}>
                        <div className={style.contact}>
                            <li><a href="tel:+996501605883"><i><img src={tel} alt="img" /></i><p>тел: +996 501 605 883</p></a></li>
                            <li><a href="https://wa.me/message/OGRT7NEW7QQYN1" target="_blank"><i><img src={watsapp} alt="img" /></i><p>Whatsapp: +996 501 605 883</p></a></li>
                            <li><a href="mailto:itrefcode@gmail.com" target="_blank"><i><img src={email} alt="img" /></i><p>Email: itrefcode@gmail.com</p></a></li>
                            <li><a href="https://t.me/it_reff" target="_blank"><i><img src={telegram} alt="img" /></i><p>Telegram: @it_ref</p></a></li>
                            <li><a href="https://instagram.com/it_ref?igshid=YmMyMTA2M2Y=" target="_blank"><i><img className={style.insta} src={insta} alt="img" /></i><p>Instagram: @it_ref</p></a></li>

                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Contacts;