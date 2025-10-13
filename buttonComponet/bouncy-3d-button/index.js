// Setup/logic

//toggle Light and  Dark mode
// let theme = document.getElementsByTagName("button")[1];
const root = document.querySelector(":root");
const img = document.querySelector("img");

let darkMode = false;

// theme.addEventListener("click", (e) => {
//   if (theme.e.target === "IMG") {
//     root.style.setProperty("--color-bg", "hsl(0, 3%, 7%)");
//     root.style.setProperty(" --color-container", "hsla(0, 0%, 8%, 1.00)");
//   }
// });

img.addEventListener("click", function changeTheme() {
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
