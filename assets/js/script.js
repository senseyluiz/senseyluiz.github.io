let htmlSection = document.querySelector(".html");
let cssSection = document.querySelector(".css");
let javaScriptSection = document.querySelector(".javascript");

let menuMobile = document.querySelector("#menu-mobile");
let menuDesktop = document.querySelector("#menu-desktop");

let iconMobile = document.querySelector("#icon-mobile");

let habiHTML = document.querySelector("#habiHTML");
let habiCSS = document.querySelector("#habiCSS");
let habiJS = document.querySelector("#habiJS");

iconMobile.addEventListener("click", () => {
  if (menuMobile.style.display !== 'block') {
    menuMobile.style.display = 'block'

  } else {
    menuMobile.style.display = 'none';
  }


})


habiHTML.addEventListener('click', (e) => {
  if (e.target.innerText === "HTML") {
    htmlSection.style.display = "block";
    cssSection.style.display = "none";
    javaScriptSection.style.display = "none";
  }

  if (e.target.innerText === "CSS") {
    htmlSection.style.display = "none";
    cssSection.style.display = "block";
    javaScriptSection.style.display = "none";
  }

  if (e.target.innerText === "JavaScript") {
    htmlSection.style.display = "none";
    cssSection.style.display = "none";
    javaScriptSection.style.display = "block";
  }
});

habiCSS.addEventListener('click', (e) => {
  if (e.target.innerText === "HTML") {
    htmlSection.style.display = "block";
    cssSection.style.display = "none";
    javaScriptSection.style.display = "none";
  }

  if (e.target.innerText === "CSS") {
    htmlSection.style.display = "none";
    cssSection.style.display = "block";
    javaScriptSection.style.display = "none";
  }

  if (e.target.innerText === "JavaScript") {
    htmlSection.style.display = "none";
    cssSection.style.display = "none";
    javaScriptSection.style.display = "block";
  }
});

habiJS.addEventListener('click', (e) => {
  if (e.target.innerText === "HTML") {
    htmlSection.style.display = "block";
    cssSection.style.display = "none";
    javaScriptSection.style.display = "none";
  }

  if (e.target.innerText === "CSS") {
    htmlSection.style.display = "none";
    cssSection.style.display = "block";
    javaScriptSection.style.display = "none";
  }

  if (e.target.innerText === "JavaScript") {
    htmlSection.style.display = "none";
    cssSection.style.display = "none";
    javaScriptSection.style.display = "block";
  }
});
