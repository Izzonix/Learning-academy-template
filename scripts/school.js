const hamburger = document.getElementById('hamburger');
const closeBtn = document.getElementById('close-btn');
const navMenu = document.getElementById('nav-menu');
const header = document.getElementById('header');

hamburger.addEventListener('click', () => {
  navMenu.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  navMenu.classList.remove('active');
});

// Header scroll behavior
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > lastScroll && currentScroll > 100) {
    header.classList.add('hidden');
  } else {
    header.classList.remove('hidden');
  }
  lastScroll = currentScroll;
});

// Counter logic
const counters = [
  { id: "students", target: 1200 },
  { id: "teachers", target: 60 },
  { id: "graduates", target: 900 },
  { id: "years", target: 15 }
];

let hasAnimated = false;

function animateCounters() {
  if (hasAnimated) return;
  hasAnimated = true;

  counters.forEach(counter => {
    const element = document.getElementById(counter.id);
    let count = 0;
    const step = Math.ceil(counter.target / 100);
    const interval = setInterval(() => {
      count += step;
      if (count >= counter.target) {
        count = counter.target;
        clearInterval(interval);
      }
      element.textContent = count.toLocaleString();
    }, 30);
  });
}

// Intersection Observer for counters
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounters();
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.overview').forEach(element => observer.observe(element));

// Smooth scroll for nav links
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
    navMenu.classList.remove('active');
  });
});
