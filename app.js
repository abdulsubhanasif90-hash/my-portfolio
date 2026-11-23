
// Contact button functionality

const contactBtn = document.getElementById("contactBtn");

contactBtn.addEventListener("click", function() {
    alert("Thank you for visiting my portfolio!");
});

// Welcome message in console

console.log("Welcome to my personal portfolio!");

// Highlight navigation links on click

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        console.log("You clicked: " + link.textContent);
    });
});
