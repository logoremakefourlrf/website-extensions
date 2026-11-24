// Extension search and category filters for the home page.
document.addEventListener('DOMContentLoaded', () => {
  const cards = [...document.querySelectorAll('.extension-card')];
  const search = document.querySelector('#extension-search');
  const empty = document.querySelector('#empty-state');
  if (!cards.length) return;
  let category = 'all';
  const refresh = () => {
    const term = (search?.value || '').trim().toLowerCase();
    let visible = 0;
    cards.forEach((card) => {
      const matchesCategory = category === 'all' || card.dataset.category === category;
      const matchesText = !term || `${card.dataset.search} ${card.textContent}`.toLowerCase().includes(term);
      card.hidden = !(matchesCategory && matchesText);
      if (!card.hidden) visible += 1;
    });
    if (empty) empty.hidden = visible > 0;
  };
  search?.addEventListener('input', refresh);
  document.querySelectorAll('[data-filter]').forEach((button) => {
    button.addEventListener('click', () => {
      category = button.dataset.filter;
      document.querySelectorAll('[data-filter]').forEach((item) => item.classList.toggle('selected', item === button));
      refresh();
    });
  });
});
