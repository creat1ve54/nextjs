import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import logo from '../../image/logo.svg'

import facebook from '../../image/footer/facebook.svg'
import inst from '../../image/footer/inst.svg'
import vk from '../../image/footer/vk.svg'
import viber from '../../image/footer/viber.svg'
import telegram from '../../image/footer/telegram.svg'
import whatsapp from '../../image/footer/whatsapp.svg'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer__container container'>
                <ul className='footer__case'>
                    <li className='footer__item'>
                        <Image src={logo} alt='Footer Logo' className='footer__logo' />
                    </li>
                    <li className='footer__item'>
                        <ul className='footer__list'>
                            <li className='footer__link'>
                                <Link href='/'>Web</Link>
                            </li>
                            <li className='footer__link'>
                                <Link href='/mobileapp'>Mobile App</Link>
                            </li>
                            <li className='footer__link'>
                                <Link href='/project'>Готовые решения</Link>
                            </li>
                            <li className='footer__link'>
                                <Link href='/software'>ПО</Link>
                            </li>
                            <li className='footer__link'>
                                <Link href='/about'>О нас</Link>
                            </li>
                        </ul>
                    </li>
                    <li className='footer__item'>
                        <div className='footer__info'>
                            <a className='footer__phone' href='tel:88007775955'>
                                <div className='footer__number'>8 800 777 59 55</div>
                                <div className='footer__call'>Заказать обратный звонок</div>
                            </a>
                            <div className='footer__address'>г. Краснодар, ул. Бабушкина, 189 </div>
                        </div>
                    </li>
                    <li className='footer__item'>
                        <div className='footer__social'>
                            <a className='footer__icon' href="##">
                                <Image className='footer__telegram' src={telegram} alt='Telegram' />
                            </a>
                            <a className='footer__icon' href="##">
                                <Image className='footer__viber' src={viber} alt='Viber' />
                            </a>
                            <a className='footer__icon' href="##">
                                <Image className='footer__whatsapp' src={whatsapp} alt='Whatsapp' />
                            </a>
                        </div>
                        <a className='footer__online' href="tel:88007775955">Online консультация <br /> <span className='footer__style'>по телефону 8 800 777 59 55</span></a>
                    </li>
                </ul>
                <div className='footer__under'>
                    <div className='footer__law'>&copy;&nbsp;2021&nbsp;Bitoobit. Все права защищены</div>
                    <div className='footer__soc'>
                        <a href="##" className='footer__facebook'>
                            <Image src={facebook} alt='Facebook' />
                        </a>
                        <a href="##" className='footer__vk'>
                            <Image src={vk} alt='Vk' />
                        </a>
                        <a href="##" className='footer__inst'>
                            <Image src={inst} alt='Inst' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer