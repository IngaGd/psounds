import React from 'react';
import { Link } from 'react-router-dom';
import Studio from '../components/Studio';

import image1 from '../assets/images/images/SERVICES/1.JPG';
import image2 from '../assets/images/images/SERVICES/2.JPG';
import image3 from '../assets/images/images/SERVICES/3.JPG';
import Footer from '../components/Footer';

export default function Services({ services }) {
    return (
        <>
            <section className="section-image">
                <div className="image-box-header">
                    <img src={image1} alt="" className="image" />
                </div>
            </section>
            <section className="section-services u-section-padding">
                <div className="row">
                    <h2 className="heading-secondary u-center-text u-margin-bottom-medium">
                        P-sound services
                    </h2>
                    {services?.map((service) => (
                        <div
                            className="services u-center-text"
                            key={service.id}
                        >
                            {service.description}
                        </div>
                    ))}
                    <p className="paragraph u-center-text">
                        The hourly rate is 60 euros, and each project is unique,
                        so{' '}
                        <Link className="link" to="/contact">
                            contact us
                        </Link>{' '}
                        and you will receive an individual proposal.
                    </p>
                </div>
            </section>
            <section className="section-image">
                <div className="image-box-full-screen">
                    <img src={image2} alt="" className="image" />
                </div>
            </section>
            <Studio />
            <section className="section-image">
                <div className="image-box-full-screen">
                    <img src={image3} alt="" className="image" />
                </div>
            </section>
            <Footer />
        </>
    );
}
