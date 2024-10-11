// Validate Name
function nameValidation() {
    let name = document.getElementById("name").value;
    let error = document.getElementById("nameError");

    // Clear previous error message
    error.innerText = "";

    // Check if the name is less than 3 characters
    if (name.length < 3) {
        error.innerText = "Name must be at least 3 characters long.";
    }
}

// Check Password Strength
function passwordValidation() {
    let password = document.getElementById("password").value;
    let strength = document.getElementById("passwordStrength");

    // Clear previous strength message
    strength.innerText = "";

    // Determine strength of password
    if (password.length < 5) {
        strength.innerText = "Weak";
        strength.style.color = "red";
    } else if (password.length <= 8) {
        strength.innerText = "Medium";
        strength.style.color = "orange";
    } else {
        strength.innerText = "Strong";
        strength.style.color = "green";
    }
}

// Validate Form
function validateForm() {
    return nameValidation() && passwordValidation(); // Adjust this as needed
}