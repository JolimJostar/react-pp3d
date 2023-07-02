import React, { useRef, useState } from "react";
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import CloseIcon from '../images/close.svg';
import DoneIcon from '../images/done.svg';
import emailjs from '@emailjs/browser';
import EmailjsData from '../helpers/email'
import toast from 'react-simple-toasts';
import { useEffect } from "react";



const Modal = props => {
    const form = useRef();
    const [sended, setSended] = useState(false);
    const [loading, setLoading] = useState(false);
    const modalNodeRef = useRef(null);
    const helloRef = useRef(null);
    const goodbyeRef = useRef(null);
    const nodeRef = sended ? helloRef : goodbyeRef;

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);
        emailjs.sendForm(EmailjsData.SERVICE_ID, EmailjsData.TEMPLATE_ID, form.current, EmailjsData.PUBLIC_KEY)
            .then((result) => {
                setSended(true);
                form.current.reset();
                setLoading(false);
            }, (error) => {
                toast('Произошла ошибка', { className: 'toast' });
                setLoading(false);
            });

    };

    useEffect(() => {
        setSended(false);
        setLoading(false);
    }, [])

    return (
        <CSSTransition in={props.in} timeout={500} classNames='fade' nodeRef={modalNodeRef} unmountOnExit>
            <div onClick={() => { props.onClose(); setSended(false); setLoading(false); }} className="modal" ref={modalNodeRef}>
                <div onClick={(e) => e.stopPropagation()} className="modal-content animated">
                    <SwitchTransition mode={'out-in'}>
                        <CSSTransition
                            key={sended}
                            timeout={500}
                            in={sended}
                            nodeRef={nodeRef}
                            classNames="fade"
                            unmountOnExit
                        >
                            <div ref={nodeRef}>
                                {sended ?
                                    <div style={{ height: '320px', justifyContent: 'space-between', alignItems: 'center' }} className='flex column'>
                                        <img src={DoneIcon} style={{ width: '110px', height: '87px' }} alt="" />
                                        <p className="modal-success-text">Ваша заявка успешно отправлена</p>
                                        <button onClick={() => { props.onClose(); setSended(false); setLoading(false); }}>Принять</button>
                                    </div>
                                    :
                                    <div>
                                        <img onClick={() => { props.onClose(); setSended(false); setLoading(false); }} src={CloseIcon} alt="" className="modal-close-icon" />
                                        <div className="modal-header">
                                            <h2>Заполните форму</h2>
                                            <div className="h-8"></div>
                                            <h6>Мы свяжемся с вами в ближайшее время</h6>
                                        </div>
                                        <div className="h-40"></div>
                                        <div className="modal-body">
                                            <form ref={form} onSubmit={sendEmail} className='flex column centered-alingment w-588'>
                                                <input type="text" required name="name" placeholder="Имя" className="w-100" />
                                                <div className="h-32 pc-hidden"></div>
                                                <div className="h-40 phone-hidden"></div>
                                                <input type="phone" required name="phone" placeholder="Телефон" className="w-100" />
                                                <div className="h-32 pc-hidden"></div>
                                                <div className="h-40 phone-hidden"></div>
                                                <input type="text" name="messenger" placeholder="Месенджер" className="w-100" />
                                                <div className="h-40 phone-hidden"></div>
                                                {/* <h6>Вы выбрали {props.cover} обложку с {props.filling} наполнением</h6> */}
                                                <div className="h-24 phone-hidden"></div>
                                                <div className="h-32 pc-hidden"></div>
                                                {loading ? <div className="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div> : <button type="submit" >Отправить</button>}
                                            </form>
                                        </div>
                                    </div>
                                }
                            </div>

                        </CSSTransition>
                    </SwitchTransition>

                    {/* <div className="h-24"></div>
                <div className="modal-footer">
                    <p className="small-point">Нажимая на кнопку вы соглашаетесь на обработку персональных данных</p>
                </div> */}
                </div>
            </div>
        </CSSTransition>
    );
}

export default Modal;