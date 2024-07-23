import React from 'react';
import "./Navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faHouse, faUser } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    return (
        <div className="navbar">
            <div className="play-icon">
                <FontAwesomeIcon icon={faPlay} />
            </div>
            <div className="bottom">
                <div className="icon-container">
                    <FontAwesomeIcon icon={faHouse} className="icon-first" />
                    <p className="first">Home</p>
                </div>
                <div className="icon-container">
                    <FontAwesomeIcon icon={faUser} className="icon" />
                    <p className="paragraph">My account</p>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
