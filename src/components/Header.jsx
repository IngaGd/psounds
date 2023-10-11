import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/images/logo/logo-black-transparent.png';
import useScrollDirection from '../customHooks/useScrollDirection';

import { IoCloseOutline, IoMenuOutline } from 'react-icons/io5';

export default function Header() {
    const scrollDirtection = useScrollDirection();

    const [showPopup, setShowPopup] = useState(false);

    const openPopup = () => {
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    return (
        <header
            id="header"
            className={`header ${
                scrollDirtection === 'down' ? 'hide' : 'show'
            }`}
        >
            <div className="logo-box">
                <Link to="/">
                    <img className="logo" src={logo} alt="Logo" />
                </Link>
            </div>
            <div className="row-flex">
                <nav className="header__nav-desktop">
                    <div className="nav-links">
                        <Link className="nav-link" to="/audio">
                            Audio
                        </Link>
                        <Link className="nav-link" to="/services">
                            Services
                        </Link>
                        <Link className="nav-link" to="/bio">
                            Bio
                        </Link>
                        <Link className="nav-link" to="/contact">
                            Contact
                        </Link>
                    </div>
                </nav>
            </div>
            <div className="header__nav-mob">
                <button onClick={openPopup} className="btn-icons bars">
                    <IoMenuOutline />
                </button>
            </div>
            <div className={`popup ${showPopup ? 'active' : ''}`} id="popup">
                <div className="popup__content">
                    <div className="logo-box">
                        <Link onClick={closePopup} to="/vytautas-portfolio">
                            <img className="logo" src={logo} alt="Logo" />
                        </Link>
                    </div>
                    <button onClick={closePopup} className="btn-icons times">
                        <IoCloseOutline />
                    </button>
                </div>
                <div className="popup__nav-links">
                    <div className="links">
                        <Link
                            onClick={closePopup}
                            className="nav-link"
                            to="/audio"
                            id="#header"
                        >
                            Audio
                        </Link>
                        <Link
                            onClick={closePopup}
                            className="nav-link"
                            to="/services#header"
                        >
                            Services
                        </Link>
                        <Link
                            onClick={closePopup}
                            className="nav-link"
                            to="/bio#header"
                        >
                            Bio
                        </Link>
                        <Link
                            onClick={closePopup}
                            className="nav-link"
                            to="/contact#header"
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
            <div className="header__placeholder"></div>
        </header>
    );
}
