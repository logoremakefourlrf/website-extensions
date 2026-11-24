// Shared, deliberately local-only interactions for the directory site.
document.addEventListener('DOMContentLoaded', () => {
  const language = localStorage.getItem('lrf-language') || 'en';
  document.documentElement.lang = language;
  const dictionary = {
    en: { navHome: 'Explore', navSettings: 'Settings', profile: 'My profile' },
    de: { navHome: 'Entdecken', navSettings: 'Einstellungen', profile: 'Mein Profil' }
  };
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[language] && dictionary[language][key]) element.textContent = dictionary[language][key];
  });
});
