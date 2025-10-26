
function navbar() {

    window.addEventListener("scroll", function () {
        const nav = document.querySelector(".navbar");
        if (window.scrollY > 100) {
            nav.classList.add('backdrop-blur-xl', 'border-[#1fd1f94d]', 'bg-[hsl(220,25%,6%/.8)]', 'border-b', 'shadow-[0_20px_40px_-8px_rgba(0,191,255,0.2)]');
        } else {
            nav.classList.remove('backdrop-blur-xl', 'border-b', 'border-[#1fd1f94d]', 'bg-[hsl(220,25%,6%/.8)]', 'shadow-[0_20px_40px_-8px_rgba(0,191,255,0.2)]');
        }
    });


    let div = document.querySelector(`.menu-btn`);
    const overlay = document.querySelector('.mobile-overlay');
    const overlayBackdrop = document.querySelector('.mobile-overlay-backdrop');
    const overlayPanel = document.querySelector('.mobile-overlay-panel');
    div.addEventListener(`click`, () => {

        if (div.querySelector(`.svg1`)) {
            div.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg2  transition-all duration-900 ease-in lucide  lucide-x w-6 h-6">
                            <path d="M18 6 6 18"></path>
                            <path d="m6 6 12 12"></path>
                        </svg>`
            if (overlay) overlay.classList.remove('hidden');
            if (overlayBackdrop) overlayBackdrop.classList.remove('opacity-0');
            if (overlayPanel) {
                overlayPanel.classList.remove('opacity-0', '-translate-y-full');
                // No panel transition; only link animations
                // Apply varied animations to links
                const links = overlayPanel.querySelectorAll('a');
                if (links[0]) { links[0].style.opacity = '0'; links[0].style.animation = 'slideInTopFade 0.6s ease forwards'; }
                if (links[1]) { links[1].style.opacity = '0'; links[1].style.animation = 'slideInLeftFade 0.6s ease forwards'; }
                if (links[2]) { links[2].style.opacity = '0'; links[2].style.animation = 'popInFade 0.6s ease forwards'; }
                if (links[3]) { links[3].style.opacity = '0'; links[3].style.animation = 'slideInRightFade 0.6s ease forwards'; }
                if (links[4]) { links[4].style.opacity = '0'; links[4].style.animation = 'slideInBottomFade 0.6s ease forwards'; }
            }
        } else {
            div.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="svg1 lucide lucide-menu w-6 h-6 transition-all duration-900 ease-in">
                            <line x1="4" x2="20" y1="12" y2="12" />
                            <line x1="4" x2="20" y1="6" y2="6" />
                            <line x1="4" x2="20" y1="18" y2="18" />
                        </svg> `
            if (overlayBackdrop) overlayBackdrop.classList.add('opacity-0');
            if (overlayPanel) {
                overlayPanel.classList.add('opacity-0', '-translate-y-full');
                const links = overlayPanel.querySelectorAll('a');
                links.forEach((a) => {
                    a.style.animation = 'none';
                    a.style.opacity = '0';
                })
            }
            setTimeout(() => { if (overlay) overlay.classList.add('hidden'); }, 220);
        }
    })

    // Close overlay on backdrop or link click
    if (overlay) {
        overlay.addEventListener('click', (e) => {
            if (e.target.classList && e.target.classList.contains('mobile-overlay-backdrop')) {
                div.click();
            }
        });
        overlay.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => div.click());
        });
    }

}

