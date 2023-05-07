import React, { Component } from 'react'

function Menu(props) {

    const sideMenuClasses = `side-menu ${props.isMenuActive ? 'side-menu--active' : ''}`;
    const sideMenuContentClasses = `side-menu__content ${props.isMenuActive ? 'side-menu__content--active' : ''}`;

    return (
        <aside className={sideMenuClasses}>
            <div className="side-menu__overlay" onClick={props.onOverLayClick} />
            <div className={sideMenuContentClasses}>
               {props.children}
            </div>
        </aside>
    )
}

export default Menu