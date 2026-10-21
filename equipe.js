// Données de l'équipe BDE
const membersData = [
  // Direction
  { name: "DOREILLAC Judith", role: "Présidente du BDE", level: "Terminale Gén.", filiere: "general", isLeader: true, title: "Présidente", img: "https://st3.depositphotos.com/3581215/18899/v/450/depositphotos_188994514-stock-illustration-vector-illustration-male-silhouette-profile.jpg" },
  { name: "PETIT Florentin", role: "Référent Pro.", level: "Terminale Pro.", filiere: "pro", isLeader: true, title: "Référent", img: "https://st3.depositphotos.com/3581215/18899/v/450/depositphotos_188994514-stock-illustration-vector-illustration-male-silhouette-profile.jpg" },
  
  // Membres
  { name: "PRÉTET Mathilde", role: "Membre", level: "Term. Gén.", filiere: "general" },
  { name: "SUZE Loraine", role: "Membre", level: "Term. Gén.", filiere: "general" },
  { name: "FARINOLE Maëlys", role: "Membre", level: "Term. Gén.", filiere: "general" },
  { name: "FREVILLE Joackim", role: "Membre", level: "Term. Pro.", filiere: "pro" },
  { name: "VICENTE Tom", role: "Membre", level: "Term. Pro.", filiere: "pro" },
  { name: "TREZEGUET Adrien", role: "Membre", level: "Term. Pro.", filiere: "pro" },
  { name: "DELTORT Clément", role: "Membre", level: "Term. Pro.", filiere: "pro" },
  { name: "BOSSARD Marie", role: "Membre", level: "1er Gén.", filiere: "general" },
  { name: "ROMÉO Valéria", role: "Membre", level: "1er Gén.", filiere: "general" },
  { name: "HAUTECOEUR Rosalie", role: "Membre", level: "1er Gén.", filiere: "general" },
  { name: "DELMAS HOCES DE LA GUARDIA Ethan", role: "Membre", level: "1er Gén.", filiere: "general" },
  { name: "BERNEDE Yvane", role: "Membre", level: "1er Pro.", filiere: "pro" },
  { name: "SAHOTA Zoé", role: "Membre", level: "2nd Gén.", filiere: "general" },
  { name: "DACOSTA Dione", role: "Membre", level: "2nd Gén.", filiere: "general" },
  { name: "VEYSSEYRE Alexandra", role: "Membre", level: "2nd Gén.", filiere: "general" },
  { name: "? Paul - 203", role: "Membre", level: "2nd Gén.", filiere: "general" },
  { name: "FRITSCH Louise", role: "Membre", level: "2nd Pro.", filiere: "pro" },
  { name: "ARNAUD Lino", role: "Membre", level: "2nd Pro.", filiere: "pro" },
  { name: "AKINAGA Erwan", role: "Membre", level: "2nd Pro.", filiere: "pro" }
];

