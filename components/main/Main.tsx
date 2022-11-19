import React, { FC } from 'react'
import Header from '../header/Header'


interface MainProps {
    className: string,
    caption: string,
    title: string
}

const Main: FC<MainProps> = ({ className, caption, title }) => {
    const onGoAnimation = () => {
        document.querySelector('.main__pineapple')?.classList.add('main__pineapple--active')
        setTimeout(() => { document.querySelector('.main__gamepad')?.classList.add('main__gamepad--active') }, 1500)
    }

    const onGoMainTwoAnimation = () => {
        document.querySelector('.main__animation')?.classList.add('main__animation--active')
        document.querySelector('.main__animation')?.setAttribute('style', 'pointer-events: none', )
        document.querySelector('.main__animation--two')?.setAttribute('style', 'pointer-events: none')
        document.querySelector('.main__phone__one')?.classList.add('main__phone__one--active')
        setTimeout(() => { document.querySelector('.main__phone__one')?.classList.remove('main__phone__one--active') }, 1500)
        setTimeout(() => { document.querySelector('.main__phone__two')?.classList.add('main__phone__two--active') }, 3000)
        setTimeout(() => { document.querySelector('.main__phone__two')?.classList.remove('main__phone__two--active') }, 4500)
        setTimeout(() => { document.querySelector('.main__phone__three')?.classList.add('main__phone__three--active') }, 6000)
    }
    return (
        <div className={`main ${className}`}>
            <div className='main__frame' onClick={onGoAnimation}></div>
            <div className='main__pineapple'></div>
            <div className='main__animation' onClick={onGoMainTwoAnimation}></div>
            <div className='main__animation main__animation--two' onClick={onGoMainTwoAnimation} ></div>
            <div className='main__phone main__phone__one'></div>
            <div className='main__phone main__phone__two'></div>
            <div className='main__phone main__phone__three'></div>
            <div className='main__gamepad'></div>
            <Header />
            <div className='main__container container'>
                <div className='main__text'>
                    <h2 className='main__caption'>{caption}</h2>
                    <h1 className='main__title'>{title}</h1>
                </div>
                <div className='main__link'>
                    <a href="#form" className='main__btn btn__shadow'>Узнать стоимость</a>
                </div>
            </div>
        </div>
    )
}

export default Main