const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.getElementById("form");

const email_error = document.getElementById("email_error");
const password_error = document.getElementById("password_error");

//form validation
form.addEventListener("submit", (y) => {
  if (email.value.trim() === "") {
    email_error.innerHTML = "Email is required!";
    y.preventDefault();
  } else {
    const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@gmail\.com$/;
    if (!email.value.match(emailPattern)) {
      email_error.innerHTML = "Email does not exist or was misspelled.";
      y.preventDefault();
    } else {
      email_error.innerHTML = "";
    }
  }

  if (password.value === "") {
    password_error.innerHTML = "Password is required!";
    y.preventDefault();
  } else if (password.value.length <= 6) {
    password_error.innerHTML = "Password should be more than 6 characters.";
    y.preventDefault();
  }
});
//error color
email_error.style.color = "red";
password_error.style.color = "red";