function animations() {
    let leftiy = document.querySelectorAll(".leftiy");
    let rightiy = document.querySelectorAll(".rightiy");
    let downiy = document.querySelectorAll(".downiy");
    leftiy.forEach(box1 => {
        let boxArray = box1.getBoundingClientRect();
        if (boxArray.top <= window.innerHeight && boxArray.bottom >= 0) {
            box1.classList.add("slide-in-left-fade");
        };
    });
    rightiy.forEach(box1 => {
        let boxArray = box1.getBoundingClientRect();
        if (boxArray.top <= window.innerHeight && boxArray.bottom >= 0) {
            box1.classList.add("slide-in-right-fade")
        };
    });
    downiy.forEach(box1 => {
        let boxArray = box1.getBoundingClientRect();
        if (boxArray.top <= window.innerHeight && boxArray.bottom >= 0) {
            box1.classList.add("slide-in-left-fade")
        };
    });
    let mafazaLeft = document.querySelectorAll(".mafazaLeft");
    let mafazaRight = document.querySelectorAll(".mafazaRight");
    let mafazaDown = document.querySelectorAll(".mafazaDown");
    mafazaLeft.forEach(box1 => {
        let boxArray = box1.getBoundingClientRect();
        if (boxArray.top <= window.innerHeight && boxArray.bottom >= 0) {
            box1.classList.add("left-animated-sa");
        };
    });
    mafazaRight.forEach(box1 => {
        let boxArray = box1.getBoundingClientRect();
        if (boxArray.top <= window.innerHeight && boxArray.bottom >= 0) {
            box1.classList.add("right-animated-sa")
        };
    });
    mafazaDown.forEach(box1 => {
        let boxArray = box1.getBoundingClientRect();
        if (boxArray.top <= window.innerHeight && boxArray.bottom >= 0) {
            box1.classList.add("down-animated-sa")
        };
    });

}
window.addEventListener("scroll", animations);
window.addEventListener("load", animations);
window.addEventListener("load",navbar);




export const projects = [
    {
        Project: 1,
        title: "My Professional Portfoilio",
        image: "../Assets/Images/portflio.png",
        descrip: "A sleek, responsive personal portfolio website built to showcase skills, projects and experience in a modern web-development stack. It highlights HTML, CSS and JavaScript (with a heavy emphasis on Tailwind CSS for utility-first styling) and is ideal for web developers looking to present themselves professionally.",
        lang: ["html", "CSS", "Tailwind CSS", "Javascript", "Github"],
        projectLink: "https://zaid-khan-code.web.app/",
        repoLink: "https://github.com/zaid-khan-code/My-Portfoilio",
        ani: "mafazaLeft",
        devs: 1,
        took: "12 Days"
    },
    {
        Project: 2,
        title: "Sell-In A simple Ecommerce web app",
        image: "../Assets/Images/Sell-In.png",
        descrip: "A simple Ecommerce web app built using Firebase Authentication, Firestore, and Vanilla JavaScript. This project allows users to sign up, log in, post ads, and browse listings — all with a clean responsive UI. The Sellin project replicates the core functionality of the Ecommerce marketplace — enabling users to buy and sell products through a Firebase-powered web interface. Users can create an account, log in, view listings, and add new products with image uploads and details.",
        lang: ["html", "CSS", "Tailwind Css", "Javascript", "Github", "firebase Auth", "Firebase Firestore"],
        projectLink: "https://sellin-code.web.app/",
        repoLink: "https://github.com/zaid-khan-code/Sellin",
        ani: "mafazaRight",
        devs: 1,
        took: "5 Days"
    },
    {
        Project: 3,
        title: "Rock-Paper-Scissors – Browser Game",
        image: "../Assets/Images/rock-paper-scissors .png",
        descrip: "A dynamic Rock-Paper-Scissors browser game, showcasing responsive design, AI-assisted UI, and handcrafted HTML, CSS, JavaScript logic for interactive, enjoyable, and persistent user experiences.",
        lang: ["html", "CSS", "Javascript", "Github"],
        projectLink: "https://rock-paper-scissors-a.netlify.app/",
        repoLink: "https://github.com/zaid-khan-code/Advance-Rock-Paper-Scissors-Game",
        ani: "mafazaLeft",
        devs: 1,
        took: "3 Days"
    },
    {
        Project: 4,
        title: "Head Tail – Browser Game",
        image: "../Assets/Images/head-tail-game.png",
        descrip: "A responsive coin-flip game demonstrating interactive front-end design, featuring AI-assisted UI with handcrafted HTML, CSS, and JavaScript logic for real-time results, smooth animations, and persistent tracking.",
        lang: ["HTML", "CSS", "JavaScript", "Github"],
        projectLink: "https://head-tail-a.netlify.app/",
        repoLink: "https://github.com/zaid-khan-code/Advance-Heads-Tails-Game-main",
        took: "2 Days",
        devs: 1,
        ani: "mafazaDown"
    },
    {
        Project: 5,
        title: "Responsive Netflix UI Clone – Pure HTML & CSS",
        image: "../Assets/Images/netflix-clone.png",
        descrip: "A comprehensive demonstration of responsive front-end engineering, utilizing only native HTML and pure CSS to perfectly emulate the global streaming service user interface.",
        lang: ["HTML", "CSS", "Github"],
        projectLink: "https://solo-dev-clone.netlify.app/",
        repoLink: "https://github.com/zaid-khan-code/Netflix",
        took: "7 Days",
        devs: 1,
        ani: "mafazaRight"
    },
    {
        Project: 6,
        title: "Responsive Devago UI Clone – Pure HTML & CSS Web Starter",
        image: "../Assets/Images/devago-clone.png",
        descrip: "Devago is a responsive, lightweight starter kit built entirely with pure HTML and CSS, offering developers a structured, scalable foundation to efficiently launch and develop web applications.",
        lang: ["HTML", "CSS", "Github"],
        projectLink: "https://devago-solo-dev.netlify.app/",
        repoLink: "https://github.com/zaid-khan-code/Devago",
        took: "6 Days",
        devs: 1,
        ani: "mafazaLeft"
    },
    {
        Project: 7,
        title: "OLD Portfolio – Interactive Personal Website Starter",
        image: "../Assets/Images/portfoli.png",
        descrip: "Portfolio is a responsive, versatile starter project built with pure HTML, CSS, and JavaScript. This project was fully generated with the assistance of AI, without any manually written code, showcasing the power of AI-driven development in creating professional, interactive, and visually engaging personal websites, resumes, and portfolios.",
        lang: ["HTML", "CSS", "Github"],
        projectLink: "https://my-portfolio-codes.netlify.app/",
        repoLink: "https://github.com/zaid-khan-code/Portfolio",
        took: "2 Days",
        ani: "mafazaDown",
        devs: 1,
    }
];

