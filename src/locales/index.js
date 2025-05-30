import { es } from './es';
import { en } from './en';
import { it } from './it';

export const translations = {
  es,
  en,
  it
};

export const availableLanguages = ['en', 'es', 'it'];

// Función para detectar el idioma del navegador
const getBrowserLanguage = () => {
  const userLanguage = navigator.language || navigator.userLanguage;
  // Extraer solo el código de idioma (ej: 'es-ES' -> 'es')
  const languageCode = userLanguage.split('-')[0];
  console.log(languageCode);
  
  // Verificar si el idioma detectado está disponible
  if (availableLanguages.includes(languageCode)) {
    return languageCode;
  }
  
  // Si no está disponible, devolver un idioma por defecto (en este caso 'en')
  return 'en';
};

export const defaultLanguage = getBrowserLanguage();


