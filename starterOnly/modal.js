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


// Step validation first name

const isvalidFirstName = (firstName) => {
  const reTest = /^[a-zA-Z]+$/;
  return reTest.test(String(firstName).toLowerCase());
}

// Step validation last name

const isvalidLastName = (lastName) => {
  const reTest = /^[a-zA-Z]+$/;
  return reTest.test(String(lastName).toLowerCase());
}

// Step Validation Email

const isvalidEmail = (email) => {
  const reTest = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return reTest.test(String(email).toLowerCase());
}



// validation input

const validInput = () => {
  const validationFirstName = firstNameInput.value.trim();
  const validationLastName = lastNameInput.value.trim();
  const validationEmail = emailInput.value.trim();
  const validationBirthdate = birthdateInput.value.trim();
  
  // validation first name

  if (validationFirstName === "") {
    showErrorMessage(firstNameInput, "Veuillez renseigner votre prénom");
  } else if (validationFirstName.length < 2) {
    showErrorMessage(firstNameInput, "Veuillez renseigner un prénom valide");
  } else if (!isvalidFirstName(validationFirstName)) {
    showErrorMessage(firstNameInput, "Veuillez renseigner un prénom valide");
  } else {
    hideErrorMessage(firstNameInput);
  }

// validation last name

  if (validationLastName === "") {
    showErrorMessage(lastNameInput, "Veuillez renseigner votre nom");
  } else if (validationLastName.length < 2) {
    showErrorMessage(lastNameInput, "Veuillez renseigner un nom valide");
  } else if (!isvalidLastName(validationLastName)) {
    showErrorMessage(lastNameInput, "Veuillez renseigner un nom valide");
  } else {
    hideErrorMessage(lastNameInput);
  }

// validation email

  if (validationEmail === "") {
    showErrorMessage(emailInput, "Veuillez renseigner votre email");
  } else if (!isvalidEmail(validationEmail)) {
    showErrorMessage(emailInput, "Veuillez entrer un email valide"); 
  }else {
    hideErrorMessage(emailInput);
  }

// validation birthdate

  if (validationBirthdate === "") {
    showErrorMessage(birthdateInput, "Veuillez renseigner votre date de naissance");
  } else {
    hideErrorMessage(birthdateInput);
  }
  

}



