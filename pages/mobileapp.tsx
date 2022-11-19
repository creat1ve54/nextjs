import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from 'react'
import { IDevelopmentMain, IStagesItem } from '.'
import Development from '../components/development/Development'
import Main from '../components/main/Main'
import StagesItem from '../components/stagesItem/StagesItem'
import { StageSvg1, StageSvg2, StageSvg3, StageSvg4, StageSvg5, StageSvg6, StageSvg7, StageSvg8 } from '../components/svg/StageSvg'




import mobileImg from '../image/mobile__img.png'

import application1 from '../image/apllication/application1.svg'
import application11 from '../image/apllication/application1.1.png'
import application2 from '../image/apllication/application2.png'
import application21 from '../image/apllication/application2.1.png'
import application3 from '../image/apllication/application3.png'
import application31 from '../image/apllication/application3.1.png'
import application32 from '../image/apllication/application3.2.png'
import application33 from '../image/apllication/application3.3.png'
import application4 from '../image/apllication/application4.png'
import application41 from '../image/apllication/application4.1.png'
import application42 from '../image/apllication/application4.2.png'

import ApplicationSvg from '../components/svg/Application'


import PriceImage from '../image/price__img.png'
import Form from '../components/form/Form'
import Footer from '../components/footer/Footer'
import { SwiperSlide, Swiper } from 'swiper/react'
import { Pagination } from "swiper";

const DevelopmentMobileAppInfo: IDevelopmentMain[] = [
    { number: '01', title: 'Разработка', description: 'Разработка приложений любой сложности и функционала (IOS, Android)' },
    { number: '02', title: 'Прототипирование', description: 'Продумывание концепции, логики работы и функционала приложения, формирование тех. задания' },
    { number: '03', title: 'Контент', description: 'Производство контента: фото, видеоматериалы, инфографика, продающие тексты' },
    { number: '04', title: 'Дизайн', description: 'Создание UX / UI дизайн макетов, Разработка индивидуального привлекательного и удобного интерфейса' },
    { number: '05', title: 'Интеграция', description: 'Интеграция с существующими системами клиента или подключение к новым для взаимодействия с мобильным приложением (1С, Битрикс 24, СRM и др.)' },
    { number: '06', title: 'Поддержка', description: 'Полное техническое сопровождение, Обновления и доработка / Синхронизация и рефакторинг версий / Адаптация под новые устройства / Аналитика и статистика' },
]




const StagesMobileApp: IStagesItem[] = [
    { img: <StageSvg1 />, title: 'Концепция', description: 'Встречаемся с вами, выясняем ваши потребности, задаем дополнительные вопросы. Чем лучше разработчики будут понимать особенности бизнеса, тем эффективнее будет совместная работа.' },
    { img: <StageSvg2 />, title: 'Проектирование интерфейса', description: 'Оформляем в виде технического задания пожелания к функционалу и оформлению сайта. Согласовываем его с вами.' },
    { img: <StageSvg3 />, title: 'Прототипирование', description: 'Создаем прототип сайта  — его схематичную версию с основными функциональными блоками и структурными элементами: меню и кнопками. Прописываем логику работы сайта.' },
    { img: <StageSvg6 />, title: 'Дизайн интерфейсов', description: 'Вводим новый сайт в вашу IT-систему (объединяем с 1С, CRM и т.д.), составляем и отправляем вам всю необходимую документацию.' },
    { img: <StageSvg8 />, title: 'Сопровождение', description: 'Разработчики пишут код и тестируют все функции сайта' },
    { img: <StageSvg7 />, title: 'Публикация в App Store/Google Play', description: 'К работе приступают дизайнеры, которые на базе брендбука и прототипа создают стильное и функциональное оформление сайта.' },
    { img: <StageSvg4 />, title: 'Тестирование', description: 'Встречаемся с вами, выясняем ваши потребности, задаем дополнительные вопросы. Чем лучше разработчики будут понимать особенности бизнеса, тем эффективнее будет совместная работа.' },
    { img: <StageSvg5 />, title: 'Разработка функционала', description: 'Оформляем в виде технического задания пожелания к функционалу и оформлению сайта. Согласовываем его с вами.' },
]

