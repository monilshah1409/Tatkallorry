document.addEventListener('DOMContentLoaded', () => {
    // --- Smooth Scrolling for Navigation Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default jump behavior

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Scroll to the target element with smooth behavior
                window.scrollTo({
                    top: targetElement.offsetTop - (document.querySelector('.main-header').offsetHeight), // Adjust for sticky header
                    behavior: 'smooth'
                });

                // Optional: Close mobile menu after clicking
                const navLinks = document.querySelector('.nav-links');
                const navToggle = document.querySelector('.nav-toggle');
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    navToggle.classList.remove('open');
                }
            }
        });
    });

    // --- Mobile Navigation Toggle ---
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active'); // Toggles the 'active' class for showing/hiding menu
            navToggle.classList.toggle('open');  // Toggles 'open' class for hamburger animation
        });
    }

    // --- FAQ Accordion ---
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling; // The div containing the answer
            const wasActive = question.classList.contains('active');

            // Close all other open answers (optional, but good UX)
            faqQuestions.forEach(item => {
                item.classList.remove('active');
                item.nextElementSibling.style.maxHeight = null; // Collapse
            });

            // Toggle the clicked answer
            if (!wasActive) {
                question.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + "px"; // Expand
            } else {
                question.classList.remove('active');
                answer.style.maxHeight = null; // Collapse
            }
        });
    });
});