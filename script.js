// script file to improve website interactivity


// Function to toggle the visibility of a menu
function toggleMenu() {
    const menu = document.getElementById('menu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}

// scaling factor for responsive design
const scaleFactor = 1.2;

// Function to scale elements based on the scaling factor
function scaleElements() {
    const elements = document.querySelectorAll('.scalable');
    elements.forEach(element => {
        const currentWidth = element.offsetWidth;
        const currentHeight = element.offsetHeight;
        element.style.width = (currentWidth * scaleFactor) + 'px';
        element.style.height = (currentHeight * scaleFactor) + 'px';
    });
}

// Event listener for menu toggle button
document.getElementById('menuToggle').addEventListener('click', toggleMenu);

// Event listener for window resize to scale elements
window.addEventListener('resize', scaleElements);

// Initial scaling of elements on page load
window.addEventListener('load', scaleElements);     

// End of script.js 