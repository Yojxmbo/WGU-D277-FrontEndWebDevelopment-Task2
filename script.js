document.addEventListener('DOMContentLoaded', function () {
    var email = document.getElementById('email');
    var confirmEmail = document.getElementById('confirmEmail');

    function checkEmailMatch() {
        // Check if the email and confirmEmail fields match
        if (email.value !== confirmEmail.value) {
            confirmEmail.setCustomValidity('Email addresses must match.');
        } else {
            confirmEmail.setCustomValidity('');
        }
    }

    email.addEventListener('input', checkEmailMatch);
    confirmEmail.addEventListener('input', checkEmailMatch);
});
