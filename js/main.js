document.addEventListener('DOMContentLoaded', async () => {
    console.log("main.js loaded and executing");

    const contentDiv = document.getElementById('content');
    if (!contentDiv) {
        console.error("Content div not found in index.html");
        return;
    }

    const sections = [
        'header.html',
        'welcome.html',
        'home.html',
        'about.html',
        'portfolio.html',
        'experience.html',
        'contact.html',
        'project-details.html',
        'footer.html',
        'certificate-modal.html'
    ];

    try {
        for (const section of sections) {
            const response = await fetch(`sections/${section}`);
            if (!response.ok) throw new Error(`Failed to load ${section}: ${response.statusText}`);
            const html = await response.text();
            contentDiv.insertAdjacentHTML('beforeend', html);
            console.log(`${section} loaded successfully`);
        }

        // Initialize Lucide icons
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
            console.log("Lucide icons initialized successfully");
        } else {
            console.error("Lucide library not loaded");
        }

        // Initialize AOS animations
        if (typeof AOS !== 'undefined') {
            AOS.init({
                duration: 1000,
                once: true
            });
            console.log("AOS initialized successfully");
        } else {
            console.error("AOS library not loaded");
        }

        // Add particles to the home section
        const homeSection = document.getElementById('home');
        if (homeSection) {
            for (let i = 0; i < 5; i++) {
                const particle = document.createElement('div');
                particle.classList.add('particle');
                homeSection.appendChild(particle);
            }
            console.log("Particles added to home section");
        } else {
            console.error('Home section not found');
        }

        // Dynamic Developer Role Text Animation
        const roles = [
            "Frontend Developer",
            "AI/ML Developer",
            "Full Stack Developer",
            "NLP Specialist",
            "Android Developer",
            "PHP Developer",
            "ML Engineer"
        ];
        let currentIndex = 0;
        const roleElement = document.getElementById('developer-role');

        if (roleElement) {
            setInterval(() => {
                roleElement.style.opacity = '0';
                setTimeout(() => {
                    currentIndex = (currentIndex + 1) % roles.length;
                    roleElement.textContent = roles[currentIndex];
                    roleElement.style.opacity = '1';
                }, 100); // Delay for fade-out effect
            }, 2000); // Change every 2 seconds
            console.log("Developer role animation initialized");
        } else {
            console.error('Developer role element not found');
        }

        // Stats Counter Animation
        const statNumbers = document.querySelectorAll('.stat-number');
        const animateStats = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = parseInt(entry.target.getAttribute('data-target'));
                    let count = 0;
                    const increment = target / 50; // Adjust speed of counter
                    const updateCount = () => {
                        if (count < target) {
                            count += increment;
                            entry.target.textContent = Math.ceil(count);
                            setTimeout(updateCount, 50);
                        } else {
                            entry.target.textContent = target+' +';
                        }
                    };
                    updateCount();
                    observer.unobserve(entry.target);
                }
            });
        };

        const observer = new IntersectionObserver(animateStats, {
            threshold: 0.5
        });

        statNumbers.forEach(stat => {
            observer.observe(stat);
        });
        console.log("Stats counter animation initialized");

        // Hide welcome screen after 2 seconds
        setTimeout(() => {
            const welcomeScreen = document.getElementById('welcome-screen');
            if (welcomeScreen) {
                welcomeScreen.style.display = 'none';
                console.log("Welcome screen hidden after 2 seconds");
            } else {
                console.warn("Welcome screen element not found");
            }
        }, 2000);

        // Dispatch custom event to signal that sections are loaded
        const event = new Event('sectionsLoaded');
        document.dispatchEvent(event);
        console.log("All sections loaded, dispatched sectionsLoaded event");
    } catch (error) {
        console.error('Error loading sections:', error);
        contentDiv.innerHTML = '<p>Error loading content. Please try again later.</p>';
    }
});