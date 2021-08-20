let FavSongs = ({
    currentSongIndex,
    setCurrentSongIndex,
    favSong,
    toggleFavSong,
    setPlayPause,
    playPause,
}) => {
    // play song from favorite category list
    let playSelected = (id) => {
        console.log(id, currentSongIndex);
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
            <li>
                {favSong.map((song, index) => {
                    return (
                        <div
                            key={song.id}
                            className={`list-holder ${
                                currentSongIndex === index + 1 ? "active" : ""
                            }`}
                        >
                            <div
                                className="music-title"
                                onClick={() => playSelected(song.id - 1)}
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
                                    className={`fas fa-heart ${
                                        song.isFav ? "fav" : ""
                                    }`}
                                    onClick={() => toggleFavSong(song.id)}
                                ></i>
                            </div>
                        </div>
                    );
                })}
            </li>
        </ul>
    );
};

export default FavSongs;