let showBigProjects = [];
showBigProjects = projects.slice(0, 1)



showBigProjects.forEach(project => {


    let html = "";

    let container = document.querySelector(`.spaaceds`);
    let temp = document.createElement("div");


    html = ` <div class="grid lg:grid-cols-2 gap-12 items-center ${project.ani} opacity-100" style="transform: none;">
                        <div class="">
                            <div
                                class="rounded-xl border border-[hsl(191_95%_55%_/_0.2)] bg-[hsl(220_25%_8%_/_0.5)] text-[hsl(210_40%_98%)] backdrop-blur-sm hover:bg-[hsl(220_25%_8%_/_0.8)] transition-all duration-500 group overflow-hidden shadow-sm">
                                <div
                                    class="aspect-video bg-gradient-to-br from-[hsl(191_95%_55%_/_0.2)] to-[hsl(280_100%_70%_/_0.2)] relative overflow-hidden">
                                    <div
                                        class="absolute inset-0 bg-[hsl(220_25%_6%_/_0.8)] flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            class="lucide lucide-play w-16 h-16 text-[hsl(191_95%_55%)] group-hover:scale-110 transition-transform">
                                            <polygon points="6 3 20 12 6 21 6 3"></polygon>
                                        </svg>
                                        </div>
                                        <img src="${project.image}" class="h-full w-full" alt="Project ${project.title}">
                                </div>
                            </div>
                        </div>
                        <div class="space-y-6">
                            <div>
                                <h3 class="text-3xl font-bold mb-4">${project.title}</h3>
                                <p class="text-lg text-[hsl(210_20%_65%)] leading-relaxed mb-6">${project.descrip}
                                </p>
                                <div class="grid grid-cols-2 gap-4 mb-6">
                                    <div class="flex items-center gap-2 text-sm text-[hsl(210_20%_65%)]"><svg
                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            class="lucide lucide-calendar w-4 h-4">
                                            <path d="M8 2v4"></path>
                                            <path d="M16 2v4"></path>
                                            <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                            <path d="M3 10h18"></path>
                                        </svg>${project.took} </div>
                                        <div class="flex items-center gap-2 text-sm text-[hsl(215_20.2%_65.1%)]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            class="lucide lucide-users w-4 h-4">
                                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                            <circle cx="9" cy="7" r="4"></circle>
                                            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                        </svg>${project.devs} developers
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-wrap gap-2 laanguagaess mb-6">
                                
                            </div>
                            <div class="flex gap-4">
                            <a href="${project.projectLink}" target="_blank"
                                    class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(191_95%_55%)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[hsl(191_95%_55%)] text-[hsl(220_25%_6%)] hover:bg-[hsl(191_95%_55%_/_0.9)] h-10 px-4 py-2 group [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0"><svg
                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="lucide lucide-external-link w-4 h-4 mr-2 group-hover:rotate-45 transition-transform">
                                        <path d="M15 3h6v6"></path>
                                        <path d="M10 14 21 3"></path>
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                    </svg>
                                    Live Demo
                                    </a>
                                    <a href="${project.repoLink}" target="_blank"
                                    class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(191_95%_55%)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-[hsl(191_95%_55%_/_0.3)] bg-[hsl(220_25%_6%)] text-[hsl(210_40%_98%)] hover:bg-[hsl(280_100%_70%)] hover:text-[hsl(280_100%_70%)] hover:border-[hsl(191_95%_55%)] h-10 px-4 py-2 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0"><svg
                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="lucide lucide-github w-4 h-4 mr-2">
                                        <path
                                            d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4">
                                        </path>
                                        <path d="M9 18c-4.51 2-5-2-7-2"></path>
                                    </svg>Source Code</a></div>
                        </div>
                    </div>`;

    temp.innerHTML = html;
    let card = temp.firstElementChild;
    container.append(card);

    // // Languages
    let container2 = card.querySelector(".laanguagaess");
    let temp2 = document.createElement("div");
    project.lang.forEach(lang => {
        temp2.insertAdjacentHTML("beforeend", ` <div
                                    class="inline-flex items-center rounded-full border border-transparent bg-[hsl(260_50%_15%)] text-[hsl(210_40%_98%)] hover:bg-[hsl(260_50%_15%_/_0.8)] px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[hsl(191_95%_55%)] focus:ring-offset-2 text-sm">
                                    ${lang}</div>`);
    });
    container2.append(...temp2.childNodes);
});


