// login.js

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('login-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const togglePasswordBtn = document.getElementById('toggle-password');
    const showIcon = document.getElementById('show-icon');
    const hideIcon = document.getElementById('hide-icon');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting the default way

        const username = usernameInput.value;
        const password = passwordInput.value;

        // Check if the username and password are both "duck"
        if (username === 'duck' && password === 'duck') {
            // Redirect to another page
            window.location.href = 'success.html'; // Replace 'success.html' with your desired URL
        } else {
            // Optionally handle invalid credentials
            alert('Invalid username or password');
        }
    });

    togglePasswordBtn.addEventListener('click', function() {
        const type = passwordInput.type === 'password' ? 'text' : 'password';
        passwordInput.type = type;
        if (type === 'password') {
            showIcon.style.display = 'block';
            hideIcon.style.display = 'none';
        } else {
            showIcon.style.display = 'none';
            hideIcon.style.display = 'block';
        }
    });

    // Initialize icon display
    hideIcon.style.display = 'none'; // Initially hide the 'eye-off' icon
});
