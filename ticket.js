// Retrieve stored user information from localStorage
const fullName = localStorage.getItem("fullName");

// Redirect user back to home page if no registration data exists
if (!fullName) {
    window.location.href = "index.html";
}

// Retrieve additional attendee information
const email = localStorage.getItem("email");
const github = localStorage.getItem("github");
const avatar = localStorage.getItem("avatar");

// Populate confirmation banner with attendee details
document.getElementById("ticketNameHeading").textContent =
    fullName;

document.getElementById("ticketEmail").textContent =
    email;

// Display attendee information on the ticket
document.getElementById("ticketName").textContent =
    fullName;

document.getElementById("ticketGithub").textContent =
    github;

// Display uploaded avatar or use fallback image if none exists
const avatarElement =
    document.getElementById("ticketAvatar");

avatarElement.src =
    avatar && avatar.trim() !== ""
        ? avatar
        : "assets/image-avatar.jpg";

// Use fallback image if avatar fails to load
avatarElement.onerror = function () {
    this.src = "assets/image-avatar.jpg";
};

// Generate a random 5-digit ticket number
const ticketNumber =
    "#" +
    String(
        Math.floor(Math.random() * 99999)
    ).padStart(5, "0");

// Display ticket number on the ticket
document.getElementById("ticketNumber").textContent =
    ticketNumber;