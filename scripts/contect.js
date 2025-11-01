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

    // Contact card animation
    let contactCards = document.querySelectorAll(".contact-card");
    contactCards.forEach(card => {
        let boxArray = card.getBoundingClientRect();
        if (boxArray.top <= window.innerHeight && boxArray.bottom >= 0) {
            if (!card.classList.contains("in-view")) {
                card.classList.add("in-view");
            }
        }
    });
    let serviceItems = document.querySelectorAll(".service-item");
    serviceItems.forEach(item => {
        let boxArray = item.getBoundingClientRect();
        if (boxArray.top <= window.innerHeight && boxArray.bottom >= 0) {
            if (!item.classList.contains("in-view")) {
                item.classList.add("in-view");
                item.style.opacity = "1";
                item.style.transform = "none";
            }
        }
    });

}
function sendingEmail() {
    let emailEl = document.querySelector(`.input-field-email`);
    let nameEl = document.querySelector(`.input-field-name`);
    let subjectEl = document.querySelector(`.input-field-subject`);
    let messageEl = document.querySelector(`.input-field-message`);
    if (!nameEl.checkValidity() || !emailEl.checkValidity() || !subjectEl.checkValidity() || !messageEl.checkValidity()) {
        nameEl.reportValidity();
        subjectEl.reportValidity();
        messageEl.reportValidity();
        emailEl.reportValidity(); 
        return;
    } else {
        window.location.href = `https://mail.google.com/mail/u/0/?fs=1&to=zaidbinasif468@gmail.com&su=${subjectEl.value}&body=Hello my name is ${nameEl.value} and ${messageEl.value}&tf=cm`;
        return;
    }
};

window.addEventListener("scroll", animations);
window.addEventListener("load", animations);
window.addEventListener("load", navbar);


const submitBtnEl = document.querySelector(`.submit-Btn`);
submitBtnEl.addEventListener(`click`, (e) => {
    sendingEmail()
    e.preventDefault();
});