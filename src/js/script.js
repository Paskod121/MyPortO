  // Fonctionnalités du site
  document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling pour les liens de navigation
    const liensSmoothScroll = document.querySelectorAll('nav a');
    
    liensSmoothScroll.forEach(lien => {
        lien.addEventListener('click', function(e) {
            e.preventDefault();
            
            const cible = document.querySelector(this.getAttribute('href'));
            if (cible) {
                window.scrollTo({
                    top: cible.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Formulaire de contact
    const formulaireContact = document.querySelector('.formulaire-contact');
    const boutonEnvoyer = document.getElementById('boutonEnvoyer');
    
    if (formulaireContact && boutonEnvoyer) {
        boutonEnvoyer.addEventListener('click', function(e) {
            e.preventDefault();
            
            const nom = document.getElementById('nom').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if (nom && email && message) {
                // Ici, vous pourriez normalement envoyer les données à un serveur
                alert('Merci pour votre message ! Je vous répondrai dans les plus brefs délais.');
                formulaireContact.reset();
            } else {
                alert('Veuillez remplir tous les champs du formulaire.');
            }
        });
    }
});