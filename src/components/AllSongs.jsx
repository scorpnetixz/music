import "./AllSongs.css";
import { useContext } from "react";
import { musicContext } from ".././App.js";

let AllSongs = () => {
    const {
        songs,
        currentSongIndex,
        setCurrentSongIndex,
        playPause,
        setPlayPause,
        toggleFavSong,
    } = useContext(musicContext);

    // play songs from all songs list
    let playSelected = (id) => {
        if (id === currentSongIndex) {
            if (!playPause) {
                setPlayPause(true);
            } else {
                setPlayPause(false);
            }
        } else {
            setCurrentSongIndex(id);
            setPlayPause(true);
        }
    };
    return (
        <ul className={`music-list`}>
            <div>
                {songs.map((song, index) => {
                    return (
                        <li
                            key={song.title}
                            className={`list-holder ${
                                currentSongIndex === index ? "active" : ""
                            }`}
                        >
                            <div
                                className="music-title"
                                onClick={() => playSelected(index)}
                            >
                                <img src={song.imgURL} alt="" />
                                <div className="artist-container">
                                    <strong>{song.title}</strong>
                                    <p>{song.artist}</p>
                                </div>
                            </div>
                            <div className="music-details">
                                {/* this feature will be added on future */}
                                {/* <p>
                                    {duration &&
                                        !isNaN(duration) &&
                                        convertTime(duration)}
                                </p> */}
                                <i
                                    key={song.id}
                                    className={`fas fa-heart ${
                                        song.isFav ? "fav" : ""
                                    }`}
                                    onClick={() => toggleFavSong(song.id)}
                                ></i>
                            </div>
                        </li>
                    );
                })}
            </div>
        </ul>
    );
};

export default AllSongs;
