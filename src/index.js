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




//menuFunction();
//homeFunction();
//aboutFunction();