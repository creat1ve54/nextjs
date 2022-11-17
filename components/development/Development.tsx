import React, { FC } from 'react'

interface InfoItem {
    number: string,
    title: string,
    description: string,
}


interface IInfo {
    info: Array<InfoItem>
    className?: string
}

const Development: FC<IInfo> = ({ info, className }) => {
    return (
        <div className={`development ${className}`}>
            <div className='development__container'>
                <ul className='development__list'>
                    {info.map(({ number, title, description }) => {
                        return (
                            <li key={number} className='development__item'>
                                <h4 className='development__number'>{number}</h4>
                                <h3 className='development__title'>{title}</h3>
                                <p className='development__description'>{description}</p>
                                <div>
                                    <a href="#form" className='development__btn'>Заказать</a>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Development