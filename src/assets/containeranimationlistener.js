const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // Add class when element appears on screen
            entry.target.classList.add('show');

            // Optional: Stop watching if you only want it to animate once
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.3 // Triggers when 10% of the element is visible
});

// Target all elements you want to animate
const targetElements = document.querySelectorAll('.basic-container');
targetElements.forEach((el) => observer.observe(el));