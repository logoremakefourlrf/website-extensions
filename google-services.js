// Google integration page: provide setup guidance without storing project credentials.
document.addEventListener('DOMContentLoaded', () => {
  const copy = document.querySelector('[data-copy-config]');
  copy?.addEventListener('click', async () => {
    const status = document.querySelector('#config-copy-status');
    try {
      await navigator.clipboard.writeText('Download your own google-services.json from the Firebase console.');
      if (status) status.textContent = 'Setup reminder copied.';
    } catch {
      if (status) status.textContent = 'Open Firebase setup documentation to continue.';
    }
  });
});
