/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const navList = document.getElementById('navbar__list');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

    sections.forEach(section => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<a class="menu__link" href="#${section.id}">${section.dataset.nav}</a>`;
        navList.appendChild(listItem);
    });

// Add class 'active' to section when near top of viewport

    window.addEventListener('scroll', function() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const listItem = document.querySelector(`a[href="#${section.id}"]`);
    
            if (rect.top <= 200 && rect.bottom >= 200) {
                section.classList.add('active-section');
                listItem.classList.add('active');
                listItem.classList.add('active-section-background');
            } else {
                section.classList.remove('active-section');
                listItem.classList.remove('active');
                listItem.classList.remove('active-section-background');
            };
        });
    });

// Scroll to anchor ID using scrollTO event
    navList.addEventListener('click', function(event) {
        event.preventDefault();
  
        if (event.target.nodeName === 'A') {
            const targetId = event.target.getAttribute('href').slice(1);
            const targetSection = document.getElementById(targetId);
  
            // Scroll to the target section with smooth behavior
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active