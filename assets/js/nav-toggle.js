document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('navToggle');
  const siteNav = document.getElementById('siteNav');

  if (navToggle && siteNav) {
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !expanded);
      siteNav.classList.toggle('open');
    });
  }

  const sidebarToggle = document.getElementById('sidebarToggle');
  const sidebarNoteList = document.getElementById('sidebarNoteList');

  if (sidebarToggle && sidebarNoteList) {
    sidebarToggle.addEventListener('click', () => {
      const expanded = sidebarToggle.getAttribute('aria-expanded') === 'true';
      sidebarToggle.setAttribute('aria-expanded', !expanded);
      sidebarNoteList.classList.toggle('open', !expanded);
    });
  }
});
