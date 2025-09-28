
let container = document.querySelector(`.star-container`);
let temp = document.createElement(`div`)

export let praticals = `
                <div class="pratical leftAnRightAnime relative h-[4px] w-[4px] shadow-[inset_0_0_20px_5px_rgba(0,191,255,0.3)] rounded-full     bg-[hsl(191,95%,55%)] opacity-30"></div>
                <div class="pratical leftAnRightAnime  relative h-[4px] w-[4px] shadow-[inset_0_0_20px_5px_rgba(0,191,255,0.3)] rounded-full bg-[hsl(191,95%,55%)] opacity-30 "></div>
                <div class="pratical leftAnRightAnime  relative h-[4px] w-[4px] shadow-[inset_0_0_20px_5px_rgba(0,191,255,0.3)] rounded-full bg-[hsl(191,95%,55%)] opacity-30 "></div>
                <div class="pratical leftAnRightAnime  relative h-[4px] w-[4px] shadow-[inset_0_0_20px_5px_rgba(0,191,255,0.3)] rounded-full bg-[hsl(191,95%,55%)] opacity-30 "></div>
                <div class="pratical leftAnRightAnime  relative h-[4px] w-[4px] shadow-[inset_0_0_20px_5px_rgba(0,191,255,0.3)] rounded-full bg-[hsl(191,95%,55%)] opacity-30 "></div>
                <div class="pratical leftAnRightAnime  relative h-[4px] w-[4px] shadow-[inset_0_0_20px_5px_rgba(0,191,255,0.3)] rounded-full bg-[hsl(191,95%,55%)] opacity-30 "></div>
                <div class="pratical leftAnRightAnime  relative h-[4px] w-[4px] shadow-[inset_0_0_20px_5px_rgba(0,191,255,0.3)] rounded-full bg-[hsl(191,95%,55%)] opacity-30 "></div>
                <div class="pratical leftAnRightAnime  relative h-[4px] w-[4px] shadow-[inset_0_0_20px_5px_rgba(0,191,255,0.3)] rounded-full bg-[hsl(191,95%,55%)] opacity-30 "></div>
                <div class="pratical leftAnRightAnime  relative h-[4px] w-[4px] shadow-[inset_0_0_20px_5px_rgba(0,191,255,0.3)] rounded-full bg-[hsl(191,95%,55%)] opacity-30 "></div>
                <div class="pratical leftAnRightAnime  relative h-[4px] w-[4px] shadow-[inset_0_0_20px_5px_rgba(0,191,255,0.3)] rounded-full bg-[hsl(191,95%,55%)] opacity-30 "></div>
                <div class="pratical leftAnRightAnime  relative h-[4px] w-[4px] shadow-[inset_0_0_20px_5px_rgba(0,191,255,0.3)] rounded-full bg-[hsl(191,95%,55%)] opacity-30 "></div>
                <div class="pratical leftAnRightAnime  relative h-[4px] w-[4px] shadow-[inset_0_0_20px_5px_rgba(0,191,255,0.3)] rounded-full bg-[hsl(191,95%,55%)] opacity-30 "></div>
                <div class="pratical leftAnRightAnime  relative h-[4px] w-[4px] shadow-[inset_0_0_20px_5px_rgba(0,191,255,0.3)] rounded-full bg-[hsl(191,95%,55%)] opacity-30 "></div>
                <div class="pratical leftAnRightAnime  relative h-[4px] w-[4px] shadow-[inset_0_0_20px_5px_rgba(0,191,255,0.3)] rounded-full bg-[hsl(191,95%,55%)] opacity-30 "></div>
                <div class="pratical leftAnRightAnime  relative h-[4px] w-[4px] shadow-[inset_0_0_20px_5px_rgba(0,191,255,0.3)] rounded-full bg-[hsl(191,95%,55%)] opacity-30 "></div>
                <div class="pratical leftAnRightAnime  relative h-[4px] w-[4px] shadow-[inset_0_0_20px_5px_rgba(0,191,255,0.3)] rounded-full bg-[hsl(191,95%,55%)] opacity-30 "></div>
                <div class="pratical leftAnRightAnime  relative h-[4px] w-[4px] shadow-[inset_0_0_20px_5px_rgba(0,191,255,0.3)] rounded-full bg-[hsl(191,95%,55%)] opacity-30 "></div>
                <div class="pratical leftAnRightAnime  relative h-[4px] w-[4px] shadow-[inset_0_0_20px_5px_rgba(0,191,255,0.3)] rounded-full bg-[hsl(191,95%,55%)] opacity-30 "></div>
                <div class="pratical leftAnRightAnime  relative h-[4px] w-[4px] shadow-[inset_0_0_20px_5px_rgba(0,191,255,0.3)] rounded-full bg-[hsl(191,95%,55%)] opacity-30 "></div>
                <div class="pratical leftAnRightAnime  relative h-[4px] w-[4px] shadow-[inset_0_0_20px_5px_rgba(0,191,255,0.3)] rounded-full bg-[hsl(191,95%,55%)] opacity-30 "></div>
                <div class="pratical leftAnRightAnime  relative h-[4px] w-[4px] shadow-[inset_0_0_20px_5px_rgba(0,191,255,0.3)] rounded-full bg-[hsl(191,95%,55%)] opacity-30 "></div>
                <div class="pratical leftAnRightAnime  relative h-[4px] w-[4px] shadow-[inset_0_0_20px_5px_rgba(0,191,255,0.3)] rounded-full bg-[hsl(191,95%,55%)] opacity-30 "></div>
                <div class="pratical leftAnRightAnime  relative h-[4px] w-[4px] shadow-[inset_0_0_20px_5px_rgba(0,191,255,0.3)] rounded-full bg-[hsl(191,95%,55%)] opacity-30 "></div>
                <div class="pratical leftAnRightAnime  relative h-[4px] w-[4px] shadow-[inset_0_0_20px_5px_rgba(0,191,255,0.3)] rounded-full bg-[hsl(191,95%,55%)] opacity-30 "></div>
                <div class="pratical leftAnRightAnime  relative h-[4px] w-[4px] shadow-[inset_0_0_20px_5px_rgba(0,191,255,0.3)] rounded-full bg-[hsl(191,95%,55%)] opacity-30 "></div>
                <div class="pratical leftAnRightAnime  relative h-[4px] w-[4px] shadow-[inset_0_0_20px_5px_rgba(0,191,255,0.3)] rounded-full bg-[hsl(191,95%,55%)] opacity-30 "></div>
                <div class="pratical leftAnRightAnime  relative h-[4px] w-[4px] shadow-[inset_0_0_20px_5px_rgba(0,191,255,0.3)] rounded-full bg-[hsl(191,95%,55%)] opacity-30 "></div>
                <div class="pratical leftAnRightAnime  relative h-[4px] w-[4px] shadow-[inset_0_0_20px_5px_rgba(0,191,255,0.3)] rounded-full bg-[hsl(191,95%,55%)] opacity-30 "></div>
                <div class="pratical leftAnRightAnime  relative h-[4px] w-[4px] shadow-[inset_0_0_20px_5px_rgba(0,191,255,0.3)] rounded-full bg-[hsl(191,95%,55%)] opacity-30 "></div>
                <div class="pratical leftAnRightAnime  relative h-[4px] w-[4px] shadow-[inset_0_0_20px_5px_rgba(0,191,255,0.3)] rounded-full bg-[hsl(191,95%,55%)] opacity-30 "></div>
                <div class="pratical leftAnRightAnime  relative h-[4px] w-[4px] shadow-[inset_0_0_20px_5px_rgba(0,191,255,0.3)] rounded-full bg-[hsl(191,95%,55%)] opacity-30 "></div>
                <div class="pratical leftAnRightAnime  relative h-[4px] w-[4px] shadow-[inset_0_0_20px_5px_rgba(0,191,255,0.3)] rounded-full bg-[hsl(191,95%,55%)] opacity-30 "></div>
                <div class="pratical leftAnRightAnime  relative h-[4px] w-[4px] shadow-[inset_0_0_20px_5px_rgba(0,191,255,0.3)] rounded-full bg-[hsl(191,95%,55%)] opacity-30 "></div>
                <div class="pratical leftAnRightAnime  relative h-[4px] w-[4px] shadow-[inset_0_0_20px_5px_rgba(0,191,255,0.3)] rounded-full bg-[hsl(191,95%,55%)] opacity-30 "></div>
                <div class="pratical leftAnRightAnime  relative h-[4px] w-[4px] shadow-[inset_0_0_20px_5px_rgba(0,191,255,0.3)] rounded-full bg-[hsl(191,95%,55%)] opacity-30 "></div>
                <div class="pratical leftAnRightAnime  relative h-[4px] w-[4px] shadow-[inset_0_0_20px_5px_rgba(0,191,255,0.3)] rounded-full bg-[hsl(191,95%,55%)] opacity-30 "></div>
                <div class="pratical leftAnRightAnime  relative h-[4px] w-[4px] shadow-[inset_0_0_20px_5px_rgba(0,191,255,0.3)] rounded-full bg-[hsl(191,95%,55%)] opacity-30 "></div>
                <div class="pratical leftAnRightAnime  relative h-[4px] w-[4px] shadow-[inset_0_0_20px_5px_rgba(0,191,255,0.3)] rounded-full bg-[hsl(191,95%,55%)] opacity-30 "></div>
                <div class="pratical leftAnRightAnime  relative h-[4px] w-[4px] shadow-[inset_0_0_20px_5px_rgba(0,191,255,0.3)] rounded-full bg-[hsl(191,95%,55%)] opacity-30 "></div>
                <div class="pratical leftAnRightAnime  relative h-[4px] w-[4px] shadow-[inset_0_0_20px_5px_rgba(0,191,255,0.3)] rounded-full bg-[hsl(191,95%,55%)] opacity-30 "></div>
                <div class="pratical leftAnRightAnime  relative h-[4px] w-[4px] shadow-[inset_0_0_20px_5px_rgba(0,191,255,0.3)] rounded-full bg-[hsl(191,95%,55%)] opacity-30 "></div>
                <div class="pratical leftAnRightAnime  relative h-[4px] w-[4px] shadow-[inset_0_0_20px_5px_rgba(0,191,255,0.3)] rounded-full bg-[hsl(191,95%,55%)] opacity-30 "></div>
                <div class="pratical leftAnRightAnime  relative h-[4px] w-[4px] shadow-[inset_0_0_20px_5px_rgba(0,191,255,0.3)] rounded-full bg-[hsl(191,95%,55%)] opacity-30 "></div>
                <div class="pratical leftAnRightAnime  relative h-[4px] w-[4px] shadow-[inset_0_0_20px_5px_rgba(0,191,255,0.3)] rounded-full bg-[hsl(191,95%,55%)] opacity-30 "></div>
                <div class="pratical leftAnRightAnime  relative h-[4px] w-[4px] shadow-[inset_0_0_20px_5px_rgba(0,191,255,0.3)] rounded-full bg-[hsl(191,95%,55%)] opacity-30 "></div>
                <div class="pratical leftAnRightAnime  relative h-[4px] w-[4px] shadow-[inset_0_0_20px_5px_rgba(0,191,255,0.3)] rounded-full bg-[hsl(191,95%,55%)] opacity-30 "></div>
                <div class="pratical leftAnRightAnime  relative h-[4px] w-[4px] shadow-[inset_0_0_20px_5px_rgba(0,191,255,0.3)] rounded-full bg-[hsl(191,95%,55%)] opacity-30 "></div>
                <div class="pratical leftAnRightAnime  relative h-[4px] w-[4px] shadow-[inset_0_0_20px_5px_rgba(0,191,255,0.3)] rounded-full bg-[hsl(191,95%,55%)] opacity-30 "></div>
                <div class="pratical leftAnRightAnime  relative h-[4px] w-[4px] shadow-[inset_0_0_20px_5px_rgba(0,191,255,0.3)] rounded-full bg-[hsl(191,95%,55%)] opacity-30 "></div>
                <div class="pratical leftAnRightAnime  relative h-[4px] w-[4px] shadow-[inset_0_0_20px_5px_rgba(0,191,255,0.3)] rounded-full bg-[hsl(191,95%,55%)] opacity-30 "></div>
                <div class="pratical leftAnRightAnime  relative h-[4px] w-[4px] shadow-[inset_0_0_20px_5px_rgba(0,191,255,0.3)] rounded-full bg-[hsl(191,95%,55%)] opacity-30 "></div>
                <div class="pratical leftAnRightAnime  relative h-[4px] w-[4px] shadow-[inset_0_0_20px_5px_rgba(0,191,255,0.3)] rounded-full bg-[hsl(191,95%,55%)] opacity-30 "></div>
                <div class="pratical leftAnRightAnime  relative h-[4px] w-[4px] shadow-[inset_0_0_20px_5px_rgba(0,191,255,0.3)] rounded-full bg-[hsl(191,95%,55%)] opacity-30 "></div>
                <div class="pratical leftAnRightAnime  relative h-[4px] w-[4px] shadow-[inset_0_0_20px_5px_rgba(0,191,255,0.3)] rounded-full bg-[hsl(191,95%,55%)] opacity-30 "></div>
                <div class="pratical leftAnRightAnime  relative h-[4px] w-[4px] shadow-[inset_0_0_20px_5px_rgba(0,191,255,0.3)] rounded-full bg-[hsl(191,95%,55%)] opacity-30 "></div>
                <div class="pratical leftAnRightAnime  relative h-[4px] w-[4px] shadow-[inset_0_0_20px_5px_rgba(0,191,255,0.3)] rounded-full bg-[hsl(191,95%,55%)] opacity-30 "></div>
                <div class="pratical leftAnRightAnime  relative h-[4px] w-[4px] shadow-[inset_0_0_20px_5px_rgba(0,191,255,0.3)] rounded-full bg-[hsl(191,95%,55%)] opacity-30 "></div>
                <div class="pratical leftAnRightAnime  relative h-[4px] w-[4px] shadow-[inset_0_0_20px_5px_rgba(0,191,255,0.3)] rounded-full bg-[hsl(191,95%,55%)] opacity-30 "></div>
                <div class="pratical leftAnRightAnime  relative h-[4px] w-[4px] shadow-[inset_0_0_20px_5px_rgba(0,191,255,0.3)] rounded-full bg-[hsl(191,95%,55%)] opacity-30 "></div>
                <div class="pratical leftAnRightAnime  relative h-[4px] w-[4px] shadow-[inset_0_0_20px_5px_rgba(0,191,255,0.3)] rounded-full bg-[hsl(191,95%,55%)] opacity-30 "></div>
                <div class="pratical leftAnRightAnime  relative h-[4px] w-[4px] shadow-[inset_0_0_20px_5px_rgba(0,191,255,0.3)] rounded-full bg-[hsl(191,95%,55%)] opacity-30 "></div>
                <div class="pratical leftAnRightAnime  relative h-[4px] w-[4px] shadow-[inset_0_0_20px_5px_rgba(0,191,255,0.3)] rounded-full bg-[hsl(191,95%,55%)] opacity-30 "></div>
                <div class="pratical leftAnRightAnime  relative h-[4px] w-[4px] shadow-[inset_0_0_20px_5px_rgba(0,191,255,0.3)] rounded-full bg-[hsl(191,95%,55%)] opacity-30 "></div>
                <div class="pratical leftAnRightAnime  relative h-[4px] w-[4px] shadow-[inset_0_0_20px_5px_rgba(0,191,255,0.3)] rounded-full bg-[hsl(191,95%,55%)] opacity-30 "></div>
                <div class="pratical leftAnRightAnime  relative h-[4px] w-[4px] shadow-[inset_0_0_20px_5px_rgba(0,191,255,0.3)] rounded-full bg-[hsl(191,95%,55%)] opacity-30 "></div>
                <div class="pratical leftAnRightAnime  relative h-[4px] w-[4px] shadow-[inset_0_0_20px_5px_rgba(0,191,255,0.3)] rounded-full bg-[hsl(191,95%,55%)] opacity-30 "></div>
                <div class="pratical leftAnRightAnime  relative h-[4px] w-[4px] shadow-[inset_0_0_20px_5px_rgba(0,191,255,0.3)] rounded-full bg-[hsl(191,95%,55%)] opacity-30 "></div>
                <div class="pratical leftAnRightAnime  relative h-[4px] w-[4px] shadow-[inset_0_0_20px_5px_rgba(0,191,255,0.3)] rounded-full bg-[hsl(191,95%,55%)] opacity-30 "></div>
                <div class="pratical leftAnRightAnime  relative h-[4px] w-[4px] shadow-[inset_0_0_20px_5px_rgba(0,191,255,0.3)] rounded-full bg-[hsl(191,95%,55%)] opacity-30 "></div>
                <div class="pratical leftAnRightAnime  relative h-[4px] w-[4px] shadow-[inset_0_0_20px_5px_rgba(0,191,255,0.3)] rounded-full bg-[hsl(191,95%,55%)] opacity-30 "></div>
                <div class="pratical leftAnRightAnime  relative h-[4px] w-[4px] shadow-[inset_0_0_20px_5px_rgba(0,191,255,0.3)] rounded-full bg-[hsl(191,95%,55%)] opacity-30 "></div>
                <div class="pratical leftAnRightAnime  relative h-[4px] w-[4px] shadow-[inset_0_0_20px_5px_rgba(0,191,255,0.3)] rounded-full bg-[hsl(191,95%,55%)] opacity-30 "></div>
                <div class="pratical leftAnRightAnime  relative h-[4px] w-[4px] shadow-[inset_0_0_20px_5px_rgba(0,191,255,0.3)] rounded-full bg-[hsl(191,95%,55%)] opacity-30 "></div>
                <div class="pratical leftAnRightAnime  relative h-[4px] w-[4px] shadow-[inset_0_0_20px_5px_rgba(0,191,255,0.3)] rounded-full bg-[hsl(191,95%,55%)] opacity-30 "></div>
                <div class="pratical leftAnRightAnime  relative h-[4px] w-[4px] shadow-[inset_0_0_20px_5px_rgba(0,191,255,0.3)] rounded-full bg-[hsl(191,95%,55%)] opacity-30 "></div>
                <div class="pratical leftAnRightAnime  relative h-[4px] w-[4px] shadow-[inset_0_0_20px_5px_rgba(0,191,255,0.3)] rounded-full bg-[hsl(191,95%,55%)] opacity-30 "></div>
                <div class="pratical leftAnRightAnime  relative h-[4px] w-[4px] shadow-[inset_0_0_20px_5px_rgba(0,191,255,0.3)] rounded-full bg-[hsl(191,95%,55%)] opacity-30 "></div>
                <div class="pratical leftAnRightAnime  relative h-[4px] w-[4px] shadow-[inset_0_0_20px_5px_rgba(0,191,255,0.3)] rounded-full bg-[hsl(191,95%,55%)] opacity-30 "></div>
                <div class="pratical leftAnRightAnime  relative h-[4px] w-[4px] shadow-[inset_0_0_20px_5px_rgba(0,191,255,0.3)] rounded-full bg-[hsl(191,95%,55%)] opacity-30 "></div>
                <div class="pratical leftAnRightAnime  relative h-[4px] w-[4px] shadow-[inset_0_0_20px_5px_rgba(0,191,255,0.3)] rounded-full bg-[hsl(191,95%,55%)] opacity-30 "></div>
                <div class="pratical leftAnRightAnime  relative h-[4px] w-[4px] shadow-[inset_0_0_20px_5px_rgba(0,191,255,0.3)] rounded-full bg-[hsl(191,95%,55%)] opacity-30 "></div>
                <div class="pratical leftAnRightAnime  relative h-[4px] w-[4px] shadow-[inset_0_0_20px_5px_rgba(0,191,255,0.3)] rounded-full bg-[hsl(191,95%,55%)] opacity-30 "></div>
                <div class="pratical leftAnRightAnime  relative h-[4px] w-[4px] shadow-[inset_0_0_20px_5px_rgba(0,191,255,0.3)] rounded-full bg-[hsl(191,95%,55%)] opacity-30 "></div>
                <div class="pratical leftAnRightAnime  relative h-[4px] w-[4px] shadow-[inset_0_0_20px_5px_rgba(0,191,255,0.3)] rounded-full bg-[hsl(191,95%,55%)] opacity-30 "></div>
                <div class="pratical leftAnRightAnime  relative h-[4px] w-[4px] shadow-[inset_0_0_20px_5px_rgba(0,191,255,0.3)] rounded-full bg-[hsl(191,95%,55%)] opacity-30 "></div>
                <div class="pratical leftAnRightAnime  relative h-[4px] w-[4px] shadow-[inset_0_0_20px_5px_rgba(0,191,255,0.3)] rounded-full bg-[hsl(191,95%,55%)] opacity-30 "></div>
                <div class="pratical leftAnRightAnime  relative h-[4px] w-[4px] shadow-[inset_0_0_20px_5px_rgba(0,191,255,0.3)] rounded-full bg-[hsl(191,95%,55%)] opacity-30 "></div>`;




for (let i = 0; i < 100; i++) {

    temp.innerHTML = praticals;
    container.append(temp.firstElementChild)
    const boxes = document.querySelectorAll(".pratical");

    boxes.forEach(box => {
        const randomTop = Math.floor(Math.random() * window.innerHeight);
        const randomLeft = Math.floor(Math.random() * window.innerWidth);

        box.style.top = randomTop + "px";
        box.style.left = randomLeft + "px";
    });


}
