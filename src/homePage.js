export {homeDiv}

const homeDiv = document.createElement("div");
homeDiv.className = "home";
const content = `Welcome to <em>The Spork</em> - Where Flavor Meets Comfort!<br><br>
                At The Spork, we serve more than just food — we offer an experience. 
                Nestled in the heart of <strong>Chungus city</strong>, our cozy and inviting atmosphere is the perfect place to enjoy handcrafted dishes made from fresh, locally sourced ingredients. 
                <br><br>Whether you're craving a hearty breakfast, a leisurely lunch, or a memorable dinner with friends and family, our diverse menu has something for everyone. 
                Come for the food, stay for the warmth, and leave with a smile.`;
homeDiv.innerHTML = content;
            