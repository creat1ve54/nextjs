import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { IStagesItem } from '.'
import Footer from '../components/footer/Footer'
import Form from '../components/form/Form'
import Main from '../components/main/Main'
import StagesItem from '../components/stagesItem/StagesItem'
import { StageSvg1, StageSvg2, StageSvg3, StageSvg6 } from '../components/svg/StageSvg'

import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import uuid from 'react-uuid'
import Image from 'next/image'



import animation1 from '../image/project/project__animation/project__animation1.png'
import animation11 from '../image/project/project__animation/project__animation1.1.png'
import animation12 from '../image/project/project__animation/project__animation1.2.png'
import animation13 from '../image/project/project__animation/project__animation1.3.png'
import animation14 from '../image/project/project__animation/project__animation1.4.png'
import animation15 from '../image/project/project__animation/project__animation1.5.png'

import animation2 from '../image/project/project__animation/project__animation2.png'
import animation21 from '../image/project/project__animation/project__animation2.1.png'




const StagesItemProject: IStagesItem[] = [
    { img: <StageSvg1 />, title: 'Оформляйте заявку' },
    { img: <StageSvg2 />, title: 'Выбирайте дизайн' },
    { img: <StageSvg3 />, title: 'Импортируйте товары' },
    { img: <StageSvg6 />, title: 'Запускайте сайт' }
]



const ServicesItemOneState: Array<string> = [
    'Главная страница с типовой структурой',
    'Каталог товаров',
    'Страница контактов с Яндекс картой',
    'Типовая текстовая страница',
    'Адаптивный формат под всё',
    'Мобильные устройства',
    'Готовый продукт под рекламу',
    'SEO: управление мета-тегами (товар, блог)'
]

const ServicesItemTwoState: Array<string> = [
    'Каталог',
    'Поиск по товарам',
    'Сортировка по наименованию, цене',
    'Признаки товара (акция, новинка)',
    'Размещение до 2000 товаров на сайте',
    'Карточка товара с набором полей и признаков',
    'Старя цена/новая цена (цена для акции)',
    'Добавление и удаление товарав корзину',
    'Изменение количества товара',
    'Оплата с сайта (наличная/безналичная оплата)',
    'Авторизация и регистрация пользователя на сайте',
    'SEO: управление мета-тегами (товар, блог)'
]



const ServicesItemThreeState: Array<string> = [
    'Пакет «Готовый интернет магазин»',
    'История заказов',
    'Подключение Яндекс.Метрики, Analytics.Google',
    'Интеграция с одним сервисом',
    'Сервисы доставки на выбор (СДЭК, DPD, ПЭК)',
    'Интеграция с 1С (каталог и товары, заказы с сайта)',
    'Интеграция с Instagram',
]

