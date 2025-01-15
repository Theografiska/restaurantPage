const contentSection = document.querySelector("#content");

const contactButton = document.querySelector("#contact-btn");

const loadContact = () => {
    const contactBox = document.createElement("div");
    contactBox.className = "div-box";
    contactBox.id = "contact-box";

    // add new contact person function
    const addPerson = (contactPerson, job, number, className) => {
        const person = document.createElement("div");
        person.className = `${className}`;

        const personName = document.createElement("h4");
        personName.textContent = `${contactPerson}`;
        person.appendChild(personName);

        const personJob = document.createElement("p");
        personJob.textContent = `${job}`;
        person.appendChild(personJob);

        const personNumber = document.createElement("p");
        personNumber.textContent = `${number}`;
        person.appendChild(personNumber);

        contactItself.appendChild(person);
    }

    // add a heading function
    const addHeading = (headerNumber, title) => {
        const heading = document.createElement(`${headerNumber}`);
        heading.textContent = `${title}`;
        contactItself.appendChild(heading);
    }

    // main contact heading
    const contactHeading = document.createElement("h2");
    contactHeading.textContent = "Contact";
    contactHeading.style.width = "40rem";

    contactBox.appendChild(contactHeading);

    // main contact container

    const contactItself = document.createElement("div");
    contactItself.id = "contact";
    contactBox.appendChild(contactItself);

    // "Admin" section
    addHeading("h3", "Administration");

    addPerson("Justin Gags", "CEO", "+271 6622 9100", "contact-person");

    // "Kitchen" section
    addHeading("h3", "Kitchen");

    addPerson("Trufflito Trufflato", "Head Chef", "+271 5020 3300", "contact-person");
    addPerson("Truslana Truffles", "Sous Chef", "+271 1129 8556", "contact-person");

    // "Bar" section
    addHeading("h3", "Bar");
    addPerson("Martin Stokes", "Head Mixologist", "+271 5522 0011", "contact-person");


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

export { loadContact, clickContactBtn };