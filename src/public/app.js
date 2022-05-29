const btnModalRegsitartion = document.querySelector(".forms-container-btn")

const AccauntAdminBtn = document.querySelector(".forms-container-modal-btn")
const AccauntAdminBtn2 = document.querySelector(".forms-container-btn2")
const AccauntAdminBtn3 = document.querySelector(".forms-container-btn3")
const AccauntModal = document.querySelector(".forms-container-modal")
const overlay = document.querySelector(".overlay")
AccauntAdminBtn.addEventListener("click" , ()=>{
    inputLoginName.value = "Saidbek"
    inputLoginPassword.value = "2004sa"
    AccauntModal.style.display = "none"
    overlay.style.display = "none"
})
AccauntAdminBtn2.addEventListener("click" , ()=>{
    inputLoginName.value = "Baxtiyor"
    inputLoginPassword.value = "0102"
    AccauntModal.style.display = "none"
    overlay.style.display = "none"
})
AccauntAdminBtn3.addEventListener("click" , ()=>{
    inputLoginName.value = "Odilbek"
    inputLoginPassword.value = "0708"
    AccauntModal.style.display = "none"
    overlay.style.display = "none"
})
btnModalRegsitartion.addEventListener("click" , ()=>{
    overlay.style.display = "block"
    AccauntModal.style.display = "block"
})

overlay.addEventListener("click" , ()=>{
    overlay.style.display = "none"
    AccauntModal.style.display = "none"
})