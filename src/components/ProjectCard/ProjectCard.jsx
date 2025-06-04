import './ProjectCard.css'
import { useLanguage } from '../../contexts/LanguageContext'
import { useEffect, useState, useRef } from 'react';

export default function ProjectCard({year, title, description, techs, demo, code}) {

    const [openGraphImage, setOpenGraphImage] = useState(null);
    const [showViewMore, setShowViewMore] = useState(false);
    const textRef = useRef(null);

    const { t } = useLanguage();
    const btnTexts = JSON.parse(t('projectCardBtns'));
    
    useEffect(() => {
        const element = textRef.current;
        if (element) {
            const lineHeight = parseInt(window.getComputedStyle(element).lineHeight);
            console.log(lineHeight);
            const maxHeight = lineHeight * 3; // 3 líneas

            const needsExpansion = element.scrollHeight >= maxHeight + 2;


            setShowViewMore(needsExpansion);
        }
    }, []);

    async function getOpenGraphImage(url) {
        try {
            // Hacer una solicitud a la URL
            const response = await fetch(url);
            const html = await response.text();
            
            // Crear un documento temporal para analizar el HTML
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            
            // Buscar la meta etiqueta og:image
            const ogImage = doc.querySelector('meta[property="og:image"]');
            
            return ogImage ? ogImage.getAttribute('content') : null;
        } catch (error) {
            console.error('Error al obtener los metadatos:', error);
            return null;
        }
    }

    useEffect(() => {
        getOpenGraphImage(demo).then(setOpenGraphImage);
    }, [demo]);

return(
    <>
        <dialog id={`expanded-project-card-${title}`} className="expanded-project-card">
            <div className="dialog-content">
                <button className="close-button" onClick={() => document.getElementById('expanded-project-card').close()}>×</button>
                
                <div className="dialog-header">
                    <span className="dialog-year">{year}</span>
                    <h2 className="dialog-title">{title}</h2>
                </div>

                <img className="dialog-image" src={openGraphImage} alt="Project Image" />

                <div className="dialog-tech">
                    {techs && techs.map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                    ))}
                </div>

                <div className="dialog-description">
                    <p>{description}</p>
                </div>

                <div className="dialog-buttons">
                    <button className="btn btn-primary" onClick={() => window.open(demo, "_blank")}>
                        {btnTexts[0]}
                    </button>
                    <button className="btn btn-secondary" onClick={() => window.open(code, "_blank")}>
                        {btnTexts[1]}
                    </button>
                </div>
            </div>
        </dialog>
        <div className="project-card">
            <div className="project-year">{year}</div>

            <h3 className="project-title">{title}</h3>

            <img onClick={() => window.open(demo, "_blank")} className="project-image" src={openGraphImage} alt="Project Image" />

            <div className="project-tech">{techs && techs.map((tech, index) => (<span key={index}>{tech} • </span>))}</div>
            <div className='text-area'>
                <p ref={textRef} className="project-description">
                    {description}
                </p>
                {showViewMore && (
                    <button
                        className="view-more-button"
                        onClick={() => document.getElementById(`expanded-project-card-${title}`).showModal()}
                    >
                        View More
                    </button>
                )}
            </div>

            <div className="project-buttons">
                <button className="btn btn-primary" onClick={() => window.open(demo, "_blank")}>{btnTexts[0]}</button>
                <button className="btn btn-secondary" onClick={() => window.open(code, "_blank")}>{btnTexts[1]}</button>
            </div>
        </div>
    </>
)

}