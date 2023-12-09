document.addEventListener('DOMContentLoaded', function () {
    var email = document.getElementById('email');
    var confirmEmail = document.getElementById('confirmEmail');

    function checkEmailMatch() {
        // Check if the email and confirmEmail fields match
        if (email.value !== confirmEmail.value) {
            confirmEmail.setCustomValidity('Email addresses must match.');

            // Change border color to indicate non-matching emails
            confirmEmail.style.borderColor = 'red';

            // Optionally, display an alert to the user
            alert('Email addresses do not match. Please enter matching email addresses.');
        } else {
            confirmEmail.setCustomValidity('');

            // Set border color to green to indicate matching emails
            confirmEmail.style.borderColor = 'green';

            // Display a verification message
            alert('Email addresses match. Verification successful.');

            // You can also display a message on the page if needed
            // Example: document.getElementById('verificationMessage').innerText = 'Email addresses match. Verification successful.';
        }
    }

    email.addEventListener('change', checkEmailMatch);
    confirmEmail.addEventListener('change', checkEmailMatch);
});
