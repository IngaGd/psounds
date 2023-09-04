import React from 'react';

export default function Footer() {
    return (
        <footer className="section-footer u-section-padding">
            <div className="row">
                <h2 className="heading-secondary">contact</h2>

                <a href="mailto:vytautas@palmsstudio.lt" className="contacts">
                    vytautas@palmsstudio.lt
                </a>

                <a
                    href="https://www.instagram.com/pppsound/"
                    className="contacts fa fa-instagram"
                >
                    <span className="visually-hidden">Instagram</span>
                </a>

                <a href="tel:+37069319891" className="contacts">
                    (+370) 693-19891
                </a>
            </div>
        </footer>
    );
}
