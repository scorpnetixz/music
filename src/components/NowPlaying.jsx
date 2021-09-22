import "./NowPlaying.css";
import { useContext } from "react";
import { musicContext } from ".././App.js";

let NowPlaying = () => {
    const { songs, currentSongIndex, nextSongIndex } = useContext(musicContext);

    return (
        <div className="card-container">
            <div className="card-holder">
                <img src={songs[currentSongIndex].imgURL} alt="cover" />
                <div className="player-details">
                    <p>
                        <span>Now Playing</span> :{" "}
                        {songs[currentSongIndex].title}
                    </p>

                    {/* this is feature is for future */}
                    {/* <p>Prev. Song : </p> */}
                    <p>
                        <span>Next Song</span> : {songs[nextSongIndex].title}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default NowPlaying;
