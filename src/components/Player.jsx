import "./Player.css";

let Player = ({
    setCurrentSongIndex,
    currentSongIndex,
    songs,
    onPlayPause,
    playPause,
    audio,
    onLoadedMetadata,
    convertTime,
    currentTime,
    progressBar,
    changeRange,
    duration,
    backwardFive,
    forwardFive,
    mute,
    toggleVol,
    handleVolume,
    sliderVolRef,
}) => {
    // let [shuffle, setShuffle] = useState(false);
    // for next and prev song
    let skipSong = (next = true) => {
        if (next) {
            setCurrentSongIndex(() => {
                let temp = currentSongIndex;

                temp++;

                if (temp > songs.length - 1) {
                    temp = 0;
                }
                return temp;
            });
        } else {
            setCurrentSongIndex(() => {
                let temp = currentSongIndex;
                temp--;

                if (temp < 0) {
                    temp = songs.length - 1;
                }
                return temp;
            });
        }
    };

    // shuffling song this feature is not included
    // let toggleShuffle = () => {
    //     setShuffle(!shuffle);
    // };
    // let playSelected = (id) => {
    //     setCurrentSongIndex(id);
    //     setPlayPause(!playPause);
    // };

    return (
        <div className="player-container">
            <audio
                src={songs[currentSongIndex].songURL}
                ref={audio}
                loop="true"
                preload="metadata"
                onLoadedMetadata={onLoadedMetadata}
            ></audio>
            <div className="duration-holder">
                <div className="current-time">{convertTime(currentTime)}</div>
                <input
                    type="range"
                    className="progressBar"
                    defaultValue="0"
                    ref={progressBar}
                    onChange={changeRange}
                />
                <div className="duration">
                    {duration && !isNaN(duration) && convertTime(duration)}
                </div>
            </div>
            <div className="player-holder-container">
                <div className={`player-holder`}>
                    {/* this feature will be added on future */}
                    {/* in future */}
                    {/* <div
                        className={`random ${shuffle ? "active" : ""}`}
                        onClick={toggleShuffle}
                    >
                        <i className="fas fa-random"></i>
                    </div> */}
                    <div onClick={() => skipSong(false)}>
                        <i className="fas fa-step-backward"></i>
                    </div>
                    <div onClick={backwardFive}>
                        <i className="fas fa-backward"></i>
                    </div>
                    <div className="far-play" onClick={onPlayPause}>
                        <i
                            className={`far ${
                                !playPause
                                    ? "fa-play-circle"
                                    : "far fa-pause-circle"
                            }`}
                        ></i>
                    </div>

                    <div onClick={forwardFive}>
                        <i className="fas fa-forward"></i>
                    </div>

                    <div onClick={() => skipSong()}>
                        <i className="fas fa-step-forward"></i>
                    </div>
                    {/* this feature will be added on future */}

                    {/* <div>
                        <i className="fas fa-redo"></i>
                    </div> */}
                </div>
                <div className={`volume-container ${mute ? "active" : ""}`}>
                    <div onClick={toggleVol}>
                        <i className="fas fa-volume-up"></i>
                        <i className="fas fa-volume-mute"></i>
                    </div>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        defaultValue="100"
                        onChange={handleVolume}
                        className="volumeSlider"
                        ref={sliderVolRef}
                    />
                </div>
            </div>
        </div>
    );
};

export default Player;
