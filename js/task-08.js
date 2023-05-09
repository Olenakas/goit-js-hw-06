const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const emailField = loginForm.elements.email;
  const passwordField = loginForm.elements.password;

  if (!emailField.value || !passwordField.value) {
    alert("Всі поля повинні бути заповнені!");
    return;
  }

  const formData = {
    email: emailField.value,
    password: passwordField.value,
  };

  console.log(formData);

  loginForm.reset();
});
