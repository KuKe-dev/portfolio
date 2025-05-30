// src/components/LanguageSelector.jsx
import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import './LanguageSelector.css';

const LanguageSelector = () => {
  const { language, changeLanguage, availableLanguages } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const languageData = {
    en: {
      flag: 'https://flagcdn.com/32x24/us.png',
      name: 'English',
      code: 'US'
    },
    es: {
      flag: 'https://flagcdn.com/32x24/es.png',
      name: 'Español',
      code: 'ES'
    },
    it: {
      flag: 'https://flagcdn.com/32x24/it.png',
      name: 'Italiano',
      code: 'IT'
    }
  };

  // Cerrar dropdown al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageSelect = (langCode) => {
    changeLanguage(langCode);
    setIsOpen(false);
  };

  const currentLanguage = languageData[language];

  return (
    <div className="language-selector" ref={dropdownRef}>
      <div 
        className="language-selector-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img 
          src={currentLanguage.flag} 
          alt={`${currentLanguage.name} flag`}
          className="flag-icon"
        />
        <span className="language-code">{currentLanguage.code}</span>
        <span className={`dropdown-arrow ${isOpen ? 'open' : ''}`}>▼</span>
      </div>
      
      {isOpen && (
        <div className="language-dropdown">
          {availableLanguages.sort((a) => a === 'en' ? -1 : 1).map((lang) => (
            <div
              key={lang}
              className={`language-option ${lang === language ? 'active' : ''}`}
              onClick={() => handleLanguageSelect(lang)}
            >
              <img 
                src={languageData[lang].flag} 
                alt={`${languageData[lang].name} flag`}
                className="flag-icon"
              />
              <span className="language-name">{languageData[lang].name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;