// Get the registration form element
const form = document.getElementById("registerForm");

// Listen for form submission
form.addEventListener("submit", function (event) {

    // Prevent page refresh when the form is submitted
    event.preventDefault();

    // Retrieve user input values
    const name = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const github = document.getElementById("github").value.trim();
    const avatar = document.getElementById("avatar");

    // Clear previous validation messages
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("githubError").textContent = "";
    document.getElementById("avatarError").textContent = "";

    // Track form validation status
    let isValid = true;

    // Validate full name field
    if (name === "") {
        document.getElementById("nameError").textContent =
            "Please enter your full name.";
        isValid = false;
    }

    // Email validation pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate email format
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent =
            "Please enter a valid email.";
        isValid = false;
    }

    // Validate GitHub username format
    if (!github.startsWith("@")) {
        document.getElementById("githubError").textContent =
            "GitHub username must start with @";
        isValid = false;
    }

    // Get uploaded image file
    const file = avatar.files[0];

    // Validate profile image upload
    if (!file) {
        document.getElementById("avatarError").textContent =
            "Please upload an image.";
        isValid = false;
    }

    // Process form if all validation checks pass
    if (isValid) {

        // Read image file as Base64 data
        const reader = new FileReader();

        reader.onload = function () {

            // Store user information in localStorage
            localStorage.setItem("fullName", name);
            localStorage.setItem("email", email);
            localStorage.setItem("github", github);
            localStorage.setItem("avatar", reader.result);

            // Redirect to the ticket page
            window.location.href = "ticket.html";
        };

        // Convert image to a format that can be stored
        reader.readAsDataURL(file);
    }

});