// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar scroll effect
let navbar = document.getElementById("navbar");
let timeoutId = null;

// Function to show the navbar
function showNavbar() {
    navbar.style.top = "0"; // Bring the navbar into view
}

// Function to hide the navbar
function hideNavbar() {
    navbar.style.top = "-100px"; // Move the navbar out of view
}

// Function to handle scroll activity
function handleScroll() {
    showNavbar(); // Show the navbar on scroll
    clearTimeout(timeoutId); // Clear any existing timeout
    timeoutId = setTimeout(hideNavbar, 2000); // Set timeout to hide navbar after 2 seconds
}

// Add event listener to track scroll activity
window.addEventListener("scroll", handleScroll);


function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}


// Show the button when the user scrolls down
window.onscroll = function() {
    const upButton = document.getElementById("upButton");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        upButton.style.display = "flex";
    } else {
        upButton.style.display = "none";
    }
};

// Scroll to the top when the button is clicked
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

