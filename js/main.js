const navbar = document.getElementById('navbar');
const hero   = document.querySelector('.hero');
const hamburger = document.querySelector('.nav-hamburger');

// Navbar: transparent on hero, solid white after scroll
const observer = new IntersectionObserver(
  ([entry]) => navbar.classList.toggle('scrolled', !entry.isIntersecting),
  { threshold: 0.05 }
);
if (hero) observer.observe(hero);

// Mobile hamburger
if (hamburger) {
  hamburger.addEventListener('click', () => {
    const open = navbar.classList.toggle('mobile-open');
    hamburger.setAttribute('aria-expanded', open);
    // ensure nav is solid when menu is open
    if (open) navbar.classList.add('scrolled');
  });

  // close menu on link click
  document.querySelectorAll('.nav-links a, .nav-cta').forEach(link => {
    link.addEventListener('click', () => {
      navbar.classList.remove('mobile-open');
      hamburger.setAttribute('aria-expanded', false);
    });
  });
}
