export { menuFunction };

const specialListHeading = [
    "Chef's Special of the Day",
    "Smoky Chipotle Glazed Ribs",
    "Truffle Mushroom Fettuccine"
];

const specialList = [
    "A unique, limited-time dish curated daily by our head chef using the freshest local ingredients. Come in and discover today's surprise!",
    "Fall-off-the-bone pork ribs slow-cooked and glazed with a bold chipotle-barbecue sauce. Served with garlic mashed potatoes and slaw.",
    "Silky pasta tossed in a creamy truffle and wild mushroom sauce, topped with parmesan shavings and a drizzle of truffle oil."
];

const drinkListHeading = [
    "Spork Sunset Cooler",
    "Berry Basil Lemonade",
    "Iced Cinnamon Cold Brew"
];

const drinkList = [
    "A tropical blend of mango, passionfruit, and lime, topped with sparkling soda and a hint of mint — served chilled for ultimate refreshment.",
    "Freshly squeezed lemonade infused with muddled berries and basil leaves. Sweet, tangy, and herbaceous — a customer favorite!",
    "Smooth cold brew coffee with a swirl of cinnamon syrup and a splash of oat milk. The perfect pick-me-up, iced and irresistible."
];

const veganListHeading = [
    "Jackfruit Street Tacos",
    "Thai Coconut Veggie Curry",
    "Roasted Chickpea Power Bowl"
];

const veganList = [
    "Shredded jackfruit marinated in smoky spices, served on corn tortillas with avocado crema, pickled onions, and fresh cilantro.",
    "A rich, creamy coconut curry with seasonal vegetables, tofu, and Thai herbs. Served with fragrant jasmine rice and a lime wedge.",
    "A wholesome bowl of quinoa, roasted chickpeas, spinach, sweet potatoes, cherry tomatoes, and tahini-lemon dressing."
];

function menuFunction() {
    const special = document.createElement("div");
    special.className = "special";
    const specH2 = document.createElement("h2");
    specH2.textContent = "Specials";
    special.appendChild(specH2);
    const list_one = document.createElement("ul");
    for(let i = 0; i < 3; i++) {
        const li = document.createElement("li");
        li.textContent = specialListHeading[i];
        const p = document.createElement("p");
        p.textContent = specialList[i];
        list_one.append(li, p);
    }
    special.appendChild(list_one);

    const drinks = document.createElement("div");
    drinks.className = "drinks";
    const DrinH2 = document.createElement("h2");
    DrinH2.textContent = "Drinks";
    drinks.appendChild(DrinH2);
    const list_two = document.createElement("ul");
    for(let i = 0; i < 3; i++) {
        const li = document.createElement("li");
        li.textContent = drinkListHeading[i];
        const p = document.createElement("p");
        p.textContent = drinkList[i];
        list_two.append(li, p);
    }
    drinks.appendChild(list_two);

    const vegan = document.createElement("div");
    vegan.className = "vegan"
    const vegH2 = document.createElement("h2");
    vegH2.textContent = "Vegan";
    vegan.appendChild(vegH2);
    const list_three = document.createElement("ul");
    for(let i = 0; i < 3; i++) {
        const li = document.createElement("li");
        li.textContent = veganListHeading[i];
        const p = document.createElement("p");
        p.textContent = veganList[i];
        list_three.append(li, p);
    }
    vegan.appendChild(list_three);

    document.getElementById("content").append(special, drinks, vegan);
}