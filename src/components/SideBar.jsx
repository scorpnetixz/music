import "./SideBar.css";
import { useContext } from "react";
import { musicContext } from ".././App.js";
let SideBar = () => {
    // let [mobView, setMobView] = useState(false);

    // toggle sidebar according to width of window

    const {
        toggleNowPlayingComp,
        toggleAllSongsComp,
        toggleFavSongComp,
        mobView,
        setMobView,
    } = useContext(musicContext);
    let mobileView = () => {
        if (window.innerWidth < 960) {
            setMobView(true);
        } else {
            setMobView(false);
        }
    };

    let toggleMobView = () => {
        setMobView(!mobView);
    };

    window.addEventListener("resize", mobileView);
    return (
        <div className={`sidebar-container ${mobView ? "active" : ""}`}>
            <div className="ham-menu" onClick={toggleMobView}>
                <i className="fas fa-bars"></i>
            </div>
            <div className="profile-container">
                <div className="profile">
                    <img src="images/profile.png" alt="Profile" />
                </div>
                <h2>Scorpnetixz</h2>
            </div>
            <ul>
                <li onClick={toggleAllSongsComp}>
                    <i className="fas fa-music"></i> <p>Songs</p>
                </li>
                <li onClick={toggleFavSongComp}>
                    <i className="fas fa-heart"></i> <p>Favorite</p>
                </li>
                <li onClick={toggleNowPlayingComp}>
                    <i className="fas fa-play"></i> <p>Now Playing</p>
                </li>

                {/* this feature will be added on future */}

                {/* <div className="playlist-holder">
                    <li className="playlist">
                        <i className="fas fa-th-list"></i> <p>Create a Playlist</p>
                    </li>
                    <div className="add-playlist">
                        <i className="fas fa-plus"></i>
                    </div>
                </div>
                <li className="created-playlist">
                    <i className="fas fa-compact-disc"></i> <p>Rock</p>
                </li> */}
            </ul>
        </div>
    );
};

export default SideBar;
