export { aboutFunction }

const aboutH2Content = "About Us";
const aboutParaContent = `<em>The Spork</em> is where comfort food meets creative flair. 
                    Since 2022, we've served a bold fusion of global street flavors and home-style classics — all crafted with fresh, locally sourced ingredients. 
                    Quirky, casual, and always delicious, our space is perfect for quick bites, chill brunches, or spontaneous food adventures.`;
const aboutPara2Content = `Come hungry, leave happy — that's the Spork way.`;

const contactH2Content = "Contact Us";
const contactParaContent = `Address: 123 Flavor Lane, Chungus city, ZZ 45678 <br>
                    Phone no: (555) 123-4567 <br>
                    email: hello@thesporkrestaurant.com <br>
                    Timings: Mon-Fri: 9 AM - 10 PM | Sat-Sun: 8 AM - 11 PM`;

function aboutFunction() {
    const aboutDiv = document.createElement("div");
    aboutDiv.className = "about";

    const aboutH2 = document.createElement("h2");
    aboutH2.textContent = aboutH2Content;
    const aboutPara = document.createElement("p");
    aboutPara.innerHTML = aboutParaContent;
    const aboutPara2 = document.createElement("p");
    aboutPara2.innerHTML = aboutPara2Content;

    aboutDiv.append(aboutH2, aboutPara, aboutPara2);

    const contactH2 = document.createElement("h2");
    contactH2.textContent = contactH2Content;
    const contactPara = document.createElement("p");
    contactPara.innerHTML = contactParaContent;

    aboutDiv.append(contactH2, contactPara);

    document.getElementById("content").appendChild(aboutDiv);
}