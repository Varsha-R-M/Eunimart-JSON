const loginForm = document.getElementById("login-form");
const errorMessage = document.getElementById("error-message");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();

  if (name === "" || phone === "" || email === "") {
    errorMessage.textContent = "Please fill in all the fields";
  } else {
    localStorage.setItem("name", name);
    localStorage.setItem("phone", phone);
    localStorage.setItem("email", email);
    window.location.href = "home.html";
  }
});
