document.addEventListener('DOMContentLoaded', function () {
    var email = document.getElementById('email');
    var confirmEmail = document.getElementById('confirmEmail');

    email.addEventListener('input', function () {
        // Check if the email and confirmEmail fields match
        if (email.value !== confirmEmail.value) {
            confirmEmail.setCustomValidity('Email addresses must match.');
        } else {
            confirmEmail.setCustomValidity('');
        }
    });

    confirmEmail.addEventListener('input', function () {
        // Check if the email and confirmEmail fields match
        if (email.value !== confirmEmail.value) {
            confirmEmail.setCustomValidity('Email addresses must match.');
        } else {
            confirmEmail.setCustomValidity('');
        }
    });
});

