/**
 * animations.js - Gestion des animations scroll et interactivité
 * Women in Climate Change - Animations et SEO
 */

/**
 * Intersection Observer pour animer les éléments au scroll
 */
function initScrollAnimations() {
  const options = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observerCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.animation = `${entry.target.dataset.animation || 'fadeInUp'} var(--transition-slow) ease-out forwards`;
        
        if (entry.target.dataset.delay) {
          entry.target.style.animationDelay = `${entry.target.dataset.delay}`;
        }
        
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, options);

  // Observer tous les éléments avec fade-in-on-scroll
  document.querySelectorAll('.fade-in-on-scroll').forEach((element) => {
    element.style.opacity = '0';
    observer.observe(element);
  });
}

/**
 * Animation de compteur pour les statistiques
 */
function initCounterAnimation() {
  const observerOptions = {
    threshold: 0.5
  };

  const counterCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
        const counters = entry.target.querySelectorAll('.counter');
        counters.forEach((counter) => {
          animateCounter(counter);
        });
        entry.target.classList.add('counted');
        counterObserver.unobserve(entry.target);
      }
    });
  };

  const counterObserver = new IntersectionObserver(counterCallback, observerOptions);

  // Observer la section des statistiques
  const statSection = document.querySelector('.section:has(.stat-card)');
  if (statSection) {
    counterObserver.observe(statSection);
  }
}

/**
 * Animer les nombres (0 à target)
 */
function animateCounter(element) {
  const target = parseInt(element.getAttribute('data-target'), 10);
  const duration = 2000;
  const start = 0;
  const increment = target / (duration / 50);

  let current = start;

  const updateCounter = () => {
    current += increment;
    if (current < target) {
      element.textContent = Math.floor(current);
      setTimeout(updateCounter, 50);
    } else {
      element.textContent = target;
    }
  };

  updateCounter();
}

/**
 * Gestion du banneau de cookies
 */
function initCookieBanner() {
  const cookieBanner = document.getElementById('cookie-banner');
  const cookieAccept = document.getElementById('cookie-accept');

  if (!cookieBanner) return;

  // Vérifier si l'utilisateur a déjà accepté
  const cookieConsent = localStorage.getItem('wicc_cookie_consent');
  
  if (!cookieConsent) {
    cookieBanner.classList.add('show');
  }

  if (cookieAccept) {
    cookieAccept.addEventListener('click', () => {
      localStorage.setItem('wicc_cookie_consent', 'accepted');
      cookieBanner.classList.remove('show');
      cookieBanner.style.animation = `slideOutDown var(--transition-base) ease-out forwards`;
      setTimeout(() => {
        cookieBanner.style.display = 'none';
      }, 250);
    });
  }

  // Fermer le banneau après 10 secondes (sans action)
  if (!cookieConsent) {
    setTimeout(() => {
      if (cookieBanner.classList.contains('show')) {
        localStorage.setItem('wicc_cookie_consent', 'dismissed');
      }
    }, 10000);
  }
}

/**
 * Initialiser toutes les animations
 */
function initAnimations() {
  initScrollAnimations();
  initCounterAnimation();
  initCookieBanner();
}

// Lancer les animations quand le DOM est prêt
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAnimations);
} else {
  initAnimations();
}

// Réinitialiser les animations après un changement de page (navigation dynamique)
window.addEventListener('popstate', () => {
  setTimeout(initAnimations, 100);
});
