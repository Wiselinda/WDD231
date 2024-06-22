document.addEventListener("DOMContentLoaded", () => {
    // Set the current year in the footer
    document.getElementById("year").textContent = new Date().getFullYear();

    // Set the last modified date in the footer
    document.getElementById("last-modified").textContent = new Date(document.lastModified).toLocaleDateString();

    // Function to handle hamburger menu for mobile navigation
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('nav ul');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

     // Function to fetch current weather (if defined elsewhere)
     fetchCurrentWeather();

  
})