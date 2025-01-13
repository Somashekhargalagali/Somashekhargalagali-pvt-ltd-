// Function to toggle the menu
function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('hidden');
}

// JavaScript functionality for alerts
function showAlert() {
  alert('Welcome to Somashekhar Galagali Company! Learn more about us below.');
}

// Form submission handling
window.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
  });
});