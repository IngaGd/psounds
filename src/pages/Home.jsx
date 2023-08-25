import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import useGenerateAlbumList from '../customHooks/useGenerateAlbumList';

import image1 from '../assets/images/images/HOME/1.JPG';
import image2 from '../assets/images/images/HOME/2.JPG';
import image3 from '../assets/images/images/HOME/3.JPG';
import Footer from '../components/Footer';

export default function Home({ cvSections, productionHighlight }) {
    const playingAudio = useRef(null);
    const [playingTrackId, setPlayingTrackId] = useState(null);
    return (
        <>
            <section className="section-hero">
                <div className="image-box-header">
                    <img src={image1} alt="" className="image" />
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
                                    <p key={index}> - {desc}</p>
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
                                <p key={index}> - {desc}</p>
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
                                    <p key={index}> - {desc}</p>
                                )
                            )}
                        </p>
                    </div>
                </div>
            </section>

            <section className="section-image">
                <div className="image-box-full-screen">
                    <img src={image2} alt="" className="image" />
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
                    <img src={image3} alt="" className="image" />
                </div>
            </section>
            <Footer />
        </>
    );
}
