// The YouTube directory page is informational; it does not inspect or alter video pages.
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-youtube-action]').forEach((button) => {
    button.addEventListener('click', () => window.alert('This extension concept is not published as an installable package yet.'));
  });
});
