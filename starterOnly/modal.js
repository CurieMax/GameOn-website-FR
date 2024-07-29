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
const errorClass = document.querySelectorAll(".error");
const confirmationMessage = document.getElementById("confirmationMessage");

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
  form.style.display = "block";
  confirmationMessage.style.display = "none";
}

function resetForm() {
  document.querySelector(".form").reset();
}

btnCloseModal.addEventListener("click", () => {
  closeModal(true);
  resetForm();
  errorClass.forEach((ele) => {
    hideErrorMessage(ele);
  });
});

// Submit form

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (validInput()) {
    afterSubmit();
    return true;
  } else {
    return false;
  }
});

// show error message

const showErrorMessage = (ele, msg) => {
  const inputControl = ele.parentElement;
  const errormsg = inputControl.querySelector(".error");
  errormsg.innerText = msg;
  inputControl.classList.add("errormsg");
};

// hide error message
const hideErrorMessage = (ele) => {
  const inputControl = ele.parentElement;
  const errormsg = inputControl.querySelector(".error");
  errormsg.innerText = "";
  inputControl.classList.remove("errormsg");
};

// Step validation first name

function checkValidationFirstName() {
  const isvalidFirstName = (firstName) => {
    const reTest = /^[a-zA-Z]+$/;
    return reTest.test(String(firstName).toLowerCase());
  };
  const validationFirstName = firstNameInput.value.trim();
  if (validationFirstName === "") {
    showErrorMessage(firstNameInput, "Veuillez renseigner votre prénom");
  } else if (validationFirstName.length < 2) {
    showErrorMessage(firstNameInput, "Veuillez renseigner un prénom valide");
  } else if (!isvalidFirstName(validationFirstName)) {
    showErrorMessage(firstNameInput, "Veuillez renseigner un prénom valide");
    return false;
  } else {
    hideErrorMessage(firstNameInput);
  }

  return true;
}

// Step validation last name

function checkValidationLastName() {
  const isvalidLastName = (lastName) => {
    const reTest = /^[a-zA-Z]+$/;
    return reTest.test(String(lastName).toLowerCase());
  };
  const validationLastName = lastNameInput.value.trim();
  if (validationLastName === "") {
    showErrorMessage(lastNameInput, "Veuillez renseigner votre nom");
  } else if (validationLastName.length < 2) {
    showErrorMessage(
      lastNameInput,
      "Veuillez entrer 2 caractères ou plus pour le champ du nom"
    );
  } else if (!isvalidLastName(validationLastName)) {
    showErrorMessage(lastNameInput, "Veuillez renseigner un nom valide");
    return false;
  } else {
    hideErrorMessage(lastNameInput);
  }

  return true;
}

// Step Validation Email

function checkValidationEmail() {
  const isvalidEmail = (email) => {
    const reTest =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reTest.test(String(email).toLowerCase());
  };

  const validationEmail = emailInput.value.trim();

  if (validationEmail === "") {
    showErrorMessage(emailInput, "Veuillez renseigner votre email");
  } else if (!isvalidEmail(validationEmail)) {
    showErrorMessage(emailInput, "Veuillez entrer un email valide");
    return false;
  } else {
    hideErrorMessage(emailInput);
  }

  return true;
}

// Step Validation Birthdate

function checkValidationBirthdate() {
  const validationBirthdate = birthdateInput.value.trim();
  if (validationBirthdate === "") {
    showErrorMessage(
      birthdateInput,
      "Vous devez entrer votre date de naissance"
    );
    return false;
  } else {
    hideErrorMessage(birthdateInput);
  }

  return true;
}

// Step Validation quantity

function checkValidationQuantity() {
  const validationQuantity = quantityInput.value.trim();
  if (validationQuantity === "") {
    showErrorMessage(quantityInput, "Veuillez renseigner un nombre");
    return false;
  } else {
    hideErrorMessage(quantityInput);
  }

  return true;
}

// Step Validation checkbox

function checkValidationCheckbox(location) {
  const radios = document.getElementsByName("location");
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      return true;
    }
  }
  return false;
}

// step validation conditions

function checkValidationConditions() {
  const validationCondition1 = document.getElementById("checkbox1");
  const validationCondition2 = document.getElementById("checkbox2");
  const validationCondition = [validationCondition1, validationCondition2];

  // si validationcondition1 n'est pas checked, envoie un message d'erreur
  if (!validationCondition1.checked) {
    showErrorMessage(validationCondition1, "Veuillez accepter les conditions");
    return false;
  } else {
    hideErrorMessage(validationCondition1);
  } 

  return true;

  
  
}

// validation input

function validInput() {
  if (
    checkValidationFirstName() &&
    checkValidationLastName() &&
    checkValidationEmail() &&
    checkValidationBirthdate() &&
    checkValidationQuantity() &&
    checkValidationCheckbox() &&
    checkValidationConditions()
  ) {
    return true;
  }
  return false;
}

// After submitting the form

function afterSubmit() {
  form.style.display = "none";
  confirmationMessage.style.display = "block";
}

// Keep data in localStorage

firstNameInput.value = localStorage.getItem("first");
lastNameInput.value = localStorage.getItem("last");
emailInput.value = localStorage.getItem("email");
