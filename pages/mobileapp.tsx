import Head from 'next/head'
import React from 'react'
import { IDevelopmentMain } from '.'
import Development from '../components/development/Development'
import Main from '../components/main/Main'


const DevelopmentMobileAppInfo: IDevelopmentMain[] = [
    { number: '01', title: 'Разработка', description: 'Разработка приложений любой сложности и функционала (IOS, Android)' },
    { number: '02', title: 'Прототипирование', description: 'Продумывание концепции, логики работы и функционала приложения, формирование тех. задания' },
    { number: '03', title: 'Контент', description: 'Производство контента: фото, видеоматериалы, инфографика, продающие тексты' },
    { number: '04', title: 'Дизайн', description: 'Создание UX / UI дизайн макетов, Разработка индивидуального привлекательного и удобного интерфейса' },
    { number: '05', title: 'Интеграция', description: 'Интеграция с существующими системами клиента или подключение к новым для взаимодействия с мобильным приложением (1С, Битрикс 24, СRM и др.)' },
    { number: '06', title: 'Поддержка', description: 'Полное техническое сопровождение, Обновления и доработка / Синхронизация и рефакторинг версий / Адаптация под новые устройства / Аналитика и статистика' },
]

const MobileApp = () => {
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
        </div>
    )
}

export default MobileApp