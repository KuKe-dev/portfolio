import { useLanguage } from "../../contexts/LanguageContext";
import { useState } from "react";
import LanguageSelector from "../LanguageSelector/LanguageSelector"

import './TopBar.css'

export default function TopBar() {
    const { t } = useLanguage();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const text = JSON.parse(t('topBar'));

    function handleAudioButtonClick(e) {
        e.preventDefault();

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

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen);
    }

    function closeMenu() {
        setIsMenuOpen(false);
    }

    return(
        <nav className="navbar">
            <div className="nav-container">
                <div className="logo">&lt;KUKE-DEV/&gt;</div>
                
                {/* Menu hamburguesa */}
                <button 
                    className={`hamburger ${isMenuOpen ? 'active' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                {/* Navigation links */}
                <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                    <li><a href='#about' onClick={closeMenu}>{text[0]}</a></li>
                    <li><a href="#projects" onClick={closeMenu}>{text[1]}</a></li>
                    <li><a href="#skills" onClick={closeMenu}>{text[2]}</a></li>
                </ul>

                {/* Additional nav items */}
                <ul className={`nav-additional ${isMenuOpen ? 'active' : ''}`}>
                    <button className="audio-button" onClick={e => handleAudioButtonClick(e)}> ▶ </button>
                    <LanguageSelector />
                </ul>
                
                <audio id="audio" src="/The-Son-of-Flynn.mp3" autoPlay loop></audio>
            </div>
        </nav>
    )
}