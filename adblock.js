// The AdBlock information page intentionally does not implement traffic filtering.
document.addEventListener('DOMContentLoaded', () => {
  const installLinks = document.querySelectorAll('[data-install]');
  installLinks.forEach((link) => link.addEventListener('click', (event) => {
    event.preventDefault();
    window.alert('No signed browser extension package has been published yet.');
  }));
});
