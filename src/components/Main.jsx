import "./Main.css";
import NowPlaying from "./NowPlaying";
import AllSongs from "./AllSongs";
import FavSongs from "./FavSongs";
import { useContext } from "react";
import { musicContext } from ".././App.js";
let Main = () => {
    const {
        showHideComp,
        toggleAllSongsComp,
        toggleNowPlayingComp,
        toggleFavSongComp,
    } = useContext(musicContext);

    return (
        <div className="main">
            <div className="main-content-holder">
                <h4>My Music</h4>
                <div className="category">
                    <p
                        className={`${
                            showHideComp === "nowPlaying" ? "active" : ""
                        }`}
                        onClick={toggleNowPlayingComp}
                    >
                        Now Playing
                    </p>
                    <p
                        className={`${
                            showHideComp === "allSongs" ? "active" : ""
                        }`}
                        onClick={toggleAllSongsComp}
                    >
                        Songs
                    </p>
                    <p
                        className={`${
                            showHideComp === "favSong" ? "active" : ""
                        }`}
                        onClick={toggleFavSongComp}
                    >
                        Favorite
                    </p>
                </div>
            </div>
            <div className="music-list-container">
                {showHideComp === "nowPlaying" && <NowPlaying />}
                {showHideComp === "allSongs" && <AllSongs />}
                {showHideComp === "favSong" && <FavSongs />}
            </div>
        </div>
    );
};

export default Main;
