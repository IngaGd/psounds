import React, { useRef, useState } from 'react';
import useGenerateAlbumList from '../customHooks/useGenerateAlbumList';

import image1 from '../assets/images/images/AUDIO/1.JPG';
import image2 from '../assets/images/images/AUDIO/2.JPG';
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
                            <img
                                src={image1}
                                alt="portfolio"
                                className="image-box__image"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-image">
                <div className="image-box-full-screen">
                    <img src={image2} alt="" className="image" />
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
