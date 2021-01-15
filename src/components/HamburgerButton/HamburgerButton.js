//rafc
import React from 'react'
import './HamburgerButton.css';

export const HamburgerButton = (props) => {
    return (
        <div className="hamburger-button" onClick={props.handleNavbar}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </div>
    )
}
