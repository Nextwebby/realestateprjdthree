function animateOnScroll(selector, options = {}, cl) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add(cl);
        if (options.once) {
          observer.unobserve(entry.target);
        }
      } else if (!options.once) {
        entry.target.classList.remove(cl);
      }
    });
  }, { threshold: options.threshold });

  document.querySelectorAll(selector).forEach(el => observer.observe(el));
}

AOS.init({
    once: true,
    startEvent: 'load',
    offset: 50
});

document.addEventListener('DOMContentLoaded', () => {
    const building = document.querySelector('.building');
    const security = document.querySelector('.security');

    if (building && security) {
        building.addEventListener('mouseenter', () => {
            security.classList.remove('bs-hover');
            security.children[0].children[0].classList.remove('bs-hover-i');
            security.children[2].classList.remove('bs-hover-i');
            building.classList.add('bs-hover');
            building.children[0].children[0].classList.add('bs-hover-i');
            building.children[2].classList.add('bs-hover-i');
        });
        building.addEventListener('mouseleave', () => {
            building.classList.remove('bs-hover');
            building.children[0].children[0].classList.remove('bs-hover-i');
            building.children[2].classList.remove('bs-hover-i');
            security.classList.add('bs-hover');
            security.children[0].children[0].classList.add('bs-hover-i');
            security.children[2].classList.add('bs-hover-i');
        });
    }

    document.querySelectorAll('.slide-track img').forEach(img => {
    const originalSrc = img.src;
    const hoverSrc = img.getAttribute('data-hover');
    
    if (hoverSrc) {
        img.addEventListener('mouseenter', () => {
        img.src = hoverSrc;
        });
        img.addEventListener('mouseleave', () => {
        img.src = originalSrc;
        });
    }
    });

    animateOnScroll('.heading .display-2', { threshold: 0.3, once: true}, 'show');
    animateOnScroll('.contact-us .display-4', { threshold: 0.3, once: true}, 'show');
    animateOnScroll('.contact-form .let', { threshold: 0.3, once: true}, 'line');
    animateOnScroll('.about-head-con .display-2', { threshold: 0.3, once: true}, 'show');
    animateOnScroll('.service-head .display-2', { threshold: 0.3, once: true}, 'show');
    animateOnScroll('.contact-head-con .display-2', { threshold: 0.3, once: true}, 'show');
    animateOnScroll('.contact-form .let', { threshold: 0.3, once: true}, 'animate');
    animateOnScroll('.partner .slide-track', { threshold: 0.3, once: true}, 'scroll-animate');
});