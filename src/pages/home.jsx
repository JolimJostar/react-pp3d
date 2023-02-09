import { Link } from "react-router-dom";
import React, { useRef } from 'react';
import Image8 from "../images/image 8.jpg"
import Image9 from "../images/image 9.png"
import Image10 from "../images/image 10.png"
import Image11 from "../images/image 11.png"
import Image12 from "../images/image 12.png"
import Image13 from "../images/image 13.png"
import Image14 from "../images/image 14.png"
import Image15 from "../images/image 15.png"
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
import Logo from "../images/logo.png"
import RedatorImage from "../images/redactor.jpg"
import PortfolioCard from "../components/portfoilo_card"
import FaqCard from "../components/faq-card"
import emailjs from '@emailjs/browser';
import EmailjsData from '../helpers/email'
import toast from 'react-simple-toasts';



function Home() {

    const form = useRef();

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

            <div className="flex centered centered-alingment h-100vh overflow-hidden">
                <div className='initial_bloc'>
                    <h1 className="h-240">Стильный альбом<br />для твоего<br />класса</h1>
                    <div className="h-16"></div>
                    <div className="h-105"></div>
                    <div className="flex centered">
                        <button>Оставить заявку</button>
                        <div className="w-80"></div>
                        <button>Открыть редактор</button>
                    </div>
                    <img src={Logo} alt="" className="logo" />
                </div>
            </div>
            <div className="flex column centered-alingment">
                <div className="flex centered">
                    <h1>Примеры работ</h1>
                </div>
                <div className="h-40"></div>
                <div className="portfolio-image-holder">
                    <figure >
                        <img className="portfolio-image" src={Image8} alt="" />
                    </figure>
                    <figure>
                        <img className="portfolio-image" src={Image10} alt="" />
                    </figure>
                    <figure >
                        <img className="portfolio-image" src={Image13} alt="" />
                    </figure>
                    <figure >
                        <img className="portfolio-image" src={Image9} alt="" />
                    </figure>
                    <figure >
                        <img className="portfolio-image" src={Image11} alt="" />
                    </figure>
                    <figure >
                        <img className="portfolio-image" src={Image15} alt="" />
                    </figure>
                    <figure >
                        <img className="portfolio-image" src={Image12} alt="" />
                    </figure>
                    <figure>
                        <img className="portfolio-image" src={Image14} alt="" />
                    </figure>
                </div>
                <div className="w-1200 flex column centered-baseline">

                    <div className="h-100vh flex centered pv-100">
                        <div className="flex row centered-alingment">
                            <div className="flex column centered">
                                <h1>Создай альбом<br />своей мечты</h1>
                                <div className="h-24"></div>
                                <h3>В нашем онлайн редакторе, ты сможешь<br />выбрать дизайн и структуру альбома.<br />Сделай то, что подходит именно тебе!</h3>
                                <div className="h-40"></div>
                                <button>Открыть редактор</button>
                            </div>
                            <div className="w-87"></div>
                            <div className="redactor-image flex  centered">
                                <img src={RedatorImage} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="flex column centered-alingment">
                        <div>
                            <h1>Варианты альбомов</h1>

                        </div>
                        <div className="h-48"></div>
                        <div className="flex row gap-24 centered">
                            <PortfolioCard
                                images={[SimpleIcon, CarouselSimpleImage1, CarouselSimpleImage2, CarouselSimpleImage3, CarouselSimpleImage4]} price={2000} bigPoints={[
                                    '• Один съемочный день',
                                    '• Портреты всех одноклассников на двух разворотах',
                                    '• 2 страницы с групповыми фото по 4-7 человек',
                                ]}
                                smallPoints={[
                                    '• Портрет классного руководителя с пожеланиями классу и все учителя, которых вы приведете на съёмку',
                                    '• Разворот с общей фотографией всего класса',
                                ]}
                            />
                            <PortfolioCard
                                images={[StandartIcon, CarouselStandartImage1, CarouselStandartImage2, CarouselStandartImage3, CarouselStandartImage4, CarouselStandartImage5, CarouselStandartImage6]} price={2000} bigPoints={[
                                    '• Один съемочный день',
                                    '• Портреты всех одноклассников на двух разворотах',
                                    '• 2 страницы с групповыми фото по 4-7 человек',
                                ]}
                                smallPoints={[
                                    '• Портрет классного руководителя с пожеланиями классу и все учителя, которых вы приведете на съёмку',
                                    '• Разворот с общей фотографией всего класса',
                                ]}
                            />
                            <PortfolioCard
                                images={[UniqeIcon, CarouselUniqeImage1, CarouselUniqeImage2, CarouselUniqeImage3, CarouselUniqeImage4, CarouselUniqeImage5, CarouselUniqeImage6]} price={2000} bigPoints={[
                                    '• Один съемочный день',
                                    '• Портреты всех одноклассников на двух разворотах',
                                    '• 2 страницы с групповыми фото по 4-7 человек',
                                ]}
                                smallPoints={[
                                    '• Портрет классного руководителя с пожеланиями классу и все учителя, которых вы приведете на съёмку',
                                    '• Разворот с общей фотографией всего класса',
                                ]}
                            />
                        </div>
                        <div className="h-40"></div>
                        <h2>Каждый альбом имеет</h2>
                        <div className="h-12"></div>
                        <p>Размер 21х30см. </p>
                        <p >Матовую ламинацию страниц. </p>
                        <p >вердый переплет А4. </p>
                    </div>
                    <div className="h-200"></div>
                    <div className="">
                        <h1>Дополнительные услуги</h1>
                        <div className="h-56"></div>
                        <div className="flex row">
                            <h2 className="text-center lh-78">1.</h2>
                            <div className="w-24"></div>
                            <h2 className="weight-300">Общая фотография класса с печатью<br />на фотобумаге 30х20см - <b>1000 ₽</b></h2>
                        </div>
                        <div className="h-40"></div>
                        <div className="flex row">
                            <h2 className="text-center">2.</h2>
                            <div className="w-24"></div>
                            <h2 className="weight-300">Добавление разворота в альбом - <b>300 ₽</b>/шт.</h2>
                        </div>
                        <div className="h-40"></div>
                        <div className="flex row">
                            <h2 className="text-center">2.</h2>
                            <div className="w-24"></div>
                            <h2 className="weight-300">Добавить портрет на обложку - <b>300 ₽</b></h2>
                        </div>
                        <div className="h-40"></div>
                        <div className="flex row">
                            <h2 className="text-center">2.</h2>
                            <div className="w-24"></div>
                            <h2 className="weight-300">Досъём пропустивших  - <b>4000 ₽</b></h2>
                        </div>
                    </div>
                    <div className="h-200"></div>
                    <h1>Вопросы и ответы</h1>
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
                    <div className="flex column centered-alingment w-100">
                        <h1>Остались вопросы?</h1>
                        <div className="h-16"></div>
                        <h3>Задайте их, заполнив форму обратной связи.</h3>
                        <div className="h-40"></div>
                        <form ref={form} onSubmit={sendEmail} className='flex column centered-alingment w-588'>
                            <input type="text" required name="firstname" placeholder="Имя" className="w-100" />
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
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;