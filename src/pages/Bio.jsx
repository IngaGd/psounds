import React from 'react';

import imageLarge1 from '../assets/images/images/BIO/1-large.jpg';
import imageMedium1 from '../assets/images/images/BIO/1-medium.jpg';
import imageSmall1 from '../assets/images/images/BIO/1-small.jpg';
import Contribute from '../components/Contribute';

export default function Bio({ bio }) {
    return (
        <>
            <section className="section-bio u-section-padding">
                <div className="row">
                    <h2 className="heading-secondary u-center-text u-margin-bottom-big">
                        Bio
                    </h2>
                    <div className="col-6-of-12">
                        <div className="image-box">
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
                                    alt="profile"
                                    className="image-box__image"
                                />
                            </picture>
                        </div>
                    </div>
                    <div className="col-6-of-12">
                        {bio?.map((b) => (
                            <p
                                className="paragraph u-justify u-margin-bottom-medium"
                                key={b.id}
                            >
                                {b.description}
                            </p>
                        ))}
                    </div>
                </div>
            </section>
            <Contribute />
        </>
    );
}
