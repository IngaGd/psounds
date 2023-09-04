import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import useGenerateAlbumList from '../customHooks/useGenerateAlbumList';

import imageLarge1 from '../assets/images/images/HOME/1-large.jpg';
import imageMedium1 from '../assets/images/images/HOME/1-medium.jpg';
import imageSmall1 from '../assets/images/images/HOME/1-small.jpg';
import imageLarge2 from '../assets/images/images/HOME/2-large.jpg';
import imageMedium2 from '../assets/images/images/HOME/2-medium.jpg';
import imageSmall2 from '../assets/images/images/HOME/2-small.jpg';
import imageLarge3 from '../assets/images/images/HOME/3-large.jpg';
import imageMedium3 from '../assets/images/images/HOME/3-medium.jpg';
import imageSmall3 from '../assets/images/images/HOME/3-small.jpg';
import Footer from '../components/Footer';

export default function Home({ cvSections, productionHighlight }) {
    const playingAudio = useRef(null);
    const [playingTrackId, setPlayingTrackId] = useState(null);
    return (
        <>
            <section className="section-hero">
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
                            alt="audio equipment"
                            className="image"
                        />
                    </picture>
                </div>
            </section>
            <section className="section-about u-section-padding">
                <div className="row big">
                    <h1 className="heading-primary u-center-text u-margin-bottom-big">
                        Vytautas Petrošius
                    </h1>
                    <div className="col-4-of-12 mob-flex">
                        <h2 className="heading-tertiary  u-margin-bottom-medium">
                            {cvSections[1].title}
                        </h2>
                        <p className="paragraph ">
                            {cvSections[1].description.map((desc, index) =>
                                desc ===
                                'Let’s connect and talk about your next project' ? (
                                    <Link className="link" to="/contact">
                                        {' '}
                                        - {desc}{' '}
                                    </Link>
                                ) : (
                                    <span key={index}> - {desc}</span>
                                )
                            )}
                        </p>
                    </div>
                    <div className="col-4-of-12 mob-flex">
                        <h2 className="heading-tertiary u-margin-bottom-medium">
                            {cvSections[0].title}
                        </h2>
                        <p className="paragraph">
                            {cvSections[0].description.map((desc, index) => (
                                <span key={index}> - {desc}</span>
                            ))}
                        </p>
                    </div>
                    <div className="col-4-of-12 mob-flex">
                        <h2 className="heading-tertiary u-margin-bottom-medium">
                            {cvSections[2].title}
                        </h2>
                        <p className="paragraph">
                            {cvSections[2].description.map((desc, index) =>
                                desc ===
                                'Let’s connect and talk about your next project' ? (
                                    <React.Fragment key={index}>
                                        <span>- </span>
                                        <Link className="link" to="/contact">
                                            <span>Let’s connect</span>
                                        </Link>
                                        <span>
                                            {' '}
                                            and talk about your next project
                                        </span>
                                    </React.Fragment>
                                ) : (
                                    <span key={index}> - {desc}</span>
                                )
                            )}
                        </p>
                    </div>
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
                            alt="profile"
                            className="image"
                        />
                    </picture>
                </div>
            </section>

            <section className="section-audio u-section-padding">
                <div className="row">
                    <Link className="link" to="/audio">
                        <h2 className="heading-secondary u-center-text u-margin-bottom-medium">
                            Production highlight
                        </h2>
                    </Link>
                    {useGenerateAlbumList(
                        productionHighlight,
                        playingAudio,
                        playingTrackId,
                        setPlayingTrackId
                    )}
                </div>
            </section>
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
                            alt="studio, computer, workplace"
                            className="image"
                        />
                    </picture>
                </div>
            </section>
            <Footer />
        </>
    );
}
