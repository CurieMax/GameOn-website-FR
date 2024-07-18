// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const btnCloseModal = document.querySelector(".close");
const firstNameInput = document.querySelector(".first");
const lastNameInput = document.querySelector(".last");
const emailInput = document.querySelector(".email");
const birthdateInput = document.querySelector(".birthdate");
const quantityInput = document.querySelector(".quantity");
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
  document.getElementById("form").reset();
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
}



// validation input

const validInput = () => {
  const userEl = firstNameInput.value.trim();
  console.log(userEl);

  if (userEl === "") {
    showErrorMessage(firstNameInput, "First Name cannot be empty");
  }


}



