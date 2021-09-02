import "./App.css";
import SideBar from "./components/SideBar";
import Main from "./components/Main";
import Player from "./components/Player";
import { useState, useRef, useEffect } from "react";

function App() {
    let [songs, setSongs] = useState([
        {
            id: 1,
            title: "November Rain",
            artist: "Guns & Roses",
            imgURL: "images/nov-rain.jpg",
            songURL: "music/gnr-november-rain.mp3",
            isFav: false,
        },
        {
            id: 2,
            title: "Sweet Child O Mine",
            artist: "Guns & Roses",
            imgURL: "images/sweet-child.jpg",
            songURL: "music/gnr-sweet-child.mp3",
            isFav: false,
        },
        {
            id: 3,
            title: "Highway to Hell",
            artist: "AC DC",
            imgURL: "images/highway-to-hell.jpg",
            songURL: "music/acdc-highway-to-hell.mp3",
            isFav: false,
        },
        {
            id: 4,
            title: "Back in Black",
            artist: "AC DC",
            imgURL: "images/back-in-black.jpg",
            songURL: "music/acdc-back-in-black.mp3",
            isFav: false,
        },
    ]);
    let [currentSongIndex, setCurrentSongIndex] = useState(0);
    let [currentFavSongIndex, setCurrentFavSongIndex] = useState(0);
    let [favSong, setFavSong] = useState([]);
    let [nextSongIndex, setNextSongIndex] = useState(0);
    let [nextFavSongIndex, setNextFavSongIndex] = useState(0);
    let [playPause, setPlayPause] = useState(false);
    let [showHideComp, setShowHideComp] = useState("nowPlaying");
    let [duration, setDuration] = useState(0);
    let [currentTime, setCurrentTime] = useState(0);
    let [mute, setMute] = useState(false);
    let [mobView, setMobView] = useState(false);

    // References

    let audio = useRef(); // for the audio

    let progressBar = useRef(); // for the player time progress bar for range

    let animationRef = useRef(); // for animating the time progress bar

    let sliderVolRef = useRef(); // for the volume slider range

    // for playing audio and animating time progress bar
    useEffect(() => {
        if (playPause) {
            let playPromise = audio.current.play();
            if (playPromise !== undefined) {
                playPromise.then(() => {}).catch((err) => {});
            }
            animationRef.current = requestAnimationFrame(onPlaying);
        } else {
            audio.current.pause();
            cancelAnimationFrame(animationRef.current);
        }
    });

    let onPlaying = () => {
        progressBar.current.value = audio.current.currentTime;
        changeCurrentTime();
        animationRef.current = requestAnimationFrame(onPlaying);
    };

    let changeRange = () => {
        audio.current.currentTime = progressBar.current.value;
        changeCurrentTime();
    };

    let changeCurrentTime = () => {
        progressBar.current.style.setProperty(
            "--change-width",
            `${(progressBar.current.value / duration) * 100}%`
        );
        setCurrentTime(progressBar.current.value);
    };

    let forwardFive = () => {
        audio.current.currentTime = audio.current.currentTime + 5;
        setCurrentTime(audio.current.currentTime);
    };

    let backwardFive = () => {
        audio.current.currentTime = audio.current.currentTime - 5;
        setCurrentTime(audio.current.currentTime);
    };

    // formating time in min and sec
    let convertTime = (secs) => {
        let minutes = Math.floor(secs / 60);
        let returnedMinutes = minutes < 10 ? `0${minutes}` : minutes;
        let seconds = Math.floor(secs % 60);
        let returnedSeconds = seconds < 10 ? `0${seconds}` : seconds;
        return `${returnedMinutes}:${returnedSeconds}`;
    };

    // shows the duration

    let onLoadedMetadata = () => {
        const seconds = Math.floor(audio.current.duration);
        progressBar.current.max = seconds;
        setDuration(seconds);
    };

    // toggling category
    let toggleAllSongsComp = () => {
        setShowHideComp("allSongs");
        hideShowOnMobile();
    };
    let toggleNowPlayingComp = () => {
        setShowHideComp("nowPlaying");
        hideShowOnMobile();
    };

    let toggleFavSongComp = () => {
        setShowHideComp("favSong");
        hideShowOnMobile();
    };

    // hide side bar on click on mobile devices

    let hideShowOnMobile = () => {
        if (window.innerWidth < 500) {
            setMobView(true);
        }
    };

    let togglePlayPause = () => {
        setPlayPause(!playPause);
    };

    // volume adjustment

    let toggleVol = () => {
        if (mute) {
            audio.current.volume = sliderVolRef.current.value / 100;
            sliderVolRef.current.value = audio.current.volume * 100;
            setMute(false);
        } else {
            audio.current.volume = 0.0;
            setMute(true);
        }
    };

    let handleVolume = () => {
        audio.current.volume = sliderVolRef.current.value / 100;
        setMute(false);
    };

    // code for next and prev song
    useEffect(() => {
        if (showHideComp === "favSong") {
            setNextFavSongIndex(() => {
                if (currentFavSongIndex + 1 > favSong.length - 1) {
                    return (currentFavSongIndex = 0);
                } else {
                    return currentFavSongIndex + 1;
                }
            });
        } else {
            setNextSongIndex(() => {
                if (currentSongIndex + 1 > songs.length - 1) {
                    return (currentSongIndex = 0);
                } else {
                    return currentSongIndex + 1;
                }
            });
        }
    }, [currentSongIndex, currentFavSongIndex]);

    let skipSong = (next = true) => {
        if (next) {
            if (showHideComp === "favSong") {
                setCurrentFavSongIndex(() => {
                    let temp = currentFavSongIndex;

                    temp++;

                    if (temp > favSong.length - 1) {
                        temp = 0;
                    }
                    return temp;
                });
            } else {
                setCurrentSongIndex(() => {
                    let temp = currentSongIndex;

                    temp++;

                    if (temp > songs.length - 1) {
                        temp = 0;
                    }
                    return temp;
                });
            }
        } else {
            if (showHideComp === "favSong") {
                setCurrentFavSongIndex(() => {
                    let temp = currentFavSongIndex;
                    temp--;

                    if (temp < 0) {
                        temp = favSong.length - 1;
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
        }
    };

    useEffect(() => {
        if (showHideComp === "favSong") {
            if (favSong.length === currentFavSongIndex) {
                setCurrentFavSongIndex(() => {
                    if (currentFavSongIndex <= 0) {
                        return (currentFavSongIndex = 0);
                    } else {
                        return currentFavSongIndex--;
                    }
                });
            }
        }
    }, [favSong, currentFavSongIndex]);

    // toggling fav song styling color for heart

    useEffect(() => {}, [songs]);

    let toggleFavSong = (id) => {
        let updateFavSong = songs.map((song) => {
            if (song.id === id) {
                song.isFav = !song.isFav;
            }
            return song;
        });

        setSongs(() => updateFavSong);
        callSetFavSong();
    };

    let callSetFavSong = () => {
        let filteredSongs = songs.filter((song) => {
            if (song.isFav) {
                return song;
            } else {
                return false;
            }
        });
        setFavSong(() => filteredSongs);
    };
    return (
        <div className="main-container">
            <SideBar
                showHideComp={showHideComp}
                onNowPlaying={toggleNowPlayingComp}
                onAllSongs={toggleAllSongsComp}
                onFavSong={toggleFavSongComp}
                mobView={mobView}
                setMobView={setMobView}
            />
            <div className="main-holder">
                <Main
                    songs={songs}
                    currentSongIndex={currentSongIndex}
                    setCurrentSongIndex={setCurrentSongIndex}
                    nextSongIndex={nextSongIndex}
                    currentFavSongIndex={currentFavSongIndex}
                    setCurrentFavSongIndex={setCurrentFavSongIndex}
                    showHideComp={showHideComp}
                    onAllSongs={toggleAllSongsComp}
                    onNowPlaying={toggleNowPlayingComp}
                    onFavSong={toggleFavSongComp}
                    playPause={playPause}
                    setPlayPause={setPlayPause}
                    toggleFavSong={toggleFavSong}
                    favSong={favSong}
                />
                <Player
                    setCurrentSongIndex={setCurrentSongIndex}
                    currentSongIndex={currentSongIndex}
                    currentFavSongIndex={currentFavSongIndex}
                    setCurrentFavSongIndex={setCurrentFavSongIndex}
                    songs={songs}
                    onPlayPause={togglePlayPause}
                    playPause={playPause}
                    audio={audio}
                    onLoadedMetadata={onLoadedMetadata}
                    convertTime={convertTime}
                    currentTime={currentTime}
                    progressBar={progressBar}
                    changeRange={changeRange}
                    duration={duration}
                    backwardFive={backwardFive}
                    forwardFive={forwardFive}
                    mute={mute}
                    toggleVol={toggleVol}
                    handleVolume={handleVolume}
                    sliderVolRef={sliderVolRef}
                    showHideComp={showHideComp}
                    favSong={favSong}
                    skipSong={skipSong}
                />
            </div>
        </div>
    );
}

export default App;
