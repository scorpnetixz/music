import "./Main.css";
import NowPlaying from "./NowPlaying";
import AllSongs from "./AllSongs";
import FavSongs from "./FavSongs";
let Main = ({
    songs,
    currentSongIndex,
    setCurrentSongIndex,
    nextSongIndex,
    currentFavSongIndex,
    setCurrentFavSongIndex,
    showHideComp,
    onAllSongs,
    onNowPlaying,
    onFavSong,
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
                        songs={songs}
                        currentSongIndex={currentSongIndex}
                        setCurrentSongIndex={setCurrentSongIndex}
                        toggleFavSong={toggleFavSong}
                        playPause={playPause}
                        setPlayPause={setPlayPause}
                        // duration={duration}
                        // convertTime={convertTime}
                        // audio={audio}
                        // onLoadedMetadata={onLoadedMetadata}
                        // onPlayPause={onPlayPause}
                    />
                )}

                {showHideComp === "favSong" && (
                    <FavSongs
                        currentFavSongIndex={currentFavSongIndex}
                        setCurrentFavSongIndex={setCurrentFavSongIndex}
                        favSong={favSong}
                        toggleFavSong={toggleFavSong}
                        setPlayPause={setPlayPause}
                        playPause={playPause}
                        // duration={duration}
                        // convertTime={convertTime}
                        // audio={audio}
                        // onLoadedMetadata={onLoadedMetadata}
                        // onPlayPause={onPlayPause}
                    />
                )}
            </div>
        </div>
    );
};

export default Main;
