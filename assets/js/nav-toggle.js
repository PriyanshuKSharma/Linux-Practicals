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
    sidebarToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const expanded = sidebarToggle.getAttribute('aria-expanded') === 'true';
      sidebarToggle.setAttribute('aria-expanded', !expanded);
      sidebarNoteList.classList.toggle('open', !expanded);
    });

    // Close when clicking outside the pop up menu
    document.addEventListener('click', (e) => {
      if (!sidebarToggle.contains(e.target) && !sidebarNoteList.contains(e.target)) {
        sidebarToggle.setAttribute('aria-expanded', 'false');
        sidebarNoteList.classList.remove('open');
      }
    });

    // Close when pressing Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        sidebarToggle.setAttribute('aria-expanded', 'false');
        sidebarNoteList.classList.remove('open');
      }
    });

    // Close when selecting any link within the pop up (crucial for local anchors on os.html)
    sidebarNoteList.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        sidebarToggle.setAttribute('aria-expanded', 'false');
        sidebarNoteList.classList.remove('open');
      });
    });
  }
});
