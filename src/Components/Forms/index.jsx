import React, { useState } from 'react';
import s from './forms.module.css'

const Forms = ({ name, visible }) => {
    const [fio, setfio] = useState('')
    const [phone, setPhone] = useState('')
    const [WhatsApp, setWhatsApp] = useState('')
    const [text, setText] = useState('')


    const sendOrderToTelegram = (productName) => {
        const telegramBotToken = '6234589817:AAGSu5PjvDlXEGvBoza_X2ADSHnTxezHubc';
        const telegramChatId = '-1001961090287';
        const message = `${productName}`;

        fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage?chat_id=${telegramChatId}&text=${message}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Ошибка отправки сообщения в Telegram');
                }
            })
            .catch(error => {
                console.error(error);
            });
    }

    const postForm = () => {
        if (fio && phone.length >= 9) {
            sendOrderToTelegram(`Ф.И.О: ${fio}%0Aномер: ${phone}%0AWhatsApp: ${WhatsApp ? WhatsApp : 'отсуствует'}%0Aтип услуги: ${name}%0AСообщение: ${text ? text : 'отсуствует'}`)
            visible(false)
        }
    }

    const hideModal = (e) => {
        if (e.target.id == 'formas' || e.target.id == 'formasClose')
            visible(false)
    }

    return (
        <div id='formas' className={s.modal} onClick={(e) => hideModal(e)}>
            <div className={s.form}>
                <div className={s.boxClose}>
                    <button onClick={(e) => hideModal(e)} id='formasClose' className={s.close}>закрыть</button>
                </div>
                <div className={s.boxTitle}>
                    <h2 className={s.title}>ОБРАТНАЯ СВЯЗЬ</h2>
                    <h2 className={s.title}>тип:{name}</h2>
                </div>
                <div className={s.wrapper} >
                    <div className={s.contact}>
                        <div className={s.boxContactText}><h2 className={s.contactText}>Контакты</h2></div>
                        <div className={s.boxContact} >
                            <p>E-MAIL:</p>
                            <a href="mailto:itrefcode@gmail.com" target="_blank">itrefcode@gmail.com</a>
                        </div>
                        <div className={s.boxContact} >
                            <p>Телефон:</p>
                            <a href='tel:+996501605883'>+996 501 605 883</a>
                        </div>
                        <div className={s.boxContact} >
                            <p>Telegram:</p>
                            <a href="https://t.me/it_reff" target="_blank">@it_ref</a>
                        </div>
                        <div className={s.boxContact} >
                            <p>WhatsApp:</p>
                            <a href="https://wa.me/message/OGRT7NEW7QQYN1" target="_blank">Whatsapp: +996 501 605 883</a>
                        </div>
                        <div className={s.boxContact} >
                            <p>Instagram:</p>
                            <a href="https://instagram.com/it_ref?igshid=YmMyMTA2M2Y=" target="_blank">Instagram: @it_ref</a>
                        </div>
                    </div>
                    <form onSubmit={(e) => e.preventDefault()} className={s.formInp}>
                        <div className={`${s.form__group} ${s.field}`} >
                            <input required
                                onChange={(e) => setfio(e.target.value)}
                                placeholder="Name" className={s.form__field} id='nameForm' type="input" />
                            <label className={s.form__label} htmlFor="nameForm">Ф.И.О</label>
                        </div>
                        <div className={`${s.form__group} ${s.field}`} >
                            <input required
                                minLength={9}
                                onKeyPress={(e) => {
                                    if (!/^[0-9()-+.,\s-]+$/.test(e.key)) {
                                        e.preventDefault();
                                    }
                                }}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="Телефон" className={s.form__field} id='telForm' type="tel" />
                            <label className={s.form__label} htmlFor="telForm">Телефон</label>
                        </div>
                        <div className={`${s.form__group} ${s.field}`} >
                            <input
                                minLength={9}
                                onKeyPress={(e) => {
                                    if (!/^[0-9()-+.,\s-]+$/.test(e.key)) {
                                        e.preventDefault();
                                    }
                                }}
                                onChange={(e) => setWhatsApp(e.target.value)}
                                placeholder="Телефон" className={s.form__field} id='telForm' type="tel" />
                            <label className={s.form__label} htmlFor="telForm">WhatsApp</label>
                        </div>
                        <div className={`${s.form__group} ${s.field}`} >
                            <input
                                onChange={(e) => setText(e.target.value)}
                                placeholder="Сообщение" className={s.form__field} id='texForm' type="text" />
                            <label className={s.form__label} htmlFor="texForm">Сообщение</label>
                        </div>
                        <div className={s.boxSend}>
                            <button className={s.send}
                                onClick={() => postForm()}> Отправить</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Forms;