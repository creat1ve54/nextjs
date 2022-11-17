import Head from 'next/head'
import Image from 'next/image'
import { FC, Fragment, useState } from 'react'
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";


import BitoobitSvg from '../components/svg/BitoobitSvg'


import logo1 from '../image/sites/logo1.svg'
import logo2 from '../image/sites/logo2.svg'
import logo3 from '../image/sites/logo3.svg'
import logo4 from '../image/sites/logo4.svg'
import logo45 from '../image/sites/logo4.5.svg'

import logo41 from '../image/sites/4.1logo.png'
import logo42 from '../image/sites/4.2logo.png'
import logo43 from '../image/sites/4.3logo.png'
import logo44 from '../image/sites/4.4logo.png'

import gif from '../image/sites/3.1logo.gif'
import bgImage from '../image/sites/logo2.1.png'

import stackImg from '../image/stack__img.png'

import profil1 from '../image/profil1.svg'

import teamImg from '../image/team__img.png'

import reviews1 from '../image/reviews/reviews1.png'
import reviews2 from '../image/reviews/reviews2.png'
import reviews3 from '../image/reviews/reviews3.png'
import reviews4 from '../image/reviews/reviews4.png'
import reviews5 from '../image/reviews/reviews5.png'
import reviews6 from '../image/reviews/reviews6.png'
import reviews7 from '../image/reviews/reviews7.png'

import { StageSvg1, StageSvg2, StageSvg3, StageSvg4, StageSvg5, StageSvg6 } from '../components/svg/StageSvg'


import Form from '../components/form/Form';
import Footer from '../components/footer/Footer';
import Main from '../components/main/Main';
import Development from '../components/development/Development';



export interface IDevelopmentMain {
  number: string,
  title: string,
  description: string,
}


const DevelopmentMainInfo: IDevelopmentMain[] = [
  { number: '01', title: 'Интернет-магазин', description: 'Переведёт ваши продажи в онлайн' },
  { number: '02', title: 'Корпоротивный сайт', description: 'Расскажет о ваших ценностях, познакомит с вами клиентов, повысит их лояльность' },
  { number: '03', title: 'Каталог', description: 'Покажет все разнообразие ваших товаров и услуг. Позволит продвигаться с помощью поисковых систем' },
  { number: '04', title: 'Визитка', description: 'Ничего лишнего, только важное. Оптимальный вариант для экспертов и малых предприятий' },
  { number: '05', title: 'Landing page', description: 'Поможет вам обосноваться в интернете. Первый шаг к маркетинговому продвижению' },
]



