import restaurantImage from "./nick-hillier.jpg";
import truffleBurger from "./truffle-burger.jpg";
import truffleSalad from "./truffle-salad.jpg";

const homeButton = document.querySelector("#home-btn");

const loadHome = () => {
    const contentSection = document.querySelector("#content");
    contentSection.style.backgroundImage = `url(${restaurantImage})`;
    contentSection.style.backgroundsize = "cover";
    contentSection.style.backgroundRepeat = "no-repeat";  
    contentSection.style.backgroundPosition = "top";  
    
    const introMessage = document.createElement("div");
    introMessage.className = "div-box";
    introMessage.id = "intro-message";
    introMessage.textContent = "A seriously good place to dine. And eat truffles.";
    introMessage.style.padding = "5rem 10rem";
    contentSection.appendChild(introMessage);
    
    const dailyOptionOne = document.createElement("div");
    dailyOptionOne.className = "div-box";
    dailyOptionOne.id = "truffle-burger-box";
    dailyOptionOne.textContent = "Selection of truffle burgers";
    const truffleBurgImage = document.createElement("img");
    truffleBurgImage.src = truffleBurger;
    truffleBurgImage.className = "food-pic";
    dailyOptionOne.appendChild(truffleBurgImage);
    contentSection.appendChild(dailyOptionOne);
    
    const dailyOptionTwo = document.createElement("div");
    dailyOptionTwo.className = "div-box";
    dailyOptionTwo.id = "truffle-salad-box";
    dailyOptionTwo.textContent = "Exquisite salads";
    const truffleSaladImage = document.createElement("img");
    truffleSaladImage.src = truffleSalad;
    truffleSaladImage.className = "food-pic";
    dailyOptionTwo.appendChild(truffleSaladImage);
    contentSection.appendChild(dailyOptionTwo);   
    
    homeButton.className = "active-nav-btn";
}

const clickHomeBtn = () => {
    homeButton.className = "active-nav-btn";

    const allDivs = document.querySelectorAll(".div-box");
    allDivs.forEach((div) => {
        div.remove();
    });

    const menuButton = document.querySelector("#menu-btn");
    menuButton.className = "";

    const contactBtn = document.querySelector("#contact-btn");
    contactBtn.className = "";

    loadHome();
}

export { loadHome, clickHomeBtn };