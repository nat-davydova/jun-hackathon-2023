let menuBtn = document.querySelector("#menu-controls");
let menuIcon = document.querySelector("#menu-icon");
menuBtn.addEventListener("click", handleMenuClick);
let opened = false;

let menuLink = document.querySelectorAll(".nav-link");

menuLink.forEach((i) => {
  i.addEventListener("click", closeOnTransition);
});

function closeOnTransition() {
  let menu = document.querySelector("#nav");
  if (opened && !menu.classList.contains("hidden")) {
    opened = false;
    menu.style.opacity = 0;
    setTimeout(() => {
      menu.classList.add("hidden");
      menuIcon.src = "/menu.svg";
    }, 100);
  }
}

function handleMenuClick() {
  let menu = document.querySelector("#nav");
  if (!opened) {
    menu.style.opacity = 0;
    setTimeout(() => {
      menu.style.opacity = 1;
      menuIcon.src = "/close.svg";
    }, 100);
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
    menuIcon.src = "/menu.svg";
  }
  opened = !opened;
}
