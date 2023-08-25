import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/images/logo/logo-black-transparent.png';

export default function Header() {
    return (
        <header>
            <div className="logo-box">
                <Link to="/vytautas-portfolio">
                    <img className="logo" src={logo} alt="Logo" />
                </Link>
            </div>
            <nav className="header__nav-desktop row">
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
        </header>
    );
}
