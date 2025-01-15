const contentSection = document.querySelector("#content");
const menuButton = document.querySelector("#menu-btn");

const loadMenu = () => {
    const menuBox = document.createElement("div");
    menuBox.className = "div-box";
    menuBox.id = "menu-box";

    // add menu item function
    const addItem = (name, price, itemClass) => {
        const item = document.createElement("div");
        item.className = `${itemClass}`;
        const itemName = document.createElement("h4");
        itemName.textContent = `${name}`;
        item.appendChild(itemName);
        const itemPrice = document.createElement("p");
        itemPrice.textContent = `${price}`;
        item.appendChild(itemPrice);
        menuItself.appendChild(item);
    }

    // add a heading function
    const addHeading = (headerNumber, title) => {
        const heading = document.createElement(`${headerNumber}`);
        heading.textContent = `${title}`;
        menuItself.appendChild(heading);
    }

    // main menu heading
    const menuHeading = document.createElement("h2");
    menuHeading.textContent = "Menu";
    menuHeading.style.width = "40rem";
    menuBox.appendChild(menuHeading);

    // main menu content goes here:
    const menuItself = document.createElement("div");
    menuItself.id = "menu";
    menuBox.appendChild(menuItself);

    // appetizers section
    addHeading("h3", "Appetizers");

    addItem("Truffle Bruschetta", "8€", "menu-item");
    addItem("Truffle Chips", "6€", "menu-item");
    addItem("Truffle Salad", "11€", "menu-item");

    // main courses section
    addHeading("h3", "Main Courses");

    addItem("Truffle Burger", "17€", "menu-item");
    addItem("Truffle Steak", "24€", "menu-item");

    // desserts section
    addHeading("h3", "Desserts");

    addItem("Truffle Ice Cream", "10€", "menu-item");


    contentSection.appendChild(menuBox);
}

const clickMenuBtn = () => {
    menuButton.className = "active-nav-btn";

    const allDivs = document.querySelectorAll(".div-box");
    allDivs.forEach((div) => {
        div.remove();
    });

    const homeButton = document.querySelector("#home-btn");
    homeButton.className = "";

    const contactBtn = document.querySelector("#contact-btn");
    contactBtn.className = "";

    loadMenu();
}

export { loadMenu, clickMenuBtn };