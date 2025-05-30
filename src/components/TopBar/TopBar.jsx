import { useLanguage } from "../../contexts/LanguageContext";
import LanguageSelector from "../LanguageSelector/LanguageSelector"

import './TopBar.css'


export default function TopBar() {

    const { t } = useLanguage();

    const text = JSON.parse(t('topBar'));

    function handleAudioButtonClick() {
        const aud = document.getElementById("audio");
        const btn = document.querySelector(".audio-button");
        if (aud.paused) {
            aud.volume = 0.1;
            aud.play();
            btn.classList.add("playing");
            btn.textContent = "❚❚";
            return;
        } else {
            btn.classList.remove("playing");
            aud.pause();
            btn.textContent = "▶";
            return;
        }
    }

return(
    <nav className="navbar">
        <div className="nav-container">
            <div className="logo">&lt;KUKE-DEV/&gt;</div>
            <ul className="nav-links">
                <li><a href='#about'>{text[0]}</a></li>
                <li><a href="#projects">{text[1]}</a></li>
                <li><a href="#skills">{text[2]}</a></li>
            </ul>
            <ul className="nav-additional">
                <button className="audio-button" onClick={handleAudioButtonClick}> ▶ </button>
                <LanguageSelector />
            </ul>
        <audio id="audio" src="/The-Son-of-Flynn.mp3" autoplay loop></audio>
        </div>
    </nav>
)
}