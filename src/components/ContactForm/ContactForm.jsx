import React, { useState } from 'react';
import './ContactForm.css'

export default function ContactForm() {
    const [showSuccess, setShowSuccess] = useState(false);
    const [showError, setShowError] = useState(false);

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
                    <label htmlFor="nombre">Nombre:</label>
                    <input type="text" id="nombre" name="nombre" required />
                </div>
                
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                
                <div className="form-group">
                    <label htmlFor="asunto">Asunto:</label>
                    <input type="text" id="asunto" name="asunto" />
                </div>
                
                <div className="form-group">
                    <label htmlFor="mensaje">Mensaje:</label>
                    <textarea id="mensaje" name="mensaje" required></textarea>
                </div>
                
                <div className="button-group">
                    <button type="submit" className="btn-primary">Enviar Mensaje</button>
                    <button type="button" onClick={() => document.getElementById("dialog")?.close()} className="btn-secondary">
                        Cancelar
                    </button>
                </div>
            </form>

            {/* Mensajes de estado */}
            {showSuccess && (
                <div className="message message-success">
                    <div className="message-content">
                        <div className="message-icon">✓</div>
                        <div className="message-text">
                            ¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.
                        </div>
                    </div>
                </div>
            )}
            
            {showError && (
                <div className="message message-error">
                    <div className="message-content">
                        <div className="message-icon">⚠</div>
                        <div className="message-text">
                            Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}