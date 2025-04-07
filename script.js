// script.js
function registerUser() {
    const username = document.getElementById("username").value;
    localStorage.setItem("username", username);
    alert("Registration successful!");
    window.location.href = "index.html";
}

function loginUser() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Dummy check (simulate login)
    if (email && password) {
        const username = localStorage.getItem("username") || "User";
        localStorage.setItem("loggedInUser", username);
        window.location.href = "home.html";
    } else {
        alert("Invalid credentials!");
    }
}

function displayUsername() {
    const username = localStorage.getItem("loggedInUser") || "Guest";
    document.getElementById("welcomeUser").innerText = `Welcome, ${username}!`;
}
