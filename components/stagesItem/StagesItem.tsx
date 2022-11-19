import React, { FC } from 'react'
import uuid from 'react-uuid'
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

interface InfoItem {
    img: React.ReactNode,
    title: string,
    description: string,
}



interface IInfo {
    info: Array<InfoItem>
    className?: string
}


const StagesItem: FC<IInfo> = ({ info, className }) => {
    return (
        <div className={`stages ${className}`}>
            <div className='stages__container container'>
                <h2 className='stages__title'>Этапы работы над проектом</h2>
                <ul className='stages__list'>
                    {info.map(({ img, title, description }) => {
                        return (
                            <li key={uuid()} className='stages__item'>
                                {img}
                                <h4 className='stages__caption'>{title}</h4>
                                <p className='stages__description'>{description}</p>
                            </li>
                        )
                    })}
                </ul>
                <div className='stages__slider'>
                    <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                        {info.map(({ img, title, description }) => {
                            return (
                                <SwiperSlide key={uuid()}>
                                    <li className='stages__item'>
                                        {img}
                                        <h4 className='stages__caption'>{title}</h4>
                                        <p className='stages__description'>{description}</p>
                                    </li>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default StagesItem