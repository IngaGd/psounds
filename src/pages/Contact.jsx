import React from 'react';
import Form from '../components/Form';

export default function Contact() {
    return (
        <section className="section-contacts u-section-padding">
            <div className="row">
                <h2 className="heading-secondary u-center-text u-margin-bottom-big">
                    contact
                </h2>
                <div className="col-6-of-12">
                    <a
                        href="mailto:vytautas@palmsstudio.lt"
                        className="contacts-box__contacts"
                    >
                        vytautas@palmsstudio.lt
                    </a>
                    <br />
                    <a
                        href="https://www.instagram.com/pppsound/"
                        className="contacts-box__contacts fa fa-instagram"
                    >
                        <span className="visually-hidden">Instagram</span>
                    </a>
                    <br />
                    <a
                        href="tel:+37069319891"
                        className="contacts-box__contacts"
                    >
                        (+370) 693-19891
                    </a>
                    <br />
                    <a
                        className="contacts-box__contacts"
                        href="https://goo.gl/maps/UnQjjDY9XcgpAhtC7"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Palms’ Studio, Ozo g. 4-206, Vilnius, Lithuania, 08220.
                    </a>
                </div>
                <div className="col-6-of-12">
                    <Form />
                </div>
            </div>
        </section>
    );
}
