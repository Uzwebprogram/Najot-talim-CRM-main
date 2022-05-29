
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
// const 

const courseSelect = document.querySelector(".form-top-input-course");
const groupSelect = document.querySelector(".form-top-selectr-user");

courseSelect?.addEventListener("change", (e) => {
  let value = e.target.value;
  console.log(value);

  fetch("/api")
    .then((res) => res.json())
    .then((data) => {
      allGroups(data);
      console.log(data);

      function allGroups(groups) {
        groupSelect.innerHTML = "";
        const foundGroup = groups.filter((e) => e.KursName == value);
        console.log(foundGroup);
        foundGroup?.map((group) => {
          const { GroupName } = group;
          let option = document.createElement("option");
          option.value = GroupName;
          option.innerHTML = GroupName;
          groupSelect.appendChild(option);
        });
      }
    });
});
const buttonKursCreate = document.querySelector(".card-Crouser-about-button");
const formCreateKurs = document.querySelector(".form");
buttonKursCreate.addEventListener("click", () => {
  formCreateKurs.style.display = "block";
  overlay.style.display = "block";
});

const overlay = document.querySelector(".overlay");
overlay.addEventListener("click", () => {
  overlay.style.display = "none";
  formCreateKurs.style.display = "none";
});
