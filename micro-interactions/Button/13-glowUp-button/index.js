// Setup/logic

/*- create button ui with html, css
  - give the ui a default style 
  - create a clicking efftect with active State (using transform, tranlate)
  - or js to give click interaction by changing active state class 
  - add click sound with js using var or let to add instanse of Audio() object
*/

//toggle Light and  Dark mode
const root = document.querySelector(":root");
const btn = document.querySelector(".btn-theme");
const img = document.querySelector("img");

let darkMode = false;

btn.addEventListener("click", () => {
  if (!darkMode) {
    root.style.setProperty("--color-bg", "hsla(0, 0%, 8%, 1.00");
    root.style.setProperty("--color-container", "hsla(0, 1%, 18%, 1.00)");
    root.style.setProperty("--color-text", "hsla(0, 9%, 91%, 1.00)");
    root.style.setProperty("--clr-brd", "hsl(226, 71%, 52%)");
    img.setAttribute("src", "./asset/sun.svg");
  } else {
    root.style.setProperty("--color-bg", " hsl(0, 0%, 100)");
    root.style.setProperty("--color-container", "hsl(0, 0%, 95%)");
    root.style.setProperty("--color-text", "hsl(0, 2%, 12%)");
    img.setAttribute("src", "./asset/moon.svg");
  }
  darkMode = !darkMode;
});

//Text  Change

/*- create button ui with html, css
  - give the ui a default style 
  - JS: select the DOM and handle the event 
  - when click create an icon or image tag and setAttribut
    to include icon src dir
  - set text content to empty string
  setTimeout to add textContent to Done
  - remove eventlistener

*/

const toggleBtn = document.querySelector(".icon-toggle");
let icon = document.querySelector(".iconSwitch");
let iconCheck = false;

toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("active");

  if (!iconCheck) {
    icon.setAttribute("src", "./asset/sun.svg");
  } else {
    icon.setAttribute("src", "./asset/moon.svg");
  }
  iconCheck = !iconCheck;
});
