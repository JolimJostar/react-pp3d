import { useState, useRef, useEffect } from 'react';
import MainVideo from '../videos/main.mp4';
import { CSSTransition } from 'react-transition-group';
import Video from '../components/video'
import Logo from "../images/logo.png"

function InitialVideo(props) {
    const [videoFinished, setVideoFinished] = useState(!props.isFirstTime);
    const [photoLoaded, setPhotoLoaded] = useState(false);
    const [videoLoaded, setVideoLoaded] = useState(false);
    const video = useRef();
    const videoNodeRef = useRef();
    const imageNodeRef = useRef();

    const videoLoadeingHandeler = (e) => {

        if (video.current.readyState >= 3) {
            setVideoLoaded(true);
        }

    }

    const videoCanPLayThroughHandeler = (e) => {

            setVideoLoaded(true);

    }

    useEffect(() => {
        if (props.in === true && props.isFirstTime) {
            video.current.playbackRate = 2;
            video.current.play();
        }
    }, [props.in])

    useEffect(() => {
        if (photoLoaded && (videoLoaded || !props.isFirstTime)) {
            props.onLoaded();
        }
    }, [photoLoaded, videoLoaded])

    useEffect(() => {
        if (props.isFirstTime) {
            const element = video.current;

            element.addEventListener('loadeddata', videoLoadeingHandeler);
            element.addEventListener('canplaythrough', videoCanPLayThroughHandeler, false);

            element.load();

            return () => {
                element.removeEventListener('loadeddata', videoLoadeingHandeler);
                element.removeEventListener('canplaythrough', videoCanPLayThroughHandeler, false);
            };
        };
    }, [])




    return (
        <div className="logo">
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                {
                    props.isFirstTime
                        ?
                        <div style={{ position: 'absolute', width: '100%', height: '100%', top: '-39%', left: '-39%', }}>
                            <CSSTransition in={props.in && !videoFinished} timeout={666} classNames='initial-video' nodeRef={videoNodeRef} >
                                <div ref={videoNodeRef} className='initial-video'>
                                    <Video autoPlay={true} style={{ width: '178%', height: '178%' }} zIndex={100} src={MainVideo} videoRef={video} onAnimationEnd={() => { setVideoFinished(true); props.onVideoEnd(); }} />
                                </div>
                            </CSSTransition>
                        </div>
                        :
                        null
                }
                <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
                    <CSSTransition mode={'out-in'} in={videoFinished || !props.isFirstTime} timeout={666} classNames='fade' nodeRef={imageNodeRef}>
                        <img style={{ width: '100%', height: '100%' }} src={Logo} alt="" className={props.isFirstTime ? 'fade' : ''} onLoad={() => { setPhotoLoaded(true); if (!props.isFirstTime) { props.onVideoEnd(); } }} ref={imageNodeRef} />
                    </CSSTransition>
                </div>
            </div>
        </div>
    )
}

export default InitialVideo;