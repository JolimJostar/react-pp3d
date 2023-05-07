import 'pure-react-carousel/dist/react-carousel.es.css';
import CloseIcon from '../images/close.svg';
import { useState } from 'react';

function FaqCard(props) {
    const [opened, setOpened] = useState(false);

    return (
        <div className="w-100 faq-border pv-32 relative" onClick={() => setOpened(!opened)}>
            <div className={`animated `}>
                <h3 style={{ lineHeight: '32px' }} className='op-64 faq-main-text'>{props.title}</h3>
                {
                    opened
                        ?
                        <div>
                            <div className='h-16'></div>
                            <p className={`animated faq-text weight-400 ${opened ? 'op-64' : 'op-0'}`}>{props.body}</p>
                        </div>
                        :
                        null
                }

            </div>
            <div className={`faq-icon ${opened ? '' : 'closed'}`} >
                <img width='100%' height='100%' src={CloseIcon} alt="React Logo" />
            </div>
        </div>
    )
}

export default FaqCard;