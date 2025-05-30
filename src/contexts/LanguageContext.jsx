import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, defaultLanguage } from '../locales';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage debe usarse dentro de LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Obtener idioma guardado o usar el del navegador
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) return savedLanguage;
    
    const browserLanguage = navigator.language.split('-')[0];
    return translations[browserLanguage] ? browserLanguage : defaultLanguage;
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key, params = {}) => {
    const keys = key.split('.');
    let translation = translations[language];
    
    for (const k of keys) {
      translation = translation?.[k];
    }
    
    if (!translation) {
      console.warn(`Traducción no encontrada: ${key}`);
      return key;
    }
    
    // Reemplazar parámetros {{param}}
    return translation.replace(/\{\{(\w+)\}\}/g, (match, param) => {
      return params[param] || match;
    });
  };

  const changeLanguage = (newLanguage) => {
    if (translations[newLanguage]) {
      setLanguage(newLanguage);
    }
  };

  return (
    <LanguageContext.Provider value={{
      language,
      changeLanguage,
      t,
      availableLanguages: Object.keys(translations)
    }}>
      {children}
    </LanguageContext.Provider>
  );
};