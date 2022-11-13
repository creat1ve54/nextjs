import React, { FC } from 'react'

interface FormProps {
    title: any,
    descr: any,
}

const Form: FC<FormProps> = ({title, descr}) => {

    return (
        <div className='form'>
            <div className='form__container container'>
                <div className='form__case'>
                    <div className='form__text'>
                        <h2 className='form__title'>{title}</h2>
                        <p className='form__description'>{descr}</p>
                    </div>
                    <div className='form__info'>
                        <form className='form__data'>
                            <input className='form__input' type="text" placeholder='ФИО' />
                            <input className='form__input' type="text" placeholder='Телефон' />
                            <input className='form__input' type="text" placeholder='E-mail' />
                            <textarea className='form__input' placeholder='Комментарий' cols={30} rows={10}></textarea>
                            <button className='form__btn'>Обсудить проект</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form