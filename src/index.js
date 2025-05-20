import "./styles.css";
import backgroundImg from "./assets/restaurant_background.jpg";
//import { homeFunction } from "./homePage.js";
//import { menuFunction } from "./menuPage.js";

console.log("hello, world");

const image = document.createElement("img");
image.src = backgroundImg;
image.alt = "Background Image";
image.id = "background";
document.body.appendChild(image);

//menuFunction();
//homeFunction();