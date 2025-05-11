document.addEventListener('DOMContentLoaded', () => {
    // Navbar Scroll Effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        navbar.classList.toggle('scrolled', window.scrollY > 20);

        // Active Section Highlight
        const sections = ['home', 'about', 'portfolio', 'contact'];
        let activeSection = 'home';
        for (const section of sections) {
            const element = document.getElementById(section);
            if (element) {
                const rect = element.getBoundingClientRect();
                if (rect.top <= 550 && rect.bottom >= 550) {
                    activeSection = section;
                }
            }
        }
        document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(link => {
            link.classList.toggle('active', link.getAttribute('href').substring(1) === activeSection);
        });
    });

    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('open');
            document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : 'auto';
        });
    }

    // Smooth Scroll for Navbar Links
    document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
                mobileMenu.classList.remove('open');
                document.body.style.overflow = 'auto';
            }
        });
    });
});