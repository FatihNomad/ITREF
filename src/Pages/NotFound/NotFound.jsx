import React, { useEffect } from 'react';
import s from './NotFound.module.css'
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            navigate('/')
        }, 3000)
    }, [navigate])

    return (
        <main>

            <h2 className={s.error}>
                Упс... Видимо такой страницы нет
            </h2>

        </main>
    );
};

export default NotFound;