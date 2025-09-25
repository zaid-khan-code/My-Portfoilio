
let container = document.querySelector(`.star-container`);
let temp = document.createElement(`div`)

export let praticals = `<div class="pratical"></div>
                <div class="pratical"></div>
                <div class="pratical"></div>
                <div class="pratical"></div>
                <div class="pratical"></div>
                <div class="pratical"></div>
                <div class="pratical"></div>
                <div class="pratical"></div>
                <div class="pratical"></div>
                <div class="pratical"></div>
                <div class="pratical"></div>
                <div class="pratical"></div>
                <div class="pratical"></div>
                <div class="pratical"></div>
                <div class="pratical"></div>
                <div class="pratical"></div>
                <div class="pratical"></div>
                <div class="pratical"></div>
                <div class="pratical"></div>
                <div class="pratical"></div>
                <div class="pratical"></div>
                <div class="pratical"></div>
                <div class="pratical"></div>
                <div class="pratical"></div>
                <div class="pratical"></div>
                <div class="pratical"></div>
                <div class="pratical"></div>
                <div class="pratical"></div>
                <div class="pratical"></div>
                <div class="pratical"></div>
                <div class="pratical"></div>
                <div class="pratical"></div>
                <div class="pratical"></div>
                <div class="pratical"></div>
                <div class="pratical"></div>
                <div class="pratical"></div>
                <div class="pratical"></div>
                <div class="pratical"></div>
                <div class="pratical"></div>
                <div class="pratical"></div>
                <div class="pratical"></div>
                <div class="pratical"></div>
                <div class="pratical"></div>
                <div class="pratical"></div>
                <div class="pratical"></div>
                <div class="pratical"></div>
                <div class="pratical"></div>
                <div class="pratical"></div>
                <div class="pratical"></div>
                <div class="pratical"></div>
                <div class="pratical"></div>
                <div class="pratical"></div>
                <div class="pratical"></div>
                <div class="pratical"></div>
                <div class="pratical"></div>
                <div class="pratical"></div>
                <div class="pratical"></div>
                <div class="pratical"></div>
                <div class="pratical"></div>
                <div class="pratical"></div>
                <div class="pratical"></div>
                <div class="pratical"></div>
                <div class="pratical"></div>
                <div class="pratical"></div>
                <div class="pratical"></div>
                <div class="pratical"></div>
                <div class="pratical"></div>
                <div class="pratical"></div>
                <div class="pratical"></div>
                <div class="pratical"></div>
                <div class="pratical"></div>
                <div class="pratical"></div>
                <div class="pratical"></div>
                <div class="pratical"></div>
                <div class="pratical"></div>
                <div class="pratical"></div>
                <div class="pratical"></div>
                <div class="pratical"></div>
                <div class="pratical"></div>
                <div class="pratical"></div>
                <div class="pratical"></div>
                <div class="pratical"></div>
                <div class="pratical"></div>
                <div class="pratical"></div>
                <div class="pratical"></div>
                <div class="pratical"></div>
                <div class="pratical"></div>
                <div class="pratical"></div>`;


                

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
