// script.js

// Wait for the DOM to be fully loaded before executing JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // 1. Change text content dynamically
    const subtitle = document.querySelector('header p');
    subtitle.textContent = "Surviving is winning, Franklin - Medical Student & Coder";
    
    // 2. Modify CSS styles via JavaScript
    const portfolioSection = document.getElementById('portfolio');
    portfolioSection.style.border = "2px solid brown";
    portfolioSection.style.padding = "25px";
    portfolioSection.style.transition = "all 0.3s ease";
    
    // 3. Create a button that adds/removes an element
    const aboutSection = document.getElementById('about');
    const toggleButton = document.createElement('button');
    toggleButton.textContent = "Toggle Projects Section";
    aboutSection.appendChild(toggleButton);
    
    // Create a projects section to toggle
    const projectsSection = document.createElement('div');
    projectsSection.innerHTML = `
        <h3>My Projects</h3>
        <ul>
            <li>Medical Diagnosis App</li>
            <li>Poetry Blog</li>
            <li>Banking System Simulation</li>
        </ul>
    `;
    projectsSection.style.display = 'none'; // Initially hidden
    portfolioSection.appendChild(projectsSection);
    
    // Button click event to toggle the projects section
    toggleButton.addEventListener('click', function() {
        if (projectsSection.style.display === 'none') {
            projectsSection.style.display = 'block';
            toggleButton.textContent = "Hide Projects";
        } else {
            projectsSection.style.display = 'none';
            toggleButton.textContent = "Show Projects";
        }
    });
    
    // Additional dynamic interaction: Change header color on hover
    const header = document.querySelector('header');
    header.addEventListener('mouseenter', function() {
        this.style.backgroundColor = 'rgba(165, 42, 42, 0.8)';
        this.style.color = 'white';
        this.style.transition = 'all 0.3s ease';
    });
    
    header.addEventListener('mouseleave', function() {
        this.style.backgroundColor = '';
        this.style.color = '';
    });
    
    // Change footer text dynamically after 3 seconds
    setTimeout(function() {
        const footer = document.querySelector('footer');
        footer.innerHTML += '<p>Thanks for visiting my portfolio!</p>';
    }, 3000);
});