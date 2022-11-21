import Head from 'next/head'
import React from 'react'
import Main from '../components/main/Main'
import Development from '../components/development/Development'
import Footer from '../components/footer/Footer'
import Form from '../components/form/Form'
import Image from 'next/image'

import { SwiperSlide, Swiper } from 'swiper/react'
import { Pagination } from "swiper";


import animation1 from '../image/project/project__animation/project__animation1.png'
import animation11 from '../image/project/project__animation/project__animation1.1.png'
import animation12 from '../image/project/project__animation/project__animation1.2.png'
import animation13 from '../image/project/project__animation/project__animation1.3.png'
import animation14 from '../image/project/project__animation/project__animation1.4.png'
import animation15 from '../image/project/project__animation/project__animation1.5.png'

import animation2 from '../image/project/project__animation/project__animation2.png'
import animation21 from '../image/project/project__animation/project__animation2.1.png'


export interface ISoftware {
    number: string,
    title: string,
    description: string,
}


const SoftwareInfo: ISoftware[] = [
    { number: '01', title: 'Автоматизация производства', description: 'Создание целостной системы, выступающей посредником и организатором между всеми процессами предприятия и их участниками' },
    { number: '02', title: 'Автоматизация Бизнес-процессов', description: 'Оптимизация и автоматизиция самых частых  действий внутри компании. Повышение эффективности вашего бизнеса!' },
    { number: '03', title: 'CRM, ERP системы', description: 'Автоматический учет клиентов. Управление продажами. Четкое разграничение прав и обязанностей. Аналитика и маркетинг.' },
    { number: '04', title: 'Разработка баз данных', description: 'Обеспечение целостности данных' },
]

