document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  // Toggle menu visibility on checkbox change
  menuToggle.addEventListener('change', () => {
    if (menuToggle.checked) {
      navLinks.style.display = 'flex';
    } else {
      navLinks.style.display = 'none';
    }
  });

  // Hide menu when a nav link is clicked
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.checked = false;
      navLinks.style.display = 'none';
    });
  });
});