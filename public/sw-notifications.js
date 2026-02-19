/* Service Worker : notifications du Hadith du jour */
const NOTIFICATION_TAG = 'hadith-du-jour-reminder';
const NOTIFICATION_TITLE = 'Bukhari Mind';
const NOTIFICATION_OPTIONS = {
  body: "Ton Hadith du jour est prêt sur Bukhari-Mind. Viens découvrir la sagesse d'aujourd'hui.",
  tag: NOTIFICATION_TAG,
  icon: '/placeholder.svg',
  badge: '/placeholder.svg',
  requireInteraction: false,
  data: { url: '/' }
};

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SHOW_DAILY_REMINDER') {
    const body = event.data.body || NOTIFICATION_OPTIONS.body;
    self.registration.showNotification(NOTIFICATION_TITLE, {
      ...NOTIFICATION_OPTIONS,
      body,
      ...(event.data.url && { data: { url: event.data.url } })
    });
  }
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const urlToOpen = event.notification.data?.url || '/';
  const fullUrl = new URL(urlToOpen, self.location.origin).href;
  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      for (const client of clientList) {
        if (client.url.startsWith(self.location.origin)) {
          client.navigate(fullUrl);
          return client.focus();
        }
      }
      if (self.clients.openWindow) {
        return self.clients.openWindow(fullUrl);
      }
    })
  );
});
