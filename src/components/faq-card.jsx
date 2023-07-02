import 'pure-react-carousel/dist/react-carousel.es.css';
import CloseIcon from '../images/close.svg';
import { useState } from 'react';
import AnimateHeight from 'react-animate-height';

function FaqCard(props) {
    const [opened, setOpened] = useState(false);
    const [height, setHeight] = useState(32);

    return (
        <div className="w-100 faq-border pv-32 relative" onClick={
            () => {
                setOpened(!opened);
                setHeight(height === 32 ? 'auto' : 32);
            }
        }>
            <AnimateHeight
                duration={500}
                height={height}
            >
                <h3 style={{ lineHeight: '32px' }} className='op-64 faq-main-text'>{props.title}</h3>
                <div>
                    <div className='h-16'></div>
                    <p className={`animated faq-text weight-400 ${opened ? 'op-64' : 'op-0'}`}>{props.body}</p>
                </div>
            </AnimateHeight>
            <div className={`faq-icon ${opened ? '' : 'closed'}`} >
                <img width='100%' height='100%' src={CloseIcon} alt="React Logo" />
            </div>
        </div>
    )
}

export default FaqCard;