const MobileApp = () => {

    const [click, setClick] = useState(true)

    const onImage = () => {
        setClick(!click)
        if (click) {
            document.querySelector('.applications__item--animation')?.classList.add('applications__item--active')
        } else {
            document.querySelector('.applications__item--animation')?.classList.remove('applications__item--active')
        }
    }
    return (
        <div className='mobileapp'>
            <Head>
                <title>MobileApp</title>
                <meta name="description" content="Разработка мобильных приложенийдля вашего бизнеса и Startup" />
                <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, uswe" />
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>
            <Main className='main__two' caption='Ищете лучшее цифровое решение ваших задач?' title='Разработка мобильных приложенийдля вашего бизнеса и Startup' />
            <Development className='development__two' info={DevelopmentMobileAppInfo} />
            <div className='working'>
                <div className='working__container container'>
                    <h2 className='working__title'>Как мы работаем</h2>
                    <ul className='working__list'>
                        <li className='working__item'>
                            <h3 className='working__caption'>Разработка на Cross платформе</h3>
                            <p className='working__description'>Мы используем Универсальное решение для разработки приложения на двух платформах Android и iOS. Экономим время и бюджет клиентов.</p>
                        </li>
                        <li className='working__item'>
                            <h3 className='working__caption'>Back-end – серверная часть</h3>
                            <p className='working__description'>Разрабатываем серверную часть приложения:</p>
                            <p className='working__description'>Создаем хранилище данных приложения, обеспечиваем целостность и стабильность сервиса, непрерывность бизнес-процессов, восстановление данных.</p>
                            <p className='working__description'>Реализуем Клиенто-серверную архитектуру: обеспечение корректного обмена данными между приложением и серверной частью и их взаимодействия</p>
                        </li>
                        <li className='working__item'>
                            <h3 className='working__caption'>Front-end – пользовательский интерфейс</h3>
                            <p className='working__description'>Разрабатываем эффективный интерфейс. Реализуем UX/UI дизайн. Соблюдаем БМ и используем компонентный к программированию.</p>
                        </li>
                    </ul>
                    <Swiper pagination={true} modules={[Pagination]} className="working__slider">
                        <SwiperSlide >
                            <li className='working__item'>
                                <h3 className='working__caption'>Разработка на Cross платформе</h3>
                                <p className='working__description'>Мы используем Универсальное решение для разработки приложения на двух платформах Android и iOS. Экономим время и бюджет клиентов.</p>
                            </li>
                        </SwiperSlide>
                        <SwiperSlide >
                            <li className='working__item'>
                                <h3 className='working__caption'>Back-end – серверная часть</h3>
                                <p className='working__description'>Разрабатываем серверную часть приложения:</p>
                                <p className='working__description'>Создаем хранилище данных приложения, обеспечиваем целостность и стабильность сервиса, непрерывность бизнес-процессов, восстановление данных.</p>
                                <p className='working__description'>Реализуем Клиенто-серверную архитектуру: обеспечение корректного обмена данными между приложением и серверной частью и их взаимодействия</p>
                            </li>
                        </SwiperSlide>
                        <SwiperSlide >
                            <li className='working__item'>
                                <h3 className='working__caption'>Front-end – пользовательский интерфейс</h3>
                                <p className='working__description'>Разрабатываем эффективный интерфейс. Реализуем UX/UI дизайн. Соблюдаем БМ и используем компонентный к программированию.</p>
                            </li>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <StagesItem info={StagesMobileApp} className={'stages--two'} />
            <div className='mobile'>
                <div className='mobile__container container'>
                    <div className='mobile__case'>
                        <div className='mobile__left'>
                            <h2 className='mobile__title'>Разрабатываем мобильные решения для различных сфер бизнеса</h2>
                            <ul className='mobile__list'>
                                <li className='mobile__item'>
                                    <p className='mobile__text'>Авто и транспорт</p>
                                </li>
                                <li className='mobile__item'>
                                    <p className='mobile__text'>Туризм</p>
                                </li>
                                <li className='mobile__item'>
                                    <p className='mobile__text'>Общепит</p>
                                </li>
                                <li className='mobile__item'>
                                    <p className='mobile__text'>Услуги и досуг</p>
                                </li>
                                <li className='mobile__item'>
                                    <p className='mobile__text'>Здравоохранение</p>
                                </li>
                                <li className='mobile__item'>
                                    <p className='mobile__text'>Фитнес и индустрия красоты</p>
                                </li>
                                <li className='mobile__item'>
                                    <p className='mobile__text'>Банки и финансы</p>
                                </li>
                                <li className='mobile__item'>
                                    <p className='mobile__text'>Обучение</p>
                                </li>
                            </ul>
                        </div>
                        <div className='mobile__right'>
                            <Image src={mobileImg} alt='Mobile Image' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='applications'>
                <ul className='applications__list'>
                    <li className='applications__item'>
                        <ApplicationSvg />
                        <Image className='applications__img' src={application1} alt='Application Image' />
                        <Image className='applications__img applications__img--two' src={application11} alt='Application Image' />
                        <p className='applications__description'>Разработка сайта</p>
                        <h3 className='applications__title'>Тандор</h3>
                    </li>
                    <li className='applications__item'>
                        <Image className='applications__img' src={application2} alt='Application Image' />
                        <Image className='applications__img applications__img--one' src={application21} alt='Application Image' />
                        <p className='applications__description'>Разработка сайта</p>
                        <h3 className='applications__title'>Remcard</h3>
                    </li>
                    <li className='applications__item'>
                        <Image className='applications__img' src={application3} alt='Application Image' />
                        <Image className='applications__img applications__img--one' src={application31} alt='Application Image' />
                        <Image className='applications__img applications__img--two' src={application32} alt='Application Image' />
                        <Image className='applications__img applications__img--three' src={application33} alt='Application Image' />
                        <p className='applications__description'>Разработка сайта</p>
                        <h3 className='applications__title'>Фортуна</h3>
                    </li>
                    <li className='applications__item applications__item--animation' onClick={onImage}>
                        <Image className='applications__img' src={application4} alt='Application Image' />
                        <Image className='applications__img applications__img--one' src={application41} alt='Application Image' />
                        <Image className='applications__img applications__img--two' src={application42} alt='Application Image' />
                        <p className='applications__description'>Разработка сайта</p>
                        <h3 className='applications__title'>Патрик и Мари</h3>
                    </li>
                </ul>
            </div>
            <div className='price'>
                <div className='price__container container'>
                    <div className='price__case'>
                        <div className='price__left'>
                            <Image src={PriceImage} alt='Price Image' />
                        </div>
                        <div className='price__right'>
                            <h2 className='price__title'>Сколько стоит разработка приложения?</h2>
                            <p className='price__description'>Все решения индивидуальны, поэтому оценка проекта всегда уникальна.</p>
                            <h3 className='price__caption'>Стоимость зависит от:</h3>
                            <ul className='price__list'>
                                <li className='price__item'>сложности функционала и дизайна</li>
                                <li className='price__item'>степени нагруженности приложения,</li>
                                <li className='price__item'>необходимости интеграции со сторонними сервисами и т. д.</li>
                            </ul>
                            <a href="#form" className='price__btn'>Узнать стоимость</a>
                        </div>
                    </div>
                </div>
            </div>
            <Form title='Давайте обсудим Ваш проект!' descr='Оставьте заявку и мы с Вами обязательно свяжемся в течение 10 мин' />
            <Footer />
        </div>
    )
}

export default MobileApp