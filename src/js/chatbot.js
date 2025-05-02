 // Fonctionnalités du chatbot
 const chatbotBouton = document.getElementById('chatbot-bouton');
 const chatbotFenetre = document.getElementById('chatbot-fenetre');
 const chatbotFermer = document.getElementById('chatbot-fermer');
 const chatbotMessages = document.getElementById('chatbot-messages');
 const chatbotEntree = document.getElementById('chatbot-entree');
 const chatbotEnvoyer = document.getElementById('chatbot-envoyer');
 
 // Ouvrir/Fermer le chatbot
 if (chatbotBouton && chatbotFenetre && chatbotFermer) {
     chatbotBouton.addEventListener('click', function() {
         chatbotFenetre.style.display = 'flex';
         chatbotEntree.focus();
     });
     
     chatbotFermer.addEventListener('click', function() {
         chatbotFenetre.style.display = 'none';
     });
 }
 
 // Fonctionnalité d'envoi de message dans le chatbot
 if (chatbotEnvoyer && chatbotEntree && chatbotMessages) {
     const envoyerMessage = function() {
         const texteMessage = chatbotEntree.value.trim();
         if (texteMessage) {
             // Ajouter le message de l'utilisateur
             ajouterMessage(texteMessage, 'utilisateur');
             chatbotEntree.value = '';
             
             // Simuler une réponse de l'IA après un court délai (pour être remplacé par une API réelle)
             afficherChargement();
             
             // Dans une application réelle, vous feriez un appel API ici
             setTimeout(function() {
                 repondreViaIA(texteMessage);
             }, 1000);
         }
     };
     
     chatbotEnvoyer.addEventListener('click', envoyerMessage);
     
     chatbotEntree.addEventListener('keypress', function(e) {
         if (e.key === 'Enter') {
             envoyerMessage();
         }
     });
 }
 
 // Fonction pour ajouter un message au chatbot
 function ajouterMessage(texte, type) {
     const messageElement = document.createElement('div');
     messageElement.classList.add('message');
     messageElement.classList.add(type === 'utilisateur' ? 'message-utilisateur' : 'message-assistant');
     messageElement.textContent = texte;
     chatbotMessages.appendChild(messageElement);
     chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
 }
 
 // Fonction pour afficher un indicateur de chargement
 function afficherChargement() {
     const chargementElement = document.createElement('div');
     chargementElement.classList.add('message', 'message-assistant', 'chargement');
     chargementElement.textContent = 'Réflexion en cours...';
     chargementElement.id = 'chargement-message';
     chatbotMessages.appendChild(chargementElement);
     chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
 }
 
 // Fonction pour enlever l'indicateur de chargement
 function retirerChargement() {
     const chargementElement = document.getElementById('chargement-message');
     if (chargementElement) {
         chargementElement.remove();
     }
 }
 
 // Fonction qui simule les réponses de l'IA (à remplacer par un appel API réel)
 function repondreViaIA(messageUtilisateur) {
     // Retirer l'indicateur de chargement
     retirerChargement();
     
     // Logique simple de réponse (à remplacer par un appel à une API d'IA)
     let reponse = "";
     const messageLower = messageUtilisateur.toLowerCase();
     
     // Réponses prédéfinies basiques
     if (messageLower.includes('bonjour') || messageLower.includes('salut') || messageLower.includes('hello')) {
         reponse = "Bonjour ! Comment puis-je vous aider aujourd'hui ?";
     } else if (messageLower.includes('au revoir') || messageLower.includes('bye')) {
         reponse = "Au revoir ! N'hésitez pas à revenir si vous avez d'autres questions.";
     } else if (messageLower.includes('merci')) {
         reponse = "De rien ! Je suis là pour vous aider.";
     } else if (messageLower.includes('projet') || messageLower.includes('travail')) {
         reponse = "Je travaille sur divers projets web, de la conception d'interfaces utilisateur aux applications complètes. Avez-vous un projet particulier en tête ?";
     } else if (messageLower.includes('contact') || messageLower.includes('email')) {
         reponse = "Vous pouvez me contacter via le formulaire de contact disponible sur cette page, ou directement à jean.dupont@example.com";
     } else if (messageLower.includes('compétence') || messageLower.includes('technologies') || messageLower.includes('stack')) {
         reponse = "Je maîtrise HTML, CSS, JavaScript, React, Node.js, et plusieurs frameworks et outils de développement web modernes.";
     } else if (messageLower.includes('disponibilité') || messageLower.includes('disponible')) {
         reponse = "Je suis actuellement disponible pour de nouveaux projets à partir du mois prochain. Souhaitez-vous discuter d'une collaboration ?";
     } else if (messageLower.includes('tarif') || messageLower.includes('prix') || messageLower.includes('coût')) {
         reponse = "Mes tarifs varient selon la complexité et la durée du projet. Je vous propose de discuter de vos besoins spécifiques pour vous fournir un devis personnalisé.";
     } else if (messageLower.includes('expérience') || messageLower.includes('carrière')) {
         reponse = "J'ai plus de 5 ans d'expérience en développement web, ayant travaillé avec diverses entreprises de la startup à la grande entreprise, sur des projets variés.";
     } else {
         reponse = "Merci pour votre message. Pour une réponse plus précise, n'hésitez pas à utiliser le formulaire de contact ou à m'envoyer un email directement. Je vous répondrai dans les plus brefs délais.";
     }
     
     // Ajouter la réponse
     ajouterMessage(reponse, 'assistant');
 }
 
 // Configurer l'intégration avec une vraie API d'IA (commenté car nécessite une clé API)
 // Cette fonction remplacerait repondreViaIA ci-dessus dans une implémentation réelle
 
 /*
 async function envoyerMessageAPI(messageUtilisateur) {
     try {
         const reponse = await fetch('https://api.openai.com/v1/chat/completions', {
             method: 'POST',
             headers: {
                 'Content-Type': 'application/json',
                 'Authorization': 'Bearer VOTRE_CLE_API_ICI'
             },
             body: JSON.stringify({
                 model: "gpt-3.5-turbo",
                 messages: [
                     {
                         role: "system",
                         content: "Vous êtes un assistant virtuel sur le site portfolio de Jean Dupont, développeur web. Soyez amical et utile."
                     },
                     {
                         role: "user",
                         content: messageUtilisateur
                     }
                 ],
                 max_tokens: 150
             })
         });
         
         const data = await reponse.json();
         retirerChargement();
         
         if (data.choices && data.choices[0] && data.choices[0].message) {
             ajouterMessage(data.choices[0].message.content, 'assistant');
         } else {
             ajouterMessage("Désolé, je n'ai pas pu traiter votre demande. Veuillez réessayer.", 'assistant');
         }
     } catch (erreur) {
         console.error('Erreur lors de l\'appel à l\'API:', erreur);
         retirerChargement();
         ajouterMessage("Désolé, une erreur s'est produite. Veuillez réessayer plus tard.", 'assistant');
     }
 }
 */
