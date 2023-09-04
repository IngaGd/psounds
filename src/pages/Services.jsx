import React from 'react';
import { Link } from 'react-router-dom';
import Studio from '../components/Studio';

import imageLarge1 from '../assets/images/images/SERVICES/1-large.jpg';
import imageMedium1 from '../assets/images/images/SERVICES/1-medium.jpg';
import imageSmall1 from '../assets/images/images/SERVICES/1-small.jpg';
import imageLarge2 from '../assets/images/images/SERVICES/2-large.jpg';
import imageMedium2 from '../assets/images/images/SERVICES/2-medium.jpg';
import imageSmall2 from '../assets/images/images/SERVICES/2-small.jpg';
import imageLarge3 from '../assets/images/images/SERVICES/3-large.jpg';
import imageMedium3 from '../assets/images/images/SERVICES/3-medium.jpg';
import imageSmall3 from '../assets/images/images/SERVICES/3-small.jpg';
import Footer from '../components/Footer';

export default function Services({ services }) {
    return (
        <>
            <section className="section-image">
                <div className="image-box-header">
                    <picture>
                        <source
                            media="(max-width: 600px)"
                            srcSet={imageSmall1}
                        />
                        <source
                            media="(max-width: 900px)"
                            srcSet={imageMedium1}
                        />
                        <source
                            media="(min-width: 901px)"
                            srcSet={imageLarge1}
                        />
                        <img
                            src={imageMedium1}
                            alt="audio controller"
                            className="image"
                        />
                    </picture>
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
                    <picture>
                        <source
                            media="(max-width: 600px)"
                            srcSet={imageSmall2}
                        />
                        <source
                            media="(max-width: 900px)"
                            srcSet={imageMedium2}
                        />
                        <source
                            media="(min-width: 901px)"
                            srcSet={imageLarge2}
                        />
                        <img
                            src={imageMedium2}
                            alt="audio controller"
                            className="image"
                        />
                    </picture>
                </div>
            </section>
            <Studio />
            <section className="section-image">
                <div className="image-box-full-screen">
                    <picture>
                        <source
                            media="(max-width: 600px)"
                            srcSet={imageSmall3}
                        />
                        <source
                            media="(max-width: 900px)"
                            srcSet={imageMedium3}
                        />
                        <source
                            media="(min-width: 901px)"
                            srcSet={imageLarge3}
                        />
                        <img
                            src={imageMedium3}
                            alt="studio"
                            className="image"
                        />
                    </picture>
                </div>
            </section>
            <Footer />
        </>
    );
}
