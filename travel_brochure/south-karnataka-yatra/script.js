document.addEventListener('DOMContentLoaded', () => {
    // 1. Sticky Header Blur Effect
    const navbar = document.querySelector('.site-header');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // 2. IntersectionObserver for Scroll Animations
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedElements.forEach(el => scrollObserver.observe(el));

    // 3. Detailed Itinerary Modal Controls
    const modal = document.getElementById('itinerary-modal');
    const openModalBtns = document.querySelectorAll('.js-open-itinerary-modal');
    const closeModalBtns = document.querySelectorAll('.js-close-modal');

    function openModal() {
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeModal() {
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    openModalBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            openModal();
        });
    });

    closeModalBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            closeModal();
        });
    });

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                closeModal();
            }
        });
    }

    // 4. Modal Tab Switcher Controls (Day 1 - Day 4)
    const tabBtns = document.querySelectorAll('.modal-tab-btn');
    const tabPanes = document.querySelectorAll('.modal-tab-pane');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.getAttribute('data-tab');

            // Remove active class from all buttons & panes
            tabBtns.forEach(b => b.classList.remove('active'));
            tabPanes.forEach(p => p.classList.remove('active'));

            // Set active class on clicked button and matching pane
            btn.classList.add('active');
            const activePane = document.getElementById(targetTab);
            if (activePane) {
                activePane.classList.add('active');
            }
        });
    });

    // 5. Download Brochure Handler (Guaranteed Download across file:// and http://)
    const downloadBtns = document.querySelectorAll('.js-download-brochure');
    const toast = document.getElementById('toast-notification');

    downloadBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Show Toast Notification
            if (toast) {
                toast.classList.add('show');
                setTimeout(() => {
                    toast.classList.remove('show');
                }, 4000);
            }

            const pdfPath = 'south-karnataka-yatra/images/Detailed_Itinerary.pdf';
            const pdfName = 'Detailed_Itinerary.pdf';

            // Explicit trigger for local file:// protocol or standard links
            if (window.location.protocol === 'file:') {
                e.preventDefault();
                const tempLink = document.createElement('a');
                tempLink.href = pdfPath;
                tempLink.download = pdfName;
                tempLink.target = '_blank';
                document.body.appendChild(tempLink);
                tempLink.click();
                document.body.removeChild(tempLink);
            }
        });
    });

    // 7. Interactive 360° Edge-to-Edge Panoramic Image Panning (Zero Gap Guarantee)
    const panoramaCards = document.querySelectorAll('.dest-panorama-card');
    panoramaCards.forEach(card => {
        const img = card.querySelector('.dest-panorama-img');
        if (!img) return;

        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const percentX = Math.max(0, Math.min(1, mouseX / rect.width)); // 0 to 1
            
            // Pan image edge-to-edge from 0% to -37.5% across 160% wide canvas
            const translatePercent = -(percentX * 37.5);

            img.style.animation = 'none';
            img.style.transform = `translateX(${translatePercent.toFixed(2)}%) scale(1.12)`;
        });

        card.addEventListener('mouseleave', () => {
            img.style.transform = '';
            img.style.animation = ''; // Resume smooth automatic pan loop
        });
    });
});

