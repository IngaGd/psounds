import { AudioPlayer } from '../components/AudioPlayer';

export default function useGenerateAlbumList(albumList, playingAudio, playingTrackId, setPlayingTrackId) {

    const pauseOthers = (audio, trackId) => {
        if (playingAudio.current && playingAudio.current !== audio) {
            playingAudio.current.pause();
        }
        playingAudio.current = audio;
        setPlayingTrackId(trackId); // Set the playing track ID
    };

    return albumList?.map((track) => (
        <AudioPlayer
            key={track.id}
            track={track}
            playingAudio={playingAudio}
            pauseOthers={pauseOthers}
            isPlaying={track.id === playingTrackId}
            setPlayingTrackId={setPlayingTrackId}
        />
    ));
}

