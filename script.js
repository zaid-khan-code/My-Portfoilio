// praticals random location logic Start

const boxes = document.querySelectorAll(".pratical");

boxes.forEach(box => {
    const randomTop = Math.floor(Math.random() * window.innerHeight);
    const randomLeft = Math.floor(Math.random() * window.innerWidth);

    box.style.top = randomTop + "px";
    box.style.left = randomLeft + "px";
});


//  And its Ends there 