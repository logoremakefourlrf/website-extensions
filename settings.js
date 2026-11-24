// Local preferences and non-functional account controls for the settings page.
document.addEventListener('DOMContentLoaded', () => {
  const select = document.querySelector('#language');
  const message = document.querySelector('#language-message');
  const notice = document.querySelector('#settings-notice');
  if (select) {
    select.value = localStorage.getItem('lrf-language') || 'en';
    select.addEventListener('change', () => {
      localStorage.setItem('lrf-language', select.value);
      document.documentElement.lang = select.value;
      if (message) message.textContent = select.value === 'de' ? 'Die Spracheinstellung wird nur in diesem Browser gespeichert.' : 'Language preference is stored in this browser only.';
      window.location.reload();
    });
  }
  document.querySelectorAll('[data-demo-action]').forEach((button) => button.addEventListener('click', () => {
    if (notice) {
      notice.textContent = `${button.dataset.demoAction} is unavailable: account services are not configured. Nothing was changed.`;
      notice.hidden = false;
    }
  }));
});
