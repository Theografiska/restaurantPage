import "./styles.css"
import { loadHome, clickHomeBtn } from "./contents.js";
import { clickMenuBtn } from "./menu.js";
import { clickContactBtn } from "./contact.js";

const homeButton = document.querySelector("#home-btn");
homeButton.addEventListener("click", clickHomeBtn);

const menuButton = document.querySelector("#menu-btn");
menuButton.addEventListener("click", clickMenuBtn);

const contactBtn = document.querySelector("#contact-btn");
contactBtn.addEventListener("click", clickContactBtn); 

loadHome();