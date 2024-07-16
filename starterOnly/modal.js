// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const btnCloseModal = document.querySelector(".close");
const firstNameInput = document.querySelector("#first");
const lastNameInput = document.querySelector("#last");
const emailInput = document.querySelector("#email");
const birthdateInput = document.querySelector("#birthdate");
const quantityInput = document.querySelector("#quantity");


function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}



// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal(reset) {
  modalbg.style.display = "none"
}

function resetForm(){
  document.getElementById("formulaire").reset();
}

btnCloseModal.addEventListener("click", () => {
  closeModal(true)
  resetForm()
});

// Validation firstName
firstNameInput.addEventListener("invalid", (e) => inputErrorMessage(e, "Veuillez entrer 2 caractères ou plus pour le champ du prénom."));
lastNameInput.addEventListener("invalid", (e) => inputErrorMessage(e, "Veuillez entrer 2 caractères ou plus pour le champ du nom."));
emailInput.addEventListener("invalid", (e) => inputErrorMessage(e, "Veuillez entrez une adresse email valide."));
birthdateInput.addEventListener("invalid", (e) => inputErrorMessage(e, "Vous devez entrer votre date de naissance."));

function inputErrorMessage(event, message) {
  const target = event.target;
  const parent = target.parentElement;

  parent.setAttribute("data-error", message);
  parent.setAttribute("data-error-visible", "true");
}