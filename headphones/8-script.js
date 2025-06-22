*// document.addEventListener('DOMContentLoaded', function() {
            const hamburger = document.querySelector('.hamburger');
            const navLinks = document.querySelector('.nav-links');
            
            hamburger.addEventListener('click', function() {
                navLinks.classList.toggle('active');
                
                // Change hamburger icon to X when menu is open
                if (navLinks.classList.contains('active')) {
                    hamburger.innerHTML = '<i class="fas fa-times"></i>';
                } else {
                    hamburger.innerHTML = '<i class="fas fa-bars"></i>';
                }
            });
            
            // Close menu when clicking on a link
            const navItems = document.querySelectorAll('.nav-links a');
            navItems.forEach(item => {
                item.addEventListener('click', function() {
                    navLinks.classList.remove('active');
                    hamburger.innerHTML = '<i class="fas fa-bars"></i>';
                });
            });
        }); //*
