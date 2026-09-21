type AnalyticsWindow = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
  [key: `ga-disable-${string}`]: boolean;
};

const storageKey = 'jonnas-analytics-consent';
const validChoice = (value: string | null) => value === 'accepted' || value === 'denied';

export function initAnalytics() {
  if (document.body.dataset.privateWorkspace === 'true') return;
  const panel = document.querySelector<HTMLElement>('#analytics-consent');
  const id = panel?.dataset.measurementId;
  if (!panel || !id || !/^G-[A-Z0-9]+$/.test(id)) return;
  const win = window as unknown as AnalyticsWindow;
  const preference = document.querySelector<HTMLButtonElement>('#analytics-preferences');
  let choice: string | null = null;
  let loaded = false;
  try { choice = localStorage.getItem(storageKey); } catch { /* Storage is optional. */ }

  function activate() {
    if (loaded || choice !== 'accepted') return;
    loaded = true;
    win[`ga-disable-${id}`] = false;
    win.dataLayer = win.dataLayer || [];
    win.gtag = function () { win.dataLayer!.push(arguments); };
    win.gtag('consent', 'default', {
      analytics_storage: 'granted', ad_storage: 'denied',
      ad_user_data: 'denied', ad_personalization: 'denied',
    });
    win.gtag('js', new Date());
    win.gtag('config', id, {
      send_page_view: false, allow_google_signals: false,
      allow_ad_personalization_signals: false, cookie_domain: 'none',
      page_location: location.origin + location.pathname, page_referrer: '',
    });
    win.gtag('event', 'page_view', {
      page_location: location.origin + location.pathname,
      page_title: document.title, page_referrer: '',
    });
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
    document.head.append(script);
  }

  function setChoice(next: string) {
    if (!validChoice(next)) return;
    choice = next;
    try { localStorage.setItem(storageKey, next); } catch { /* Keep session choice. */ }
    panel!.hidden = true;
    if (next === 'accepted') activate();
    else {
      win[`ga-disable-${id}`] = true;
      for (const item of document.cookie.split(';')) {
        const name = item.trim().split('=')[0];
        if (/^_ga(?:_|$)/.test(name)) document.cookie = `${name}=; Max-Age=0; Path=/; SameSite=Lax`;
      }
      // Reload discards the already-loaded tag after withdrawal.
      if (loaded) location.reload();
    }
    preference?.focus();
  }

  panel.hidden = validChoice(choice);
  if (preference) {
    preference.hidden = false;
    preference.addEventListener('click', () => {
      panel.hidden = false;
      panel.scrollIntoView({ block: 'center' });
      panel.querySelector<HTMLButtonElement>('button')?.focus();
    });
  }
  panel.querySelectorAll<HTMLButtonElement>('[data-consent]').forEach(button => {
    button.addEventListener('click', () => setChoice(button.dataset.consent!));
  });
  window.addEventListener('storage', event => {
    if (event.key !== storageKey) return;
    if (event.newValue === 'accepted') { choice = 'accepted'; panel.hidden = true; activate(); }
    else {
      choice = event.newValue;
      win[`ga-disable-${id}`] = true;
      if (loaded) location.reload();
      else panel.hidden = validChoice(choice);
    }
  });
  document.addEventListener('click', event => {
    if (choice !== 'accepted' || !(event.target instanceof Element)) return;
    const link = event.target.closest<HTMLAnchorElement>('a[href]');
    if (!link || !/^https?:$/.test(link.protocol)) return;
    const destination = new URL(link.href);
    const tracked = link.dataset.track;
    const isArticle = destination.origin === location.origin && destination.pathname.startsWith('/artigos/');
    const isExternal = destination.origin !== location.origin;
    if (!tracked && !isArticle && !isExternal && !link.hasAttribute('download')) return;
    win.gtag?.('event', 'resource_click', {
      resource_id: tracked || (isExternal ? 'link_externo' : isArticle ? 'ler_artigo' : 'download'),
      link_path: destination.origin === location.origin ? destination.pathname : destination.hostname,
      page_path: location.pathname, transport_type: 'beacon',
    });
  });
  activate();
}
