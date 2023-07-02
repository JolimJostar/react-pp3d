import { Link } from "react-router-dom";
import React, { useRef, useState } from 'react';
import Image1 from "../images/image 1.png"
import Image2 from "../images/image 2.png"
import Image3 from "../images/image 3.png"
import Image9 from "../images/image 9.png"
import Image11 from "../images/image 11.png"
import Image12 from "../images/image 12.png"
import Image13 from "../images/image 13.png"
import Image15 from "../images/image 15.png"
import InstaLogo from "../images/insta.svg"
import VkLogo from "../images/vk.svg"
import TgLogo from "../images/telagram.svg"
import CloseMenu from "../images/close-menu.svg"
import CarouselSimpleImage1 from "../images/carousel/simple/1.jpg"
import CarouselSimpleImage2 from "../images/carousel/simple/2.jpg"
import CarouselSimpleImage3 from "../images/carousel/simple/3.jpg"
import CarouselSimpleImage4 from "../images/carousel/simple/4.jpg"
import CarouselStandartImage1 from "../images/carousel/standart/1.jpg"
import CarouselStandartImage2 from "../images/carousel/standart/2.jpg"
import CarouselStandartImage3 from "../images/carousel/standart/3.jpg"
import CarouselStandartImage4 from "../images/carousel/standart/4.jpg"
import CarouselStandartImage5 from "../images/carousel/standart/5.jpg"
import CarouselStandartImage6 from "../images/carousel/standart/6.jpg"
import CarouselUniqeImage1 from "../images/carousel/uniqe/1.jpg"
import CarouselUniqeImage2 from "../images/carousel/uniqe/2.jpg"
import CarouselUniqeImage3 from "../images/carousel/uniqe/3.jpg"
import CarouselUniqeImage4 from "../images/carousel/uniqe/4.jpg"
import CarouselUniqeImage5 from "../images/carousel/uniqe/5.jpg"
import CarouselUniqeImage6 from "../images/carousel/uniqe/6.jpg"
import SimpleIcon from "../images/simple.svg"
import StandartIcon from "../images/standart.svg"
import UniqeIcon from "../images/uniqe.svg"
import RedatorImage from "../images/redactor.svg"
import RedatorImageHalf from "../images/redactor_half.svg"
import PortfolioCard from "../components/portfoilo_card"
import PortfolioCardMobile from "../components/portfolio_card_mobile"
import FaqCard from "../components/faq-card"
import LoadingScreen from "../components/loading_screen"
import Menu from "../components/menu"
import emailjs from '@emailjs/browser';
import EmailjsData from '../helpers/email'
import toast from 'react-simple-toasts';
import Modal from '../components/modal'
import InitialVideo from '../components/initial-video'
import { motion, useAnimationControls } from "framer-motion"
import { useEffect } from "react";
import Cookies from 'universal-cookie';

const cookies = new Cookies();

function checkSession() {
    if (cookies.get('visited') === 'true') {
        console.log('visited');
        return false;
    } else {
        cookies.set('visited', 'true', { path: '/', maxAge: 7200 });
        console.log('not visited');
        return true;
    }
}

const firstLoad = checkSession();

