import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { useSwipeable } from 'react-swipeable';
import Video from '../components/video'
import Transition from '../components/transition'
import Modal from '../components/modal'
import "/node_modules/video-react/dist/video-react.css";
import BlackCover from "../images/black_cover.jpg"
import WhiteCover from "../images/white_cover.jpg"
import UniqeCover from "../images/uniqe_cover.jpg"
import BlackCoverFull from "../images/black_cover_full.png"
import WhiteCoverFull from "../images/white_cover_full.png"
import UniqeCoverFull from "../images/uniqe_cover_full.png"
import UniqeFilling from "../images/uniqe_filling.png"
import SimpleIcon from "../images/simple.svg"
import StandartIcon from "../images/standart.svg"
import UniqeIcon from "../images/uniqe.svg"
import ArrowBack from "../images/arrow_back.svg"
import InitialVideo from '../videos/1.mp4';
import FirstStepVideo from '../videos/2.mp4';
import SecondStepVideo from '../videos/3.mp4';
import ThirdStepVideo from '../videos/4.mp4';
import FourthStepVideo from '../videos/5.mp4';
import ReverceInitialVideo from '../videos/21.mp4';
import ReverceFirstStepVideo from '../videos/22.mp4';
import ReverceSecondStepVideo from '../videos/23.mp4';
import ReverceThirdStepVideo from '../videos/24.mp4';
import ReverceFourthStepVideo from '../videos/25.mp4';
import FirstStepVideoWhite from '../videos/s2.mp4';
import SecondStepVideoWhite from '../videos/s3.mp4';
import ThirdStepVideoWhite from '../videos/s4.mp4';
import FourthStepVideoWhite from '../videos/s5.mp4';
import ReverceInitialVideoWhite from '../videos/s21.mp4';
import ReverceFirstStepVideoWhite from '../videos/s22.mp4';
import ReverceSecondStepVideoWhite from '../videos/s23.mp4';
import ReverceThirdStepVideoWhite from '../videos/s24.mp4';
import ReverceFourthStepVideoWhite from '../videos/s25.mp4';

