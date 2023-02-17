import 'pure-react-carousel/dist/react-carousel.es.css';
import { useState } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function Video(props) {
    const [loaded, setLoaded] = useState(false);

    const onLoadedData = () => {
        setLoaded(true);
    };

    return (
        <SkeletonTheme baseColor="#F5F5F5" highlightColor="#000">
            <div style={{ zIndex: props.zIndex, top: '-50%', left: '-50%', height: '200%', width: '200%', position: 'absolute', opacity: props.opacity }}>
                {loaded ? null : <Skeleton height='100%' width='100%' />}
                <video preload="metadata" onEnded={props.onAnimationEnd} onLoadedData={onLoadedData} playsInline muted width="100%" height='100%' src={props.src} ref={props.videoRef} >
                    Sorry, your browser doesn't support videos.
                </video>
            </div>
        </SkeletonTheme>
    );
}

export default Video;