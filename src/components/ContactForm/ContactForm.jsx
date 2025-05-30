import React, { useState } from 'react';
import './ContactForm.css'
import { useLanguage } from '../../contexts/LanguageContext';

export default function ContactForm() {
    const [showSuccess, setShowSuccess] = useState(false);
    const [showError, setShowError] = useState(false);

    const { t } = useLanguage();

    const inputs = JSON.parse(t('contactFormInputs'));
    const btn = JSON.parse(t('contactFormBtn'));

    function submitForm(e) {
        e.preventDefault();
        
        // Ocultar mensajes previos
        setShowSuccess(false);
        setShowError(false);

        const formEndpoint = 'https://formspree.io/f/xovwaqeq';
        const formData = new FormData(e.target);
        
        fetch(formEndpoint, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                setShowSuccess(true);
                e.target.reset();
                // Ocultar mensaje después de 5 segundos
                setTimeout(() => setShowSuccess(false), 5000);
            } else {
                setShowError(true);
                setTimeout(() => setShowError(false), 5000);
                throw new Error('Error en el envío');
            }
        })
        .catch(error => {
            console.error(error);
            setShowError(true);
            setTimeout(() => setShowError(false), 5000);
        });
    }

    return (
        <>
            <form onSubmit={submitForm} id="formulario-contacto" className="synthwave-form">
                <div className="form-group">
                    <label htmlFor="nombre">{inputs[0].label}:</label>
                    <input type="text" id="nombre" name="nombre" placeholder={inputs[0].placeholder} required />
                </div>
                
                <div className="form-group">
                    <label htmlFor="email">{inputs[1].label}:</label>
                    <input type="email" id="email" name="email" placeholder={inputs[1].placeholder} required />
                </div>
                
                <div className="form-group">
                    <label htmlFor="asunto">{inputs[2].label}:</label>
                    <input type="text" id="asunto" name="asunto" placeholder={inputs[2].placeholder} />
                </div>
                
                <div className="form-group">
                    <label htmlFor="mensaje">{inputs[3].label}:</label>
                    <textarea id="mensaje" name="mensaje" placeholder={inputs[3].placeholder} required></textarea>
                </div>
                
                <div className="button-group">
                    <button type="submit" className="btn-primary">{btn[0]}</button>
                    <button type="button" onClick={() => document.getElementById('formulario-contacto').reset() } className="btn-secondary">
                        {btn[1]}
                    </button>
                </div>
            </form>

            {/* Mensajes de estado */}
            {showSuccess && (
                <div className="message message-success">
                    <div className="message-content">
                        <div className="message-icon">✓</div>
                        <div className="message-text">
                            {t('contactFormSuccess')}
                        </div>
                    </div>
                </div>
            )}
            
            {showError && (
                <div className="message message-error">
                    <div className="message-content">
                        <div className="message-icon">⚠</div>
                        <div className="message-text">
                            {t('contactFormError')}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}