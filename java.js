function generateCompliment() {
    const compliments = [
        "You have a great smile!",
        "Your positive energy is contagious.",
        "You're a a bad bitch!.",
        "You're sickening!!.",
        "You're outfit has me gagged!"             
    ];

    const randomIndex = Math.floor(Math.random() * compliments.length);
    const complimentDisplay = document.getElementById("complimentDisplay");
    complimentDisplay.textContent = compliments[randomIndex];

}

function showInput() {
    const inputContainer = document.getElementById("inputContainer");
    inputContainer.style.display = "block";
}

function sendResponse() {
    const userResponse = document.getElementById("userResponse").value;
    const responseDisplay = document.getElementById("responseDisplay");

    if (userResponse.trim() !== "") {
        responseDisplay.textContent = "Awww, okay! But I hope you know you're great anyway.";
    } else {
        responseDisplay.textContent = "Please enter a response.";
    }
}

function resetForm() {
    document.getElementById("userResponse").value = ""; // Clear the input field
    document.getElementById("responseDisplay").textContent = ""; // Clear the response display
    document.getElementById("complimentDisplay").textContent = "";
    document.getElementById("inputContainer").style.display = "none"; // Hide the input container
    resetYesNoButtons(); // Reset the state of Yes and No buttons
}

function resetYesNoButtons() {
    document.getElementById("yesButton").disabled = false; // Enable the "Yes" button
    document.getElementById("noButton").disabled = false; // Enable the "No" button
}
