function generatePassword() {
    const length = document.getElementById("length").value;
    const lowercase = document.getElementById("lowercase").checked;
    const numbers = document.getElementById("numbers").checked;
    const symbols = document.getElementById("symbols").checked;

    const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+{}[]<>?/";

    let allChars = upperChars; // Uppercase mandatory
    let password = "";

    // Ensure at least one uppercase
    password += upperChars[Math.floor(Math.random() * upperChars.length)];

    if (lowercase) allChars += lowerChars;
    if (numbers) allChars += numberChars;
    if (symbols) allChars += symbolChars;

    if (allChars.length === upperChars.length) {
        alert("Select at least one option besides uppercase!");
        return;
    }

    for (let i = password.length; i < length; i++) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    document.getElementById("password").value = shufflePassword(password);
    document.getElementById("message").innerText = "";
}

// Shuffle password for better randomness
function shufflePassword(password) {
    return password.split('').sort(() => 0.5 - Math.random()).join('');
}

// Copy to clipboard
function copyPassword() {
    const passwordField = document.getElementById("password");
    if (!passwordField.value) return;

    passwordField.select();
    passwordField.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(passwordField.value);

    document.getElementById("message").innerText = "Password Copied ✔";
}