export default function Home() {

  const [click, setClick] = useState(true)

  const onPlayGIf = () => {
    setClick(!click)
    if (click) {
      document.querySelector('.sites__imgAnimation')?.classList.add('sites__item--active')
    } else {
      document.querySelector('.sites__imgAnimation')?.classList.remove('sites__item--active')
    }
  }

  return (
    <div className='web'>
      <Head>
        <title>Web</title>
        <meta name="description" content="Сайты, интернет-магазины, которые продают" />
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, uswe" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Main className='main__one' caption='Мы не обещаем, мы делаем!' title='Сайты, интернет-магазины, которые продают' />
      <Development className='development__one' info={DevelopmentMainInfo} />
      <div className='bitoobit'>
        <div className='bitoobit__container container'>
          <h2 className='bitoobit__title'>Сайты от Bitoobit - это</h2>
          <ul className='bitoobit__list'>
            <li className='bitoobit__item'>
              <BitoobitSvg />
              <h3 className='bitoobit__caption'>Любая<br /> сложность</h3>
              <p className='bitoobit__description'>10&nbsp;лет успешной работы,<br /> в&nbsp;разработке сайтов для бизнеса</p>
            </li>
            <li className='bitoobit__item'>
              <BitoobitSvg />
              <h3 className='bitoobit__caption'>Удобство<br />и надежность</h3>
              <p className='bitoobit__description'>Срок, перечень работ и&nbsp;цена закреплены в&nbsp;договоре. Не&nbsp;навязываем сопровождение</p>
            </li>
            <li className='bitoobit__item'>
              <BitoobitSvg />
              <h3 className='bitoobit__caption'>Опытные<br /> разработчики</h3>
              <p className='bitoobit__description'>Более 20&nbsp;сотрудников в&nbsp;штате. Мы&nbsp;гарантируем строгое соблюдение сроков</p>
            </li>
            <li className='bitoobit__item'>
              <BitoobitSvg />
              <h3 className='bitoobit__caption'>Безопасность<br /> данных</h3>
              <p className='bitoobit__description'>Особое внимание уделяем безопасности и&nbsp;защищенности ваших данных</p>
            </li>
            <li className='bitoobit__item'>
              <BitoobitSvg />
              <h3 className='bitoobit__caption'>Функциональность</h3>
              <p className='bitoobit__description'>Создаем сайты, с&nbsp;которыми удобно работать на&nbsp;любом устройстве: планшете, телефоне или&nbsp;ПК</p>
            </li>
            <li className='bitoobit__item'>
              <BitoobitSvg />
              <h3 className='bitoobit__caption'>Передача всех доступов</h3>
              <p className='bitoobit__description'>По&nbsp;окончанию работы над проектом передаем все доступы и&nbsp;исключительные права на&nbsp;проект</p>
            </li>
          </ul>
          <div className='bitoobit__slider'>
            <Swiper pagination={true} modules={[Pagination]} className="swiper--two">
              <SwiperSlide>
                <li className='bitoobit__item'>
                  <BitoobitSvg />
                  <h3 className='bitoobit__caption'>Любая сложность</h3>
                  <p className='bitoobit__description'>10&nbsp;лет успешной работы, в&nbsp;разработке сайтов для бизнеса</p>
                </li>
              </SwiperSlide>
              <SwiperSlide>
                <li className='bitoobit__item'>
                  <BitoobitSvg />
                  <h3 className='bitoobit__caption'>Удобство и надежность</h3>
                  <p className='bitoobit__description'>Срок, перечень работ и&nbsp;цена закреплены в&nbsp;договоре. Не&nbsp;навязываем сопровождение</p>
                </li>
              </SwiperSlide>
              <SwiperSlide>
                <li className='bitoobit__item'>
                  <BitoobitSvg />
                  <h3 className='bitoobit__caption'>Опытные разработчики</h3>
                  <p className='bitoobit__description'>Более 20&nbsp;сотрудников в&nbsp;штате. Мы&nbsp;гарантируем строгое соблюдение сроков</p>
                </li>
              </SwiperSlide>
              <SwiperSlide>
                <li className='bitoobit__item'>
                  <BitoobitSvg />
                  <h3 className='bitoobit__caption'>Безопасность данных</h3>
                  <p className='bitoobit__description'>Особое внимание уделяем безопасности и&nbsp;защищенности ваших данных</p>
                </li>
              </SwiperSlide>
              <SwiperSlide>
                <li className='bitoobit__item'>
                  <BitoobitSvg />
                  <h3 className='bitoobit__caption'>Функциональность</h3>
                  <p className='bitoobit__description'>Создаем сайты, с&nbsp;которыми удобно работать на&nbsp;любом устройстве: планшете, телефоне или&nbsp;ПК</p>
                </li>
              </SwiperSlide>
              <SwiperSlide>
                <li className='bitoobit__item'>
                  <BitoobitSvg />
                  <h3 className='bitoobit__caption'>Передача всехдоступов</h3>
                  <p className='bitoobit__description'>По&nbsp;окончанию работы над проектом передаем все доступы и&nbsp;исключительные права на&nbsp;проект</p>
                </li>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <div className='sites'>
        <ul className='sites__list'>
          <div className='sites__case'>
            <li className='sites__item'>
              <Image className='sites__img' src={logo1} alt={'Logo Site'} />
              <p className='sites__description'>Разработка сайта</p>
              <h3 className='sites__title'>Тандор</h3>
            </li>
            <li className='sites__item sites__imgAnimation' onClick={onPlayGIf}>
              <Image className='sites__img' src={logo2} alt={'Logo Site'} />
              <Image className='sites__bgImage' src={bgImage} alt={'Logo Site'} />
              <p className='sites__description'>Разработка сайта</p>
              <h3 className='sites__title'>Оптовик</h3>
            </li>
          </div>
          <div className='sites__case'>
            <li className='sites__item'>
              <Image className='sites__img' src={logo3} alt={'Logo Site'} />
              <Image className='sites__gif' src={gif} alt={'Gif'} />
              <p className='sites__description'>Разработка сайта</p>
              <h3 className='sites__title'>Фортуна</h3>
            </li>
            <li className='sites__item sites__imgHover'>
              <Image className='sites__img' src={logo4} alt={'Logo Site'} />
              <Image className='sites__unvisibleImg' src={logo45} alt={'Logo Site'} />

              <Image className='sites__unvisibleImgOne' src={logo41} alt={'Logo Site'} />
              <Image className='sites__unvisibleImgTwo' src={logo42} alt={'Logo Site'} />
              <Image className='sites__unvisibleImgThree' src={logo43} alt={'Logo Site'} />
              <Image className='sites__unvisibleImgFour' src={logo44} alt={'Logo Site'} />
              <p className='sites__description'>Разработка сайта</p>
              <h3 className='sites__title'>Патрик и Мари</h3>
            </li>
          </div>
        </ul>
      </div>
      <div className='stages'>
        <div className='stages__container'>
          <h2 className='stages__title'>Этапы работы над проектом</h2>
          <ul className='stages__list'>
            <div className='stages__case'>
              <li className='stages__item'>
                <StageSvg1 />
                <h4 className='stages__caption'>Анализируем задачу</h4>
                <p className='stages__description'>Встречаемся с&nbsp;вами, выясняем ваши потребности, задаем дополнительные вопросы. Чем лучше разработчики будут понимать особенности бизнеса, тем эффективнее будет совместная работа.</p>

              </li>
              <li className='stages__item'>
                <StageSvg2 />
                <h4 className='stages__caption'>Утверждаем ТЗ</h4>
                <p className='stages__description'>Оформляем в&nbsp;виде технического задания пожелания к&nbsp;функционалу и&nbsp;оформлению сайта. Согласовываем его с&nbsp;вами.</p>
              </li>
              <li className='stages__item'>
                <StageSvg3 />
                <h4 className='stages__caption'>Разрабатываем прототип</h4>
                <p className='stages__description'>Создаем прототип сайта&nbsp;&mdash; его схематичную версию с&nbsp;основными функциональными блоками и&nbsp;структурными элементами: меню и&nbsp;кнопками. Прописываем логику работы сайта. Прежде чем перейти к&nbsp;дальнейшему этапу, согласовываем прототип с&nbsp;вами.</p>
              </li>
            </div>
            <div className='stages__case'>
              <li className='stages__item'>
                <StageSvg4 />
                <h4 className='stages__caption'>Внедряем и сопровождаем сайт</h4>
                <p className='stages__description'>Вводим новый сайт в&nbsp;вашу IT-систему (объединяем с&nbsp;1С, CRM и&nbsp;т.д.), составляем и&nbsp;отправляем вам всю необходимую документацию.</p>
              </li>
              <li className='stages__item'>
                <div className='stages__hover'>
                  <StageSvg5 />
                  <h4 className='stages__caption'>Программируем и тестируем</h4>
                  <p className='stages__description'>Разработчики пишут код и&nbsp;тестируют все функции сайта</p>
                </div>
              </li>
              <li className='stages__item'>
                <StageSvg6 />
                <h4 className='stages__caption'>Разрабатываем дизайн</h4>
                <p className='stages__description'>К&nbsp;работе приступают дизайнеры, которые на&nbsp;базе брендбука и&nbsp;прототипа создают стильное и&nbsp;функциональное оформление сайта.</p>
              </li>
            </div>
          </ul>
          <div className='stages__slider'>
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
              <SwiperSlide>
                <li className='stages__item'>
                  <StageSvg1 />
                  <h4 className='stages__caption'>Анализируем задачу</h4>
                  <p className='stages__description'>Встречаемся с&nbsp;вами, выясняем ваши потребности, задаем дополнительные вопросы. Чем лучше разработчики будут понимать особенности бизнеса, тем эффективнее будет совместная работа.</p>
                </li>
              </SwiperSlide>
              <SwiperSlide>
                <li className='stages__item'>
                  <StageSvg2 />
                  <h4 className='stages__caption'>Утверждаем ТЗ</h4>
                  <p className='stages__description'>Оформляем в&nbsp;виде технического задания пожелания к&nbsp;функционалу и&nbsp;оформлению сайта. Согласовываем его с&nbsp;вами.</p>
                </li>
              </SwiperSlide>
              <SwiperSlide>
                <li className='stages__item'>
                  <StageSvg3 />
                  <h4 className='stages__caption'>Разрабатываем прототип</h4>
                  <p className='stages__description'>Создаем прототип сайта&nbsp;&mdash; его схематичную версию с&nbsp;основными функциональными блоками и&nbsp;структурными элементами: меню и&nbsp;кнопками. Прописываем логику работы сайта. Прежде чем перейти к&nbsp;дальнейшему этапу, согласовываем прототип с&nbsp;вами.</p>
                </li>
              </SwiperSlide>
              <SwiperSlide>
                <li className='stages__item'>
                  <StageSvg6 />
                  <h4 className='stages__caption'>Разрабатываем дизайн</h4>
                  <p className='stages__description'>К&nbsp;работе приступают дизайнеры, которые на&nbsp;базе брендбука и&nbsp;прототипа создают стильное и&nbsp;функциональное оформление сайта.</p>
                </li>
              </SwiperSlide>
              <SwiperSlide>
                <li className='stages__item'>
                  <div className='stages__hover'>
                    <StageSvg5 />
                    <h4 className='stages__caption'>Программируем и тестируем</h4>
                    <p className='stages__description'>Разработчики пишут код и&nbsp;тестируют все функции сайта</p>
                  </div>
                </li>
              </SwiperSlide>
              <SwiperSlide>
                <li className='stages__item'>
                  <StageSvg4 />
                  <h4 className='stages__caption'>Внедряем и сопровождаем сайт</h4>
                  <p className='stages__description'>Вводим новый сайт в&nbsp;вашу IT-систему (объединяем с&nbsp;1С, CRM и&nbsp;т.д.), составляем и&nbsp;отправляем вам всю необходимую документацию.</p>
                </li>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <div className='stack'>
        <div className='stack__container'>
          <div className='stack__case'>
            <div className='stack__text'>
              <h3 className='stack__title'>Технологии, которые мы используем</h3>
              <p className='stack__description'>Наши разработчики постоянно повышают свою квалификацию, поэтому они в&nbsp;курсе всех изменений в&nbsp;современных технологиях. Работая с&nbsp;нами, вы&nbsp;получаете доступ к&nbsp;самым передовым и&nbsp;эффективным разработкам.</p>
            </div>
            <Image src={stackImg} alt='Stack Img' />
          </div>
        </div>
      </div>
      <div className='reviews'>
        <div className='reviews__container container'>
          <div className='reviews__case reviews__case--one'>
            <h2 className='reviews__title'>Они доверяют нам</h2>
            <p className='reviews__description'>Мы&nbsp;не&nbsp;просто пишем программы&nbsp;&mdash; нам важен ваш результат. Чтобы вовремя ответить на&nbsp;вопросы и&nbsp;учесть все пожелания, наши разработчики будут постоянно с&nbsp;вами на&nbsp;связи.</p>
            <p className='reviews__describe'>Мы&nbsp;работаем с&nbsp;любыми бизнес-направлениями &mdash; <br />и&nbsp;они только выигрывают от&nbsp;этого.</p>
          </div>
          <div className='reviews__case reviews__case--two'>
            <div className='reviews__case reviews__case--three'>
              <Image className='reviews__company reviews__company--reviews1' src={reviews1} alt='Company 1' />
              <Image className='reviews__company reviews__company--reviews7' src={reviews7} alt='Company 7' />
              <Image className='reviews__company reviews__company--reviews6' src={reviews6} alt='Company 6' />
              <Image className='reviews__company reviews__company--reviews5' src={reviews5} alt='Company 5' />
            </div>
            <div className='reviews__case reviews__case--four'>
              <Image className='reviews__company reviews__company--reviews2' src={reviews2} alt='Company 2' />
              <Image className='reviews__company reviews__company--reviews3' src={reviews3} alt='Company 3' />
              <Image className='reviews__company reviews__company--reviews4' src={reviews4} alt='Company 4' />
            </div>
          </div>
        </div>
        <div className='reviews__slider slider container'>
          <h3 className='slider__title'>Лучшая награда для нас - отзывы наших клиентов</h3>
          <Swiper pagination={true} modules={[Pagination]} className="swiper--one">
            <SwiperSlide>
              <p className='slider__description'>Работаю с&nbsp;битубитом не&nbsp;очень давно, но&nbsp;уже в&nbsp;восторге. Никакого навязывания услуг&nbsp;&mdash; наоборот, очень помогли понять, что именно мне нужно, и&nbsp;грамотно расставить приоритеты. Сайтом очень довольна! Выглядит очень стильно, пользоваться удобно&nbsp;&mdash; так логично все выстроено, любой разберется. Так довольна результатами, что теперь думаю: может, мне новый бизнес запустить, раз таких помощников с&nbsp;сайтами себе нашла? У&nbsp;меня всегда с&nbsp;этим был затык, а&nbsp;теперь я&nbsp;спокойна. А&nbsp;главное&nbsp;&mdash; прибыль уже идет!</p>
              <div className='slider__profil'>
                <Image src={profil1} alt='Img Profil' />
                <div className='slider__text'>
                  <h4 className='slider__caption'>Воронин Евгений</h4>
                  <h5 className='slider__label'>Компания &laquo;Оптовик&raquo;</h5>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <p className='slider__description'>Работаю с&nbsp;битубитом не&nbsp;очень давно, но&nbsp;уже в&nbsp;восторге. Никакого навязывания услуг&nbsp;&mdash; наоборот, очень помогли понять, что именно мне нужно, и&nbsp;грамотно расставить приоритеты. Сайтом очень довольна! Выглядит очень стильно, пользоваться удобно&nbsp;&mdash; так логично все выстроено, любой разберется. Так довольна результатами, что теперь думаю: может, мне новый бизнес запустить, раз таких помощников с&nbsp;сайтами себе нашла? У&nbsp;меня всегда с&nbsp;этим был затык, а&nbsp;теперь я&nbsp;спокойна. А&nbsp;главное&nbsp;&mdash; прибыль уже идет!</p>
              <div className='slider__profil'>
                <Image src={profil1} alt='Img Profil' />
                <div className='slider__text'>
                  <h4 className='slider__caption'>Воронин Евгений</h4>
                  <h5 className='slider__label'>Компания &laquo;Оптовик&raquo;</h5>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <p className='slider__description'>Работаю с&nbsp;битубитом не&nbsp;очень давно, но&nbsp;уже в&nbsp;восторге. Никакого навязывания услуг&nbsp;&mdash; наоборот, очень помогли понять, что именно мне нужно, и&nbsp;грамотно расставить приоритеты. Сайтом очень довольна! Выглядит очень стильно, пользоваться удобно&nbsp;&mdash; так логично все выстроено, любой разберется. Так довольна результатами, что теперь думаю: может, мне новый бизнес запустить, раз таких помощников с&nbsp;сайтами себе нашла? У&nbsp;меня всегда с&nbsp;этим был затык, а&nbsp;теперь я&nbsp;спокойна. А&nbsp;главное&nbsp;&mdash; прибыль уже идет!</p>
              <div className='slider__profil'>
                <Image src={profil1} alt='Img Profil' />
                <div className='slider__text'>
                  <h4 className='slider__caption'>Воронин Евгений</h4>
                  <h5 className='slider__label'>Компания &laquo;Оптовик&raquo;</h5>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className='team'>
        <div className='team__container container'>
          <div className='team__case'>
            <h2 className='team__title'>
              <span className='team__style'>Dream </span>
              team
            </h2>
            <p className='team__description'>Наши разработчики постоянно повышают свою квалификацию, поэтому они в&nbsp;курсе всех изменений в&nbsp;современных технологиях. Работая с&nbsp;нами, вы&nbsp;получаете доступ к&nbsp;самым передовым и&nbsp;эффективным разработкам.</p>
          </div>
          <Image src={teamImg} alt='Team Img' />
        </div>
      </div>
      <Form title={'Мы готовы начать уже сегодня!'} descr={'Зaпoлнитe пoжaлуйcтa фopму нижe, чтoбы мы cмoгли cвязaтьcя c Baми и oтпpaвить KП'} />
      <Footer />
    </div >
  )
}
