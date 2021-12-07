let htmlSection = document.querySelector(".html");
let cssSection = document.querySelector(".css");
let javaScriptSection = document.querySelector(".javascript");

let habiHTML = document.querySelector("#habiHTML");
let habiCSS = document.querySelector("#habiCSS");
let habiJS = document.querySelector("#habiJS");

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
