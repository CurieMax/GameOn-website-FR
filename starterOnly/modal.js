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
const confirmationCloseBtn = document.getElementById("closeBtn");
const affichageHero = document.querySelector(".hero-section");

function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/**
 * C'est la fonction qui permet d'ouvrir le modal
 */

modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

/**
 * C'est la fonction qui permet d'afficher le modal
 */
function launchModal() {
  modalbg.style.display = "block";
  confirmationCloseBtn.style.display = "none";
  affichageHero.style.display = "none";
}

/**
 * C'est la fonction qui permet de fermer le modal
 */
function closeModal() {
  modalbg.style.display = "none";
  resetForm();
  form.style.display = "block";
  confirmationMessage.style.display = "none";
  confirmationCloseBtn.style.display = "none";
  affichageHero.style.display = "";
}

/**
 * C'est la fonction qui permet de reinitialiser le formulaire
 */
function resetForm() {
  document.querySelector(".form").reset();
}

/**
 * C'est la fonction qui permet d'afficher le message d'erreur
 */

const showErrorMessage = (ele, msg) => {
  const inputControl = ele.parentElement;
  const errormsg = inputControl.querySelector(".error");
  errormsg.innerText = msg;
  inputControl.classList.add("errormsg");
};

/**
 * C'est la fonction qui permet de cacher le message d'erreur
 */
const hideErrorMessage = (ele) => {
  const inputControl = ele.parentElement;
  const errormsg = inputControl.querySelector(".error");
  errormsg.innerText = "";
  inputControl.classList.remove("errormsg");
};

/**
 * C'est la fonction qui permet de valider le prénom
 */

function checkValidationFirstName() {
  const isvalidFirstName = (firstName) => {
    const reTest = /^[a-zA-Z]+$/;
    return reTest.test(String(firstName).toLowerCase());
  };
  const validationFirstName = firstNameInput.value.trim();
  if (validationFirstName === "") {
    showErrorMessage(firstNameInput, "Veuillez renseigner votre prénom");

    return false;
  } else if (validationFirstName.length < 2) {
    showErrorMessage(
      firstNameInput,
      "Veuillez renseigner un prénom de plus de 2 caractères"
    );
    return false;
  } else if (!isvalidFirstName(validationFirstName)) {
    showErrorMessage(firstNameInput, "Veuillez renseigner un prénom valide");
    return false;
  } else {
    hideErrorMessage(firstNameInput);
  }

  return true;
}

/**
 * C'est la fonction qui permet de valider le nom
 */

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

/**
 * C'est la fonction qui permet de valider l'email
 * Avec une expression régulière
 */

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

/**
 * C'est la fonction qui permet de valider la date de naissance
 * Avec un age minimum de 18 ans
 */

function checkValidationBirthdate() {
  const valueBirthdateInput = document.getElementById("birthdate").value;
  const birthdate = new Date(valueBirthdateInput);
  const today = new Date();
  
  
  const age = today.getFullYear() - birthdate.getFullYear();
  if (age < 18) {
    showErrorMessage(birthdateInput, "Vous devez avoir 18 ans ou plus");
    return false;
  }

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

/**
 * C'est la fonction qui permet de valider le nombre de tournois
 */
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

/**
 * Permet l'écoute de l'input pour autoriser uniquement des chiffres
 */
quantityInput.addEventListener("keydown", (event) => {
  let checkKeyboard = event
  if (
    (checkKeyboard < 48 || checkKeyboard > 56) && //chifres
    (checkKeyboard < 96 || checkKeyboard > 105) && //pavé numériques
    checkKeyboard !== 8  //backspace
    

  ){
    event.preventDefault();
  }
});


/**
 * C'est la fonction qui permet de valider les boutons radio
 *
 */
function checkValidationCheckbox() {
  const radios = document.getElementsByName("location");
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      hideErrorMessage(radios[i]);
      return true;
    }
  }

  showErrorMessage(radios[0], "Veuillez selectionner un tournoi");
  return false;
}

/**
 * C'est la fonction qui permet de valider les conditions
 *
 */

function checkValidationConditions() {
  const validationCondition1 = document.getElementById("checkbox1");
  const validationCondition2 = document.getElementById("checkbox2");
  const validationCondition = [validationCondition1, validationCondition2];

  if (!validationCondition1.checked) {
    showErrorMessage(validationCondition1, "Veuillez accepter les conditions");
    return false;
  } else {
    hideErrorMessage(validationCondition1);
  }

  return true;
}

/**
 * C'est la fonction qui sera appelée à l'envoi du formulaire.
 * Cela permet de valider les champs
 */

function validInput() {
  let isvalidFirstName = checkValidationFirstName();
  let isvalidLastName = checkValidationLastName();
  let isvalidEmail = checkValidationEmail();
  let isvalidBirthdate = checkValidationBirthdate();
  let isvalidQuantity = checkValidationQuantity();
  let isvalidCheckbox = checkValidationCheckbox();
  let isvalidConditions = checkValidationConditions();
  if (
    isvalidFirstName &&
    isvalidLastName &&
    isvalidEmail &&
    isvalidBirthdate &&
    isvalidQuantity &&
    isvalidCheckbox &&
    isvalidConditions
  ) {
    return true;
  }
  return false;
}

/**
 * C'est la fonction qui sera appelée à la fin de la soumission du formulaire.
 * Cela permet d'afficher le message de confirmation
 * et de fermer le modal
 */
function afterSubmit() {
  form.style.display = "none";
  confirmationMessage.style.display = "block";
  confirmationCloseBtn.style.display = "block";
  confirmationCloseBtn.addEventListener("click", () => {
    closeModal();
    resetForm();
    errorClass.forEach((ele) => {
      hideErrorMessage(ele);
    });
  });
}

/**
 * Initialisation 
 */

function init() {
  btnCloseModal.addEventListener("click", () => {
    closeModal(true);
    resetForm();
    errorClass.forEach((ele) => {
      hideErrorMessage(ele);
    });
  });

  /**
   * C'est la fonction qui sera appelée à la soumission du formulaire.
   *
   */
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (validInput()) {
      afterSubmit();
      return true;
    } else {
      return false;
    }
  });
}

init();
