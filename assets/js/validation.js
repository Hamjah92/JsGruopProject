const form = document.querySelector("#form-contact");
const usernameInput = document.querySelector("#username");
const phoneInput = document.querySelector("#phone");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");
const usernameError = document.querySelector("#username-error");
const phoneError = document.querySelector("#phone-error");
const emailError = document.querySelector("#email-error");
const messageError = document.querySelector("#message-error");

function clearErrors() {
  usernameError.textContent = "";
  phoneError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";
}

form.addEventListener("submit", (event) => {
  let isValid = true;
  event.preventDefault();
  clearErrors();
  if (usernameInput.value === "") {
    usernameError.textContent = "Please enter your name";
    isValid = false;
  } else {
    usernameError.textContent = "";
  }

  if (phoneInput.value === "") {
    phoneError.textContent = "Please enter your phone number";
    isValid = false;
  } else {
    phoneError.textContent = "";
  }

  if (emailInput.value === "") {
    emailError.textContent = "Please enter your email address";
    isValid = false;
  } else if (!isValidEmail(emailInput.value)) {
    emailError.textContent = "Please enter a valid email address";
    isValid = false;
  } else {
    emailError.textContent = "";
  }

  if (messageInput.value === "") {
    messageError.textContent = "Please enter your message";
    isValid = false;
  } else {
    messageError.textContent = "";
  }
  if (isValid) {
    // clear inputs

    emailjs.sendForm("test_project1email", "template_e7cugi9", form).then(
      // If the form submission is successful, hide the booking form and display the booking confirmation div.
      function () {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Thank you for Contacting Us",
          showConfirmButton: false,
          timer: 1500,
        });

        usernameInput.value = "";
        phoneInput.value = "";
        emailInput.value = "";
        messageInput.value = "";
      }
    );
  }
});

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
