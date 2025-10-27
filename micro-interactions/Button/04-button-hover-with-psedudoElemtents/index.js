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
    img.setAttribute("src", "./asset/garden_sun-fill-16.svg");
  } else {
    root.style.setProperty("--color-bg", " hsl(0, 0%, 100)");
    root.style.setProperty("--color-container", "hsl(0, 0%, 95%)");
    root.style.setProperty("--color-text", "hsl(0, 2%, 12%)");
    img.setAttribute("src", "./asset/garden_moon-fill-16.svg");
  }
  darkMode = !darkMode;
});


