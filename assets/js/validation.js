const form = document.querySelector('#form-contact');
const usernameInput = document.querySelector('#username');
const phoneInput = document.querySelector('#phone');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');
const usernameError = document.querySelector('#username-error');
const phoneError = document.querySelector('#phone-error');
const emailError = document.querySelector('#email-error');
const messageError = document.querySelector('#message-error');

form.addEventListener('submit', (event) => {
  let isValid = true;
  event.preventDefault();

  if (usernameInput.value === '') {
    usernameError.textContent = 'Please enter your name';
    isValid = false;
  } else {
    usernameError.textContent = '';
  }

  if (phoneInput.value === '') {
    phoneError.textContent = 'Please enter your phone number';
    isValid = false;
  } else {
    phoneError.textContent = '';
  }

  if (emailInput.value === '') {
    emailError.textContent = 'Please enter your email address';
    isValid = false;
  } else if (!isValidEmail(emailInput.value)) {
    emailError.textContent = 'Please enter a valid email address';
    isValid = false;
  } else {
    emailError.textContent = '';
  }

  if (messageInput.value === '') {
    messageError.textContent = 'Please enter your message';
    isValid = false;
  } else {
    messageError.textContent = '';
  }

  if (isValid) {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Thank you for Contacting Us',
      showConfirmButton: false,
      timer: 1500
    })
  }
});

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
