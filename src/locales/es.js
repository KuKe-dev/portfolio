export const es = {
    topBar: `["ACERCA DE", "PROYECTOS", "HABILIDADES", "CONTACTO"]`,
    developer: "Desarrollador",
    description: "Soy un desarrollador fullstack autodidacta, versátil y apasionado, con una curiosidad que me acompaña desde chico: entender cómo funcionan las cosas. Esa misma curiosidad me llevó a programar mis primeros juegos sencillos y, con el tiempo, a crear proyectos web completos, que me enseñaron a desenvolverme tanto en backend como en frontend, además de aprender a desplegar y gestionar mis propios proyectos.",
    downloadCV: "DESCARGAR CV",
    projects: "PROYECTOS",
    arrayProjects: `[
        {
            "title": "GraphNeon",
            "year": "2025",
            "description": "GraphNeon es una calculadora gráfica desarrollada en React, pensada para representar funciones matemáticas de manera visual, similar a las que utilizo a diario en mi carrera de Física. Fue un proyecto personal con el objetivo de entender cómo se construyen este tipo de herramientas desde cero. No tiene backend ni base de datos, ya que toda la lógica y el renderizado ocurren en el frontend. El mayor reto técnico fue aprender a manejar el elemento <canvas> de HTML para generar gráficos en tiempo real, lo que me permitió ganar experiencia en su uso y comprender cómo llevar funciones matemáticas al plano visual mediante programación.",
            "techs": ["React", "CSS", "LaTeX", "Canvas"],
            "demo": "https://graphneon.vercel.app/",
            "code": "https://github.com/KuKe-dev/graph-neon"
        },
        {
            "title": "GoTrip",
            "year": "2025",
            "description": "GoTrip es una red social en la que los usuarios pueden compartir sus viajes, pero en lugar de mostrarse en un feed tradicional, se visualizan directamente en un mapa interactivo. Fue un proyecto personal en el que desarrollé tanto el frontend como el backend y la base de datos, además de encargarme del despliegue. El frontend lo construí con React, mientras que para el backend decidí usar Java con Spring, ya que quería experimentar con un lenguaje más estructurado que JavaScript y aprender sus buenas prácticas en el desarrollo de aplicaciones robustas. La base de datos la implementé con PostgreSQL y para la visualización de los viajes en el mapa utilicé la librería Leaflet. El mayor reto fue organizarme para sacar adelante un proyecto de esta magnitud, que requería combinar múltiples habilidades en un solo sistema. A lo largo del desarrollo aprendí a trabajar con Java y Spring en el backend y me enfrenté a desafíos como la integración eficiente de la base de datos y la implementación del mapa en la aplicación.",
            "techs": ["React", "Java", "Spring Boot", "SQL"],
            "demo": "https://gotrip-kuke.vercel.app",
            "code": "https://github.com/KuKe-dev/GoTrip"
        },
        {
            "title": "God of War - API",
            "year": "2025",
            "description": "Es una API que recopila información de la wiki de God of War mediante scraping y la expone en formato JSON para ser utilizada por una aplicación web. El backend fue desarrollado con Express.js, donde diseñé una API REST que obtiene y organiza los datos extraídos con la librería Cheerio, almacenándolos en archivos JSON dentro del servidor en lugar de usar una base de datos relacional. Para complementarlo, implementé un frontend sencillo en React que permite visualizar la información, aunque el foco principal del proyecto estuvo en la construcción de la API y el scraping. Este proyecto personal me permitió aprender desde cero los conceptos fundamentales de las APIs —endpoints, middlewares y métodos HTTP— y adquirir experiencia práctica en el scraping de datos web con Node.js.",
            "techs": ["JavaScript", "Node.js", "Express.js", "Herramientas de Web Scraping"],
            "demo": "https://god-of-war-api.vercel.app",
            "code": "https://github.com/KuKe-dev/god-of-war-api"
        }
    ]`,
    projectCardBtns: `["VER DEMO", "CÓDIGO FUENTE"]`,
    skills: "HABILIDADES",
    contact: "CONTACTO",
    contactFormInputs: `[
        {
            "label": "Nombre*",
            "placeholder": "Escribe tu nombre"
        },
        {
            "label": "Correo electrónico*",
            "placeholder": "Escribe tu correo electrónico"
        },
        {
            "label": "Asunto",
            "placeholder": "Escribe un asunto"
        },
        {
            "label": "Mensaje*",
            "placeholder": "Escribe tu mensaje"
        }
    ]`,
    contactFormBtn: `["ENVIAR", "CANCELAR"]`,
    contactFormSuccess: "¡Mensaje enviado con éxito! Me pondré en contacto contigo lo antes posible.",
    contactFormError: "Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.",
    footerMessage: "Construyendo el futuro, una línea de código a la vez"
};
