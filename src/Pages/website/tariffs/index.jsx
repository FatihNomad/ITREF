import React from 'react';
import Card from './card';
import style from './tariffs.module.css'
const Tariffs = () => {
    return (
        <section id="tariffs">


            <div className={style.container}>
                <h2 className={style.tariffs}>{'< Тарифный план />'}</h2>
                <div className={style.wrapper}>
                    <Card name={'Готовые шаблоны'}
                        possibilities={"Описание:"}
                        price={'от 4 000 сом'}
                        deadline={'Дедлайн: от 1 часа'}
                        li={['Вы выбираете готовый шаблон , устанавливаетe на свой сайт - и все! В течение нескольких минут у вас есть готовый сайт, где останется только изменить внешний вид и информацию так, как вам нужно.']}
                        text={['Сайт-Визитка.', 'Сайт-Landing.', 'Сайт-Каталог.',]}
                        dop={'такие как:'}
                    />

                    <Card name={'Сайт визитка'}
                        possibilities={"Возможности сайта-визитки:"}
                        price={'от 15 000 сом'}
                        deadline={'дедлайн: от 2 дней'}
                        li={['Инструмент для захвата новой аудитории.', 'Экономия средств.', 'Быстрое создание.', 'Лучше всего подходит для компаний, которые осуществляют свою деятельность не в сети Интернет.', ,]}
                        text={['Простая и понятная админ панель  для управления сайтом.', 'Разработка уникального дизайна.', 'Адаптивная верстка сайта под любые устройства. ', 'Тех поддержка на  неделю.',]}
                    />
                    <Card name={'Сайт-Landing'}
                        possibilities={"Возможности сайта-лендинг:"}
                        price={'от 25 000 сом'}
                        deadline={'Дедлайн: от 5  дней'}
                        li={['Инструмент для раскрутки и рекламы старых товаров/услуг.', 'Инструмент для раскрутки и тестирования новых товаров/услуг.', 'Повышение конверсии ресурса.', 'Дифференциация целевой аудитории.']}
                        text={['Простая и понятная админ панель  для управления сайтом.', 'Разработка уникального дизайна.', 'Адаптивная верстка сайта под любые устройства. ', 'Базовая Seo - оптимизация для продвижения в поисковых систем.', 'Тех поддержка 2 недели.', 'Языки - два языка.',]}
                    />
                    <Card name={'Сайт-каталог'}
                        possibilities={"Возможности сайта-каталог:"}
                        price={'от 40 000 сом'}
                        deadline={'Дедлайн: от 7 дней'}
                        li={['Продуманная структура;', 'Полная информации о товарах/услугах компании.', 'Оформление заказа.', 'Расширенный поиск по каталогу.', 'Возможность сравнивать товары.', 'Дополнительный функционал (комментарии, оценки и т.д.).', 'Увеличение продаж.']}
                        text={['Простая и понятная админ панель  для управления сайтом.', 'Разработка уникального дизайна.', 'Адаптивная верстка сайта под любые устройства.', 'Базовая Seo - оптимизация для продвижения в поисковых системах.', 'Языки - без ограничений.', 'Тех поддержка месяц.',]}
                    />
                    <Card name={'Интернет магазин'}
                        possibilities={"Возможности интернет магазина:"}
                        price={'от 60 000 сом'}
                        deadline={'Дедлайн: от 1 месяцев'}
                        li={['Расширение рынка для сбыта продукции.', 'Захват большой целевой аудитории.', 'Сокращение материальных расходов.', 'Личный кабинет.', 'Выбор способа оплаты.', 'Выбор способа доставки.', 'Корзина.', 'Отложенный товар.', 'Система бонусов , скидок , промокодов и т.д.', 'Автоматизация всех процентов.', 'Аналитика для контроля показателей прибыльности.',]}
                        text={['Простая и понятная админ панель  для управления сайтом.', 'Разработка уникального дизайна.', 'Разработка/доработка логотипа.', 'Адаптивная верстка сайта под любые устройства. ', 'Бесплатная Seo - оптимизация для продвижения в поисковых систем на месяц.', 'Языки - без ограничений.', 'Тех поддержка на 3 месяцев.',]}
                    />
                    <Card name={'Корпоративный-сайт'}
                        possibilities={"Возможности корпоративного сайта:"}
                        price={'от 80 000 сом'}
                        deadline={'Дедлайн: от 2 месяцев'}
                        li={['Подтверждение серьезности и перспективности.', 'Репрезентация компании.', 'Самый оптимальный метод рекламы.', 'Удобство доступа к коммерческой информации.',]}
                        text={['Простая и понятная админ панель  для управления сайтом.', 'Разработка уникального дизайна.', 'Адаптивная верстка сайта под любые устройства.', 'Языки - без ограничений.', 'Тех поддержка 4 месяца.',]}
                    />


                </div>
            </div>
        </section>
    );
};

export default Tariffs;