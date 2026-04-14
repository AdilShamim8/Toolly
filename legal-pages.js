(() => {
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    const backToTopButton = document.getElementById('backToTop');
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle ? themeToggle.querySelector('i') : null;

    if (sidebarToggle) {
        sidebarToggle.setAttribute('aria-controls', 'sidebar');
        sidebarToggle.setAttribute('aria-expanded', 'false');
        sidebarToggle.setAttribute('aria-label', 'Open sidebar');
    }

    function openSidebar() {
        if (!sidebar || !sidebarOverlay) return;
        sidebar.classList.add('open');
        sidebarOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        if (sidebarToggle) {
            sidebarToggle.setAttribute('aria-expanded', 'true');
            sidebarToggle.setAttribute('aria-label', 'Close sidebar');
        }
    }

    function closeSidebar() {
        if (!sidebar || !sidebarOverlay) return;
        sidebar.classList.remove('open');
        sidebarOverlay.classList.remove('active');
        document.body.style.overflow = '';
        if (sidebarToggle) {
            sidebarToggle.setAttribute('aria-expanded', 'false');
            sidebarToggle.setAttribute('aria-label', 'Open sidebar');
        }
    }

    if (sidebarToggle) sidebarToggle.addEventListener('click', openSidebar);
    if (sidebarOverlay) sidebarOverlay.addEventListener('click', closeSidebar);

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && sidebar && sidebar.classList.contains('open')) {
            event.preventDefault();
            closeSidebar();
            if (sidebarToggle) {
                sidebarToggle.focus();
            }
        }
    });

    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        });

        backToTopButton.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        if (themeIcon) {
            themeIcon.className = savedTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        }
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            document.documentElement.classList.add('theme-transitioning');
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);

            if (themeIcon) {
                themeIcon.style.transform = 'rotate(180deg)';
                setTimeout(() => {
                    themeIcon.className = newTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
                    themeIcon.style.transform = 'rotate(0deg)';
                }, 150);
            }

            setTimeout(() => {
                document.documentElement.classList.remove('theme-transitioning');
            }, 300);
        });
    }
})();
