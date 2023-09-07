import React, { useRef, useState } from 'react';
import useGenerateAlbumList from '../customHooks/useGenerateAlbumList';

import imageLarge1 from '../assets/images/images/AUDIO/1-large.jpg';
import imageMedium1 from '../assets/images/images/AUDIO/1-medium.jpg';
import imageSmall1 from '../assets/images/images/AUDIO/1-small.jpg';
import imageLarge2 from '../assets/images/images/AUDIO/2-large.jpg';
import imageMedium2 from '../assets/images/images/AUDIO/2-medium.jpg';
import imageSmall2 from '../assets/images/images/AUDIO/2-small.jpg';
import useScrollToTop from '../customHooks/useScrollToTop';

export default function Audio({
    collabs,
    earlyProduction,
    lateProduction,
    producing,
    remixed,
    soundtracks,
    tvBrandsComertials,
}) {
    useScrollToTop();

    const playingAudio = useRef(null);
    const [playingTrackId, setPlayingTrackId] = useState(null);

    return (
        <>
            <section className="section-playlists u-center-text u-section-padding">
                <div className="row flex">
                    <div className="col-6-of-12 mob">
                        <div className="playlists-description">
                            <h2 className="heading-secondary u-margin-bottom-big">
                                Music library
                            </h2>
                            <p className="paragraph">
                                Welcome to my music portfolio! Here you'll find
                                a diverse range of genre-oriented examples
                                showcasing my creative abilities. Explore my
                                collection of personal compositions,
                                collaborations with fellow artists and
                                producers, custom songs and soundtracks, as well
                                as commercial music videos and remixes. Enjoy
                                the journey through my captivating soundscape!
                            </p>
                        </div>
                    </div>
                    <div className="col-6-of-12">
                        <h2 className="heading-secondary mob u-margin-bottom-big">
                            Music library
                        </h2>
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
            <section className="section-playlists u-section-padding">
                <div className="row bottom-border">
                    <div className="playlists__subtitle">
                        <h3 className="heading-tertiary u-margin-bottom-small">
                            Soundtracks
                        </h3>
                    </div>
                    {useGenerateAlbumList(
                        soundtracks,
                        playingAudio,
                        playingTrackId,
                        setPlayingTrackId
                    )}
                </div>
            </section>
            <section className="section-playlists u-section-padding-bottom">
                <div className="row bottom-border">
                    <div className="playlists__subtitle">
                        <h3 className="heading-tertiary u-margin-bottom-small">
                            Producing
                        </h3>
                    </div>
                    {useGenerateAlbumList(
                        producing,
                        playingAudio,
                        playingTrackId,
                        setPlayingTrackId
                    )}
                </div>
            </section>
            <section className="section-playlists u-section-padding-bottom">
                <div className="row bottom-border">
                    <div className="playlists__subtitle">
                        <h3 className="heading-tertiary u-margin-bottom-small">
                            Collabs
                        </h3>
                    </div>
                    {useGenerateAlbumList(
                        collabs,
                        playingAudio,
                        playingTrackId,
                        setPlayingTrackId
                    )}
                </div>
            </section>
            <section className="section-playlists u-section-padding-bottom">
                <div className="row bottom-border">
                    <div className="playlists__subtitle">
                        <h3 className="heading-tertiary u-margin-bottom-small">
                            Late production
                        </h3>
                    </div>
                    {useGenerateAlbumList(
                        lateProduction,
                        playingAudio,
                        playingTrackId,
                        setPlayingTrackId
                    )}
                </div>
            </section>
            <section className="section-playlists u-section-padding-bottom">
                <div className="row bottom-border">
                    <div className="playlists__subtitle">
                        <h3 className="heading-tertiary u-margin-bottom-small">
                            Tv, Brands, Commercial
                        </h3>
                    </div>
                    {useGenerateAlbumList(
                        tvBrandsComertials,
                        playingAudio,
                        playingTrackId,
                        setPlayingTrackId
                    )}
                </div>
            </section>
            <section className="section-playlists u-section-padding-bottom">
                <div className="row bottom-border">
                    <div className="playlists__subtitle">
                        <h3 className="heading-tertiary u-margin-bottom-small">
                            Early production
                        </h3>
                    </div>
                    {useGenerateAlbumList(
                        earlyProduction,
                        playingAudio,
                        playingTrackId,
                        setPlayingTrackId
                    )}
                </div>
            </section>
            <section className="section-playlists u-section-padding-bottom">
                <div className="row bottom-border">
                    <div className="playlists__subtitle">
                        <h3 className="heading-tertiary u-margin-bottom-small">
                            Remixes
                        </h3>
                    </div>
                    {useGenerateAlbumList(
                        remixed,
                        playingAudio,
                        playingTrackId,
                        setPlayingTrackId
                    )}
                </div>
            </section>
        </>
    );
}
