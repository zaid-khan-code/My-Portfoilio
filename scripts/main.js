import { praticals } from "../scripts/paratacial.js";
import { navbar } from "../scripts/navbar.js";
import { cardAnimations } from "../scripts/cardAnimations.js";
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
   
}
window.addEventListener("scroll", animations);



navbar();
cardAnimations();