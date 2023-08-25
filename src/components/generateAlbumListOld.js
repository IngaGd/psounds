

export default function generateAlbumListOld(albumList) {

    let playingAudio = null;

    const pauseOthers = (e) => {
        if (playingAudio && playingAudio !== e.target) {
            playingAudio.pause();
        }
        playingAudio = e.target;
    };

    const handlePause = (e) => {
        if (playingAudio === e.target) {
            playingAudio = null;
        }
    };
    return albumList?.map((track) => (
        <div className="player-container" key={track.id}>
            <figcaption className="player-caption">
                {track.title}
            </figcaption>
            <audio
                onPlay={pauseOthers}
                onPause={handlePause}
                className="player"
                controls
                controlsList="nodownload noplaybackrate"
                preload="none"
                anonymous="true"
                src={track.track}
            ></audio>
        </div>
    ));
}