const contentSection = document.querySelector("#content");

const contactButton = document.querySelector("#contact-btn");

const loadContact = () => {
    const contactBox = document.createElement("div");
    contactBox.className = "div-box";
    contactBox.id = "contact-box";

    // main contact heading
    const contactHeading = document.createElement("h2");
    contactHeading.textContent = "Contact";
    contactHeading.style.marginBottom = "4rem";
    contactHeading.style.width = "30rem";

    contactBox.appendChild(contactHeading);

    // main contact container

    const contactItself = document.createElement("div");
    contactItself.id = "contact";
    contactBox.appendChild(contactItself);

    // Head chef
    const headChef = document.createElement("div");
    headChef.className = "contact-person";

    const headChefName = document.createElement("h4");
    headChefName.textContent = "Truflito Truflato";
    headChef.appendChild(headChefName);

    const headChefNumber = document.createElement("p");
    headChefNumber.textContent = "+372 5159-5960";
    headChef.appendChild(headChefNumber);

    contactItself.appendChild(headChef);

    contentSection.appendChild(contactBox);
}

const clickContactBtn = () => {
    contactButton.className = "active-nav-btn";

    const allDivs = document.querySelectorAll(".div-box");
    allDivs.forEach((div) => {
        div.remove();
    });

    const homeButton = document.querySelector("#home-btn");
    homeButton.className = "";

    const menuBtn = document.querySelector("#menu-btn");
    menuBtn.className = "";

    loadContact();
}

export { loadContact, clickContactBtn};