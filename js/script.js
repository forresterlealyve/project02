const button = document.querySelector(".menu");
const menu = document.querySelector(".navbar");

button.addEventListener("click", (event) => {
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
});