const Software = () => {

    const onGoAnimation = () => {
        document.querySelector('.finished__item')?.setAttribute('style', 'pointer-events: none')
        setTimeout(() => { document.querySelector('.finished__img')?.classList.add('finished__img--active') }, 0)
        setTimeout(() => { document.querySelector('.finished__img__two')?.classList.add('finished__img__two--active') }, 0)
        setTimeout(() => { document.querySelector('.finished__img__two')?.classList.remove('finished__img__two--active') }, 500)
        setTimeout(() => { document.querySelector('.finished__img__three')?.classList.add('finished__img__three--active') }, 500)
        setTimeout(() => { document.querySelector('.finished__img__three')?.classList.remove('finished__img__three--active') }, 1000)
        setTimeout(() => { document.querySelector('.finished__img__four')?.classList.add('finished__img__four--active') }, 1000)
        setTimeout(() => { document.querySelector('.finished__img__four')?.classList.remove('finished__img__four--active') }, 1500)
        setTimeout(() => { document.querySelector('.finished__img__fife')?.classList.add('finished__img__fife--active') }, 1500)
        setTimeout(() => { document.querySelector('.finished__img__fife')?.classList.remove('finished__img__fife--active') }, 2000)
        setTimeout(() => { document.querySelector('.finished__img__six')?.classList.add('finished__img__six--active') }, 2000)
        setTimeout(() => { document.querySelector('.finished__img__six')?.classList.remove('finished__img__six--active') }, 2500)
        setTimeout(() => {
            document.querySelector('.finished__img')?.classList.remove('finished__img--active')
            document.querySelector('.finished__item')?.setAttribute('style', 'pointer-events: inherit')
        }, 2500)
    }

    return (
        <div className='software'>
            <Head>
                <title>Software</title>
                <meta name="description" content="CRM-системы и программное обеспечение для Вашего бизнес" />
                <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1" />
                <meta name="keywords" content="автоматизация производства, CRM, ERP системы, Разработка баз данных, Автоматизация Бизнес-процессов" />
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>
            <Main caption={<React.Fragment>Ускоряем продажи! <br /></React.Fragment>} className='main__four' title='CRM-системы и программное обеспечение для Вашего бизнеса' />
            <Development info={SoftwareInfo} className='development__three' />
            <div className='comparison'>
                <div className='comparison__container container'>
                    <h2 className='comparison__title'>Сравнение CRM-систем</h2>
                </div>
            </div>
            <div className='portfolio'>
                <div className='portfolio__container container'>
                    <h2 className='portfolio__title'>Портфолио</h2>
                </div>
            </div>
            <div className='finished'>
                <div className='finished__container'>
                    <ul className='finished__list'>
                        <li className='finished__item' onClick={onGoAnimation}>
                            <Image className='finished__img' src={animation1} alt='Finished Image' />
                            <Image className='finished__img finished__img__two' src={animation11} alt='Finished Image' />
                            <Image className='finished__img finished__img__three' src={animation12} alt='Finished Image' />
                            <Image className='finished__img finished__img__four' src={animation13} alt='Finished Image' />
                            <Image className='finished__img finished__img__fife' src={animation14} alt='Finished Image' />
                            <Image className='finished__img finished__img__six' src={animation15} alt='Finished Image' />
                            <p className='finished__description'>Разработка сайта</p>
                            <h3 className='finished__title'>Тандор</h3>
                        </li>
                        <li className='finished__item'>
                            <Image className='finished__img' src={animation2} alt='Finished Image' />
                            <Image className='finished__img finished__img__two' src={animation21} alt='Finished Image' />
                            <p className='finished__description'>Разработка сайта</p>
                            <h3 className='finished__title'>Тандор</h3>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='technology'>
                <div className='technology__container container'>
                    <div className='technology__text'>
                        <h2 className='technology__title'>Технологии, которые мы используем</h2>
                        <p className='technology__description'>Специалисты Bitoobit внимательно следят за развитием современных технологий. Они постоянно повышают знания в этой отрасли, чтобы быть в курсе всех тенденций в мире IT.</p>
                    </div>
                    <ul className='technology__list'>
                        <li className='technology__item'></li>
                        <li className='technology__item'></li>
                        <li className='technology__item'></li>
                        <li className='technology__item'></li>
                        <li className='technology__item'></li>
                        <li className='technology__item'></li>
                    </ul>
                </div>
            </div>
            <div className='clients'>
                <div className='clients__container container'>
                    <div className='clients__text'>
                        <h2 className='clients__title'>Наши клиенты</h2>
                        <p className='clients__description'>Мы работаем на результат. Постоянно поддерживаем связь с клиентами и учитываем все их пожелания. Наши решения помогают развивать бизнес любого направления.</p>
                    </div>
                    <ul className='clients__list'>
                        <li className='clients__item'></li>
                        <li className='clients__item'></li>
                        <li className='clients__item'></li>
                        <li className='clients__item'></li>
                        <li className='clients__item'></li>
                        <li className='clients__item'></li>
                    </ul>
                </div>
            </div>
            <div className='comment'>
                <div className='comment_container container'>
                    <div className='comment__text'>
                        <h2 className='comment__title'>Наши клиенты</h2>
                        <p className='comment__description'>Мы работаем на результат. Постоянно поддерживаем связь с клиентами и учитываем все их пожелания. Наши решения помогают развивать бизнес любого направления.</p>
                    </div>
                    <ul className='comment__list'>
                        <li className='comment__item'>Обратилась в битубит  в конце  прошлого года. Ребята помогли правильно расставить приоритеты. Готовый сайт превысил мои ожидания. Логичная структура, современный дизайн, удобный интерфейс - далеко не все положительные моменты. Увидев результаты, захотелось расширить специфику деятельности и стать владельцем еще одного ресурса, который приносит реальную прибыль. Рекомендую!&quot;</li>
                        <li className='comment__item'>До того, как обратиться в агентство битубит , я имел неудачный опыт работы с разработчиками сайтов. До этого проект закрыл по вине предыдущих исполнителей. Ушло немало денег на ветер! Что я имею сегодня, после полугода сотрудничества с профессионалами? Крутой сайт, на который заходит исключительно целевая аудитория. Не думал, что с помощью онлайн-ресурса можно реализовать все задумки.&quot;</li>
                        <li className='comment__item'>Выражаю благодарность сотрудникам компании Битубит, видно, что в штате работают профессионалы. Я поставил конкретные цели. Специалисты порекомендовали расширить перечень задач, чтобы проект получился гармоничным. Думал, что нескольких месяцев на реализацию не хватит, но ошибся, Сайт был сдан в срок! Наше продуктивное сотрудничество длится по сей день.</li>
                    </ul>
                    <Swiper pagination={true} modules={[Pagination]} className="comment__slider">
                        <SwiperSlide >
                            <li className='comment__item'>Обратилась в битубит  в конце  прошлого года. Ребята помогли правильно расставить приоритеты. Готовый сайт превысил мои ожидания. Логичная структура, современный дизайн, удобный интерфейс - далеко не все положительные моменты. Увидев результаты, захотелось расширить специфику деятельности и стать владельцем еще одного ресурса, который приносит реальную прибыль. Рекомендую!&quot;</li>
                        </SwiperSlide>
                        <SwiperSlide >
                            <li className='comment__item'>До того, как обратиться в агентство битубит , я имел неудачный опыт работы с разработчиками сайтов. До этого проект закрыл по вине предыдущих исполнителей. Ушло немало денег на ветер! Что я имею сегодня, после полугода сотрудничества с профессионалами? Крутой сайт, на который заходит исключительно целевая аудитория. Не думал, что с помощью онлайн-ресурса можно реализовать все задумки.&quot;</li>
                        </SwiperSlide>
                        <SwiperSlide >
                            <li className='comment__item'>Выражаю благодарность сотрудникам компании Битубит, видно, что в штате работают профессионалы. Я поставил конкретные цели. Специалисты порекомендовали расширить перечень задач, чтобы проект получился гармоничным. Думал, что нескольких месяцев на реализацию не хватит, но ошибся, Сайт был сдан в срок! Наше продуктивное сотрудничество длится по сей день.</li>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <Form title='Готовый сайт через 5 дней' descr='Закажите прямо сейчас' />
            <Footer />
        </div>
    )
}

export default Software