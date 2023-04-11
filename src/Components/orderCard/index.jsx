import React from 'react';

import s from './ordercard.module.css'
const OrderCard = ({ visible }) => {
    return (
        <>
            <button className={s.order_btn} onClick={() => visible(true)}>Заказать</button>
        </>
    );
};

export default OrderCard;