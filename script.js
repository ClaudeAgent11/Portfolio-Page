document.addEventListener('DOMContentLoaded', () => {
  // ============================================================
  // 1. Scroll-based fade-in animations (IntersectionObserver)
  // ============================================================
  const fadeObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const el = entry.target;

        if (el.classList.contains('stagger-children')) {
          // Reveal each child sequentially with 100ms gap
          Array.from(el.children).forEach((child, i) => {
            setTimeout(() => child.classList.add('visible'), i * 100);
          });
        } else {
          el.classList.add('visible');
        }

        observer.unobserve(el); // fire once
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll('.fade-in, .stagger-children').forEach((el) => fadeObserver.observe(el));

  // ============================================================
  // 2. Navigation scroll behavior — add .nav-scrolled on scroll
  // ============================================================
  const nav = document.querySelector('nav');
  let navScrolled = false;

  const handleNavScroll = () => {
    const shouldBeScrolled = window.scrollY > 80;
    if (shouldBeScrolled !== navScrolled) {
      navScrolled = shouldBeScrolled;
      nav && nav.classList.toggle('nav-scrolled', navScrolled);
    }
  };

  window.addEventListener('scroll', handleNavScroll, { passive: true });

  // ============================================================
  // 3. Smooth scroll for anchor links (offset by nav height)
  // ============================================================
  const NAV_OFFSET = 72;

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();

      const top =
        target.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;

      window.scrollTo({ top, behavior: 'smooth' });

      // Close mobile menu after clicking a nav link
      nav && nav.classList.remove('nav-open');
    });
  });

  // ============================================================
  // 4. Mobile menu toggle
  // ============================================================
  const navToggle = document.querySelector('.nav-toggle');

  if (navToggle && nav) {
    navToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      nav.classList.toggle('nav-open');
      navToggle.setAttribute('aria-expanded', nav.classList.contains('nav-open'));
    });

    // Close when clicking outside the nav
    document.addEventListener('click', (e) => {
      if (nav.classList.contains('nav-open') && !nav.contains(e.target)) {
        nav.classList.remove('nav-open');
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') nav.classList.remove('nav-open');
    });
  }

  // ============================================================
  // 5. Metric counter animation
  // ============================================================
  const easeOutExpo = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));
  const COUNTER_DURATION = 2000; // ms

  const counterObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const el = entry.target;
        const target = parseFloat(el.dataset.target) || 0;
        const prefix = el.dataset.prefix || '';
        const suffix = el.dataset.suffix || '';
        const isFloat = String(target).includes('.');
        const startTime = performance.now();

        const tick = (now) => {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / COUNTER_DURATION, 1);
          const value = easeOutExpo(progress) * target;

          el.textContent = `${prefix}${isFloat ? value.toFixed(1) : Math.round(value)}${suffix}`;

          if (progress < 1) {
            requestAnimationFrame(tick);
          }
        };

        requestAnimationFrame(tick);
        observer.unobserve(el);
      });
    },
    { threshold: 0.15 }
  );

  document
    .querySelectorAll('.metric-number[data-target]')
    .forEach((el) => counterObserver.observe(el));

  // ============================================================
  // 6. Active nav link highlighting on scroll
  // ============================================================
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('a[href^="#"]');

  const highlightActiveLink = () => {
    const scrollPos = window.scrollY + NAV_OFFSET + 1;

    let currentId = '';
    sections.forEach((section) => {
      if (section.offsetTop <= scrollPos) {
        currentId = section.id;
      }
    });

    navLinks.forEach((link) => {
      link.classList.toggle(
        'active',
        link.getAttribute('href') === `#${currentId}`
      );
    });
  };

  window.addEventListener('scroll', highlightActiveLink, { passive: true });

  // ============================================================
  // 7. Case study expand / collapse
  // ============================================================
  document.querySelectorAll('.case-study-toggle').forEach((btn) => {
    btn.addEventListener('click', () => {
      const detail =
        btn.closest('.case-study')?.querySelector('.case-study-detail') ||
        btn.nextElementSibling;

      if (!detail) return;

      const isOpen = detail.classList.contains('open');

      if (isOpen) {
        // Collapse: animate height to 0
        detail.style.height = `${detail.scrollHeight}px`;
        requestAnimationFrame(() => {
          detail.style.height = '0';
        });
        detail.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      } else {
        // Expand: animate height from 0 to scrollHeight
        detail.classList.add('open');
        detail.style.height = '0';
        requestAnimationFrame(() => {
          detail.style.height = `${detail.scrollHeight}px`;
          // Clear inline height after transition so content can reflow
          const onEnd = () => {
            detail.style.height = '';
            detail.removeEventListener('transitionend', onEnd);
          };
          detail.addEventListener('transitionend', onEnd);
        });
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
});
