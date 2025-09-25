let container = document.querySelector(`.sec-3-div-4`);
let html = "";

export const projects = [
    {
        Project: 1,
        title: "Rock-Paper-Scissors – Browser Game",
        image: "../Assets/Images/rock-paper-scissors .png",
        descrip: "A dynamic Rock-Paper-Scissors browser game, showcasing responsive design, AI-assisted UI, and handcrafted HTML, CSS, JavaScript logic for interactive, enjoyable, and persistent user experiences.",
        lang: ["html", "CSS", "Javascript", "Github"],
        projectLink: "https://rock-paper-scissors-a.netlify.app/",
        repoLink: "https://github.com/zaid-khan-code/Advance-Rock-Paper-Scissors-Game"
    },
    {
        Project: 2,
        title: "Head Tail – Browser Game",
        image: "../Assets/Images/head-tail-game.png",
        descrip: "A responsive coin-flip game demonstrating interactive front-end design, featuring AI-assisted UI with handcrafted HTML, CSS, and JavaScript logic for real-time results, smooth animations, and persistent tracking.",
        lang: ["HTML", "CSS", "JavaScript", "Github"],
        projectLink: "https://head-tail-a.netlify.app/",
        repoLink: "https://github.com/zaid-khan-code/Advance-Heads-Tails-Game-main"
    },
    {
        Project: 3,
        title: "Responsive Netflix UI Clone – Pure HTML & CSS",
        image: "../Assets/Images/netflix-clone.png",
        descrip: "A comprehensive demonstration of responsive front-end engineering, utilizing only native HTML and pure CSS to perfectly emulate the global streaming service user interface.",
        lang: ["HTML", "CSS", "Github"],
        projectLink: "https://solo-dev-clone.netlify.app/",
        repoLink: "https://github.com/zaid-khan-code/Netflix"
    },
    {
        Project: 4,
        title: "Responsive Devago UI Clone – Pure HTML & CSS Web Starter",
        image: "../Assets/Images/devago-clone.png",
        descrip: "Devago is a responsive, lightweight starter kit built entirely with pure HTML and CSS, offering developers a structured, scalable foundation to efficiently launch and develop web applications.",
        lang: ["HTML", "CSS", "Github"],
        projectLink: "https://devago-solo-dev.netlify.app/",
        repoLink: "https://github.com/zaid-khan-code/Devago"
    },
    {
        Project: 5,
        title: "Portfolio – Interactive Personal Website Starter",
        image: "../Assets/Images/portfoli.png",
        descrip: "Portfolio is a responsive, versatile starter project built with pure HTML, CSS, and JavaScript. This project was fully generated with the assistance of AI, without any manually written code, showcasing the power of AI-driven development in creating professional, interactive, and visually engaging personal websites, resumes, and portfolios.",
        lang: ["HTML", "CSS", "Github"],
        projectLink: "https://my-portfolio-codes.netlify.app/",
        repoLink: "https://github.com/zaid-khan-code/Portfolio"
    }
];
let showProjects = [];


showProjects = projects.slice(0, 3);

showProjects.forEach(project => {
    let temp = document.createElement("div");

    html = `<div class="sec-3-div-4-div-1">
                <div class="sec-3-div-4-div-1-div-1 project${project.Project}">
                    <img src="${project.image}" alt="Projects${project.Project}">
                    <svg class="svgiii" style="height: 45px; width: 45px;" xmlns="http://www.w3.org/2000/svg"
                        width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="lucide lucide-play w-16 h-16 text-primary group-hover:scale-110 transition-transform">
                        <polygon points="6 3 20 12 6 21 6 3"></polygon>
                    </svg>
                </div>
                <div class="sec-3-div-4-div-1-div-2">
                    <div class="sec-3-div-2-div-2 sec-3-div-4-div-1-div-2-div-1">
                        <div class="sec-3-div-2-div-2-div-1 sec-3-div-4-div-1-div-2-div-1-div-1">${project.title}</div>
                        <div class="sec-3-div-2-div-2-div-2 sec-3-div-4-div-1-div-2-div-1-div-2">${project.descrip}</div>
                        <div class="sec-3-div-2-div-2-div-3 sec-3-div-4-div-1-div-2-div-1-div-3 smalllleee"></div>
                        <div class="sec-3-div-2-div-2-div-4 sec-3-div-4-div-1-div-2-div-1-div-4">
                            <a href="${project.projectLink}" target="_blank" rel="noopener noreferrer"
                                class="sec-3-div-2-div-2-div-4-btn-1 botonossss1 new-botoneessss1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="lucide lucide-external-link w-4 h-4 mr-2 group-hover:rotate-45 transition-transform">
                                    <path d="M15 3h6v6"></path>
                                    <path d="M10 14 21 3"></path>
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                </svg>Live Demo</a>
                            <a href="${project.repoLink}" target="_blank" rel="noopener noreferrer"
                                class="sec-3-div-2-div-2-div-4-btn-2 botonossss2 new-botoneessss2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="lucide lucide-github w-4 h-4 mr-2">
                                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 
                                    0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 
                                    0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 
                                    1.85v4"></path>
                                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                                </svg>
                            </a>
                        </div>
                    </div> 
                </div>
            </div>`;

    temp.innerHTML = html;
    let card = temp.firstElementChild;
    container.append(card);

    // Languages
    let container2 = card.querySelector(".sec-3-div-4-div-1-div-2-div-1-div-3");
    let temp2 = document.createElement("div");
    project.lang.forEach(lang => {
        temp2.insertAdjacentHTML("beforeend", `<div class="technologiessss megennas">${lang}</div>`);
    });
    container2.append(...temp2.childNodes);
});
