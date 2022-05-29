// add hovered class to selected list item
let list = document.querySelectorAll(".navigation li");

function activeLink() {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

// Menu Toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};
// const kursButton = document.querySelector(".form-top-button")
// const ModalKurs = document.querySelector(".modal")
const overlay = document.querySelector(".overlay");
overlay.addEventListener("click", () => {
  overlay.style.display = "none";
  formCreateKurs.style.display = "none";
});

// kursButton.addEventListener("click" , ()=>{
//   ModalKurs.style.display = "block"
//   overlay.style.display = "block"
// })
const buttonKursCreate = document.querySelector(".card-Crouser-about-button");
const formCreateKurs = document.querySelector(".form");
buttonKursCreate.addEventListener("click", () => {
  overlay.style.display = "block";
  formCreateKurs.style.display = "block";
});