function renderEquipeSection() {
  const container = document.getElementById('page-equipe');
  if (!container) return;

  const leaders = membersData.filter(m => m.isLeader);
  const members = membersData.filter(m => !m.isLeader);

  const defaultImg = "https://st3.depositphotos.com/3581215/18899/v/450/depositphotos_188994514-stock-illustration-vector-illustration-male-silhouette-profile.jpg";

  container.innerHTML = `
    <div class="border-b border-slate-200 pb-4 flex flex-col md:flex-row justify-between md:items-end gap-4">
        <div>
            <h2 class="text-2xl font-serif font-bold text-navy-900">L'Équipe du BDE</h2>
            <p class="text-xs sm:text-sm text-slate-500">Structure et membres du Bureau des Élèves.</p>
        </div>
        <div class="flex flex-wrap gap-2">
            <button onclick="filterTeam('all', this)" class="team-filter-btn border border-navy-900 bg-navy-900 text-white px-3.5 py-1.5 rounded text-xs font-semibold transition">Tous</button>
            <button onclick="filterTeam('general', this)" class="team-filter-btn border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 px-3.5 py-1.5 rounded text-xs font-semibold transition">Général</button>
            <button onclick="filterTeam('pro', this)" class="team-filter-btn border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 px-3.5 py-1.5 rounded text-xs font-semibold transition">Pro</button>
        </div>
    </div>

    <!-- Direction -->
    <div class="space-y-4">
        <div class="flex items-center justify-center gap-3">
            <span class="h-px bg-slate-300 w-12"></span>
            <span class="text-xs font-bold uppercase tracking-widest text-blue-900 bg-blue-100/70 border border-blue-200 px-3 py-1 rounded-full">
                <i class="fa-solid fa-crown text-amber-500 mr-1"></i> Direction
            </span>
            <span class="h-px bg-slate-300 w-12"></span>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            ${leaders.map(l => `
                <div class="team-card bg-white rounded-lg border-2 border-blue-600/40 shadow-md overflow-hidden hover:shadow-lg transition group relative" data-filiere="${l.filiere}">
                    <div class="absolute top-3 left-3 z-10">
                        <span class="bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded shadow-sm">${l.title}</span>
                    </div>
                    <div class="h-64 bg-slate-100 relative overflow-hidden">
                        <img src="${l.img || defaultImg}" alt="${l.name}" class="w-full h-full object-cover object-top group-hover:scale-105 transition duration-300">
                    </div>
                    <div class="p-6 space-y-3 bg-gradient-to-b from-blue-50/30 to-white">
                        <div class="flex justify-between items-start">
                            <div>
                                <h3 class="font-serif font-bold text-navy-900 text-xl">${l.name}</h3>
                                <p class="text-xs text-blue-700 font-semibold uppercase tracking-wider mt-0.5">${l.role}</p>
                            </div>
                            <span class="${l.filiere === 'pro' ? 'bg-pink-500 text-white border-pink-600/30' : 'bg-amber-400 text-amber-950 border-amber-500/30'} font-bold border text-[10px] px-2.5 py-1 rounded-full">${l.level}</span>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    </div>

    <!-- Connecteur -->
    <div class="flex flex-col items-center justify-center my-2">
        <div class="w-0.5 h-8 bg-slate-300"></div>
        <div class="w-12 h-0.5 bg-slate-300"></div>
    </div>

    <!-- Membres -->
    <div class="space-y-4">
        <div class="flex items-center justify-center gap-3">
            <span class="h-px bg-slate-300 w-12"></span>
            <span class="text-xs font-bold uppercase tracking-widest text-slate-600 bg-slate-200/70 border border-slate-300 px-3 py-1 rounded-full">Membres</span>
            <span class="h-px bg-slate-300 w-12"></span>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            ${members.map(m => `
                <div class="team-card bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden hover:shadow-md transition group" data-filiere="${m.filiere}">
                    <div class="h-48 bg-slate-100 relative overflow-hidden">
                        <img src="${m.img || defaultImg}" alt="${m.name}" class="w-full h-full object-cover object-top group-hover:scale-105 transition duration-300">
                        <span class="absolute top-2 right-2 ${m.filiere === 'pro' ? 'bg-pink-500 text-white border-pink-600/30' : 'bg-amber-400 text-amber-950 border-amber-500/30'} font-bold border px-2 py-0.5 rounded text-[10px]">${m.level}</span>
                    </div>
                    <div class="p-4 space-y-2">
                        <div>
                            <h4 class="font-serif font-bold text-slate-900 text-base">${m.name}</h4>
                            <p class="text-[11px] text-blue-700 font-semibold uppercase tracking-wider">${m.role}</p>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
        <p class="text-xs text-slate-500 mt-2">*Soit <strong>${membersData.length}</strong> membres du BDE.</p>
    </div>
  `;
}

function filterTeam(filiere, btnElement) {
  document.querySelectorAll('.team-filter-btn').forEach(btn => {
    btn.className = "team-filter-btn border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 px-3.5 py-1.5 rounded text-xs font-semibold transition";
  });
  btnElement.className = "team-filter-btn border border-navy-900 bg-navy-900 text-white px-3.5 py-1.5 rounded text-xs font-semibold transition";

  document.querySelectorAll('.team-card').forEach(card => {
    card.style.display = (filiere === 'all' || card.getAttribute('data-filiere') === filiere) ? '' : 'none';
  });
}