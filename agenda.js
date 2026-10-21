// Données de l'agenda
const eventsData = [
  {
    id: "evt-1",
    title: "Venez en Rose!",
    category: "mixte",
    dateStr: "2026-10-16",
    dateLabel: "16 OCT",
    day: "Vendredi",
    time: "La journée!",
    location: "Lycée St Genes",
    desc: "Venez tous habillés en rose pour Octobre Rose."
  }
];

function renderAgendaSection() {
  const container = document.getElementById('page-agenda');
  if (!container) return;

  container.innerHTML = `
    <div class="border-b border-slate-200 pb-4 flex flex-col md:flex-row md:justify-between md:items-end gap-4">
        <div>
            <h2 class="text-2xl font-serif font-bold text-navy-900">Agenda des Événements</h2>
            <p class="text-xs sm:text-sm text-slate-500">Calendrier des activités proposé par le BDE.</p>
        </div>
        <div class="flex flex-wrap gap-2">
            <button onclick="filterEvents('all', this)" class="agenda-filter-btn border border-navy-900 bg-navy-900 text-white px-3.5 py-1.5 rounded text-xs font-semibold transition">Tous</button>
            <button onclick="filterEvents('mixte', this)" class="agenda-filter-btn border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 px-3.5 py-1.5 rounded text-xs font-semibold transition">Pro & Général</button>
            <button onclick="filterEvents('general', this)" class="agenda-filter-btn border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 px-3.5 py-1.5 rounded text-xs font-semibold transition">Général</button>
            <button onclick="filterEvents('pro', this)" class="agenda-filter-btn border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 px-3.5 py-1.5 rounded text-xs font-semibold transition">Professionnel</button>
        </div>
    </div>

    <div class="space-y-4" id="events-list">
        ${eventsData.map(evt => {
          // Badge Jaune par défaut pour Général
          let badgeClass = 'bg-amber-400 text-amber-950 border-amber-500/30';
          let badgeText = 'Général';

          // Badge Rose pour Professionnel
          if (evt.category === 'pro') {
            badgeClass = 'bg-pink-500 text-white border-pink-600/30';
            badgeText = 'Pro';
          } 
          // Badge Bleu vif pour Pro & Général (Mixte)
          else if (evt.category === 'mixte') {
            badgeClass = 'bg-blue-600 text-white border-blue-700/30';
            badgeText = 'Pro & Général';
          }

          return `
            <div class="event-item bg-white rounded-lg p-5 border border-slate-200 shadow-sm hover:border-slate-300 transition flex flex-col md:flex-row gap-5 items-start md:items-center"
                data-category="${evt.category}" 
                data-title="${evt.title}"
                data-date="${evt.dateStr}" 
                data-date-label="${evt.dateLabel}"
                data-day="${evt.day}"
                data-time="${evt.time}"
                data-location="${evt.location}"
                data-desc="${evt.desc}">
                
                <div class="bg-blue-50 border border-blue-200 rounded p-3 text-center min-w-[110px] w-full md:w-auto">
                    <span class="block text-2xl font-serif font-bold text-blue-900">${evt.dateLabel}</span>
                    <span class="block text-[11px] uppercase font-semibold text-blue-700">${evt.day}</span>
                </div>
                
                <div class="flex-grow space-y-1.5">
                    <div class="flex items-center gap-2">
                        <span class="font-bold border text-[10px] px-2 py-0.5 rounded uppercase ${badgeClass}">${badgeText}</span>
                        <span class="text-xs text-slate-400"><i class="fa-regular fa-clock mr-1"></i>${evt.time}</span>
                    </div>
                    <h3 class="text-lg font-serif font-bold text-navy-900">${evt.title}</h3>
                    <p class="text-xs text-slate-600 line-clamp-2">${evt.desc}</p>
                </div>
                
                <div class="min-w-[150px] w-full md:w-auto">
                    <button onclick="openEventFromCard(this)" class="w-full bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded text-xs font-medium transition text-center">
                        Détails & Infos
                    </button>
                </div>
            </div>
          `;
        }).join('')}
    </div>
  `;
}

function filterEvents(category, btnElement) {
  document.querySelectorAll('.agenda-filter-btn').forEach(btn => {
    btn.className = "agenda-filter-btn border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 px-3.5 py-1.5 rounded text-xs font-semibold transition";
  });
  btnElement.className = "agenda-filter-btn border border-navy-900 bg-navy-900 text-white px-3.5 py-1.5 rounded text-xs font-semibold transition";

  document.querySelectorAll('.event-item').forEach(item => {
    const itemCat = item.getAttribute('data-category');
    item.style.display = (category === 'all' || itemCat === category) ? 'flex' : 'none';
  });
}