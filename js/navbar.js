function initNavbar() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (!mobileMenuBtn || !mobileMenu) {
        console.error('Mobile menu button or menu not found after sections loaded');
        return;
    }

    console.log('Navbar elements found, initializing...');
    mobileMenuBtn.addEventListener('click', () => {
        console.log('Button clicked');
        const isOpen = mobileMenu.classList.toggle('open');
        mobileMenuBtn.setAttribute('aria-expanded', isOpen); // Line 18
        document.body.style.overflow = isOpen ? 'hidden' : 'auto';
        // Toggle icon between menu and X
        const icon = mobileMenuBtn.querySelector('i');
        icon.setAttribute('data-lucide', isOpen ? 'x' : 'menu');
        lucide.createIcons(); // Re-render Lucide icons
    });

    document.querySelectorAll('.mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = 'auto';
            const icon = mobileMenuBtn.querySelector('i');
            icon.setAttribute('data-lucide', 'menu');
            lucide.createIcons();
        });
    });
}

document.addEventListener('sectionsLoaded', () => {
    console.log('sectionsLoaded event received, initializing navbar');
    initNavbar();
});

setTimeout(() => {
    if (!document.querySelector('.mobile-menu-btn')) {
        console.warn('sectionsLoaded event not received, attempting to initialize navbar anyway');
        initNavbar();
    }
}, 5000);

console.log('navbar.js loaded, waiting for sectionsLoaded event');