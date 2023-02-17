import 'pure-react-carousel/dist/react-carousel.es.css';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { useState, useRef } from 'react';

function Transition(props) {
    const [state, setState] = useState(false);
    const helloRef = useRef(null);
    const goodbyeRef = useRef(null);

    return (
        <div className="w-100 h-100" style={{ zIndex: props.in ? '100' : 0, position: 'absolute', top: '0', left: '0' }} >
            <CSSTransition
                in={props.in && !state}
                nodeRef={helloRef}
                classNames='transition-in'
                timeout={500}
                onEntered={() => { props.onMiddle(); setState(true); }}
                unmountOnExit
            >
                <div ref={helloRef} style={{ width: '100%', height: '100%', background: 'black' }} >

                </div>
            </CSSTransition>
            <CSSTransition
                in={state}
                timeout={500}
                nodeRef={goodbyeRef}
                unmountOnExit
                onEntered={() => { props.onExit(); setState(false);  }}
                onExit={props.onExit}
                classNames='transition-out'
            >
                <div ref={goodbyeRef} style={{ width: '100%', height: '100%', background: 'black' }}>
                </div>
            </CSSTransition>
        </div>
    )
}

export default Transition;