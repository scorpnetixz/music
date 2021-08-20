import "./Main.css";
import NowPlaying from "./NowPlaying";
import AllSongs from "./AllSongs";
import FavSongs from "./FavSongs";
let Main = ({
    songs,
    currentSongIndex,
    setCurrentSongIndex,
    nextSongIndex,
    showHideComp,
    onAllSongs,
    onNowPlaying,
    onFavSong,
    duration,
    convertTime,
    audio,
    onLoadedMetadata,
    onPlayPause,
    playPause,
    setPlayPause,
    toggleFavSong,
    favSong,
}) => {
    return (
        <div className="main">
            <div className="main-content-holder">
                <h4>My Music</h4>
                <div className="category">
                    <p
                        className={`${
                            showHideComp === "nowPlaying" ? "active" : ""
                        }`}
                        onClick={onNowPlaying}
                    >
                        Now Playing
                    </p>
                    <p
                        className={`${
                            showHideComp === "allSongs" ? "active" : ""
                        }`}
                        onClick={onAllSongs}
                    >
                        Songs
                    </p>
                    <p
                        className={`${
                            showHideComp === "favSong" ? "active" : ""
                        }`}
                        onClick={onFavSong}
                    >
                        Favorite
                    </p>
                </div>
            </div>
            <div className="music-list-container">
                {showHideComp === "nowPlaying" && (
                    <NowPlaying
                        songs={songs}
                        nextSongIndex={nextSongIndex}
                        currentSongIndex={currentSongIndex}
                    />
                )}
                {showHideComp === "allSongs" && (
                    <AllSongs
                        currentSongIndex={currentSongIndex}
                        setCurrentSongIndex={setCurrentSongIndex}
                        songs={songs}
                        toggleFavSong={toggleFavSong}
                        duration={duration}
                        convertTime={convertTime}
                        audio={audio}
                        onLoadedMetadata={onLoadedMetadata}
                        playPause={playPause}
                        setPlayPause={setPlayPause}
                        onPlayPause={onPlayPause}
                    />
                )}

                {showHideComp === "favSong" && (
                    <FavSongs
                        currentSongIndex={currentSongIndex}
                        setCurrentSongIndex={setCurrentSongIndex}
                        songs={songs}
                        toggleFavSong={toggleFavSong}
                        duration={duration}
                        convertTime={convertTime}
                        audio={audio}
                        onLoadedMetadata={onLoadedMetadata}
                        playPause={playPause}
                        setPlayPause={setPlayPause}
                        onPlayPause={onPlayPause}
                        favSong={favSong}
                    />
                )}
            </div>
        </div>
    );
};

export default Main;
