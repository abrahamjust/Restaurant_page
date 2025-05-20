import "./styles.css";
import backgroundImg from "./assets/restaurant_background.jpg";
import { homeDiv } from "./homePage.js";

console.log("hello, world");

const image = document.createElement("img");
image.src = backgroundImg;
image.alt = "Background Image";
image.id = "background";
document.body.appendChild(image);

document.getElementById("content").appendChild(homeDiv);