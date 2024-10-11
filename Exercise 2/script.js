// Validate form
function validateForm(){
    return nameValidation() &&
        emailValidation() &&
        phoneValidation() &&
        passwordValidation() &&
        passwordConfirmationValidation() &&
        ageValidation() &&
        websiteValidation();
}
// Validate Name
function nameValidation() {
    let name = document.forms["form"]["name"].value;
    let error = document.querySelector("#name + .error"); // Select the error div next to the name input

    // Clear previous error message
    error.innerHTML = "";

    if (name.length < 3) {
        error.innerHTML = "Name has to be more than 3 characters.";
        return false;
    }
    else if (!isNaN(name)) {
        error.innerHTML = "Name cannot be made of numbers only.";
        return false;
    }

    // return true to see if the validation is successful
    return true;
}

// Validate Email
function emailValidation() {
    let email = document.forms["form"]["email"].value;
    let error = document.querySelector("#email + .error"); // Select the error div next to the name input
    // Enter email pattern to validate the email
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    error.innerHTML = "";

    // Check for basic email validation
    if (!emailPattern.test(email)) {
        error.innerHTML = "Invalid email address (e.g., example@domain.com).";
        return false;
    }

    return true;
}

// Validate phone number
function phoneValidation() {
    let phone = document.forms["form"]["phone"].value;
    let error = document.querySelector("#phone + .error"); // Select the error div next to the name input

    error.innerHTML = "";

    if (phone.length !== 10) {
        error.innerHTML = "Invalid Number";
        return false;
    }

    // Check if each character in the phone number is a digit
    for (let i = 0; i < phone.length; i++) {
        if (phone[i] < '0' || phone[i] > '9') {
            error.innerHTML = "Phone number cannot contain special characters or spaces.";
            return false;
        }
    }

    return true;
}

// Validate password
function passwordValidation() {
    let password = document.forms["form"]["password"].value;
    let error = document.querySelector("#password + .error"); // Select the error div next to the name input

    error.innerHTML = "";

    if (password.length < 8) {
        error.innerHTML = "Password must be at least 8 characters.";
        return false;
    }
    // use .test to check if the string matches an expression
    else if (!/[A-Z]/.test(password) &&
        !/[a-z]/.test(password) &&
        !/[0-9]/.test(password) && !/[@#$%^&*(),.?":{}|<>]/.test(password)) {
        error.innerHTML = "Password must contain at least one uppercase letter, at least one lowercase letter, at least one number, and at least one special character.";
        return false;
    }

    return true;
}

// Validate confirm password
function passwordConfirmationValidation() {
    let password = document.forms["form"]["password"].value;
    let confirmPassword = document.forms["form"]["confirmPassword"].value;
    let error = document.querySelector("#confirmPassword + .error"); // Select the error div next to the name input

    error.innerHTML = "";

    if (confirmPassword !== password) {
        error.innerHTML = "Passwords do not match!";
        return false;
    }

    return true;
}

// Validate age
function ageValidation() {
    let age = document.forms["form"]["age"].value;
    let error = document.querySelector("#age + .error");

    error.innerHTML = "";

    if (age < 18 && age > 60){
        error.innerHTML = "You have to be between 18 to 60 years old.";
        return false;
    }

    return true;

}

// Validate website
function websiteValidation() {
    let website = document.forms["form"]["website"].value;
    let error = document.querySelector("#website + .error");
    let urlPattern = /^(http:\/\/|https:\/\/)[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    error.innerHTML = "";

    if (!urlPattern.test(website)) {
        error.innerHTML = "Website URL must start with 'http://' or 'https://' and be a valid URL format.";
        return false;
    }

    return true;

}


// Clear error message when user types in the name input
function clearError() {
    let error = document.querySelector("#name + .error");
    error.innerHTML = ""; // Clear the error message
}