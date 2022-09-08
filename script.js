const btnSpanish = document.getElementById("btnSpanish");
const btnEnglish = document.getElementById("btnEnglish");

const englishNode = document.querySelectorAll(".hiddenEn");
const spanishNode = document.querySelectorAll(".hiddenEs");

const btnLinkedIn = document.getElementById("btnViewer1");
const btnGitHub = document.getElementById("btnViewer2");
const btnUdemy = document.getElementById("btnViewer3");

const boxLinkedIn = document.querySelector(".box-LinkedIn");
const boxGitHub = document.querySelector(".box-GitHub");
const boxUdemy = document.querySelector(".box-Udemy");

const languageES = function () {
  for (let i = 0; i < spanishNode.length; i++) {
    spanishNode[i].hidden = false;
  }

  for (let i = 0; i < englishNode.length; i++) {
    englishNode[i].hidden = true;
  }
};

const languageGB = function () {
  for (let i = 0; i < spanishNode.length; i++) {
    spanishNode[i].hidden = true;
  }

  for (let i = 0; i < englishNode.length; i++) {
    englishNode[i].hidden = false;
  }
};

const linkedInShow = function () {
  boxLinkedIn.hidden = false;
  boxGitHub.hidden = true;
  boxUdemy.hidden = true;
  btnLinkedIn.classList.add("active");
  btnGitHub.classList.remove("active");
  btnUdemy.classList.remove("active");
};

const gitHubShow = function () {
  boxLinkedIn.hidden = true;
  boxGitHub.hidden = false;
  boxUdemy.hidden = true;
  btnLinkedIn.classList.remove("active");
  btnGitHub.classList.add("active");
  btnUdemy.classList.remove("active");
};

const udemyInShow = function () {
  boxLinkedIn.hidden = true;
  boxGitHub.hidden = true;
  boxUdemy.hidden = false;
  btnLinkedIn.classList.remove("active");
  btnGitHub.classList.remove("active");
  btnUdemy.classList.add("active");
};

btnSpanish.addEventListener("click", languageES);
btnEnglish.addEventListener("click", languageGB);

btnLinkedIn.addEventListener("click", linkedInShow);
btnGitHub.addEventListener("click", gitHubShow);
btnUdemy.addEventListener("click", udemyInShow);

//GSAP

gsap.to(".box1-image", { duration: 0, x: 500, ease: "back" });
gsap.to(".box1-image", { duration: 3, rotate: -360, x: 0, ease: "back" });
gsap.to(".header-bar", { duration: 1, y: 0, ease: "bounce" });
gsap.to(".header-bar", { duration: 0, y: -100, ease: "bounce" });

