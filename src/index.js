import "./styles.css";
import backgroundImg from "./assets/restaurant_background.jpg";
import { homeFunction } from "./homePage.js";
import { menuFunction } from "./menuPage.js";
import { aboutFunction } from "./aboutPage.js";

// background image
const image = document.createElement("img");
image.src = backgroundImg;
image.alt = "Background Image";
image.id = "background";
document.body.appendChild(image);
// have the home page show by default
homeFunction();

// event listeners for buttons
const HomeButton = document.querySelector(".Home");
HomeButton.addEventListener("click", () => {
    // just setting inner html to "" to remove ALL child nodes
    // if i only wanted to remove one, i would use removeChild
    document.getElementById("content").innerHTML = "";
    homeFunction();
});

const menuButton = document.querySelector(".Menu");
menuButton.addEventListener("click", () => {
    document.getElementById("content").innerHTML = "";
    menuFunction();
});

const aboutButton = document.querySelector(".About");
aboutButton.addEventListener("click", () => {
    document.getElementById("content").innerHTML = "";
    aboutFunction();
})
