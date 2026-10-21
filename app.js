// Navigation SPA
function navigateTo(pageId) {
  document.querySelectorAll('.page-content').forEach(page => page.classList.add('hidden'));

  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.classList.remove('bg-white/15', 'text-white', 'font-semibold');
    btn.classList.add('text-slate-200');
  });

  const targetPage = document.getElementById(`page-${pageId}`);
  if (targetPage) {
    targetPage.classList.remove('hidden');
  }

  const activeBtn = document.getElementById(`nav-${pageId}`);
  if (activeBtn) {
    activeBtn.classList.add('bg-white/15', 'text-white', 'font-semibold');
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Lightbox
function openLightbox(src, title, date) {
  document.getElementById('lightbox-img').src = src;
  document.getElementById('lightbox-title').innerText = title;
  document.getElementById('lightbox-date').innerText = date;
  document.getElementById('lightbox-modal').classList.remove('hidden');
}

function closeLightbox() {
  document.getElementById('lightbox-modal').classList.add('hidden');
}

// Modal Événement
function showEventDetails(title, date, location, desc) {
  document.getElementById('modal-event-title').innerText = title;
  document.getElementById('modal-event-date').innerText = date;
  document.getElementById('modal-event-location').innerText = location;
  document.getElementById('modal-event-desc').innerText = desc;
  document.getElementById('event-modal').classList.remove('hidden');
}

function closeEventModal() {
  document.getElementById('event-modal').classList.add('hidden');
}

function openEventFromCard(btn) {
  const card = btn.closest('.event-item');
  const title = card.getAttribute('data-title');
  const date = `${card.getAttribute('data-date-label')} • ${card.getAttribute('data-time')}`;
  const location = card.getAttribute('data-location');
  const desc = card.getAttribute('data-desc');

  showEventDetails(title, date, location, desc);
}

// Notification Toast
function showNotification(message) {
  const toast = document.getElementById('toast-notification');
  const toastMessage = document.getElementById('toast-message');
  
  toastMessage.innerText = message;
  toast.classList.remove('translate-y-20', 'opacity-0');
  toast.classList.add('translate-y-0', 'opacity-100');

  setTimeout(() => {
      toast.classList.remove('translate-y-0', 'opacity-100');
      toast.classList.add('translate-y-20', 'opacity-0');
  }, 3500);
}

// Compte à Rebours Dynamique
let countdownInterval = null;

function startDynamicCountdown() {
  const events = document.querySelectorAll('.event-item');
  const now = new Date();

  let nextEventDate = null;
  let closestEvent = null;
  let minDiff = Infinity;

  events.forEach(event => {
      const dateStr = event.getAttribute('data-date');
      if (!dateStr) return;

      const eventMorning = new Date(`${dateStr}T00:00:00`);
      const diff = eventMorning - now;

      if (diff + (24 * 60 * 60 * 1000) > 0 && diff < minDiff) {
          minDiff = diff;
          nextEventDate = eventMorning;
          closestEvent = {
              title: event.getAttribute('data-title'),
              location: event.getAttribute('data-location')
          };
      }
  });

  if (!closestEvent) {
      document.getElementById('countdown-title').innerText = "Aucun événement à venir";
      document.getElementById('countdown-location').innerText = "-";
      document.getElementById('countdown-badge').innerText = "J-0";
      return;
  }

  document.getElementById('countdown-title').innerText = closestEvent.title;
  document.getElementById('countdown-location').innerText = closestEvent.location;

  if (countdownInterval) clearInterval(countdownInterval);

  function updateTimer() {
      const currentTime = new Date();
      const distance = nextEventDate - currentTime;

      if (distance <= 0) {
          document.getElementById('timer-days').innerText = "00";
          document.getElementById('timer-hours').innerText = "00";
          document.getElementById('timer-minutes').innerText = "00";
          document.getElementById('timer-seconds').innerText = "00";
          document.getElementById('countdown-badge').innerText = "Aujourd'hui !";
          return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById('timer-days').innerText = String(days).padStart(2, '0');
      document.getElementById('timer-hours').innerText = String(hours).padStart(2, '0');
      document.getElementById('timer-minutes').innerText = String(minutes).padStart(2, '0');
      document.getElementById('timer-seconds').innerText = String(seconds).padStart(2, '0');
      document.getElementById('countdown-badge').innerText = `J-${days}`;
  }

  updateTimer();
  countdownInterval = setInterval(updateTimer, 1000);
}

// Initialisation globale
window.addEventListener('DOMContentLoaded', () => {
  if (typeof renderEquipeSection === 'function') renderEquipeSection();
  if (typeof renderAgendaSection === 'function') renderAgendaSection();
  if (typeof renderFaqSection === 'function') renderFaqSection();
  
  startDynamicCountdown();
  navigateTo('accueil');
});