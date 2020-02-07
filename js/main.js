
document.addEventListener('DOMContentLoaded', () => {
    let mobileMenuButton = document.querySelector('.mobile-navbar-button');
    let mobileMenu = document.querySelector('.mobile-navbar');
    let closemobileMenuButtons = document.querySelectorAll('.close');
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.style.display = 'block';
    });
    closemobileMenuButtons.forEach(button => {
        button.addEventListener('click', () => {
            mobileMenu.style.display = 'none';
        });
    });
});