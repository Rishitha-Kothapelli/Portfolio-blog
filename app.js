document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Smooth Scroll Handling ---
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    
    smoothScrollLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // --- 2. Form Submission & Feedback Handling ---
    const contactForm = document.getElementById('contactForm');
    const feedback = document.getElementById('formFeedback');

    if (contactForm && feedback) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevents fallback page reload

            // Leverage FormData object pattern
            const formData = new FormData(contactForm);
            const name = formData.get('name'); 

            // Display feedback banner smoothly
            feedback.textContent = `Thank you, ${name}! Your message has been sent successfully.`;
            feedback.className = "success-msg";
            feedback.classList.remove('hidden');

            // Clear inputs
            contactForm.reset();

            // Clear notice message after 5 seconds
            setTimeout(() => {
                feedback.classList.add('hidden');
            }, 5000);
        });
    }
});