// Validate Registration Form
function validateRegisterForm() {
    const name = document.getElementById('reg-name').value;
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;
    const confirmPassword = document.getElementById('reg-confirm-password').value;

    if (name.trim() === "") {
        alert("Name cannot be empty!");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return false;
    }

    return true;
}

// Validate Login Form
function validateLoginForm() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    if (email.trim() === "" || password.trim() === "") {
        alert("Email and Password cannot be empty!");
        return false;
    }
    return true;
}

