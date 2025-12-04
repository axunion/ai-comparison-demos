/**
 * 銀座 雅 - MIYABI | Luxury Restaurant Website
 * JavaScript functionality
 */

document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initMobileMenu();
    initScrollAnimations();
    initReservationForm();
    initSmoothScroll();
});

/**
 * Navbar scroll effect
 */
function initNavbar() {
    const navbar = document.querySelector('.navbar');

    const handleScroll = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
}

/**
 * Mobile menu toggle
 */
function initMobileMenu() {
    const toggle = document.querySelector('.nav-toggle');
    const menu = document.querySelector('.nav-menu');
    const links = document.querySelectorAll('.nav-menu a');

    toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
        menu.classList.toggle('active');
        document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu on link click
    links.forEach(link => {
        link.addEventListener('click', () => {
            toggle.classList.remove('active');
            menu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && menu.classList.contains('active')) {
            toggle.classList.remove('active');
            menu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

/**
 * Scroll animations using Intersection Observer
 */
function initScrollAnimations() {
    // Add fade-in class to animatable elements
    const animatableElements = document.querySelectorAll(
        '.section-header, .concept-content, .course-card, ' +
        '.chef-content, .gallery-item, .reservation-content, ' +
        '.access-content, .info-block'
    );

    animatableElements.forEach(el => {
        el.classList.add('fade-in');
    });

    // Create observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe elements
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

/**
 * Reservation form handling
 */
function initReservationForm() {
    const form = document.getElementById('reservationForm');
    if (!form) return;

    // Set minimum date to today
    const dateInput = document.getElementById('date');
    if (dateInput) {
        const today = new Date();
        const minDate = today.toISOString().split('T')[0];
        dateInput.setAttribute('min', minDate);
    }

    // Form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        // Validate
        if (!validateForm(data)) {
            return;
        }

        // Show success message (in a real app, this would send to a server)
        showReservationConfirmation(data);
    });
}

/**
 * Form validation
 */
function validateForm(data) {
    const errors = [];

    if (!data.name || data.name.trim() === '') {
        errors.push('お名前を入力してください');
    }

    if (!data.email || !isValidEmail(data.email)) {
        errors.push('有効なメールアドレスを入力してください');
    }

    if (!data.phone || !isValidPhone(data.phone)) {
        errors.push('有効な電話番号を入力してください');
    }

    if (!data.date) {
        errors.push('ご希望日を選択してください');
    }

    if (!data.guests) {
        errors.push('人数を選択してください');
    }

    if (errors.length > 0) {
        alert(errors.join('\n'));
        return false;
    }

    return true;
}

/**
 * Email validation
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Phone validation (Japanese format)
 */
function isValidPhone(phone) {
    const phoneRegex = /^[\d\-+()]{10,}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
}

/**
 * Show reservation confirmation
 */
function showReservationConfirmation(data) {
    const courseNames = {
        'tsuki': '懐石コース「月」',
        'hana': '特選懐石「花」',
        'miyabi': '料理長おまかせ「雅」'
    };

    const timeNames = {
        'lunch': '昼の部（12:00〜）',
        'dinner': '夜の部（18:00〜）'
    };

    const message = `
ご予約リクエストを承りました。

【ご予約内容】
お名前: ${data.name}
メールアドレス: ${data.email}
電話番号: ${data.phone}
ご希望日: ${data.date}
お時間: ${timeNames[data.time] || data.time}
人数: ${data.guests}名様
コース: ${courseNames[data.course] || data.course}
${data.requests ? `\nご要望: ${data.requests}` : ''}

確認のお電話をさせていただく場合がございます。
しばらくお待ちくださいませ。
    `.trim();

    alert(message);

    // Reset form
    document.getElementById('reservationForm').reset();
}

/**
 * Smooth scroll for anchor links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');

            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Utility: Debounce function
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Parallax effect for hero section (optional enhancement)
 */
function initParallax() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    window.addEventListener('scroll', debounce(() => {
        const scrolled = window.scrollY;
        if (scrolled < window.innerHeight) {
            hero.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
    }, 10));
}