function Redactor(props) {
    const [activePage, setActivePage] = useState(0);
    const [desiredPage, setDesiredPage] = useState(0);
    const [activeCover, setActiveCover] = useState(1);
    const [desiredCover, setDesiredCover] = useState(1);
    const [activeFilling, setActiveFilling] = useState(0);
    const [desiredFilling, setDesiredFilling] = useState(0);
    const [activeVideoPart, setActiveVideoPart] = useState(0);
    const [desiredVideoPart, setDesiredVideoPart] = useState(0);
    const [playBackRate, setPlayBackRate] = useState(1);
    const [reversed, setReversed] = useState(false);
    const [transitioning, setTransitioning] = useState(false);
    const [modal, setModal] = useState(false);
    const initialVideoRef = useRef(null);
    const FirstVideoRef = useRef(null);
    const SecondVideoRef = useRef(null);
    const ThirdVideoRef = useRef(null);
    const FourthVideoRef = useRef(null);
    const ReverceFirstVideoRef = useRef(null);
    const ReverceSecondVideoRef = useRef(null);
    const ReverceThirdVideoRef = useRef(null);
    const ReverceFourthVideoRef = useRef(null);
    const FirstVideoRefWhite = useRef(null);
    const SecondVideoRefWhite = useRef(null);
    const ThirdVideoRefWhite = useRef(null);
    const FourthVideoRefWhite = useRef(null);
    const ReverceFirstVideoRefWhite = useRef(null);
    const ReverceSecondVideoRefWhite = useRef(null);
    const ReverceThirdVideoRefWhite = useRef(null);
    const ReverceFourthVideoRefWhite = useRef(null);
    const handlers = useSwipeable({
        onSwipedRight: (eventData) => {
            if (activeVideoPart > 2 && activePage === 1) {
                handleDesiredVideoPartChange(activeVideoPart - 1)
            }
        },
        onSwipedLeft: (eventData) => {
            if (activeVideoPart < 5 && activePage === 1) {
                handleDesiredVideoPartChange(activeVideoPart + 1)
            }
        },
    });
    const navigate = useNavigate();

    const helloRef = useRef(null);
    const goodbyeRef = useRef(null);
    const nodeRef = activePage === 0 ? helloRef : goodbyeRef;

    const redactorNodeRed = useRef(null);
    const navigationNodeRed = useRef(null);

    const videoList = [FirstVideoRef, SecondVideoRef, ThirdVideoRef, FourthVideoRef];
    const reverceVideoList = [ReverceFirstVideoRef, ReverceSecondVideoRef, ReverceThirdVideoRef, ReverceFourthVideoRef];
    const videoListWhite = [FirstVideoRefWhite, SecondVideoRefWhite, ThirdVideoRefWhite, FourthVideoRefWhite];
    const reverceVideoListWhite = [ReverceFirstVideoRefWhite, ReverceSecondVideoRefWhite, ReverceThirdVideoRefWhite, ReverceFourthVideoRefWhite];

    useEffect(() => {
        if (activeFilling === 0 || activeFilling === 1) {
            if ((desiredVideoPart > activeVideoPart)) {
                videoList.forEach((e) => {
                    if (e !== videoList[activeVideoPart - 1]) {
                        e.current.currentTime = 0;
                    }
                })
                videoList[activeVideoPart - 1].current.playbackRate = playBackRate;
                videoList[activeVideoPart - 1].current.play();
            } else if (desiredVideoPart < activeVideoPart && desiredVideoPart !== 0) {
                reverceVideoList.forEach((e) => {
                    if (e !== reverceVideoList[activeVideoPart - 2]) {
                        e.current.currentTime = 0;
                    }
                })
                reverceVideoList[activeVideoPart - 2].current.playbackRate = playBackRate;
                reverceVideoList[activeVideoPart - 2].current.play();
            }
        } else if (activeFilling === 2) {
            if ((desiredVideoPart > activeVideoPart)) {
                videoListWhite.forEach((e) => {
                    if (e !== videoListWhite[activeVideoPart - 1]) {
                        e.current.currentTime = 0;
                    }
                })
                videoListWhite[activeVideoPart - 1].current.playbackRate = playBackRate;
                videoListWhite[activeVideoPart - 1].current.play();
            } else if (desiredVideoPart < activeVideoPart && desiredVideoPart !== 0) {
                reverceVideoListWhite.forEach((e) => {
                    if (e !== reverceVideoListWhite[activeVideoPart - 2]) {
                        e.current.currentTime = 0;
                    }
                })
                reverceVideoListWhite[activeVideoPart - 2].current.playbackRate = playBackRate;
                reverceVideoListWhite[activeVideoPart - 2].current.play();
            }
        }
    }, [activeVideoPart, desiredVideoPart, activeFilling])

    useEffect(() => {
        if (initialVideoRef && activeVideoPart === 0) {
            initialVideoRef.current.play();
        };
    }, [])

    useEffect(() => {
        if (desiredCover !== activeCover) {
            setTransitioning(true);
        } else if (desiredFilling !== activeFilling) {
            setTransitioning(true);
        } else if (desiredPage !== activePage) {
            if ((activePage === 0) && (activeCover !== 3) && (desiredFilling === 0 || ((activeVideoPart === 1 || activeVideoPart === 0) && (activeFilling === activeCover)))) {
                if (activeCover === 1) {
                    setActiveFilling(1);
                    setDesiredFilling(1);
                    handleDesiredVideoPartChange(2);
                } else if (activeCover === 2) {
                    setActiveFilling(2);
                    setDesiredFilling(2);
                    handleDesiredVideoPartChange(2);
                } else if (activeCover === 3) {
                    setActiveFilling(3);
                    setDesiredFilling(3);
                }
                setActivePage(desiredPage);
            } else {
                setTransitioning(true);
            }
        }
    }, [desiredCover, desiredFilling, desiredPage])

    const handleDesiredVideoPartChange = (desiredPart) => {
        setPlayBackRate(Math.abs(activeVideoPart - desiredPart));
        if (activeVideoPart > desiredPart && !reversed) {
            setReversed(true);
        } else if (activeVideoPart < desiredPart) {
            setReversed(false);
        }
        setDesiredVideoPart(desiredPart);
    };

    const getCoverName = (coverId) => {
        if (coverId === 1) {
            return 'черную';
        } else if (coverId === 2) {
            return 'белую';
        } else if (coverId === 3) {
            return 'уникальную';
        }
    }

    const getFillingName = (fillingId) => {
        if (fillingId === 1) {
            return 'простым';
        } else if (fillingId === 2) {
            return 'обычным';
        } else if (fillingId === 3) {
            return 'уникальным';
        }
    }


    return (
        <div className='redactor-content-holder'>
            <Modal cover={getCoverName(activeCover)} filling={getFillingName(activeFilling)} onClose={() => { setModal(false); }} in={modal} />
            <div className='navigate-back flex row centered centered-alingment'>
                <img style={{ width: "32px", height: '14px' }} src={ArrowBack} alt="" />
                <div className='w-8'></div>
                <Link to={'/'} style={{ textDecoration: 'inherit', color: 'inherit' }}><p >Вернуться на главную</p></Link>
            </div>
            {/* <h2 style={{position: 'absolute', top: '140px', left: '50%', transform: 'translateX(-50%)'}}>Редактор альбома</h2> */}
            <div className='flex centered-alingment redator-video-contraols-holder'>
                <div>
                    <CSSTransition
                        in={activeVideoPart !== 0}
                        timeout={250}
                        classNames="redactor"
                        nodeRef={redactorNodeRed}
                    >
                        <div ref={redactorNodeRed} className={`${activeVideoPart === 0 ? 'redactor' : ''} redactor-wrapper`}>
                            <SwitchTransition mode={'out-in'}>
                                <CSSTransition
                                    key={activePage}
                                    timeout={250}
                                    nodeRef={nodeRef}
                                    addEndListener={(done) => {
                                        nodeRef.current.addEventListener("transitionend", done, false);
                                    }}
                                    classNames="fade"
                                >
                                    <div ref={nodeRef} className="button-container">
                                        {activePage === 0 ?
                                            <div>
                                                <h3>Выбери обложку:</h3>
                                                <div className='h-40'></div>
                                                <div className='choise-container gap-24 '>
                                                    <button className={`selectButton ${desiredCover === 1 ? 'selected' : ''}`} onClick={!transitioning ? () => setDesiredCover(1) : null}><img src={BlackCover} /></button>
                                                    <button className={`selectButton black ${desiredCover === 2 ? 'selected' : ''}`} onClick={!transitioning ? () => setDesiredCover(2) : null}><img src={WhiteCover} /></button>
                                                    <button className={`selectButton black ${desiredCover === 3 ? 'selected' : ''}`} onClick={!transitioning ? () => setDesiredCover(3) : null}><img src={UniqeCover} /></button>
                                                </div>
                                            </div>
                                            : activePage === 1 ?
                                                <div>
                                                    <h3>Выбери структуру:</h3>
                                                    <div className='h-40'></div>
                                                    <div className='choise-container gap-24 '>
                                                        <button className={`selectButton ${desiredFilling === 1 ? 'selected' : ''}`} onClick={() => setDesiredFilling(1)}><img src={SimpleIcon} style={{ width: '100%', height: '100%' }} /></button>
                                                        <button className={`selectButton ${desiredFilling === 2 ? 'selected' : ''}`} onClick={() => setDesiredFilling(2)}><img src={StandartIcon} style={{ width: '100%', height: '100%' }} /></button>
                                                        <button className={`selectButton ${desiredFilling === 3 ? 'selected' : ''}`} onClick={() => setDesiredFilling(3)}><img src={UniqeIcon} style={{ width: '100%', height: '100%' }} /></button>
                                                    </div>
                                                </div> : null
                                        }
                                        <div className='h-40'></div>
                                        <div className='flex row redactor-button-holder'>
                                            <button onClick={!transitioning && activePage !== 0 ? () => { setDesiredPage(activePage - 1) } : () => navigate('/')}>Назад</button>
                                            <div className='w-49'></div>
                                            <button onClick={!transitioning && activePage !== 2 ? activePage === 1 ? () => setModal(true) : () => setDesiredPage(activePage + 1) : null}>{`${activePage === 1 ? 'Готово' : 'Продолжить'}`}</button>
                                        </div>
                                    </div>
                                </CSSTransition>
                            </SwitchTransition>
                        </div>
                    </CSSTransition>


                </div>
                <div className='w-50'></div>
                <div className='video-frame' {...handlers}>
                    <Transition in={transitioning} onMiddle={() => { setActiveCover(desiredCover); setActiveFilling(desiredFilling); setActivePage(desiredPage); }} onExit={() => setTransitioning(false)} />
                    <Video zIndex={((activeVideoPart === 0) && !reversed) ? 1 : 0} src={InitialVideo} videoRef={initialVideoRef} onAnimationEnd={() => setActiveVideoPart(1)} />
                    <img style={{ objectFit: 'contain', top: '-50%', left: '-50%', height: '200%', width: '200%', position: 'absolute', zIndex: ((activeVideoPart !== 0) && (activePage === 0) && (activeCover === 1 || activeCover === 0)) ? 2 : 0 }} src={BlackCoverFull} />
                    <img style={{ objectFit: 'contain', top: '-50%', left: '-50%', height: '200%', width: '200%', position: 'absolute', zIndex: ((activeVideoPart !== 0) && (activePage === 0) && (activeCover === 2)) ? 2 : 0 }} src={WhiteCoverFull} />
                    <img style={{ objectFit: 'contain', top: '-50%', left: '-50%', height: '200%', width: '200%', position: 'absolute', zIndex: ((activeVideoPart !== 0) && (activePage === 0) && (activeCover === 3)) ? 2 : 0 }} src={UniqeCoverFull} />
                    <img style={{ height: '100%', width: '100%', position: 'absolute', zIndex: (activeFilling === 3 && activePage === 1) ? 2 : 0 }} src={UniqeFilling} />
                    <Video zIndex={((activeVideoPart === 1) && !reversed && (activeFilling === 1 || activeFilling === 0) && activePage === 1) ? 1 : 0} src={FirstStepVideo} videoRef={FirstVideoRef} onAnimationEnd={() => { setActiveVideoPart(2); }} />
                    <Video zIndex={((activeVideoPart === 2) && !reversed && (activeFilling === 1 || activeFilling === 0) && activePage === 1) ? 1 : 0} src={SecondStepVideo} videoRef={SecondVideoRef} onAnimationEnd={() => { setActiveVideoPart(3); }} />
                    <Video zIndex={((activeVideoPart === 3) && !reversed && (activeFilling === 1 || activeFilling === 0) && activePage === 1) ? 1 : 0} src={ThirdStepVideo} videoRef={ThirdVideoRef} onAnimationEnd={() => { setActiveVideoPart(4); }} />
                    <Video zIndex={(activeVideoPart === 4 || activeVideoPart === 5) && !reversed && (activeFilling === 1 || activeFilling === 0) && activePage === 1 ? 1 : 0} src={FourthStepVideo} videoRef={FourthVideoRef} onAnimationEnd={() => setActiveVideoPart(5)} />
                    <Video zIndex={(activeVideoPart === 5) && reversed && (activeFilling === 1 || activeFilling === 0) && activePage === 1 ? 1 : 0} src={ReverceFourthStepVideo} videoRef={ReverceFourthVideoRef} onAnimationEnd={() => { setActiveVideoPart(4); }} />
                    <Video zIndex={(activeVideoPart === 4) && reversed && (activeFilling === 1 || activeFilling === 0) && activePage === 1 ? 1 : 0} src={ReverceThirdStepVideo} videoRef={ReverceThirdVideoRef} onAnimationEnd={() => { setActiveVideoPart(3); }} />
                    <Video zIndex={(activeVideoPart === 3) && reversed && (activeFilling === 1 || activeFilling === 0) && activePage === 1 ? 1 : 0} src={ReverceSecondStepVideo} videoRef={ReverceSecondVideoRef} onAnimationEnd={() => { setActiveVideoPart(2); }} />
                    <Video zIndex={(activeVideoPart === 2) && reversed && (activeFilling === 1 || activeFilling === 0) && activePage === 1 ? 1 : 0} src={ReverceFirstStepVideo} videoRef={ReverceFirstVideoRef} onAnimationEnd={() => { setActiveVideoPart(1); }} />
                    <Video zIndex={(activeVideoPart === 1) && reversed && (activeFilling === 1 || activeFilling === 0) && activePage === 1 ? 1 : 0} src={ReverceInitialVideo} onAnimationEnd={() => setActiveVideoPart(0)} />
                    <Video zIndex={((activeVideoPart === 1) && !reversed && (activeFilling === 2) && activePage === 1) ? 1 : 0} src={FirstStepVideoWhite} videoRef={FirstVideoRefWhite} onAnimationEnd={() => { setActiveVideoPart(2); }} />
                    <Video zIndex={((activeVideoPart === 2) && !reversed && (activeFilling === 2) && activePage === 1) ? 1 : 0} src={SecondStepVideoWhite} videoRef={SecondVideoRefWhite} onAnimationEnd={() => { setActiveVideoPart(3); }} />
                    <Video zIndex={((activeVideoPart === 3) && !reversed && (activeFilling === 2) && activePage === 1) ? 1 : 0} src={ThirdStepVideoWhite} videoRef={ThirdVideoRefWhite} onAnimationEnd={() => { setActiveVideoPart(4); }} />
                    <Video zIndex={(activeVideoPart === 4 || activeVideoPart === 5) && !reversed && (activeFilling === 2) && activePage === 1 ? 1 : 0} src={FourthStepVideoWhite} videoRef={FourthVideoRefWhite} onAnimationEnd={() => setActiveVideoPart(5)} />
                    <Video zIndex={(activeVideoPart === 5) && reversed && (activeFilling === 2) && activePage === 1 ? 1 : 0} src={ReverceFourthStepVideoWhite} videoRef={ReverceFourthVideoRefWhite} onAnimationEnd={() => { setActiveVideoPart(4); }} />
                    <Video zIndex={(activeVideoPart === 4) && reversed && (activeFilling === 2) && activePage === 1 ? 1 : 0} src={ReverceThirdStepVideoWhite} videoRef={ReverceThirdVideoRefWhite} onAnimationEnd={() => { setActiveVideoPart(3); }} />
                    <Video zIndex={(activeVideoPart === 3) && reversed && (activeFilling === 2) && activePage === 1 ? 1 : 0} src={ReverceSecondStepVideoWhite} videoRef={ReverceSecondVideoRefWhite} onAnimationEnd={() => { setActiveVideoPart(2); }} />
                    <Video zIndex={(activeVideoPart === 2) && reversed && (activeFilling === 2) && activePage === 1 ? 1 : 0} src={ReverceFirstStepVideoWhite} videoRef={ReverceFirstVideoRefWhite} onAnimationEnd={() => { setActiveVideoPart(1); }} />
                    <Video zIndex={(activeVideoPart === 1) && reversed && (activeFilling === 2) && activePage === 1 ? 1 : 0} src={ReverceInitialVideoWhite} onAnimationEnd={() => setActiveVideoPart(0)} />
                    <CSSTransition
                        in={activePage === 1 && activeFilling !== 3}
                        timeout={500}
                        unmountOnExit
                        classNames={'fade'}
                        nodeRef={navigationNodeRed}
                    >
                        <div className='flex column video-control' ref={navigationNodeRed}>
                            <button className={desiredVideoPart === 2 ? 'active' : ''} onClick={() => {
                                handleDesiredVideoPartChange(2)
                            }}
                            >
                            </button>
                            <div className='w-10'></div>
                            <button className={desiredVideoPart === 3 ? 'active' : ''} onClick={() => {
                                handleDesiredVideoPartChange(3)
                            }}
                            >
                            </button>
                            <div className='w-10'></div>
                            <button className={desiredVideoPart === 4 ? 'active' : ''} onClick={() => {
                                handleDesiredVideoPartChange(4)
                            }}
                            >
                            </button>
                            <div className='w-10'></div>
                            <button className={desiredVideoPart === 5 ? 'active' : ''} onClick={() => {
                                handleDesiredVideoPartChange(5)
                            }}
                            >
                            </button>
                        </div>
                    </CSSTransition>
                </div>
            </div>

        </div >
    )
}

export default Redactor;