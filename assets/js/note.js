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

  // Extended Bash syntax highlighter (used for both command refs and code-card blocks)
  function highlightBash(codeText) {
    const bashCommands = [
      'sudo','apt','systemctl','chmod','chown','mkdir','cd','rm','ls','cp','mv','echo',
      'find','grep','uname','cat','df','useradd','groupadd','usermod','passwd','userdel',
      'groupdel','ip','ping','curl','wget','ss','nc','ssh','kill','jobs','fg','bg',
      'crontab','journalctl','umask','let','visudo','tail','head','less','chgrp',
      'read','declare','unset','export','source','printf','test','true','false',
      'for','do','done','while','until','if','then','elif','else','fi','case','esac','in'
    ];
    const readonlyKws = ['readonly','declare'];

    const lines = codeText.split('\n');
    const formattedLines = lines.map(line => {
      // Shebang line
      if (line.trim().startsWith('#!/')) {
        return `<span class="c-shebang">${escapeHtml(line)}</span>`;
      }

      // Whole-line comment (including heredoc labels like <<comment / comment)
      if (line.trim().startsWith('#')) {
        return `<span class="c-comment">${escapeHtml(line)}</span>`;
      }

      // Inline comment extraction
      let linePart = line;
      let commentPart = '';
      const commentIdx = line.indexOf(' #');
      if (commentIdx !== -1) {
        linePart = line.substring(0, commentIdx);
        commentPart = `<span class="c-comment">${escapeHtml(line.substring(commentIdx))}</span>`;
      }

      // Token-level highlighting
      const tokens = linePart.split(/(\s+)/);
      const highlighted = tokens.map(tok => {
        if (/^\s+$/.test(tok)) return tok; // preserve whitespace

        const escaped = escapeHtml(tok);
        const clean = tok.replace(/['"`\;(){}]/g, '');

        // $VAR or ${VAR}
        if (/^\$\{?[A-Za-z_][\w]*\}?/.test(tok)) {
          return `<span class="c-variable">${escaped}</span>`;
        }
        // Quoted strings
        if (/^['"]/.test(tok) && /['"]$/.test(tok)) {
          return `<span class="c-string">${escaped}</span>`;
        }
        // readonly / declare
        if (readonlyKws.includes(clean)) {
          return `<span class="c-readonly">${escaped}</span>`;
        }
        // Known commands
        if (bashCommands.includes(clean)) {
          return `<span class="c-command">${escaped}</span>`;
        }
        // Flags / options
        if (/^-[-\w]/.test(tok)) {
          return `<span class="c-keyword">${escaped}</span>`;
        }
        // Pure numbers
        if (/^-?\d+(\.\d+)?$/.test(clean)) {
          return `<span class="c-number">${escaped}</span>`;
        }
        return escaped;
      });

      return highlighted.join('') + commentPart;
    });

    return formattedLines.join('\n');
  }

  // Upgrade every <pre class="code-block"> inside a rendered section into a
  // full .code-card terminal card (dots + header + syntax highlighting + copy).
  function upgradeCodeBlocks(container) {
    container.querySelectorAll('pre.code-block').forEach(pre => {
      const rawText = pre.textContent;
      const highlighted = highlightBash(rawText);
      const filename = rawText.trim().startsWith('#!/') ? 'bash' : 'bash';

      const card = document.createElement('div');
      card.className = 'code-card';
      card.innerHTML = `
        <div class="code-card-header">
          <div class="code-card-dots">
            <span class="code-card-dot"></span>
            <span class="code-card-dot"></span>
            <span class="code-card-dot"></span>
          </div>
          <span class="code-card-label">${filename}</span>
          <button class="code-card-copy" data-raw="${escapeHtml(rawText)}">Copy</button>
        </div>
        <div class="code-card-body"><pre>${highlighted}</pre></div>
      `;

      // Hook up copy
      card.querySelector('.code-card-copy').addEventListener('click', function() {
        navigator.clipboard.writeText(rawText).then(() => {
          this.textContent = 'Copied!';
          this.style.color = 'var(--accent-green)';
          this.style.borderColor = 'var(--accent-green)';
          setTimeout(() => {
            this.textContent = 'Copy';
            this.style.color = '';
            this.style.borderColor = '';
          }, 2000);
        }).catch(() => {});
      });

      pre.replaceWith(card);
    });
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

      // Upgrade all code-block <pre> elements into terminal cards
      upgradeCodeBlocks(noteBody);
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
