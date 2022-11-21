import Image from 'next/image'
import React, { useState } from 'react'
import logo from '../../image/logo.svg'

import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {

    const [click, setClick] = useState(true)

    const onBurger = () => {
        setClick(!click)
        if (click) {
            document.querySelector('.popup__one')?.classList.add('popup__one--active')
            document.querySelector('.header__burger')?.classList.add('header__burger--active')
        } else {
            document.querySelector('.popup__one')?.classList.remove('popup__one--active')
            document.querySelector('.header__burger')?.classList.remove('header__burger--active')
        }

    }

    const router = useRouter();
    return (
        <div className='header'>
            <div className='header__container container'>
                <div className='header__case'>
                    <div className='header__logo'>
                        <Link href='/'>
                            <Image priority src={logo} alt='Logo' />
                        </Link>
                    </div>
                    <ul className='header__list'>
                        <li className={router.pathname === '/' ? 'header__item header__item--active' : 'header__item'}>
                            <Link href='/'>Web</Link>
                        </li>
                        <li className={router.pathname === '/mobileapp' ? 'header__item header__item--active' : 'header__item'}>
                            <Link href='/mobileapp'>Mobile App</Link>
                        </li>
                        <li className={router.pathname === '/project' ? 'header__item header__item--active' : 'header__item'}>
                            <Link href='/project'>Готовые решения</Link>
                        </li>
                        <li className={router.pathname === '/software' ? 'header__item header__item--active' : 'header__item'}>
                            <Link href='/software'>ПО</Link>
                        </li>
                    </ul>
                    <ul className='header__contacts contacts'>
                        <li className="contacts__item">
                            <a href='tel:88007775955'>8 800 777 59 55</a>
                        </li>
                        <li className="contacts__item">
                            <a href='mailto:info.@bitoobit.ru'>info.@bitoobit.ru</a>
                        </li>
                    </ul>
                </div>

                <div className='header__mobile'>
                    <Link href='/'>
                        <Image priority src={logo} alt='Logo' />
                    </Link>
                    <div className='header__phone'>
                        <a href='tel:88007775955'>8 800 777 59 55</a>
                    </div>
                    <div className='header__burger' onClick={onBurger}>
                        <span></span>
                    </div>
                </div>
            </div>

            <div className='header__popup popup popup__one'>
                <ul className='popup__list'>
                    <li className='popup__item'>
                        <Link href='/'>Web</Link>
                    </li>
                    <li className='popup__item'>
                        <Link href='/mobileapp'>Mobile App</Link>
                    </li>
                    <li className='popup__item'>
                        <Link href='/project'>Готовые решения</Link>
                    </li>
                    <li className='popup__item'>
                        <Link href='/software'>ПО</Link>
                    </li>
                    <li className='popup__item'>
                        <Link href='/about'>О нас</Link>
                    </li>
                    <li className='popup__item'>
                        <a href='mailto:info.@bitoobit.ru'>info.@bitoobit.ru</a>
                    </li>
                </ul>
            </div>
        </div >
    )
}

export default Header