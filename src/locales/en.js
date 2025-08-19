export const en = {
    topBar: `["ABOUT", "PROJECTS", "SKILLS", "CONTACT"]`,
    developer: "Developer",
    description: "I’m a self-taught, versatile, and passionate fullstack developer, driven by a curiosity I’ve had since I was a kid: understanding how things work. That same curiosity led me to build my own simple games and, over time, to create complete web projects that taught me how to work across backend and frontend, as well as how to deploy and manage my own applications.",
    downloadCV: "DOWNLOAD RESUME",
    projects: "PROJECTS",
    arrayProjects: `[
        {
            "title": "GraphNeon",
            "year": "2025",
            "description": "GraphNeon is a graphing calculator built with React, designed to visually represent mathematical functions, similar to the ones I use daily in my Physics studies. It was a personal project where I challenged myself to understand how tools like this are built from scratch. It doesn’t use a backend or database since all the logic and rendering happen on the frontend. The biggest technical challenge was learning how to use the HTML <canvas> element to render graphs in real time, which gave me hands-on experience and helped me understand how to bring mathematical functions into the visual domain through programming.",
            "techs": ["React", "CSS", "LaTeX", "Canvas"],
            "demo": "https://graphneon.vercel.app/",
            "code": "https://github.com/KuKe-dev/graph-neon"
        },
        {
            "title": "GoTrip",
            "year": "2025",
            "description": "GoTrip is a social network where users can share their trips, but instead of being displayed in a traditional feed, they appear directly on an interactive map. It was a personal project where I developed the frontend, backend, and database, as well as handling the deployment. I built the frontend with React, while for the backend I chose Java with Spring because I wanted to work with a more structured language than JavaScript and learn its best practices for building robust applications. The database was built with PostgreSQL, and for map visualization I used the Leaflet library. The biggest challenge was staying organized to complete a project of this scope, which required bringing together multiple skills into one system. Throughout development I learned to work with Java and Spring for the backend and tackled challenges like efficient database integration and map implementation.",
            "techs": ["React", "Java", "Spring Boot", "SQL"],
            "demo": "https://gotrip-kuke.vercel.app",
            "code": "https://github.com/KuKe-dev/GoTrip"
        },
        {
            "title": "God of War - API",
            "year": "2025",
            "description": "This is an API that collects information from the God of War wiki through scraping and exposes it in JSON format for a web app to consume. The backend was developed with Express.js, where I built a REST API that fetches and organizes the scraped data using the Cheerio library, storing it in JSON files on the server instead of a relational database. To complement it, I built a simple React frontend to visualize the information, though the main focus of the project was the API and scraping. This personal project gave me the chance to learn API fundamentals from scratch —endpoints, middleware, and HTTP methods— and gain hands-on experience with web scraping in Node.js.",
            "techs": ["JavaScript", "Node.js", "Express.js", "Web Scraping Tools"],
            "demo": "https://god-of-war-api.vercel.app",
            "code": "https://github.com/KuKe-dev/god-of-war-api"
        }
    ]`,
    projectCardBtns: `["VIEW DEMO", "SOURCE CODE"]`,
    skills: "SKILLS",
    contact: "CONTACT",
    contactFormInputs: `[
        {
            "label": "Name*",
            "placeholder": "Enter your name"
        },
        {
            "label": "Email*",
            "placeholder": "Enter your email"
        },
        {
            "label": "Subject",
            "placeholder": "Enter a subject"
        },
        {
            "label": "Message*",
            "placeholder": "Type your message"
        }
    ]`,
    contactFormBtn: `["SEND", "CANCEL"]`,
    contactFormSuccess: "Your message has been sent! I’ll get back to you as soon as possible.",
    contactFormError: "There was an error sending your message. Please try again later.",
    footerMessage: "Building the future, one line of code at a time"
};