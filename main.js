// Add these animations to your existing main.js

// Animate stats numbers
function animateStats() {
    const stats = document.querySelectorAll('.stat-number');
    stats.forEach(stat => {
        const target = parseInt(stat.innerText);
        let current = 0;
        const increment = target / 50; // Adjust for animation speed
        const timer = setInterval(() => {
            if (current < target) {
                current += increment;
                if (current > target) current = target;
                if (stat.innerText.includes('+')) {
                    stat.innerText = Math.ceil(current) + '+';
                } else if (stat.innerText.includes('%')) {
                    stat.innerText = Math.ceil(current) + '%';
                } else {
                    stat.innerText = Math.ceil(current);
                }
            } else {
                clearInterval(timer);
            }
        }, 20);
    });
}

// Animate timeline items
const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateX(0)';
        }
    });
}, {
    threshold: 0.5
});

document.querySelectorAll('.timeline-item').forEach(item => {
    item.style.opacity = 0;
    item.style.transform = item.classList.contains('left') ? 'translateX(-50px)' : 'translateX(50px)';
    item.style.transition = 'all 0.5s ease-out';
    timelineObserver.observe(item);
});

// Initialize stats animation when the stats section is visible
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateStats();
            statsObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.5
});

const statsSection = document.getElementById('stats');
if (statsSection) {
    statsObserver.observe(statsSection);
}