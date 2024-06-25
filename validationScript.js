// Wait for html document to load
document.addEventListener('DOMContentLoaded', function() {

    // Get references to the form and input field
    const form = document.getElementById('myForm');
    const inputField = document.getElementById('inputField');

    // Listen for the form submission event
    form.addEventListener('submit', function(event) {

        // Prevent the form from submitting automatically
        event.preventDefault();

        // Retrieve the trimmed value of the input field
        const inputValue = inputField.value.trim();

        // Regular expression pattern for alphanumeric input
        const alphanumericRegex = /^[a-zA-Z0-9]+$/;

        // Check if the input value matches the alphanumeric pattern
        if (alphanumericRegex.test(inputValue)) {
            // Valid input: display confirmation and optionally submit the form
            alert('Form submitted successfully');
            // Optionally, you can submit the form programmatically here
            // form.submit();
        } else {
            // Invalid input: display error message
            showError('Please enter letters and numbers only');
        }
    });

    // Function to display error messages (you can customize this function for different UI)
    function showError(message) {
        alert(message);
    }
});