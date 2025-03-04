function showAlert() {
    alert("Welcome to AmplifyXDigital! Let's grow your brand online.");
}

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    
    if (name && email && message) {
        alert("Thank you, " + name + "! We have received your message and will contact you soon.");
    } else {
        alert("Please fill out all fields before submitting.");
    }
});
