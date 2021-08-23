let FavSongs = ({
    currentFavSongIndex,
    setCurrentFavSongIndex,
    favSong,
    toggleFavSong,
    setPlayPause,
    playPause,
}) => {
    // play song from favorite category list
    let playSelected = (id) => {
        console.log(id, currentFavSongIndex);
        if (id === currentFavSongIndex) {
            if (!playPause) {
                setPlayPause(true);
            } else {
                setPlayPause(false);
            }
        } else {
            setCurrentFavSongIndex(id);
            setPlayPause(true);
        }
    };
    return (
        <ul className={`music-list`}>
            <div>
                {favSong.map((song, index) => {
                    return (
                        <div
                            key={song.id}
                            className={`list-holder ${
                                currentFavSongIndex === index ? "active" : ""
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
                                    className={`fas fa-heart ${
                                        song.isFav ? "fav" : ""
                                    }`}
                                    onClick={() => toggleFavSong(song.id)}
                                ></i>
                            </div>
                        </div>
                    );
                })}
            </div>
        </ul>
    );
};

export default FavSongs;
