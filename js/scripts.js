/*!
* Start Bootstrap - Resume v7.0.1 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


// Default value if calculation fails
const defaultYears = "10";

// Function to calculate years difference
function calculateYearsDifference(pastDate) {
    const today = new Date();
    const past = new Date(pastDate);
    const differenceInMilliseconds = today - past;
    const differenceInYears = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24 * 365.25));
    return differenceInYears;
}

const yearsDifferenceElement = document.getElementById('years-difference');
try {
    const pastDate = "2014-07-07"; 
    const years = calculateYearsDifference(pastDate);
    yearsDifferenceElement.textContent = years + " years";
} catch (error) {
    yearsDifferenceElement.textContent = defaultYears;
}

