import 'pure-react-carousel/dist/react-carousel.es.css';
import CloseIcon from '../images/close.svg';
import { useState } from 'react';

function FaqCard(props) {
    const [opened, setOpened] = useState(false);

    return (
        <div className="w-100 faq-border pv-32 relative" onClick={() => setOpened(!opened)}>
            <div className={`animated ${opened ? "mh-1000" : 'mh-32'}`}>
                <h3 style={{lineHeight: '32px'}} className='op-64'>{props.title}</h3>
                <div className='h-16'></div>
                <p className={`animated ${opened ? 'op-100' : 'op-0'}`}>{props.body}</p>
            </div>
            <div className={`faq-icon ${opened ? '' : 'closed'}`} >
                <img width='100%' height='100%' src={CloseIcon} alt="React Logo" />
            </div>
        </div>
    )
}

export default FaqCard;