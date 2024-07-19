// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const btnCloseModal = document.querySelector(".close");
const firstNameInput = document.getElementById("first");
const lastNameInput = document.getElementById("last");
const emailInput = document.getElementById("email");
const birthdateInput = document.getElementById("birthdate");
const quantityInput = document.getElementById("quantity");
const form = document.getElementById("reserve");


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
  document.querySelector(".form").reset();
}

btnCloseModal.addEventListener("click", () => {
  closeModal(true)
  resetForm()
});

// Validation form

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validInput();
});


// show error message

const showErrorMessage = (ele, msg) => {
  const inputControl = ele.parentElement;
  const errormsg = inputControl.querySelector(".error");
  errormsg.innerText = msg;
  inputControl.classList.add("errormsg");
}

// hide error message
const hideErrorMessage = (ele) => {
  const inputControl = ele.parentElement;
  const errormsg = inputControl.querySelector(".error");
  errormsg.innerText = "";
  inputControl.classList.remove("errormsg");
}



// validation input

const validInput = () => {
  const validationFirstName = firstNameInput.value.trim();
  const validationLastName = lastNameInput.value.trim();
  const validationEmail = emailInput.value.trim();
  const validationBirthdate = birthdateInput.value.trim();
  
  

  if (validationFirstName === "") {
    showErrorMessage(firstNameInput, "Veuillez renseigner votre prénom");
  } else if (validationFirstName.length < 2) {
    showErrorMessage(firstNameInput, "Veuillez renseigner un nom valide");
  } else {
    hideErrorMessage(firstNameInput);
  }

  if (validationLastName === "") {
    showErrorMessage(lastNameInput, "Veuillez renseigner votre nom");
  } else if (validationLastName.length < 2) {
    showErrorMessage(lastNameInput, "Veuillez renseigner un nom valide");
  } else {
    hideErrorMessage(lastNameInput);
  }

  if (validationEmail === "") {
    showErrorMessage(emailInput, "Veuillez renseigner votre email");
  } else {
    hideErrorMessage(emailInput);
  }

  if (validationBirthdate === "") {
    showErrorMessage(birthdateInput, "Veuillez renseigner votre date de naissance");
  } else {
    hideErrorMessage(birthdateInput);
  }
  

}



