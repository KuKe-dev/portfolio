/* eslint-disable no-unused-vars */
import './Home.css'
import avatar from '../../public/Avatar.png'
import { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext.jsx';
import LanguageSelector from '../components/LanguageSelector/LanguageSelector.jsx';
import TopBar from '../components/TopBar/TopBar.jsx';
import Button from '../components/Button/Button.jsx';
import Background from '../components/Background/Background.jsx';
import ProjectCard from '../components/ProjectCard/ProjectCard.jsx';
import ContactForm from '../components/ContactForm/ContactForm.jsx';

import reactLogo from '../assets/svg/react.svg'
import htmlLogo from '../assets/svg/html.svg'
import cssLogo from '../assets/svg/css.svg'
import jsLogo from '../assets/svg/javascript.svg'
import javaLogo from '../assets/svg/java.svg'
import springLogo from '../assets/svg/springBoot.svg'
import sqlLogo from '../assets/svg/sql.svg'
import gitLogo from '../assets/svg/git.svg'
import emailLogo from '../assets/svg/email.svg'
import linkedinLogo from '../assets/svg/linkedin.svg'
import githubLogo from '../assets/svg/github.svg'


export default function Home() {

    const { t } = useLanguage();

    const projects = JSON.parse(t('arrayProjects'));
    console.log(projects);

    const skills = [
    { 
        name: "REACT", 
        color: "violet",
        icon: reactLogo,
        link: "https://react.dev/"
    },
    {
        name: "HTML", 
        color: "orange",
        icon: htmlLogo,
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML"
    },
    { 
        name: "CSS", 
        color: "violet",
        icon: cssLogo,
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS"
    },
    { 
        name: "JAVASCRIPT", 
        color: "yellow",
        icon: jsLogo,
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
    },
    { 
        name: "JAVA", 
        color: "red",
        icon: javaLogo,
        link: "https://www.java.com/"
    },
    { 
        name: "SPRING", 
        color: "green",
        icon: springLogo,
        link: "https://spring.io/"
    },
    {
        name: "SQL", 
        color: "violet",
        icon: sqlLogo,
        link: "https://www.mysql.com/"
    },
    { 
        name: "GIT", 
        color: "orange",
        icon: gitLogo,
        link: "https://git-scm.com/"
    }
];


return (
    <div className='body'>
        <Background/>

        <TopBar />
        
        {/* About Section */}
        <section id="about" className="section">
            <div className="container">
                <div className="about-content">
                    <h1 className="main-title">LUCA DI BENE</h1>
                    <div className="subtitle">
                        <span className="glitch-text" id="glitchText">{t('developer')}</span>
                    </div>
                    
                    <div className="profile-image-container" onClick={e => {e.target.classList.add("spin");setTimeout(() => {e.target.classList.remove("spin")}, 2000)}} >
                        <img className="profile-image" src={avatar} alt="👨‍💻" style={{width: "100%"}} />
                    </div>

                    <p className="description">
                        {t('description')}
                    </p>

                    <div className="buttons">
                        <a href="../../public/Cv-Luca-Di-Bene.pdf" download="Cv Luca Di Bene.pdf">
                            <Button variant="primary">{t('downloadCV')}</Button>
                        </a>
                        

                    </div>
                </div>
            </div>
        </section>

        <div className="divider"></div>

        {/* Projects Section */}
        <section id="projects" className="section">
            <div className="container">
                <h2 className="section-title">{t('projects')}</h2>
                <div className="section-divider"></div>
                
                <div className="projects-grid">
                    {projects && projects.map((project, index) => (
                        <ProjectCard 
                            key={index}
                            title={project.title}
                            year={project.year}
                            description={project.description}
                            techs={project.techs}
                            demo={project.demo}
                            code={project.code}
                        />
                    ))}
                </div>
            </div>
        </section>

        <div className="divider"></div>

        {/* Skills Section */}
        <section id="skills" className="section">
            <div className="container">
                <div className="skills-container">
                    <h2 className="section-title">{t('skills')}</h2>
                    <div className="section-divider"></div>

                    <div className="skills-flex">
                        {skills.map((skill, index) => (
                            <div onClick={() => window.open(skill.link)} key={index} className={`skill-item ${skill.color}`}>
                                <div className="skill-header">
                                    <img className="skill-icon" src={skill.icon} alt={skill.name} />
                                    <span className="skill-name">{skill.name}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>

        <div className="divider"></div>
        
        <section id="contact" className="section">
            <div className="container">
                <h2 className="section-title">{t('contact')}</h2>
                <div className="section-divider"></div>
                <ContactForm />
            </div>
        </section>
        <footer className="footer">
            <div className="footer-logo">&lt;KUKE-DEV/&gt;</div>
            <p className="footer-text">{t('footerMessage')}</p>
            <div className="social-links">
                <button onClick={() => window.open("mailto:lucadibene08@gmail.com", "_blank")} className="social-btn social-email"><img src={emailLogo} alt='Email' style={{width: "65%"}} /></button>
                <button onClick={() => window.open("https://www.linkedin.com/in/luca-di-bene/", "_blank")} className="social-btn social-linkedin"><img src={linkedinLogo} alt="LinkedIn" style={{width: "55%"}} /></button>
                <button onClick={() => window.open("https://github.com/KuKe-dev", "_blank")} className="social-btn social-github"><img src={githubLogo} alt="GitHub" style={{width: "60%"}} /></button>
            </div>
        </footer>

        <div className="bottom-grid"></div>

    </div>
)}