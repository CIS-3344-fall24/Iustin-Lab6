const button = document.getElementById('button');

// Add an `addEventListener` to the button
button.addEventListener('click', () => {
    // Show an alert when the button is clicked
    alert('Button Clicked!');
});

const inputField = document.getElementById('inputField');

// Add a focus addEventListener to the input field
inputField.addEventListener('focus', () => {
    // Change the background color to light gray when the input field is focused
    inputField.style.backgroundColor = 'lightgray';
});

// Add a blur addEventListener to the input field
inputField.addEventListener('blur', () => {
    // Reset the background color to white when the input field loses focus
    inputField.style.backgroundColor = 'white';
});

const hover = document.getElementById('hover');

// Add a mouseover addEventListener to the div
hover.addEventListener('mouseover', () => {
    // Add the 'hover' class to the div when the mouse is over it
    hover.classList.add('hover');
});

// Add a mouseout addEventListener to the div
hover.addEventListener('mouseout', () => {
    // Remove the 'hover' class from the div when the mouse leaves it
    hover.classList.remove('hover');
});