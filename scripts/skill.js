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
    let popOut = document.querySelectorAll(".popOutAnimati");
    popOut.forEach(box1 => {
        let boxArray = box1.getBoundingClientRect();
        if (boxArray.top <= window.innerHeight && boxArray.bottom >= 0) {
            box1.classList.add("popOut");
        };
    });
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
            box1.classList.add("slide-in-bottom-fade")
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

    // Progress bar animation
    let progressBars = document.querySelectorAll(".skill-progress-bar");
    progressBars.forEach(bar => {
        let boxArray = bar.getBoundingClientRect();
        if (boxArray.top <= window.innerHeight && boxArray.bottom >= 0) {
            if (!bar.classList.contains("animate-progress")) {
                // Get the inline transform value (the target position)
                const inlineTransform = bar.style.transform || 'translateX(0)';
                bar.style.setProperty('--progress-transform', inlineTransform);
                bar.classList.add("animate-progress");
            }
        }
    });

}
window.addEventListener("scroll", animations);
window.addEventListener("load", animations);
window.addEventListener("load", navbar);



let frontEndSkills = [
    {
        skill: "HTML5",
        progess: 95
    },
    {
        skill: "CSS3",
        progess: 90
    },
    {
        skill: "Tailwind CSS",
        progess: 80
    },
    {
        skill: "JavaScript (ES6+)",
        progess: 85
    },
    {
        skill: "React.js",
        progess: 30
    },
    {
        skill: "Next.js",
        progess: 10
    },
    // {
    //     skill: "TypeScript",
    //     progess: 0
    // },
    // {
    //     skill: "Three.js/WebGL",
    //     progess: 0
    // },
    // {
    //     skill: "Framer Motion",
    //     progess: 0
    // }
];

let backEndSkills = [
    // {
    //     skill: "Node.js",
    //     progess: 0
    // },
    // {
    //     skill: "Express.js",
    //     progess: 0
    // },
    {
        skill: "Firebase Authentication & Firestore",
        progess: 70
    },
    // {
    //     skill: "MongoDB",
    //     progess: 0
    // },
    // {
    //     skill: "Python",
    //     progess: 0
    // },
    // {
    //     skill: "Django",
    //     progess: 0
    // },
    // {
    //     skill: "SQL",
    //     progess: 0
    // },
    // {
    //     skill: "Postman API",
    //     progess: 0
    // },
    // {
    //     skill: "Rest API",
    //     progess: 0
    // },
];


// let CloudAndDevOpsSkills = [
//     {
//         skill: "AWS",
//         progess: 0
//     },
//     {
//         skill: "Google Cloud",
//         progess: 0
//     },
//     {
//         skill: "Docker",
//         progess: 0
//     },
//     {
//         skill: "Kubernetes",
//         progess: 0
//     },
//     {
//         skill: "CI/CD",
//         progess: 0
//     }
// ];


// let MobileDevelopmentSkills = [
//     {
//         skill: "React Native",
//         progess: 0
//     },
//     {
//         skill: "Flutter",
//         progess: 0
//     },
//     {
//         skill: "iOS (Swift)",
//         progess: 0
//     },
//     {
//         skill: "Android (Kotlin)",
//         progess: 0
//     }
// ];


let DesignAndToolsSkills = [
    {
        skill: "Figma",
        progess: 60
    },
    {
        skill: "Git & Github",
        progess: 80
    },
    {
        skill: "VS Code",
        progess: 90
    },
    {
        skill: "Cursor IDE",
        progess: 70
    },
    {
        skill: "Jasmine Testing",
        progess: 50
    },
    {
        skill: "Vercel hosting",
        progess: 80
    }
    ,
    {
        skill: "Netlify hosting",
        progess: 95
    }
    ,
    {
        skill: "Firebase hosting",
        progess: 99
    }
];

function createSkillCard(skillsArray, svg, name) {
    // Find the container where cards should be appended (adjust selector as needed)
    const mainContainer = document.querySelector(".skills-container") || document.body;

    let temp = document.createElement("div");

    let html = `<div class="col-span-1 mafazaRight" style="opacity: 1; transform: none;">
                    <div class="rounded-xl border border-[hsl(191_95%_55%_/_0.2)] bg-[hsl(220_25%_8%_/_0.5)] text-[hsl(210_40%_98%)] shadow-sm h-full backdrop-blur-sm hover:bg-[hsl(220_25%_8%_/_0.8)] transition-all duration-300">
                        <div class="p-6">
                            <div class="flex items-center gap-3 mb-6">
                                <div class="p-2 rounded-lg bg-[hsl(191_95%_55%_/_0.1)]">
                                ${svg}
                                </div>
                                <h3 class="text-xl font-semibold">${name}</h3>
                            </div>
                            <div class="space-y-4 skillesa">
                                <!-- Skills will be inserted here -->
                            </div>
                        </div>
                    </div>
                </div>`;

    temp.innerHTML = html;
    let card = temp.firstElementChild;

    // Get the skills container within the card
    let skillsContainer = card.querySelector(".skillesa");

    // Add each skill to the card
    skillsArray.forEach((skillObj) => {
        const progressPercent = 100 - skillObj.progess; // Calculate translateX value
        skillsContainer.insertAdjacentHTML("beforeend", `
            <div class="space-y-2" style="opacity: 1; transform: none;">
                <div class="flex justify-between items-center">
                    <span class="font-medium text-sm">${skillObj.skill}</span>
                    <div class="flex items-center gap-2">
                        <span class="text-xs font-medium text-[hsl(191_95%_55%)]">${skillObj.progess}%</span>
                    </div>
                </div>
                <div style="width: 100%;">
                    <div aria-valuemax="100" aria-valuemin="0" role="progressbar" data-state="indeterminate" data-max="100" class="relative  w-full overflow-hidden rounded-full h-2 bg-[hsl(220_25%_12%)]">
                        <div data-state="indeterminate" data-max="100" class="h-full skill-progress-bar w-full flex-1 bg-[hsl(191_95%_55%)] transition-all" style="transform: translateX(-${progressPercent}%);"></div>
                    </div>
                </div>
            </div>
        `);
    });

    // Append the card to the main container
    mainContainer.appendChild(card);
}

// Call createSkillCard for each skill category
createSkillCard(frontEndSkills, `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-code w-6 h-6 text-[hsl(191_95%_55%)]">
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
</svg>`, "Front-End Development");

createSkillCard(backEndSkills, `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-server w-6 h-6 text-[hsl(191_95%_55%)]">
    <rect width="20" height="8" x="2" y="2" rx="2" ry="2"></rect>
    <rect width="20" height="8" x="2" y="14" rx="2" ry="2"></rect>
    <line x1="6" x2="6.01" y1="6" y2="6"></line>
    <line x1="6" x2="6.01" y1="18" y2="18"></line>
</svg>`, "Back-End Development");

// createSkillCard(CloudAndDevOpsSkills, `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cloud w-6 h-6 text-[hsl(191_95%_55%)]">
//     <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
// </svg>`, "Cloud & DevOps");

// createSkillCard(MobileDevelopmentSkills, `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-smartphone w-6 h-6 text-[hsl(191_95%_55%)]">
//     <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
//     <path d="M12 18h.01"></path>
// </svg>`, "Mobile Development");

createSkillCard(DesignAndToolsSkills, `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wrench w-6 h-6 text-[hsl(191_95%_55%)]">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
</svg>`, "Design & Tools");