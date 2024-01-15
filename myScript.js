// Navbar
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// Toggle the 'active' class on the navbar when the menu icon is clicked
menu.onclick = () => {
    navbar.classList.toggle('active');
}

// Close the navbar when scrolling
window.onscroll = () => {
    navbar.classList.remove('active');
}

// Dark Mode
let darkmode = document.querySelector('#darkmode');

// Toggle dark mode when the dark mode icon is clicked
darkmode.onclick = () => {
    if (darkmode.classList.contains('bx-moon')) {
        // Switch to dark mode
        darkmode.classList.replace('bx-moon', 'bx-sun');
        document.body.classList.add('active');
    } else {
        // Switch to light mode
        darkmode.classList.replace('bx-sun', 'bx-moon');
        document.body.classList.remove('active');
    }
}

// Scroll Reveal
const sr = ScrollReveal({
    origin: 'top',
    distance: '40px',
    duration: 2000,
    reset: true
});

// Apply the Scroll Reveal effect to specified elements
sr.reveal(`
    .home-text, 
    .home-img, 
    .about-img, 
    .about-text, 
    .box, 
    .s-box, 
    .btn, 
    .connect-text, 
    .contact-box
`, {
    interval: 200
});