let showBigProjects2 = [];
showBigProjects2 = projects.slice(1, 2)



showBigProjects2.forEach(project => {

    let html = "";

    let container = document.querySelector(`.spaaceds`);
    let temp = document.createElement("div");

    html = `<div class="grid lg:grid-cols-2 gap-12 items-center ${project.ani} lg:grid-flow-col-dense"
                        style="opacity: 1; transform: none;">
                        <div class="lg:col-start-2">
                            <div
                                class="rounded-xl border border-[hsl(191_95%_55%_/_0.2)] bg-[hsl(220_25%_8%_/_0.5)] text-[hsl(210_40%_98%)] backdrop-blur-sm hover:bg-[hsl(220_25%_8%_/_0.8)] transition-all duration-500 group overflow-hidden shadow-sm">
                                <div
                                    class="aspect-video bg-gradient-to-br from-[hsl(191_95%_55%_/_0.2)] to-[hsl(280_100%_70%_/_0.2)] relative overflow-hidden">
                                    <div
                                        class="absolute inset-0 bg-[hsl(220_25%_6%_/_0.8)] flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            class="lucide lucide-play w-16 h-16 text-[hsl(191_95%_55%)] group-hover:scale-110 transition-transform">
                                            <polygon points="6 3 20 12 6 21 6 3"></polygon>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="space-y-6 lg:col-start-1 lg:row-start-1">
                            <div>
                                <div
                                    class="inline-flex items-center rounded-full border border-transparent bg-[hsl(191_95%_55%)] text-[hsl(220_25%_6%)] hover:bg-[hsl(191_95%_55%_/_0.8)] px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[hsl(191_95%_55%)] focus:ring-offset-2 mb-4">
                                    3D/AR</div>
                                <h3 class="text-3xl font-bold mb-4">${project.title}</h3>
                                <p class="text-lg text-[hsl(210_20%_65%)] leading-relaxed mb-6">${project.descrip}</p>
                                <div class="grid grid-cols-2 gap-4 mb-6">
                                    <div class="flex items-center gap-2 text-sm text-[hsl(191_95%_55%)]"><svg
                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            class="lucide lucide-calendar w-4 h-4">
                                            <path d="M8 2v4"></path>
                                            <path d="M16 2v4"></path>
                                            <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                            <path d="M3 10h18"></path>
                                        </svg>${project.took}</div>
                                    <div class="flex items-center gap-2 text-sm text-[hsl(191_95%_55%)]"><svg
                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            class="lucide lucide-users w-4 h-4">
                                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                            <circle cx="9" cy="7" r="4"></circle>
                                            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                        </svg>${project.devs} developers</div>
                                   
                                </div>
                                
                            </div>
                            <div class="flex flex-wrap laanguagaess gap-2 mb-6">
                                
                            </div>
                            <div class="flex gap-4"><a href="${project.projectLink}" target="_blank"
                                    class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(191_95%_55%)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[hsl(191_95%_55%)] text-[hsl(220_25%_6%)] hover:bg-[hsl(191_95%_55%_/_0.9)] h-10 px-4 py-2 group [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0"><svg
                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="lucide lucide-external-link w-4 h-4 mr-2 group-hover:rotate-45 transition-transform">
                                        <path d="M15 3h6v6"></path>
                                        <path d="M10 14 21 3"></path>
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                    </svg>Live Demo</a><a href="${project.repoLink}" target="_blank"
                                    class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(191_95%_55%)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-[hsl(191_95%_55%_/_0.3)] bg-[hsl(220_25%_6%)] text-[hsl(210_40%_98%)] hover:bg-[hsl(280_100%_70%)] hover:text-[hsl(220_25%_6%)] hover:border-[hsl(191_95%_55%)] h-10 px-4 py-2 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0"><svg
                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="lucide lucide-github w-4 h-4 mr-2">
                                        <path
                                            d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4">
                                        </path>
                                        <path d="M9 18c-4.51 2-5-2-7-2"></path>
                                    </svg>Source Code</a></div>
                        </div>
                    </div>`;

    temp.innerHTML = html;
    let card = temp.firstElementChild;
    container.append(card);

    // // Languages
    let container2 = card.querySelector(".laanguagaess");
    let temp2 = document.createElement("div");
    project.lang.forEach(lang => {
        temp2.insertAdjacentHTML("beforeend", ` <div
                                    class="inline-flex items-center rounded-full border border-transparent bg-[hsl(260_50%_15%)] text-[hsl(210_40%_98%)] hover:bg-[hsl(260_50%_15%_/_0.8)] px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[hsl(191_95%_55%)] focus:ring-offset-2 text-sm">
                                    ${lang}</div>`);
    });
    container2.append(...temp2.childNodes);
});






