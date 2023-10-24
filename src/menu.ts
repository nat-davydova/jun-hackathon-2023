//@ts-ignore
let menuBtn = document.querySelector("#menu-controls");
let menuIcon = document.querySelector("#menu-icon");

//@ts-ignore
menuBtn.addEventListener("click", handleMenuClick);
let opened = false;

let menuLink = document.querySelectorAll(".nav-link");

menuLink.forEach((i) => {
  i.addEventListener("click", closeOnTransition);
});

function closeOnTransition() {
  let menu = document.querySelector("#nav");

//@ts-ignore
  if (opened && !menu.classList.contains("hidden")) {
    opened = false;

//@ts-ignore
    menu.style.opacity = 0;
    setTimeout(() => {

//@ts-ignore
      menu.classList.add("hidden");

//@ts-ignore
      menuIcon.src = "/menu.svg";
    }, 100);
  }
}

function handleMenuClick() {
  let menu = document.querySelector("#nav");
  if (!opened) {

//@ts-ignore
    menu.style.opacity = 0;
    setTimeout(() => {

//@ts-ignore
      menu.style.opacity = 1;

//@ts-ignore
      menuIcon.src = "/close.svg";
    }, 100);

//@ts-ignore
    menu.classList.remove("hidden");
  } else {

//@ts-ignore
    menu.classList.add("hidden");

//@ts-ignore
    menuIcon.src = "/menu.svg";
  }
  opened = !opened;
}
