const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navIcon = navToggle.querySelector('i');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    navToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    navIcon.classList.toggle('fa-bars', !isOpen);
    navIcon.classList.toggle('fa-xmark', isOpen);
  });

  document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      navToggle.setAttribute('aria-label', 'Open navigation');
      navIcon.classList.add('fa-bars');
      navIcon.classList.remove('fa-xmark');
    });
  });
}

window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;
  if (window.scrollY > 20) {
    navbar.classList.add('visible');
  } else {
    navbar.classList.remove('visible');
  }
});

