const contentSection = document.querySelector("#content");

const menuButton = document.querySelector("#menu-btn");

const loadMenu = () => {
    const menuBox = document.createElement("div");
    menuBox.className = "div-box";
    menuBox.id = "menu-box";

    // main menu heading
    const menuHeading = document.createElement("h2");
    menuHeading.textContent = "Menu";
    menuHeading.style.marginBottom = "4rem";
    menuHeading.style.width = "30rem";
    menuBox.appendChild(menuHeading);

    // main menu content goes here:
    const menuItself = document.createElement("div");
    menuItself.id = "menu";
    menuBox.appendChild(menuItself);

    // appetizers section
    const appetizersHeading = document.createElement("h3");
    appetizersHeading.textContent = "Appetizers";
    menuItself.appendChild(appetizersHeading);

    // truffle bruschetta
    const truffleBruschetta = document.createElement("div");
    truffleBruschetta.className = "menu-item";

    const truffleBruschettaName = document.createElement("h4");
    truffleBruschettaName.textContent = "Truffle Bruschetta";
    truffleBruschetta.appendChild(truffleBruschettaName);

    const truffleBruschettaPrice = document.createElement("p");
    truffleBruschettaPrice.textContent = "8€";
    truffleBruschetta.appendChild(truffleBruschettaPrice);

    menuItself.appendChild(truffleBruschetta);

    // truffle chips
    const truffleChips = document.createElement("div");
    truffleChips.className = "menu-item";

    const truffleChipsName = document.createElement("h4");
    truffleChipsName.textContent = "Truffle Chips";
    truffleChips.appendChild(truffleChipsName);
    const truffleChipsPrice = document.createElement("p");
    truffleChipsPrice.textContent = "6€";
    truffleChips.appendChild(truffleChipsPrice);

    menuItself.appendChild(truffleChips);

     // truffle salad
     const truffleSalad = document.createElement("div");
     truffleSalad.className = "menu-item";
 
     const truffleSaladName = document.createElement("h4");
     truffleSaladName.textContent = "Truffle Salad";
     truffleSalad.appendChild(truffleSaladName);
     const truffleSaladPrice = document.createElement("p");
     truffleSaladPrice.textContent = "11€";
     truffleSalad.appendChild(truffleSaladPrice);
 
     menuItself.appendChild(truffleSalad);

    // main courses section

    const mainCourseHeading = document.createElement("h3");
    mainCourseHeading.textContent = "Main Courses";
    menuItself.appendChild(mainCourseHeading);

    // truffle burger
    const truffleBurger = document.createElement("div");
    truffleBurger.className = "menu-item";

    const truffleBurgerName = document.createElement("h4");
    truffleBurgerName.textContent = "Truffle Burger";
    truffleBurger.appendChild(truffleBurgerName);
    const truffleBurgerPrice = document.createElement("p");
    truffleBurgerPrice.textContent = "17€";
    truffleBurger.appendChild(truffleBurgerPrice);

    menuItself.appendChild(truffleBurger);

    // truffle steak
    const truffleSteak = document.createElement("div");
    truffleSteak.className = "menu-item";

    const truffleSteakName = document.createElement("h4");
    truffleSteakName.textContent = "Truffle Steak";
    truffleSteak.appendChild(truffleSteakName);
    const truffleSteakPrice = document.createElement("p");
    truffleSteakPrice.textContent = "24€";
    truffleSteak.appendChild(truffleSteakPrice);

    menuItself.appendChild(truffleSteak);

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

export { loadMenu, clickMenuBtn};