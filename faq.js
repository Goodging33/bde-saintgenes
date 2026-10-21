// Données de la FAQ
const faqData = [
  {
    icon: "fa-circle-question",
    question: "Qu'est-ce que le BDE ?",
    answer: "Le Bureau des Élèves (BDE) est une association de lycéens pour organiser des événements au lycée général et professionnel."
  },
  {
    icon: "fa-user-plus",
    question: "Comment rejoindre l'équipe du BDE ?",
    answer: 'Les recrutements ont lieu en <strong class="text-slate-800">début d\'année scolaire</strong>. Tu peux contacter Judith pour le Général, et Florentin pour le Professionnel ou nous envoyer un message sur nos réseaux sociaux pour faire part de ta motivation!'
  },
  {
    icon: "fa-ticket",
    question: "Comment participer aux événements ?",
    answer: "Tout le monde peut participer à un événement, il vous suffit juste de vous renseigner sur les affiches/informations à votre disposition. 📌"
  },
  {
    icon: "fa-lightbulb",
    question: "Puis-je proposer une idée d'événement ?",
    answer: "Absolument! Le BDE est à l'écoute de toutes vos propositions. N'hésite pas à venir nous rencontrer au foyer ou à nous écrire sur Instagram."
  }
];

function renderFaqSection() {
  const container = document.getElementById('page-faq');
  if (!container) return;

  container.innerHTML = `
    <div class="border-b border-slate-200 pb-4">
        <h2 class="text-2xl font-serif font-bold text-navy-900">Foire Aux Questions (FAQ)</h2>
        <p class="text-xs sm:text-sm text-slate-500">Retrouvez des réponses aux questions fréquentes sur le BDE.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        ${faqData.map(item => `
            <div class="bg-white rounded-lg p-6 border border-slate-200 shadow-sm space-y-2">
                <h3 class="font-serif font-bold text-navy-900 text-base flex items-center gap-2">
                    <i class="fa-solid ${item.icon} text-blue-600 text-sm"></i>
                    ${item.question}
                </h3>
                <p class="text-xs text-slate-600 leading-relaxed pt-1">
                    ${item.answer}
                </p>
            </div>
        `).join('')}
    </div>
  `;
}