let showProjects = [];
showProjects = projects.slice(2)



showProjects.forEach(project => {
    let html = "";

    let container = document.querySelector(`.firstSelmt`);
    let temp = document.createElement("div");

    html = `<div style="opacity: 1; transform: none;" class="${project.ani}">
                        <div
                            class="rounded-lg border text-[hsl(210_40%_98%)] shadow-sm h-full border-[hsl(210_40%_98%_/_0.2)] bg-[hsl(222.2_84%_4.9%_/_0.5)] backdrop-blur-sm hover:bg-[hsl(222.2_84%_4.9%_/_0.8)] transition-all duration-300 group overflow-hidden">
                            <div
                                class="aspect-video bg-gradient-to-br from-[hsl(210_40%_98%_/_0.2)] to-[hsl(217.2_32.6%_17.5%_/_0.2)] relative overflow-hidden">
                                <div
                                    class="absolute inset-0 bg-[hsl(222.2_84%_4.9%_/_0.8)] flex items-center justify-center opacity-0 group-hover:z-50 group-hover:opacity-100 transition-opacity">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="lucide lucide-play w-12 h-12 text-[hsl(210_40%_98%)]">
                                        <polygon points="6 3 20 12 6 21 6 3"></polygon>
                                    </svg>
                                </div>
                                    <img src="${project.image}" class="h-full w-full" style="object-fit: cover;" alt="Project ${project.title}">
                            </div>
                            <div class="p-6">
                               
                                <h4 class="text-xl font-semibold mb-3">${project.title}</h4>
                                <p class="text-[hsl(215_20.2%_65.1%)] mb-4 text-sm">${project.descrip}
                                </p>
                                <div class="space-y-2 mb-4 text-xs text-[hsl(215_20.2%_65.1%)]">
                                    <div class="flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            class="lucide lucide-calendar w-3 h-3">
                                            <path d="M8 2v4"></path>
                                            <path d="M16 2v4"></path>
                                            <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                            <path d="M3 10h18"></path>
                                        </svg>${project.took}
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            class="lucide lucide-users w-3 h-3">
                                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                            <circle cx="9" cy="7" r="4"></circle>
                                            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                        </svg>${project.devs} developers
                                    </div>
                                </div>
                                <div class="flex flex-wrap laanguagaess gap-1 mb-4">
                                   
                                </div>
                                <div class="flex gap-2">
                                    <a href="${project.projectLink}" target="_blank" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-[hsl(222.2_84%_4.9%)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus:ring-[hsl(212.7_26.8%_83.9%)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:w-4 [&_svg]:h-4 [&_svg]:shrink-0 bg-[hsl(210_40%_98%)] text-[hsl(222.2_47.4%_11.2%)] hover:bg-[hsl(210_40%_98%_/_0.9)] h-9 rounded-md px-3 flex-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            class="lucide lucide-external-link w-3 h-3 mr-1">
                                            <path d="M15 3h6v6"></path>
                                            <path d="M10 14 21 3"></path>
                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                        </svg>Demo
                                    </a>
                                    <a href="${project.repoLink}" target="_blank" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-[hsl(222.2_84%_4.9%)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus:ring-[hsl(212.7_26.8%_83.9%)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:w-4 [&_svg]:h-4 [&_svg]:shrink-0 border bg-[hsl(222.2_84%_4.9%)] hover:bg-[hsl(217.2_32.6%_17.5%)] hover:text-[hsl(210_40%_98%)] h-9 rounded-md px-3 border-[hsl(210_40%_98%_/_0.3)]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            class="lucide lucide-github w-3 h-3">
                                            <path
                                                d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4">
                                            </path>
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
    let container2 = card.querySelector(".laanguagaess");
    let temp2 = document.createElement("div");
    project.lang.forEach(lang => {
        temp2.insertAdjacentHTML("beforeend", ` <div
                                        class="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[hsl(212.7_26.8%_83.9%)] focus:ring-offset-2 border-transparent bg-[hsl(217.2_32.6%_17.5%)] text-[hsl(210_40%_98%)] hover:bg-[hsl(217.2_32.6%_17.5%_/_0.8)] text-xs">
                                        ${lang}
                                    </div>`);
    });
    container2.append(...temp2.childNodes);
});

