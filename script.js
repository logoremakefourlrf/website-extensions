// Shared utility helpers for the extension directory.
window.LRFExtensions = Object.freeze({
  announce(message, element) {
    if (!element) return;
    element.textContent = message;
    element.hidden = false;
  }
});
