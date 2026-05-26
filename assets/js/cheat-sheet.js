document.addEventListener('DOMContentLoaded', () => {
  const cheatSheetCatalog = document.getElementById('cheatSheetCatalog');
  const cheatSearchInput = document.getElementById('cheatSearchInput');
  const cheatCount = document.getElementById('cheatCount');
  const cheatNoResults = document.getElementById('cheatNoResults');
  const cheatNoResultsQuery = document.getElementById('cheatNoResultsQuery');
  const filterButtons = document.querySelectorAll('.filter-btn');

  // The 25 Linux Commands for DevOps, complete with subtle, legendary Rick Astley references
  const COMMAND_DATA = [
    // 1. File Systems & Directory Operations (8 commands)
    { 
      category: "file-ops", 
      cmd: "pwd", 
      desc: "Print current working directory absolute path.", 
      useCase: "Never gonna get you lost: instantly shows exactly where you are in the filesystem hierarchy." 
    },
    { 
      category: "file-ops", 
      cmd: "ls -la", 
      desc: "List directory files including hidden items in long format, showing metadata, owners, and sizes.", 
      useCase: "Never gonna let your files down, or desert them: audits all folder items and permissions before deploys." 
    },
    { 
      category: "file-ops", 
      cmd: "cd ~", 
      desc: "Change directory to the current user's home folder.", 
      useCase: "Never gonna run around and desert you: safely returns you to your home space when lost in subdirectories." 
    },
    { 
      category: "file-ops", 
      cmd: "mkdir -p webapp/assets", 
      desc: "Create nested directories, generating any missing parent folders recursively.", 
      useCase: "Always gonna build you up: initializes robust folder paths for application build steps." 
    },
    { 
      category: "file-ops", 
      cmd: "touch deploy.log", 
      desc: "Create an empty file or update timestamps of an existing file.", 
      useCase: "Never gonna say goodbye: initializes system log files so active background runners execute without breaking." 
    },
    { 
      category: "file-ops", 
      cmd: "cp -r src/ /var/www/html/", 
      desc: "Copy files or whole directories recursively to another location.", 
      useCase: "Never gonna let you go: replicates codebases safely to active production hosting directories." 
    },
    { 
      category: "file-ops", 
      cmd: "mv config.json old_config.json", 
      desc: "Move or rename files and directories.", 
      useCase: "Moving files around without telling a lie and hurting you: essential for zero-downtime deployments." 
    },
    { 
      category: "file-ops", 
      cmd: "rm -rf /tmp/build_cache", 
      desc: "Forcefully delete files or directories recursively. (Use with extreme caution!)", 
      useCase: "Will definitely make you cry and say goodbye to your data: sweeps away massive caching folders after pipeline builds." 
    },

    // 2. User Administration & Permissions (4 commands)
    { 
      category: "sys-admin", 
      cmd: "chmod 755 run.sh", 
      desc: "Grant read/write/execute permissions to owner, and read/execute to group and others.", 
      useCase: "Setting execution permissions so your scripts will never gonna give you up in automated pipelines." 
    },
    { 
      category: "sys-admin", 
      cmd: "sudo chown -R www-data:www-data /var/www", 
      desc: "Recursively change the owner and group assignment of a path.", 
      useCase: "Ensuring Nginx/Apache own the web root so they never gonna let your users down with 403 Forbidden errors." 
    },
    { 
      category: "sys-admin", 
      cmd: "sudo", 
      desc: "Execute a command with root superuser privileges.", 
      useCase: "Running operations with superuser authority—because sometimes you just have to say 'Sudo make me a sandwich'." 
    },
    { 
      category: "sys-admin", 
      cmd: "sudo visudo", 
      desc: "Safely edit the sudoers configuration file with built-in validation checks.", 
      useCase: "Ensuring your runner permissions are correct, never gonna let your service accounts down during deploy tasks." 
    },

    // 3. Process Management & Systemd Services (5 commands)
    { 
      category: "process", 
      cmd: "ps aux", 
      desc: "List details of all running processes in the system, showing memory and CPU consumption.", 
      useCase: "Checking up on your processes: audits active jobs to ensure no rogue scripts are running around." 
    },
    { 
      category: "process", 
      cmd: "htop", 
      desc: "Interactive real-time process monitor displaying active CPU threads and memory usage stats.", 
      useCase: "Monitoring system health so your server is never gonna run out of memory or crash during traffic spikes." 
    },
    { 
      category: "process", 
      cmd: "kill -9 2045", 
      desc: "Forcefully terminate a process immediately using its Process ID (PID).", 
      useCase: "Saying goodbye to a stuck process: forcefully kills unresponsive scripts that act like they're never gonna give up." 
    },
    { 
      category: "process", 
      cmd: "systemctl enable --now nginx", 
      desc: "Configure service auto-start on boot and start it immediately.", 
      useCase: "Ensuring your database or server daemons are always gonna start, always gonna run, and never gonna let your hosting down." 
    },
    { 
      category: "process", 
      cmd: "journalctl -f -u nginx.service", 
      desc: "Follow specific systemd service logs in real-time as they generate.", 
      useCase: "We've known each other for so long: parses Nginx/Apache log streams to capture and diagnose errors immediately." 
    },

    // 4. Networking & Secure Connections (5 commands)
    { 
      category: "networking", 
      cmd: "ip a", 
      desc: "Display detailed networking configuration, hardware MACs, and assigned IP addresses.", 
      useCase: "Finding your host's network identity so other nodes never gonna get lost when connecting to it." 
    },
    { 
      category: "networking", 
      cmd: "ping -c 4 8.8.8.8", 
      desc: "Send ICMP packets to verify remote network host reachability.", 
      useCase: "Testing if your backend database is still there—pinging to say: 'Are you gonna give me up, are you gonna let me down?'" 
    },
    { 
      category: "networking", 
      cmd: "curl -I https://www.youtube.com/watch?v=DQwUA1TC-s8", 
      desc: "Fetch HTTP headers or page content from a remote server.", 
      useCase: "Testing web responses: verifying Nginx is alive (or testing a legendary music video!)." 
    },
    { 
      category: "networking", 
      cmd: "ssh -i key.pem ubuntu@54.21.32.4", 
      desc: "Establish secure shell session to remote IP using a private key file.", 
      useCase: "Establishing secure shell sessions to your cloud hosts: we've known each other for so long, let's login securely." 
    },
    { 
      category: "networking", 
      cmd: "sudo ss -tulpn", 
      desc: "List active TCP/UDP ports, matching processes, and listening PIDs.", 
      useCase: "Auditing open sockets: ensuring your server ports are secure and never gonna leak database accesses to the public." 
    },

    // 5. Text Processing & Shell Utilities (3 commands)
    { 
      category: "shell-utils", 
      cmd: "grep -ri 'failed' /var/log/", 
      desc: "Recursively search all files for matching text patterns (case-insensitive).", 
      useCase: "Searching for your heart's desire: scans massive log folders for 'failed' or 'error' keywords instantly." 
    },
    { 
      category: "shell-utils", 
      cmd: "find /etc -type f -name '*.conf'", 
      desc: "Search for files inside a directory hierarchy matching custom wildcards.", 
      useCase: "Locating lost files: never gonna let you search in vain, finds hidden configuration files in seconds." 
    },
    { 
      category: "shell-utils", 
      cmd: "tar -czvf bkp.tar.gz /var/www", 
      desc: "Package and compress a directory recursively using GZIP format.", 
      useCase: "Archiving your precious code: backing up folders so you never gonna lose them, even if the disk crashes." 
    }
  ];

  let activeCategory = 'all';
  let searchQuery = '';

  const categoryNames = {
    "file-ops": "File & Directory Operations",
    "sys-admin": "User Administration & Permissions",
    "process": "Process Control & Services",
    "networking": "Networking & secure connections",
    "shell-utils": "Text Processing & Shell Utilities"
  };

  // Render Cheat Sheet
  function renderCheatSheet() {
    if (!cheatSheetCatalog) return;

    // Filter data
    const filteredData = COMMAND_DATA.filter(item => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const query = searchQuery.toLowerCase();
      const matchesSearch = 
        item.cmd.toLowerCase().includes(query) || 
        item.desc.toLowerCase().includes(query) || 
        item.useCase.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });

    // Update Counts
    if (cheatCount) {
      cheatCount.textContent = filteredData.length;
    }

    // Handle no results
    if (filteredData.length === 0) {
      cheatSheetCatalog.style.display = 'none';
      if (cheatNoResults) {
        cheatNoResults.classList.add('visible');
      }
      if (cheatNoResultsQuery) {
        cheatNoResultsQuery.textContent = `"${searchQuery}"`;
      }
      return;
    }

    cheatSheetCatalog.style.display = 'block';
    if (cheatNoResults) {
      cheatNoResults.classList.remove('visible');
    }

    // Group filtered commands by category
    const grouped = {};
    filteredData.forEach(item => {
      if (!grouped[item.category]) {
        grouped[item.category] = [];
      }
      grouped[item.category].push(item);
    });

    // Render grouped categories
    cheatSheetCatalog.innerHTML = '';
    Object.keys(grouped).forEach(catKey => {
      const section = document.createElement('section');
      section.className = 'cheat-section';

      section.innerHTML = `
        <h2 class="cheat-section-title">${categoryNames[catKey]}</h2>
        <div class="cheat-table-wrapper">
          <table class="cheat-table">
            <thead>
              <tr>
                <th style="width: 35%;">DevOps Command</th>
                <th style="width: 35%;">Description</th>
                <th style="width: 30%;">DevOps Practical Scenario</th>
              </tr>
            </thead>
            <tbody>
              ${grouped[catKey].map(item => `
                <tr>
                  <td class="cmd-cell">
                    <code>${escapeHtml(item.cmd)}</code>
                    <button class="btn-copy" data-cmd="${escapeHtml(item.cmd)}">Copy</button>
                  </td>
                  <td>${item.desc}</td>
                  <td><strong>${item.useCase}</strong></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      `;

      cheatSheetCatalog.appendChild(section);
    });

    // Hook up individual Copy command buttons
    const copyBtns = cheatSheetCatalog.querySelectorAll('.btn-copy');
    copyBtns.forEach(btn => {
      btn.addEventListener('click', () => {
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
          console.error('Failed to copy: ', err);
        });
      });
    });
  }

  // Hook up Search Input event
  if (cheatSearchInput) {
    cheatSearchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim();
      renderCheatSheet();
    });
  }

  // Hook up category filter buttons
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      activeCategory = btn.getAttribute('data-cat');
      renderCheatSheet();
    });
  });

  // Escape HTML helper
  function escapeHtml(text) {
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // Initial call
  renderCheatSheet();
});
