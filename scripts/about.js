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


navbar();

let educationObj = [{
    study: "Intermediate (1st Year, Computer Science)",
    address: "Government Degree Boys College - KMC Store • Karachi, Pakistan",
    date: "2025 - Present",
    desc: "Currently pursuing my first year of Intermediate studies with a focus on Computer Science and foundational programming concepts. Building strong analytical and problem-solving skills while developing projects in web development and software fundamentals.",
    achiv: ["Enrolled (1st Year)", "Computer Science", "Mathematics", "Physics"],
    ani: "mafazaLeft"

}, {
    study: "Matriculation (Science Group)",
    address: "Scholar School System • Karachi, Pakistan",
    date: "2022-2025",
    desc: "Completed secondary education with a focus on Science and Computer Studies, building essential problem-solving and analytical skills.",
    achiv: ["GPA 2.5/4.0", "Good Standing", "Genernal Knowledge"],
    ani: "mafazaRight"
}].forEach(data => {
    let container = document.querySelector(`.educationSection`);
    let html = ``;
    let temp = document.createElement("div");

    html = `<div style="opacity: 1; transform: none; " class="${data.ani} ">
                        <div class="rounded-lg border text-[hsl(210,40%,98%)] shadow-[0_20px_40px_-8px_hsla(191,95%,55%,0.2)]
                            border-[hsl(191,95%,55%,0.2)] bg-[hsl(220,25%,8%,0.5)] backdrop-blur-sm hover:bg-[hsl(220,25%,8%,0.8)] transition-all
                            duration-300">
                            <div class="p-6">
                                <div class="flex items-start gap-4">
                                    <div class="p-3 rounded-lg bg-[hsl(191,95%,55%)/0.1]"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-graduation-cap w-6 h-6 text-[hsl(191,95%,55%)]">
                                            <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z">
                                            </path>
                                            <path d="M22 10v6"></path>
                                            <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
                                        </svg></div>
                                    <div class="flex-1">
                                        <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                                            <h3 class="text-xl font-semibold">${data.study}</h3>
                                            <div class="flex items-center gap-2 text-sm text-[hsl(210,20%,65%)]"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar w-4 h-4">
                                                    <path d="M8 2v4"></path>
                                                    <path d="M16 2v4"></path>
                                                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                                    <path d="M3 10h18"></path>
                                                </svg>${data.date}</div>
                                        </div>
                                        <div class="flex items-center gap-2 text-[hsl(191,95%,55%)] font-medium mb-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin w-4 h-4">
                                                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0">
                                                </path>
                                                <circle cx="12" cy="10" r="3"></circle>
                                            </svg>${data.address}
                                        </div>
                                        <p class="text-[hsl(210,20%,65%)] mb-4">${data.desc}</p>
                                        <div class="achivi flex flex-wrap gap-2">
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`;

    temp.innerHTML = html;
    let eduSec = temp.firstElementChild;
    container.append(eduSec);

    let container2 = eduSec.querySelector(".achivi");
    let temp2 = document.createElement("div");
    data.achiv.forEach(achiviments => {
        temp2.insertAdjacentHTML("beforeend", `<div class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[hsl(191,95%,55%)] focus:ring-offset-2 border-transparent bg-[hsl(260,50%,15%)] text-[hsl(210,40%,98%)] hover:bg-[hsl(260,50%,15%)/0.8]">${achiviments}</div>`);
    });
    container2.append(...temp2.childNodes);
})



let expObj = [
    {
        role: "Frontend Developer Internship",
        address: "Electronic Safety & Security Private Limited",
        date: "Nov 2025 – Present",
        desc: "Working as a Frontend Developer at Electronic Safety & Security, I design and implement responsive web interfaces using React, Tailwind, Firebase, and GitHub. I contribute to UI/UX improvements, build dynamic features, and collaborate on projects to enhance user experience and functionality.",
        skilled: ["React.js", "Tailwind CSS", "JavaScript", "HTML5 & CSS3", "Responsive Design / Mobile-First Design", "Git & GitHub (version control)", "Firebase (Authentication, Firestore)", "JavaScript (ES6+)"],
        ani: "mafazaLeft"
    }, {
        role: "Lead Generation Chat Executive",
        address: "GlobiumClouds • Karachi, Pakistan",
        date: "March 2025 – May 2025",
        desc: "Handled live chat communications, generated qualified leads, and supported the sales team by managing customer queries effectively.",
        skilled: ["Customer (Communication)", "Lead Generation", "CRM Tools", "Team Collaboration"],
        ani: "mafazaRight"
    }].forEach(xpData => {
        let container = document.querySelector(`.experianceSec`);
        let html = ``;

        let temp = document.createElement("div");

        html = `<div class="${xpData.ani}" style="opacity: 1; transform: none;">
                        <div class="rounded-lg border text-[hsl(210,40%,98%)] shadow-[0_20px_40px_-8px_hsla(191,95%,55%,0.2)]
                            border-[hsl(191,95%,55%,0.2)] bg-[hsl(220,25%,8%,0.5)] backdrop-blur-sm hover:bg-[hsl(220,25%,8%,0.8)] transition-all
                            duration-300">
                            <div class="p-6">
                                <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                                    <h3 class="text-xl font-semibold">${xpData.role}</h3>
                                    <div class="flex items-center gap-2 text-sm text-[hsl(210,20%,65%)]"><svg
                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            class="lucide lucide-calendar w-4 h-4">
                                            <path d="M8 2v4"></path>
                                            <path d="M16 2v4"></path>
                                            <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                            <path d="M3 10h18"></path>
                                        </svg>${xpData.date}</div>
                                </div>
                                <div class="flex items-center gap-2 text-[hsl(191,95%,55%)] font-medium mb-4"><svg
                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="lucide lucide-map-pin w-4 h-4">
                                        <path
                                            d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0">
                                        </path>
                                        <circle cx="12" cy="10" r="3"></circle>
                                    </svg>${xpData.address}</div>
                                <p class="text-[hsl(210,20%,65%)] mb-4">${xpData.desc}</p>
                                <div class="xpSecSkills flex flex-wrap gap-2">
                                    
                                </div>
                            </div>
                        </div>
                    </div>`
        temp.innerHTML = html;
        let xpSec = temp.firstElementChild;
        container.append(xpSec);

        let container2 = xpSec.querySelector(".xpSecSkills");
        let temp2 = document.createElement("div");
        xpData.skilled.forEach(xpski => {
            temp2.insertAdjacentHTML("beforeend", `<div class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[hsl(191,95%,55%)] focus:ring-offset-2 border-transparent bg-[hsl(260,50%,15%)] text-[hsl(210,40%,98%)] hover:bg-[hsl(260,50%,15%)/0.8]">${xpski}</div>`);
        });
        container2.append(...temp2.childNodes);
    });
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