const Project = () => {
    const [email, setEmail] = useState('');
    const [click, setClick] = useState(false);

    let newServicesItemOneState: Array<string> = []
    let newServicesItemTwoState: Array<string> = []
    let newServicesItemThreeState: Array<string> = []

    const { register, handleSubmit, formState: { errors } } = useForm();

    const addUser = () => {
        toast('Спасибо за обращение, вам в течение 5 минут ответят!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    const ItemLength = () => {
        for (let i = 0; i < ServicesItemOneState.length; i++) {
            if (i > 7) {
                break
            }
            newServicesItemOneState.push(ServicesItemOneState[i])
        }
        for (let i = 0; i < ServicesItemTwoState.length; i++) {
            if (i > 7) {
                break
            }
            newServicesItemTwoState.push(ServicesItemTwoState[i])
        }
        for (let i = 0; i < ServicesItemThreeState.length; i++) {
            if (i > 7) {
                break
            }
            newServicesItemThreeState.push(ServicesItemThreeState[i])
        }
    }
    ItemLength()

    const onItemState = () => {
        setClick(!click)
    }

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
        <>
            <Head>
                <title>Project</title>
                <meta name="description" content="Сайт каталог, интернет-магазин!" />
                <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, uswe" />
                <meta name="keywords" content="сайт визитка, готовый интернет магазин, готовое решение" />
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>
            <Main caption={<React.Fragment>Нет времени ждать? <br /> Готовое решение для вашего бизнеса в 4 шага</React.Fragment>} title='Сайт каталог, интернет-магазин!' className='main__three' />
            <div className='phase'>
                <div className='phase__container container'>
                    <div className='phase__case'>
                        <div className='phase__left'>
                            <StagesItem info={StagesItemProject} className='stages--three' />
                        </div>
                        <div className='phase__right'>
                            <form className='phase__form'>
                                <h2 className='phase__title'>Начните свой бизнес прямо сейчас</h2>
                                <input {...register('email', { required: true, pattern: /^[\w]{1}[\w-.]*@[\w-]+\.[a-z]{2,4}$/i })} onChange={e => setEmail(e.target.value)} value={email} className='phase__input' type="text" placeholder='Введите свой E-mail' />
                                {errors.email?.type === 'required' && <div style={{ color: 'red', top: ' -10px', left: '17px', position: 'relative', width: '300px' }}>Поле не должно быть пустое</div>}
                                {errors.email?.type === 'pattern' && <div style={{ color: 'red', top: ' -10px', left: '17px', position: 'relative', width: '300px' }}>Поле не правильной формы</div>}
                                <ToastContainer position="top-right"
                                    autoClose={3000}
                                    hideProgressBar
                                    newestOnTop
                                    closeOnClick
                                    rtl={false}
                                    pauseOnFocusLoss
                                    draggable
                                    pauseOnHover={false}
                                    theme="colored" />
                                <button onClick={handleSubmit(addUser)} className='phase__btn'>Создать сайт</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className='services'>
                <div className='services__container container'>
                    <ul className='services__list'>
                        <li className='services__item'>
                            <div className='services__up'>
                                <h2 className='services__title'>Сайт визитка /Каталог товаров /услуг</h2>
                                <ul className='services__info info' onClick={ItemLength}>
                                    {
                                        newServicesItemOneState.map(text => <li key={uuid()} className='info__item'>{text}</li>)
                                    }
                                </ul>
                            </div>
                            <div className='services__down'>
                                <div className='services__price'>
                                    <p>15 000 ₽</p>
                                </div>
                                <a href="#form" className='services__btn'>Заказать</a>
                            </div>
                        </li>
                        <li className='services__item'>
                            <div className='services__up'>
                                <h2 className='services__title'>Готовый интернет магазин</h2>
                                <ul className='services__info info'>
                                    {!click
                                        ? newServicesItemTwoState.map(text => <li key={uuid()} className='info__item'>{text}</li>)
                                        : ServicesItemTwoState.map(text => <li key={uuid()} className='info__item'>{text}</li>)
                                    }
                                </ul>
                                <div className='services__down'>
                                    <div className='services__click' onClick={onItemState}>
                                        {
                                            !click ? 'Развернуть' : 'Скрыть'
                                        }
                                    </div>
                                </div>
                                <div className='services__price'>
                                    <p>26 000 ₽</p>
                                </div>
                                <a href="#form" className='services__btn'>Заказать</a>
                            </div>
                        </li>
                        <li className='services__item'>
                            <div className='services__up'>
                                <h2 className='services__title'>Сайт визитка /Каталог товаров /услуг</h2>
                                <ul className='services__info info'>
                                    {
                                        newServicesItemThreeState.map(text => <li key={uuid()} className='info__item'>{text}</li>)
                                    }
                                </ul>
                            </div>
                            <div className='services__down'>
                                <div className='services__price'>
                                    <p>45 000 ₽</p>
                                </div>
                                <a href="#form" className='services__btn'>Заказать</a>
                            </div>
                        </li>
                    </ul>
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
            <Form title='Готовый сайт через 5 дней' descr='Закажите прямо сейчас' />
            <Footer />
        </>
    )
}

export default Project