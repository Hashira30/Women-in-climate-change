// Gestion de la navigation mobile
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.navbar-menu');

  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      navMenu.classList.toggle('active', !isExpanded);
      menuToggle.setAttribute('aria-expanded', String(!isExpanded));
      menuToggle.setAttribute('aria-label', isExpanded ? 'Ouvrir le menu' : 'Fermer le menu');
    });

    // Fermer le menu quand un lien est cliqué
    document.querySelectorAll('.navbar-menu a').forEach(link => {
      link.addEventListener('click', function() {
        navMenu.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Ouvrir le menu');
      });
    });
  }

  // Marquer le lien actif selon la page
  updateActiveLink();
});

function updateActiveLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar-menu a').forEach(link => {
    const href = link.getAttribute('href').split('/').pop();
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Fonction utile pour les formulaires
function handleFormSubmit(event) {
  event.preventDefault();
  const form = event.target;
  
  // Valider le formulaire
  if (!form.checkValidity()) {
    alert('Veuillez remplir tous les champs requis');
    return false;
  }
  
  // Afficher un message de succès
  alert('Merci, votre message a été envoyé avec succès !');
  form.reset();
  
  return false;
}
