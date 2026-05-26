document.addEventListener('DOMContentLoaded', () => {
  const notesCatalog = document.getElementById('notesCatalog');
  const searchInput = document.getElementById('searchInput');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const visibleCount = document.getElementById('visibleCount');
  const statNotes = document.getElementById('statNotes');
  const noResults = document.getElementById('noResults');
  const noResultsQuery = document.getElementById('noResultsQuery');

  let activeCategory = 'all';
  let searchQuery = '';

  // Initialize total count
  if (statNotes && typeof LINUX_NOTES !== 'undefined') {
    statNotes.textContent = LINUX_NOTES.length;
  }

  // Render notes
  function renderNotes() {
    if (typeof LINUX_NOTES === 'undefined' || !notesCatalog) return;

    // Filter notes
    const filteredNotes = LINUX_NOTES.filter((note, index) => {
      const matchesCategory = activeCategory === 'all' || note.track === activeCategory;
      
      const query = searchQuery.toLowerCase();
      const matchesSearch = 
        note.title.toLowerCase().includes(query) || 
        note.summary.toLowerCase().includes(query) ||
        note.track.toLowerCase().includes(query) ||
        (note.content && note.content.overview.toLowerCase().includes(query));
      
      // Store original index for custom note numbering (lx-1, lx-2, etc.)
      note._originalIndex = index + 1;
      
      return matchesCategory && matchesSearch;
    });

    // Update count display
    if (visibleCount) {
      visibleCount.textContent = filteredNotes.length;
    }

    // Handle no results view
    if (filteredNotes.length === 0) {
      notesCatalog.style.display = 'none';
      if (noResults) {
        noResults.classList.add('visible');
      }
      if (noResultsQuery) {
        noResultsQuery.textContent = `"${searchQuery}"`;
      }
    } else {
      notesCatalog.style.display = 'grid';
      if (noResults) {
        noResults.classList.remove('visible');
      }
      notesCatalog.innerHTML = '';

      filteredNotes.forEach(note => {
        const card = document.createElement('div');
        card.className = 'note-card';
        card.setAttribute('data-track', note.track);

        // Format track label for display
        const displayTrack = note.track
          .split('-')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');

        card.innerHTML = `
          <div class="card-meta">
            <span class="card-track">${displayTrack}</span>
            <span class="card-read-time">${note.readTime}</span>
          </div>
          <h3>${note.title}</h3>
          <p>${note.summary}</p>
          <div class="card-footer">
            <span class="card-num">lx-${note._originalIndex}</span>
            <a href="note.html?id=${note.id}" class="card-link">View Notes</a>
          </div>
        `;
        notesCatalog.appendChild(card);
      });
    }
  }

  // Hook up search handler
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim();
      renderNotes();
    });
  }

  // Hook up category filter buttons
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Toggle active classes
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      activeCategory = btn.getAttribute('data-cat');
      renderNotes();
    });
  });

  // Initial render
  renderNotes();
});
