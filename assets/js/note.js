document.addEventListener('DOMContentLoaded', () => {
  if (typeof LINUX_NOTES === 'undefined') return;

  const urlParams = new URLSearchParams(window.location.search);
  let noteId = urlParams.get('id');

  // Default to intro if no ID is specified
  if (!noteId) {
    noteId = 'intro';
  }

  // Find the note
  const currentNoteIndex = LINUX_NOTES.findIndex(note => note.id === noteId);
  if (currentNoteIndex === -1) {
    // Redirect if note ID doesn't exist
    window.location.href = 'index.html';
    return;
  }

  const note = LINUX_NOTES[currentNoteIndex];

  // DOM Elements
  const breadcrumbTrack = document.getElementById('breadcrumbTrack');
  const breadcrumbTitle = document.getElementById('breadcrumbTitle');
  const noteHeaderTrack = document.getElementById('noteHeaderTrack');
  const noteHeaderReadTime = document.getElementById('noteHeaderReadTime');
  const videoLinkBtn = document.getElementById('videoLinkBtn');
  const noteTitle = document.getElementById('noteTitle');
  const noteBody = document.getElementById('noteBody');
  const noteSidebar = document.getElementById('noteSidebar');

  // Pagination elements
  const pagPrev = document.getElementById('pagPrev');
  const pagPrevTitle = document.getElementById('pagPrevTitle');
  const pagNext = document.getElementById('pagNext');
  const pagNextTitle = document.getElementById('pagNextTitle');

  // Format Track helper
  function formatTrackName(track) {
    return track
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  // Escape HTML helper
  function escapeHtml(text) {
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // Custom Bash code highlighter
  function highlightBash(codeText) {
    const lines = codeText.split('\n');
    const formattedLines = lines.map(line => {
      // 1. Whole line comment
      if (line.trim().startsWith('#')) {
        return `<span class="c-comment">${escapeHtml(line)}</span>`;
      }

      // 2. Inline comment extraction
      let linePart = line;
      let commentPart = '';
      const commentIdx = line.indexOf(' #');
      if (commentIdx !== -1) {
        linePart = line.substring(0, commentIdx);
        commentPart = `<span class="c-comment">${escapeHtml(line.substring(commentIdx))}</span>`;
      }

      // Command keywords
      const bashCommands = [
        'sudo', 'apt', 'systemctl', 'chmod', 'chown', 'mkdir', 'cd', 'rm', 'ls', 'cp', 'mv', 'echo', 
        'find', 'grep', 'uname', 'cat', 'df', 'useradd', 'groupadd', 'usermod', 'passwd', 'userdel', 
        'groupdel', 'ip', 'ping', 'curl', 'wget', 'ss', 'nc', 'ssh', 'kill', 'jobs', 'fg', 'bg', 
        'crontab', 'journalctl', 'umask', 'let', 'visudo', 'tail', 'head', 'less', 'chgrp'
      ];

      const words = linePart.split(' ');
      const highlightedWords = words.map(word => {
        // Highlight variables $VAR
        if (word.startsWith('$') && word.length > 1) {
          return `<span class="c-variable">${escapeHtml(word)}</span>`;
        }

        // Strip quotes/semicolons to check clean commands
        const cleanWord = word.replace(/['"`;()]/g, '');
        if (bashCommands.includes(cleanWord)) {
          return `<span class="c-command">${escapeHtml(word)}</span>`;
        }

        // Highlight options/flags -la, --help
        if (word.startsWith('-')) {
          return `<span class="c-keyword">${escapeHtml(word)}</span>`;
        }

        return escapeHtml(word);
      });

      return highlightedWords.join(' ') + commentPart;
    });

    return formattedLines.join('\n');
  }

  // 1. Populate Meta & Title
  const displayTrack = formatTrackName(note.track);
  document.title = `${note.title} | Linux For DevOps`;

  if (breadcrumbTrack) breadcrumbTrack.textContent = displayTrack;
  if (breadcrumbTitle) breadcrumbTitle.textContent = note.title;

  if (noteHeaderTrack) {
    noteHeaderTrack.textContent = displayTrack;
    noteHeaderTrack.parentElement.parentElement.setAttribute('data-track', note.track);
  }
  if (noteHeaderReadTime) noteHeaderReadTime.textContent = note.readTime;
  if (noteTitle) noteTitle.textContent = note.title;

  if (videoLinkBtn) {
    videoLinkBtn.href = `https://www.youtube.com/watch?v=${note.videoTimestamp}`;
  }

  // 2. Render Sidebar Index
  if (noteSidebar) {
    // Group notes by track
    const tracksGrouped = {};
    LINUX_NOTES.forEach(n => {
      if (!tracksGrouped[n.track]) {
        tracksGrouped[n.track] = [];
      }
      tracksGrouped[n.track].push(n);
    });

    // Generate Sidebar HTML
    noteSidebar.innerHTML = '';
    Object.keys(tracksGrouped).forEach(trackKey => {
      const groupDiv = document.createElement('div');
      groupDiv.className = 'sidebar-track-group';

      const groupTitle = document.createElement('div');
      groupTitle.className = 'sidebar-track-title';
      groupTitle.textContent = formatTrackName(trackKey);
      groupDiv.appendChild(groupTitle);

      const uList = document.createElement('ul');
      uList.className = 'sidebar-list';

      tracksGrouped[trackKey].forEach(n => {
        const li = document.createElement('li');
        if (n.id === note.id) {
          li.className = 'active';
        }
        li.innerHTML = `<a href="note.html?id=${n.id}">${n.title}</a>`;
        uList.appendChild(li);
      });

      groupDiv.appendChild(uList);
      noteSidebar.appendChild(groupDiv);
    });
  }

  // 3. Render Body Content
  if (noteBody) {
    noteBody.innerHTML = '';

    // Overview section
    const overviewDiv = document.createElement('section');
    overviewDiv.className = 'concept-block';
    overviewDiv.innerHTML = `
      <h2>Overview</h2>
      <p>${note.content.overview}</p>
    `;
    noteBody.appendChild(overviewDiv);

    // Context Sections
    if (note.content.sections) {
      note.content.sections.forEach(sec => {
        const secDiv = document.createElement('section');
        secDiv.className = 'concept-block';
        secDiv.innerHTML = `
          <h2>${sec.title}</h2>
          <p>${sec.text}</p>
        `;
        noteBody.appendChild(secDiv);
      });
    }

    // Interactive Terminal Commands Section
    if (note.content.commands && note.content.commands.length > 0) {
      const cmdHeader = document.createElement('h2');
      cmdHeader.style.fontSize = '1.6rem';
      cmdHeader.style.marginTop = '2rem';
      cmdHeader.style.borderLeft = '4px solid var(--accent-purple)';
      cmdHeader.style.paddingLeft = '0.75rem';
      cmdHeader.textContent = 'Hands-on Commands Reference';
      noteBody.appendChild(cmdHeader);

      note.content.commands.forEach((c, idx) => {
        // Description paragraph
        const pDesc = document.createElement('p');
        pDesc.style.marginTop = '1rem';
        pDesc.innerHTML = `<strong>${idx+1}. ${c.desc}</strong>`;
        noteBody.appendChild(pDesc);

        // Terminal Block
        const term = document.createElement('div');
        term.className = 'terminal-block';
        term.innerHTML = `
          <div class="terminal-header">
            <div class="terminal-dots">
              <span class="terminal-dot"></span>
              <span class="terminal-dot"></span>
              <span class="terminal-dot"></span>
            </div>
            <div class="terminal-title">bash</div>
            <button class="btn-copy" data-cmd="${escapeHtml(c.cmd)}">Copy</button>
          </div>
          <div class="terminal-content">
            <pre><code><span class="c-prompt">$</span> ${highlightBash(c.cmd)}</code></pre>
          </div>
        `;
        noteBody.appendChild(term);
      });

      // Hook up copy buttons
      const copyBtns = noteBody.querySelectorAll('.btn-copy');
      copyBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
          const cmdText = btn.getAttribute('data-cmd');
          navigator.clipboard.writeText(cmdText).then(() => {
            btn.textContent = 'Copied!';
            btn.style.color = 'var(--accent-green)';
            btn.style.borderColor = 'var(--accent-green)';
            setTimeout(() => {
              btn.textContent = 'Copy';
              btn.style.color = '';
              btn.style.borderColor = '';
            }, 2000);
          }).catch(err => {
            console.error('Failed to copy text: ', err);
          });
        });
      });
    }
  }

  // 4. Setup Pagination Navigation
  // Previous button
  if (currentNoteIndex > 0) {
    const prevNote = LINUX_NOTES[currentNoteIndex - 1];
    if (pagPrev) {
      pagPrev.href = `note.html?id=${prevNote.id}`;
      pagPrev.style.display = 'flex';
    }
    if (pagPrevTitle) pagPrevTitle.textContent = prevNote.title;
  } else {
    if (pagPrev) pagPrev.style.display = 'none';
  }

  // Next button
  if (currentNoteIndex < LINUX_NOTES.length - 1) {
    const nextNote = LINUX_NOTES[currentNoteIndex + 1];
    if (pagNext) {
      pagNext.href = `note.html?id=${nextNote.id}`;
      pagNext.style.display = 'flex';
    }
    if (pagNextTitle) pagNextTitle.textContent = nextNote.title;
  } else {
    if (pagNext) pagNext.style.display = 'none';
  }
});
