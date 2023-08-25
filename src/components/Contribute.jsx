import React from 'react';

import payPalLogo from '../assets/images/icons/paypal.png';

export default function Contribute() {
    return (
        <section className="section-contribute u-section-padding-bottom">
            <div className="row">
                <h2 className="heading-secondary u-center-text u-margin-bottom-medium">
                    Contribute
                </h2>
                <p className="paragraph u-center-text">
                    You Can support my art and music by contributing in this
                    section. Your donation fuels my creative journey and helps
                    me share my passion with the world
                </p>
                <div className="btn-paypal">
                    <a
                        href="https://www.paypal.com/donate/?hosted_button_id=JD59JABDARL34"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={payPalLogo} alt="" className="image" />
                    </a>
                </div>
            </div>
        </section>
    );
}
