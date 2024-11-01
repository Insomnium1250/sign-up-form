document.getElementById("user_form").addEventListener("submit", function(event) {
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;
  const errorElement = document.getElementById("password-error");

  // Check if passwords match
  if (password !== confirmPassword) {
    errorElement.style.display = "block";
    event.preventDefault(); // Prevent form submission
  } else {
    errorElement.style.display = "none";
  }
});
