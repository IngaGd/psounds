import React, { useState, useEffect } from 'react';
import { useAudioPlayer } from '../customHooks/useAudioPlayer';

import {
    IoPlaySharp,
    IoPauseSharp,
    IoVolumeHighSharp,
    IoVolumeMuteSharp,
} from 'react-icons/io5';

export const AudioPlayer = ({
    track,
    playingAudio,
    pauseOthers,
    isPlaying,
    setPlayingTrackId,
}) => {
    const { audioRef, handlePlayPause, handleTimeChange } = useAudioPlayer(
        playingAudio,
        pauseOthers,
        isPlaying,
        setPlayingTrackId,
        track.id
    );

    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(50);
    // const [showVolumeSlider, setShowVolumeSlider] = useState(false);
    const [isMuted, setIsMuted] = useState(false);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    // const handleTimeUpdate = () => {
    //     setCurrentTime(audioRef.current.currentTime);
    //     setDuration(audioRef.current.duration);
    // };

    useEffect(() => {
        const audio = audioRef.current;

        const handleTimeUpdate = () => {
            setCurrentTime(audio.currentTime);
            setDuration(audio.duration);
        };

        audio.addEventListener('timeupdate', handleTimeUpdate);
        return () => {
            audio.removeEventListener('timeupdate', handleTimeUpdate);
        };
    }, [audioRef]);

    const handleMuteClick = () => {
        audioRef.current.muted = !audioRef.current.muted;
        setIsMuted(!isMuted);
    };

    // const handleVolumeClick = () => {
    //     setShowVolumeSlider(!showVolumeSlider);
    // };

    // const handleVolumeLeave = () => {
    //     setShowVolumeSlider(false);
    // };

    const handleVolumeChange = (e) => {
        setVolume(e.target.value);
        audioRef.current.volume = e.target.value / 100;
    };

    return (
        <div className="player-container">
            <figcaption className="player-caption">{track.title}</figcaption>
            <audio
                ref={audioRef}
                className="player"
                controlsList="nodownload noplaybackrate"
                preload="none"
                anonymous="true"
                src={track.track}
            ></audio>
            <div className="player-toolbar">
                <button className="btn-player" onClick={handlePlayPause}>
                    {' '}
                    {isPlaying ? <IoPauseSharp /> : <IoPlaySharp />}
                </button>
                <span>{formatTime(currentTime)}</span> /{' '}
                <span>{formatTime(duration)}</span>
                <input
                    className="progress-bar"
                    type="range"
                    value={currentTime}
                    max={duration}
                    step="1"
                    onChange={handleTimeChange}
                />
                <div
                    className="volume-container"
                    // onMouseLeave={handleVolumeLeave}
                >
                    <button
                        className="btn-player mute"
                        onClick={handleMuteClick}
                    >
                        {isMuted ? (
                            <IoVolumeMuteSharp />
                        ) : (
                            <IoVolumeHighSharp />
                        )}
                    </button>
                    <div className="volume-slider">
                        <input
                            className="volume-slider"
                            type="range"
                            min="0"
                            max="100"
                            value={volume}
                            onChange={handleVolumeChange}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AudioPlayer;
