import React, { useState, useRef, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Transition } from 'react-transition-group';
import Video from '../components/video'
import "/node_modules/video-react/dist/video-react.css";
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

const transitions = {
    entering: {
        display: 'block'
    },
    entered: {
        opacity: 1,
        display: 'block'
    },
    exiting: {
        opacity: 0,
        display: 'block'
    },
    exited: {
        opacity: '0',
        display: 'none'
    }
};


function Redactor() {
    const [activePage, setActivePage] = useState(0);
    const [activeCover, setActiveCover] = useState(0);
    const [activeFilling, setActiveFilling] = useState(0);
    const [activeVideoPart, setActiveVideoPart] = useState(0);
    const [playBackRate, setPlayBackRate] = useState(1);
    const [reversed, setReversed] = useState(false);
    const [desiredVideoPart, setDesiredVideoPart] = useState(0);
    const [transitionState, setTransitionState] = useState(true)
    const initialVideoRef = useRef(null);
    const FirstVideoRef = useRef(null);
    const SecondVideoRef = useRef(null);
    const ThirdVideoRef = useRef(null);
    const FourthVideoRef = useRef(null);
    const ReverceFirstVideoRef = useRef(null);
    const ReverceSecondVideoRef = useRef(null);
    const ReverceThirdVideoRef = useRef(null);
    const ReverceFourthVideoRef = useRef(null);

    const videoList = [FirstVideoRef, SecondVideoRef, ThirdVideoRef, FourthVideoRef];
    const reverceVideoList = [ReverceFirstVideoRef, ReverceSecondVideoRef, ReverceThirdVideoRef, ReverceFourthVideoRef];


    useEffect(() => {
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
    }, [activeVideoPart, desiredVideoPart])

    useEffect(() => {
        if (initialVideoRef && activeVideoPart === 0) {
            initialVideoRef.current.play();
        };
    }, [])

    const handleDesiredVideoPartChange = (desiredPart) => {
        setPlayBackRate(Math.abs(activeVideoPart - desiredPart));
        if (activeVideoPart > desiredPart && !reversed) {
            setReversed(true);
        } else if (activeVideoPart < desiredPart) {
            setReversed(false);
        }
        setDesiredVideoPart(desiredPart);
    };



    return (
        <div className='h-100vh centered flex'>
            <div className='flex centered-alingment'>
                <div>
                    {activePage === 0 ?
                        <Transition in={transitionState} timeout={300}>
                            {(state) =>
                                <div style={{
                                    transition: 'all .1s',
                                    opacity: 0,
                                    display: 'none',
                                    ...transitions[state],
                                }}>
                                    <h3>Выбери наполнение:</h3>
                                    <div className='h-40'></div>
                                    <div className='flex row gap-24'>
                                        <button className={`selectButton ${activeCover === 1 ? 'selected' : ''}`} onClick={() => setActiveCover(1)}>1</button>
                                        <button className={`selectButton ${activeCover === 2 ? 'selected' : ''}`} onClick={() => setActiveCover(2)}>2</button>
                                        <button className={`selectButton ${activeCover === 3 ? 'selected' : ''}`} onClick={() => setActiveCover(3)}>3</button>
                                    </div>
                                </div>
                            }
                        </Transition>
                        : activePage === 1 ?
                            <div>
                                <h3>Выбери обложку1:</h3>
                                <div className='h-40'></div>
                                <div className='flex row gap-24'>
                                    <button className={`selectButton ${activeFilling === 1 ? 'selected' : ''}`} onClick={() => setActiveFilling(1)}>1</button>
                                    <button className={`selectButton ${activeFilling === 2 ? 'selected' : ''}`} onClick={() => setActiveFilling(2)}>2</button>
                                    <button className={`selectButton ${activeFilling === 3 ? 'selected' : ''}`} onClick={() => setActiveFilling(3)}>3</button>
                                </div>
                            </div> : null
                    }

                    <div className='h-40'></div>
                    <div className='flex row'>
                        <button onClick={() => setActivePage(activePage - 1)}>Назад</button>
                        <div className='w-49'></div>
                        <button onClick={() => setActivePage(activePage + 1)}>Продолжить</button>
                    </div>
                </div>
                <div className='w-50'></div>
                <div className='video-frame'>
                    <Video zIndex={((activeVideoPart === 0) && !reversed) ? 1 : 0} src={InitialVideo} videoRef={initialVideoRef} onAnimationEnd={() => setActiveVideoPart(1)} />
                    <Video zIndex={((activeVideoPart === 1) && !reversed) ? 1 : 0} src={FirstStepVideo} videoRef={FirstVideoRef} onAnimationEnd={() => { setActiveVideoPart(2); FirstVideoRef.current.currentTime = 0; }} />
                    <Video zIndex={((activeVideoPart === 2) && !reversed) ? 1 : 0} src={SecondStepVideo} videoRef={SecondVideoRef} onAnimationEnd={() => { setActiveVideoPart(3); SecondVideoRef.current.currentTime = 0; }} />
                    <Video zIndex={((activeVideoPart === 3) && !reversed) ? 1 : 0} src={ThirdStepVideo} videoRef={ThirdVideoRef} onAnimationEnd={() => { setActiveVideoPart(4); ThirdVideoRef.current.currentTime = 0; }} />
                    <Video zIndex={(activeVideoPart === 4 || activeVideoPart === 5) && !reversed ? 1 : 0} src={FourthStepVideo} videoRef={FourthVideoRef} onAnimationEnd={() => setActiveVideoPart(5)} />
                    <Video zIndex={(activeVideoPart === 5) && reversed ? 1 : 0} src={ReverceFourthStepVideo} videoRef={ReverceFourthVideoRef} onAnimationEnd={() => { setActiveVideoPart(4); ReverceFourthVideoRef.current.currentTime = 0; }} />
                    <Video zIndex={(activeVideoPart === 4) && reversed ? 1 : 0} src={ReverceThirdStepVideo} videoRef={ReverceThirdVideoRef} onAnimationEnd={() => { setActiveVideoPart(3); ReverceThirdVideoRef.current.currentTime = 0; }} />
                    <Video zIndex={(activeVideoPart === 3) && reversed ? 1 : 0} src={ReverceSecondStepVideo} videoRef={ReverceSecondVideoRef} onAnimationEnd={() => { setActiveVideoPart(2); ReverceSecondVideoRef.current.currentTime = 0; }} />
                    <Video zIndex={(activeVideoPart === 2) && reversed ? 1 : 0} src={ReverceFirstStepVideo} videoRef={ReverceFirstVideoRef} onAnimationEnd={() => { setActiveVideoPart(1); ReverceFirstVideoRef.current.currentTime = 0; }} />
                    <Video zIndex={(activeVideoPart === 1) && reversed ? 1 : 0} src={ReverceInitialVideo} onAnimationEnd={() => setActiveVideoPart(0)} />
                </div>
                <div className='flex column video-control'>
                    <button onClick={() => {
                        handleDesiredVideoPartChange(1)
                    }}
                    >
                    </button>
                    <button onClick={() => {
                        handleDesiredVideoPartChange(2)
                    }}
                    >
                    </button>
                    <button onClick={() => {
                        handleDesiredVideoPartChange(3)
                    }}
                    >
                    </button>
                    <button onClick={() => {
                        handleDesiredVideoPartChange(4)
                    }}
                    >
                    </button>
                    <button onClick={() => {
                        handleDesiredVideoPartChange(5)
                    }}
                    >
                    </button>

                </div>
            </div>

        </div >
    )
}

export default Redactor;