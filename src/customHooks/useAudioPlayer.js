import { useEffect } from 'react';
import { useRef } from 'react';

export const useAudioPlayer = (playingAudio, pauseOthers, isPlaying, setPlayingTrackId, trackId) => {
    const audioRef = useRef();

    const handlePlayPause = () => {
        if (audioRef.current.paused) {
            audioRef.current.play();
            pauseOthers(audioRef.current);
            setPlayingTrackId(trackId);
        } else {
            audioRef.current.pause();
            playingAudio.current = null;
            setPlayingTrackId(null);
        }
    };

    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    }, [isPlaying]);

    const handleTimeChange = (e) => {
        audioRef.current.currentTime = e.target.value;
    };

    return {
        audioRef,
        handlePlayPause,
        handleTimeChange,
        isPlaying
    };
};