function Home() {

    const form = useRef();
    const [modal, setModal] = useState(false);
    const [mainPhotoLoaded, setMainPhotoLoaded] = useState(false);
    const [mainPhotoReady, setMainPhotoReady] = useState(false);
    const [menuActive, setMenuActive] = useState(true);
    const headerControls = useAnimationControls();
    const buttonsControls = useAnimationControls();
    const imageControls = useAnimationControls();

    const mainRef = useRef(null);
    const primeryRef = useRef(null);
    const redactorRef = useRef(null);
    const albumsRef = useRef(null);
    const dopRef = useRef(null);
    const qnaRef = useRef(null);

    useEffect(() => {
        if (mainPhotoReady || !firstLoad) {
            headerControls.start({
                x: 0,
                opacity: 1,
            });
            buttonsControls.start({
                y: 0,
                opacity: 1,
            })
            imageControls.start(i => ({
                opacity: 1,
                y: 0,
                transition: { delay: firstLoad ? (0.5 + (i * 0.3)) : 0 },
            }))
        }
    }, [mainPhotoReady]);

    const variants = {
        hidden: { opacity: firstLoad ? 0 : 1 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            }
        }
    }

    const item = {
        hidden: {
            opacity: firstLoad ? 0 : 1,
            x: firstLoad ? -50 : 0,
        },
        show: {
            opacity: 1,
            x: 0,

        }
    }
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(EmailjsData.SERVICE_ID, EmailjsData.TEMPLATE_ID, form.current, EmailjsData.PUBLIC_KEY)
            .then((result) => {
                toast('Успешно отправленно', { className: 'toast' });
                form.current.reset();
            }, (error) => {
                toast('Произошла ошибка', { className: 'toast' });
            });

    };

    return (
        <div >
            <LoadingScreen in={!mainPhotoLoaded} />
            <Modal onClose={() => { setModal(false); }} in={modal} />
            <div className="initial_bloc_wrapper" ref={mainRef}>
                <div className='initial_bloc' >
                    <motion.div
                        initial={{
                            x: -50,
                            opacity: 0,
                        }}
                        animate={headerControls}
                        transition={{ ease: "easeOut", duration: 0.5 }}
                    >
                        <h1 className="h-240 title">Стильный альбом<br />для твоего<br />класса</h1>
                    </motion.div>
                    <div className="h-16 phone-hidden"></div>
                    <div className="h-105 "></div>
                    <motion.div
                        initial={{
                            y: 50,
                            opacity: 0,
                        }}
                        animate={buttonsControls}
                        transition={{ ease: "easeOut", duration: 0.5 }}
                    >
                        <div className="flex centered">
                            <button onClick={() => setModal(true)}>Оставить заявку</button>
                            <div className="w-80 phone-hidden"></div>
                            <button className="phone-hidden"><Link to={'/redactor'} style={{ textDecoration: 'inherit', color: 'inherit' }}>Открыть редактор</Link></button>
                        </div>
                    </motion.div>
                    <InitialVideo isFirstTime={firstLoad} onVideoEnd={() => setMainPhotoReady(true)} onLoaded={() => { setMainPhotoLoaded(true) }} in={mainPhotoLoaded} />
                </div>
            </div>
            <div className="flex column centered-alingment">
                <motion.div
                    ref={primeryRef}
                    initial={{
                        y: -50,
                        opacity: 0,
                    }}
                    animate={buttonsControls}
                    transition={{ ease: "easeOut", duration: 0.5, delay: 0.5 }}
                >
                    <div className="flex centered">
                        <h1>Примеры работ</h1>
                    </div>
                </motion.div>
                <div className="h-40"></div>

                <div className="portfolio-image-holder">
                    <motion.div initial={{ y: -30, opacity: 0, }} custom={0} animate={imageControls} >
                        <figure style={{ width: '100%', height: '100%' }}>
                            <img className="portfolio-image" src={Image11} alt="" />
                        </figure>
                    </motion.div>
                    <motion.div initial={{ y: -30, opacity: 0, }} custom={1} animate={imageControls} >
                        <figure style={{ width: '100%', height: '100%' }}>
                            <img className="portfolio-image" src={Image1} alt="" />
                        </figure>
                    </motion.div>
                    <motion.div initial={{ y: -30, opacity: 0, }} custom={2} animate={imageControls} >
                        <figure style={{ width: '100%', height: '100%' }}>
                            <img className="portfolio-image" src={Image12} alt="" />
                        </figure>
                    </motion.div>
                    <motion.div initial={{ y: -30, opacity: 0, }} custom={3} animate={imageControls} >
                        <figure style={{ width: '100%', height: '100%' }}>
                            <img className="portfolio-image" src={Image9} alt="" />
                        </figure>
                    </motion.div>
                    <motion.div initial={{ y: -30, opacity: 0, }} custom={4} animate={imageControls} >
                        <figure style={{ width: '100%', height: '100%' }}>
                            <img className="portfolio-image" src={Image2} alt="" />
                        </figure>
                    </motion.div>
                    <motion.div initial={{ y: -30, opacity: 0, }} custom={5} animate={imageControls} >
                        <figure style={{ width: '100%', height: '100%' }}>
                            <img className="portfolio-image" src={Image13} alt="" />
                        </figure>
                    </motion.div>
                    <motion.div initial={{ y: -30, opacity: 0, }} custom={6} animate={imageControls} >
                        <figure style={{ width: '100%', height: '100%' }}>
                            <img className="portfolio-image" src={Image15} alt="" />
                        </figure>
                    </motion.div>
                    <motion.div initial={{ y: -30, opacity: 0, }} custom={7} animate={imageControls} >
                        <figure style={{ width: '100%', height: '100%' }}>
                            <img className="portfolio-image" src={Image3} alt="" />
                        </figure>
                    </motion.div>
                </div>

                <div className="main-content-holder">

                    <div className="redactor-card-wrapper">
                        <div className="flex row centered-alingment" ref={redactorRef}>
                            <div className="flex column centered start-alingment" >
                                <motion.div
                                    initial={{
                                        x: firstLoad ? -50 : 0,
                                        opacity: firstLoad ? 0 : 1,
                                    }}
                                    whileInView={{
                                        x: 0,
                                        opacity: 1,

                                    }}
                                    viewport={{ once: true, amount: 0.8 }}
                                    transition={{ ease: "easeOut", duration: 0.5 }}
                                >
                                    <h1>Собери альбом<br />для своего<br />класса</h1>
                                    <div className="h-24 phone-hidden"></div>
                                    <div className="h-6 pc-hidden"></div>
                                    <h3 className="phone-hidden">В нашем онлайн редакторе, ты сможешь<br />выбрать дизайн и структуру альбома.<br />Сделай то, что подходит именно тебе!</h3>
                                    <p className="pc-hidden smallest-text">В нашем онлайн редакторе,<br />вы сможете выбрать дизайн<br />и структуру альбома. Сделайте<br />то, что подходит именно вам! </p>
                                    <div className="h-40 phone-hidden"></div>
                                    <div className="h-20 pc-hidden"></div>
                                    <button><Link to={'/redactor'} style={{ textDecoration: 'inherit', color: 'inherit' }}>Открыть редактор</Link></button>
                                </motion.div>
                            </div>
                            <div className="w-87 phone-hidden"></div>
                            <motion.div
                                initial={{
                                    x: firstLoad ? 50 : 0,
                                    opacity: firstLoad ? 0 : 1,
                                }}
                                whileInView={{
                                    x: 0,
                                    opacity: 1,

                                }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ ease: "easeOut", duration: 0.5 }}
                            >
                                <div className="redactor-image flex  centered phone-hidden">
                                    <img src={RedatorImage} alt="" />
                                </div>
                            </motion.div>
                            <div className="redactor-image flex  centered pc-hidden">
                                <img src={RedatorImageHalf} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="flex column centered-alingment w-100" ref={albumsRef}>
                        <motion.div
                            initial={{
                                y: firstLoad ? 50 : 0,
                                opacity: firstLoad ? 0 : 1,
                            }}
                            whileInView={{
                                y: 0,
                                opacity: 1,

                            }}
                            viewport={{ once: true, amount: 0.8 }}
                            transition={{ ease: "easeOut", duration: 0.5 }}
                        >
                            <h1>Варианты альбомов</h1>
                        </motion.div>
                        <div className="h-48"></div>
                        <motion.div

                            initial={{
                                y: firstLoad ? 50 : 0,
                                opacity: firstLoad ? 0 : 1,
                            }}
                            whileInView={{
                                y: 0,
                                opacity: 1,

                            }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ ease: "easeOut", duration: 0.5 }}
                        >
                            <div className="portfolio-card-wrapper-mobile">
                                <PortfolioCardMobile
                                    title={'Простой'}
                                    images={[SimpleIcon, CarouselSimpleImage1, CarouselSimpleImage2, CarouselSimpleImage3, CarouselSimpleImage4]}
                                    price={2000}
                                    bigPoints={[
                                        'Портреты всех одноклассников на двух разворотах',
                                        '2 страницы с групповыми фото по 4-7 человек',
                                    ]}
                                    smallPoints={[
                                        'Учителя и портрет классного руководителя',
                                        'Разворот с общим фото',
                                    ]}
                                />

                                <PortfolioCardMobile
                                    title={'Стандартный'}
                                    images={[StandartIcon, CarouselStandartImage1, CarouselStandartImage2, CarouselStandartImage3, CarouselStandartImage4, CarouselStandartImage5, CarouselStandartImage6]}
                                    price={3000}
                                    bigPoints={[
                                        'У каждого страница с портретом и местом под цитату',
                                        '4 страницы с групповыми фото по 4-7 человек',
                                    ]}
                                    smallPoints={[
                                        'Учителя и портрет классного руководителя',
                                        'Разворот с общим фото',
                                    ]}
                                />

                                <PortfolioCardMobile
                                    title={'Уникальный'}
                                    images={[UniqeIcon, CarouselUniqeImage1, CarouselUniqeImage2, CarouselUniqeImage3, CarouselUniqeImage4, CarouselUniqeImage5, CarouselUniqeImage6]}
                                    price={5000}
                                    bigPoints={[
                                        'Новый дизайн альбома',
                                        'Фото-стилизация портрета',
                                        'Подбор одежды на съёмку',
                                        'Индивидуальная вёрстка альбома',
                                        'Съёмки в студиях или в городе',
                                    ]}
                                    smallPoints={[]}
                                />
                            </div>
                            <div className="portfolio-card-wrapper">
                                <PortfolioCard
                                    title={'Простой'}
                                    images={[SimpleIcon, CarouselSimpleImage1, CarouselSimpleImage2, CarouselSimpleImage3, CarouselSimpleImage4]}
                                    price={2000}
                                    bigPoints={[
                                        'Портреты всех одноклассников на двух разворотах',
                                        '2 страницы с групповыми фото по 4-7 человек',
                                    ]}
                                    smallPoints={[
                                        'Учителя и портрет классного руководителя',
                                        'Разворот с общим фото',
                                    ]}
                                />

                                <PortfolioCard
                                    title={'Стандартный'}
                                    images={[StandartIcon, CarouselStandartImage1, CarouselStandartImage2, CarouselStandartImage3, CarouselStandartImage4, CarouselStandartImage5, CarouselStandartImage6]}
                                    price={3000}
                                    bigPoints={[
                                        'У каждого страница с портретом и местом под цитату',
                                        '4 страницы с групповыми фото по 4-7 человек',
                                    ]}
                                    smallPoints={[
                                        'Учителя и портрет классного руководителя',
                                        'Разворот с общим фото',
                                    ]}
                                />

                                <PortfolioCard
                                    title={'Уникальный'}
                                    images={[UniqeIcon, CarouselUniqeImage1, CarouselUniqeImage2, CarouselUniqeImage3, CarouselUniqeImage4, CarouselUniqeImage5, CarouselUniqeImage6]}
                                    price={5000}
                                    bigPoints={[
                                        'Новый дизайн альбома',
                                        'Фото-стилизация портрета',
                                        'Подбор одежды на съёмку',
                                        'Индивидуальная вёрстка альбома',
                                        'Съёмки в студиях или в городе',
                                    ]}
                                    smallPoints={[]}
                                />
                            </div>
                        </motion.div>
                        <div className="h-40"></div>
                        <h3 className='phone-hidden'><b>Каждый альбом имеет</b></h3>
                        <h3 className='pc-hidden'><b>Каждый альбом имеет</b></h3>
                        <div className="h-12"></div>
                        <p className='phone-hidden weight-400'>Размер 21х30см. </p>
                        <p className='phone-hidden weight-400'>Матовую ламинацию страниц. </p>
                        <p className='phone-hidden weight-400'>Твердый переплет А4. </p>
                        <h4 className='pc-hidden weight-400'>Размер 21х30см. </h4>
                        <h4 className='pc-hidden weight-400'>Матовую ламинацию страниц. </h4>
                        <h4 className='pc-hidden weight-400'>Твердый переплет А4. </h4>
                    </div>
                    <div className="h-200"></div>
                    <motion.div
                        ref={dopRef}
                        variants={variants}
                        initial='hidden'
                        whileInView='show'
                        viewport={{ once: true, amount: 0.6 }}
                        transition={{ ease: "easeOut", duration: 0.5 }}
                    >
                        <div className="mh-24">
                            <h1>Дополнительные услуги</h1>
                            <div className="h-56"></div>
                            <motion.div
                                variants={item}
                                transition={{ ease: "easeOut", duration: 0.5 }}
                            >

                                <div className="flex row">
                                    <h2 className="text-center ">1.</h2>
                                    <div className="additional-service-devider flex-shrink-0"></div>
                                    <h2 className="weight-400 additional-service-text">Индивидуальная верстка альбома - <b>500 ₽</b></h2>
                                </div>
                            </motion.div>
                            <div className="h-40"></div>
                            <motion.div
                                variants={item}
                                transition={{ ease: "easeOut", duration: 0.5 }}
                            >

                                <div className="flex row">
                                    <h2 className="text-center ">2.</h2>
                                    <div className="additional-service-devider flex-shrink-0"></div>
                                    <h2 className="weight-400 additional-service-text">Добавление разворота в альбом - <b>200 ₽</b>/шт.</h2>
                                </div>
                            </motion.div>
                            <div className="h-40"></div>
                            <motion.div
                                variants={item}
                                transition={{ ease: "easeOut", duration: 0.5 }}
                            >

                                <div className="flex row">
                                    <h2 className="text-center ">3.</h2>
                                    <div className="additional-service-devider flex-shrink-0"></div>
                                    <h2 className="weight-400 additional-service-text">Добавить портрет на обложку - <b>300 ₽</b></h2>
                                </div>
                            </motion.div>
                            <div className="h-40"></div>
                            <motion.div
                                variants={item}
                                transition={{ ease: "easeOut", duration: 0.5 }}
                            >

                                <div className="flex row">
                                    <h2 className="text-center">4.</h2>
                                    <div className="additional-service-devider flex-shrink-0"></div>
                                    <h2 className="weight-400  ">Досъём пропустивших  - <b>4000 ₽</b></h2>
                                </div>
                            </motion.div>
                            <div className="h-40"></div>
                            <motion.div
                                variants={item}
                                transition={{ ease: "easeOut", duration: 0.5 }}
                            >

                                <div className="flex row">
                                    <h2 className="text-center">5.</h2>
                                    <div className="additional-service-devider flex-shrink-0"></div>
                                    <h2 className="weight-400  ">Общая фотография класса с печатью<br />на фотобумаге 30х20см (без альбома) - <b>800 ₽</b> </h2>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                    <div className="h-200"></div>
                    <div className="FAQ">
                        <h1 ref={qnaRef}>Вопросы и ответы</h1>
                        <div className="h-40"></div>
                        <div className="divider"></div>
                        <FaqCard title='С ЧЕГО ВСЁ НАЧИНАЕТСЯ?' body='Обсуждаем состав альбома, детали и место съёмки, заключаем договор, вносится предоплата.' />
                        <FaqCard title='ПРЕДОПЛАТА?' body='Она составляет 50% от стоимости заказа. Остальные 50% ­­– при получении альбомов на руки.' />
                        <FaqCard title='СКОЛЬКО АЛЬБОМОВ НЕОБХОДИМО ДЛЯ ФОРМИРОВАНИЯ ЗАКАЗА?' body='От 15 штук, в других случаях цена рассчитывается индивидуально.' />
                        <FaqCard title='ЗА СКОЛЬКО ДНЕЙ МЫ ВСЁ ОТСНИМЕМ?' body='Обычно это один день, если нет дополнительных съёмок и пропустивших.' />
                        <FaqCard title='А ЕСЛИ КТО-ТО ЗАБОЛЕЛ?' body='Можно перенести съёмку или заболевших отснять отдельно в другой день.' />
                        <FaqCard title='СКОЛЬКО ДЛИТСЯ СЪЁМКА?' body='Съёмка класса занимает от 3 до 6 часов. В это время включены подготовка помещений и организационные моменты. Мы начинаем с общей фотографии, делаем групповые и переходим к индивидуальным.' />
                        <FaqCard title='КАКИЕ СРОКИ ИЗГОТОВЛЕНИЯ АЛЬБОМА?' body='От фотосессии до получения альбомов на руки - от 3 до 9 недель. Больше всего на сроки влияет скорость выбора фотографий, если клиент оперативно всё выберет, то через 3 дня макет будет собран, еще 3 дня уйдут на внесение правок и исправления, потом печать и доставка альбомов за неделю-две.' />
                        <FaqCard title='КАК МЫ БУДЕМ ВЫБИРАТЬ ФОТОГРАФИИ?' body='В процессе съёмки вам будут показывать фото, чтобы не было сомнений в наличии удачных кадров. В тот же день отправят 2 ссылки: на облако с фотографиями и на таблицу, куда нужно будет записать номера выбранных фото, имя с фамилией и цитату.' />
                        <FaqCard title='ВЫ БУДЕТЕ ОБРАБАТЫВАТЬ ФОТОГРАФИИ?' body='Каждое фото в альбоме обрабатывается. Мы делаем профессиональную ретушь и цветокоррекцию. Можете не переживать, все будут красивыми)' />
                        <FaqCard title='ЧТО ТАКОЕ ИНДИВИДУАЛЬНАЯ ВЁРСТКА?' body='По умолчанию во всех альбомах фото и их расположение одинаковые, но можно это изменить. Например, добавить фотографию на обложку или добавить в свой альбом один разворот. Также можно менять местами страницы – поместить свой разворот в начало альбома. Это может сделать весь класс и у каждого в начале альбома будет его индивидуальный разворот. Ещё можно поменять обложку в своем альбоме.' />
                        <FaqCard title='МОЖНО В ОДНОМ КЛАССЕ ВЫБРАТЬ РАЗНЫЕ ВАРИАНТЫ АЛЬБОМА?' body='Нет, вариант (простой, стандартный, уникальный) альбома один на класс. Можно менять обложки и наполнение альбома.' />
                        <FaqCard title='ЧТО НАДЕТЬ НА СЪЁМКУ?' body='На общую фотографию лучше одеться в одном стиле, беспроигрышный вариант - официально деловой. На портретную – одежда всё так же может быть в официально-деловом стиле. Однако, если кто-то хочет переодеться во что-то другое - без проблем. Есть шанс, что обувь попадёт в кадр и лучше, чтобы она была чистая. Это же касается и рук.' />
                        <div className="h-200"></div>
                    </div>
                    <div className="flex column centered-alingment w-100">
                        <h1>Остались вопросы?</h1>
                        <div className="h-16 phone-hidden"></div>
                        <div className="h-8 pc-hidden"></div>
                        <h3 className="phone-hidden weight-200">Задайте их, заполнив форму обратной связи.</h3>
                        <h4 className="pc-hidden weight-200">Задайте их, заполнив форму обратной связи.</h4>
                        <div className="h-40 phone-hidden"></div>
                        <div className="h-20 pc-hidden"></div>
                        <form ref={form} onSubmit={sendEmail} className='flex column centered-alingment request-form'>
                            <input type="text" required name="name" placeholder="Имя" className="w-100" />
                            <div className="h-40"></div>
                            <input type="phone" required name="phone" placeholder="Телефон" className="w-100" />
                            <div className="h-40"></div>
                            <input type="text" name="messenger" placeholder="Месенджер" className="w-100" />
                            <div className="h-40"></div>
                            <textarea name="message" placeholder="Ваши вопросы" style={{ minHeight: '120px' }} className="w-100" />
                            <div className="h-24"></div>
                            <button type="submit" >Отправить</button>
                        </form>
                        <div className="h-150"></div>
                        <div className="footer-icons">
                            <a href="https://instagram.com/dan.yashkin?igshid=OGQ5ZDc2ODk2ZA==" target='_blank' rel="noreferrer" >
                                <img src={InstaLogo} alt="" />
                            </a>
                            <a href="https://vk.com/danyyash" target='_blank' rel="noreferrer">
                                <img src={VkLogo} alt="" />
                            </a>
                            <a href="https://t.me/danyyash" target='_blank' rel="noreferrer">
                                <img src={TgLogo} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;