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
const checkbox = document.querySelectorAll(".checkbox-input");
const errorClass  = document.querySelectorAll(".error");

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
function closeModal() {
  modalbg.style.display = "none";
  resetForm();
}

function resetForm(){
  document.querySelector(".form").reset();
}

btnCloseModal.addEventListener("click", () => {
  closeModal(true)
  resetForm()
  errorClass.forEach((ele) => {
    hideErrorMessage(ele);
  })
});

// Submit form

form.addEventListener("submit", (e) => {
  e.preventDefault();
  
  if (validInput()) {
    form.submit();
  }
})



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

function checkValidationFirstName() {
  const isvalidFirstName = (firstName) => {
    const reTest = /^[a-zA-Z]+$/;
    return reTest.test(String(firstName).toLowerCase());
  }
const validationFirstName = firstNameInput.value.trim();
if (validationFirstName === "") {
  showErrorMessage(firstNameInput, "Veuillez renseigner votre prénom");
} else if (validationFirstName.length < 2) {
  showErrorMessage(firstNameInput, "Veuillez renseigner un prénom valide");
} else if (!isvalidFirstName(validationFirstName)) {
  showErrorMessage(firstNameInput, "Veuillez renseigner un prénom valide");
} else {
  hideErrorMessage(firstNameInput);
}
}




// Step validation last name

function checkValidationLastName() {
  const isvalidLastName = (lastName) => {
    const reTest = /^[a-zA-Z]+$/;
    return reTest.test(String(lastName).toLowerCase());
  }
const validationLastName = lastNameInput.value.trim();
if (validationLastName === "") {
  showErrorMessage(lastNameInput, "Veuillez renseigner votre nom");
} else if (validationLastName.length < 2) {
  showErrorMessage(lastNameInput, "Veuillez entrer 2 caractères ou plus pour le champ du nom");
} else if (!isvalidLastName(validationLastName)) {
  showErrorMessage(lastNameInput, "Veuillez renseigner un nom valide");
} else {
  hideErrorMessage(lastNameInput);
}
}

// Step Validation Email


function checkValidationEmail() {
  const isvalidEmail = (email) => {
    const reTest = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reTest.test(String(email).toLowerCase());
  }
  
  const validationEmail = emailInput.value.trim();

  if (validationEmail === "") {
    showErrorMessage(emailInput, "Veuillez renseigner votre email");
  } else if (!isvalidEmail(validationEmail)) {
    showErrorMessage(emailInput, "Veuillez entrer un email valide"); 
  }else {
    hideErrorMessage(emailInput);
  }


}

// Step Validation Birthdate

function checkValidationBirthdate() {
  const validationBirthdate = birthdateInput.value.trim();
  if (validationBirthdate === "") {
    showErrorMessage(birthdateInput, "Vous devez entrer votre date de naissance");
  } else {
    hideErrorMessage(birthdateInput);
  }
}


function checkValidationQuantity() {
  const validationQuantity = quantityInput.value.trim();
  if (validationQuantity === "") {
    showErrorMessage(quantityInput, "Veuillez renseigner un nombre");
  } else {
    hideErrorMessage(quantityInput);
  }
}


// validation input

function validInput() {
  
checkValidationFirstName();
checkValidationLastName();
checkValidationEmail();
checkValidationBirthdate();
checkValidationQuantity();
}

// Keep data in localStorage

firstNameInput.value = localStorage.getItem("first");
lastNameInput.value = localStorage.getItem("last");
emailInput.value = localStorage.getItem("email");



