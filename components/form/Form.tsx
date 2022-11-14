import React, { FC, useState } from 'react'
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


interface FormProps {
    title: any,
    descr: any,
}

const Form: FC<FormProps> = ({ title, descr }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const { register, handleSubmit, formState: { errors } } = useForm();

    const addUser = () => {
        toast('Информация отправлена на почту', {
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

    return (
        <div className='form' id='form'>
            <div className='form__container container'>
                <div className='form__case'>
                    <div className='form__text'>
                        <h2 className='form__title'>{title}</h2>
                        <p className='form__description'>{descr}</p>
                    </div>
                    <div className='form__info'>
                        <form className='form__data'>
                            <ul className='form__list'>
                                <li className='form__item'>
                                    <input {...register('name', { required: true, minLength: 4, maxLength: 50 })} className='form__input' type="text" placeholder='ФИО' onChange={e => setName(e.target.value)} value={name} />
                                    {errors.name?.type === 'required' && <div style={{ color: 'red', top: ' -10px', left: '30px', position: 'relative' }}>Поле ФИО не должно быть пустое</div>}
                                    {errors.name?.type === 'maxLength' && <div style={{ color: 'red', top: ' -10px', left: '30px', position: 'relative' }}>Поле ФИО не должно быть больше 50 символов</div>}
                                    {errors.name?.type === 'minLength' && <div style={{ color: 'red', top: ' -10px', left: '30px', position: 'relative' }}>Поле ФИО не должно быть меньше 4 символов</div>}
                                </li>
                                <li className='form__item'>
                                    <input {...register('phone', { required: true, pattern: /^[\d]{1} \([\d]{2,3}\) [\d]{2,3}-[\d]{2,3}-[\d]{2,3}$/ })} className='form__input' type="text" placeholder='Телефон' onChange={e => setPhone(e.target.value)} value={phone} />
                                    {errors.phone?.type === 'required' && <div style={{ color: 'red', top: ' -10px', left: '30px', position: 'relative' }}>Поле Мобильный не должно быть пустое</div>}
                                    {errors.phone?.type === 'pattern' && <div style={{ color: 'red', top: ' -10px', left: '30px', position: 'relative' }}>Поле Мобильный не правильной формы</div>}
                                </li>
                                <li className='form__item'>
                                    <input {...register('email', { required: true, pattern: /^[\w]{1}[\w-.]*@[\w-]+\.[a-z]{2,4}$/i })} className='form__input' type="text" placeholder='E-mail' onChange={e => setEmail(e.target.value)} value={email} />
                                    {errors.email?.type === 'required' && <div style={{ color: 'red', top: ' -10px', left: '30px', position: 'relative' }}>Поле E-mail не должно быть пустое</div>}
                                    {errors.email?.type === 'pattern' && <div style={{ color: 'red', top: ' -10px', left: '30px', position: 'relative' }}>Поле E-mail не правильной формы</div>}
                                </li>
                                <li className='form__item'>
                                    <textarea className='form__input' placeholder='Комментарий' cols={30} rows={10}></textarea>
                                </li>
                            </ul>
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
                            <button onClick={handleSubmit(addUser)} className='form__btn'>Обсудить проект</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form