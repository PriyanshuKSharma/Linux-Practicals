document.addEventListener('DOMContentLoaded', () => {
  const projectsCatalog = document.getElementById('projectsCatalog');

  const DEVOPS_PROJECTS = [
    {
      num: "Project 01",
      title: "Interactive Shell Script Manager",
      desc: "A modular CLI tool designed to simplify execution, permission settings, and batch-runs of multiple shell scripting exercises inside a repository using a user-friendly numbered index system.",
      steps: [
        "Checks for target workspace folder directory structures.",
        "Sets execution flags (`chmod +x`) on all internal scripts automatically.",
        "Displays a color-coded interactive options menu inside the terminal console.",
        "Supports direct CLI options (help, list, execute by number, run all).",
        "Includes bulletproof error checks and handles positive/negative script exit codes."
      ],
      scriptPath: "execute_shell_scripts.sh",
      code: `#!/bin/bash
# Script to manage permissions and execute shell scripts from Shell Scripting directory
# Author: Priyanshu Kumar Sharma

# Colors for output
RED='\\033[0;31m'
GREEN='\\033[0;32m'
YELLOW='\\033[1;33m'
BLUE='\\033[0;34m'
NC='\\033[0m' # No Color

SCRIPT_DIR="/home/priyanshu-k-sharma/Linux-Practicals/Shell Scripting"

print_message() {
    local color=$1
    local message=$2
    echo -e "\${color}\${message}\${NC}"
}

# Function to set execute permissions
set_permissions() {
    print_message $BLUE "Setting execute permissions for all shell scripts..."
    if [ ! -d "$SCRIPT_DIR" ]; then
        print_message $RED "Error: Shell Scripting directory not found at $SCRIPT_DIR"
        exit 1
    fi
    chmod +x "$SCRIPT_DIR"/*.sh
    if [ $? -eq 0 ]; then
        print_message $GREEN "✓ Execute permissions set successfully"
    else
        print_message $RED "✗ Failed to set permissions"
        exit 1
    fi
}

# Function to list available scripts
list_scripts() {
    print_message $BLUE "Available shell scripts in $SCRIPT_DIR:"
    echo
    local count=1
    for script in "$SCRIPT_DIR"/*.sh; do
        if [ -f "$script" ]; then
            echo "  $count. $(basename "$script")"
            ((count++))
        fi
    done
    echo
}

# Function to execute a script by number
execute_script_by_number() {
    local script_number=$1
    if ! [[ "$script_number" =~ ^[0-9]+$ ]]; then
        print_message $RED "Error: Please enter a valid number"
        return 1
    fi
    local scripts=()
    for script in "$SCRIPT_DIR"/*.sh; do
        if [ -f "$script" ]; then
            scripts+=($(basename "$script"))
        fi
    done
    if [ "$script_number" -lt 1 ] || [ "$script_number" -gt "\${#scripts[@]}" ]; then
        print_message $RED "Error: Invalid number range"
        return 1
    fi
    local script_name="\${scripts[\$((script_number - 1))]}"
    execute_script "\$script_name"
}

# Function to execute a specific script
execute_script() {
    local script_name=$1
    local script_path="$SCRIPT_DIR/\$script_name"
    if [ ! -f "$script_path" ]; then
        print_message $RED "Error: Script '\$script_name' not found"
        return 1
    fi
    print_message $GREEN "Executing: \$script_name"
    echo "----------------------------------------"
    bash "$script_path"
    local exit_code=$?
    echo "----------------------------------------"
    return \$exit_code
}

# (Refer to execute_shell_scripts.sh in repo for full CLI argument parsers)`
    },
    {
      num: "Project 02",
      title: "Automated Apache & PHP Server Deployment",
      desc: "A shell script that automates package installation, virtual hosting configurations, and directory permission mappings to host functional PHP pages dynamically on a Linux server.",
      steps: [
        "Verifies root/sudo shell invocation properties to prevent installation failures.",
        "Updates system repositories and installs Apache2 and PHP libraries.",
        "Configures php-fpm handlers for efficient request processing.",
        "Generates static HTML files and dynamic index.php files in /var/www/html.",
        "Performs ownership mappings to standard web processes (`www-data`).",
        "Starts services, reloads configs, and displays the server's network IPs."
      ],
      scriptPath: "setup_web_server.sh",
      code: `#!/bin/bash
# Check if the script is run as root
if [ "$EUID" -ne 0 ]; then
  echo "Please run as root"
  exit 1
fi

# Update system packages
echo "Updating system packages..."
sudo apt update -y || { echo "Failed to update packages"; exit 1; }

# Install Apache Web Server and PHP
echo "Installing Apache and PHP..."
sudo apt install apache2 php libapache2-mod-php -y || { echo "Failed to install Apache or PHP"; exit 1; }

# Start Apache
echo "Starting Apache web server..."
sudo service apache2 start || { echo "Failed to start Apache"; exit 1; }

# Install PHP-FPM
echo "Installing PHP-FPM..."
sudo apt install php-fpm -y || { echo "Failed to install PHP-FPM"; exit 1; }

# Create a static HTML page
echo "Creating a static HTML page..."
cat <<EOL > /var/www/html/index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Welcome to Static Website</title>
</head>
<body>
    <h1>Welcome to the Static Web Page!</h1>
    <p>This is served by Apache web server.</p>
</body>
</html>
EOL

# Create a dynamic PHP page
echo "Creating a dynamic PHP page..."
cat <<EOL > /var/www/html/index.php
<?php
echo "<h1>Welcome to the Dynamic Web Page!</h1>";
echo "<p>This is a PHP page served by Apache.</p>";
?>
EOL

# Set appropriate permissions
echo "Setting permissions for web directory..."
sudo chown -R www-data:www-data /var/www/html/ || { echo "Failed to set permissions"; exit 1; }

# Restart Apache to apply changes
echo "Restarting Apache web server..."
sudo service apache2 restart || { echo "Failed to restart Apache"; exit 1; }

SERVER_IP=$(hostname -I | awk '{print $1}')
echo "Web server setup complete! Access at http://$SERVER_IP"
`
    },
    {
      num: "Project 03",
      title: "Archive & Compression Automation Utility",
      desc: "A script designed to automate directories backup, generate batch testing files, calculate sizes of different compression schemes (.tar vs .tar.gz vs .tar.bz2), and extract files.",
      steps: [
        "Automates folder creations and populates file lists sequentially.",
        "Monitors disk usages after each action using standard `du -sh` utilities.",
        "Packages folders using basic `tar` archives.",
        "Compresses archives into high-speed `.tar.gz` (gzip) files.",
        "Compresses archives into ultra-high-density `.tar.bz2` (bzip2) files.",
        "Validates structural extractions and audits file lists with `tar -tf`."
      ],
      scriptPath: "project1_automation.sh",
      code: `#!/bin/bash
# Create target backup directory
mkdir -p Project2
echo "Created 'Project2' directory."

# Create test files and monitor disk space iteratively
for i in {1..5}; do
    touch Project2/file$i.txt
    echo "Created 'file$i.txt' in 'Project2'."
    du -sh Project2
done

# Archive using tar
echo "Archiving 'Project2' using tar..."
tar -cvf Project2.tar Project2

# Check space after raw archiving
du -sh Project2.tar

# Compress using tar.gz (GZIP)
echo "Compressing 'Project2.tar' using gzip..."
tar -czvf Project2.tar.gz Project2
du -sh Project2.tar.gz

# Compress using tar.bz2 (BZIP2)
echo "Compressing 'Project2.tar' using bzip2..."
tar -cjvf Project2.tar.bz2 Project2
du -sh Project2.tar.bz2

# Read compressed file structures without extracting
echo "Contents of 'Project2.tar.gz':"
tar -tf Project2.tar.gz

# Extract file systems
echo "Extracting 'Project2.tar.gz'..."
tar -xvf Project2.tar.gz
`
    },
    {
      num: "Project 04",
      title: "Host Security & Firewall Hardening Script",
      desc: "A system administrator security script configuring strict port access rules on local networks using Ubuntu's Uncomplicated Firewall (UFW) to protect application servers.",
      steps: [
        "Installs and upgrades system packages, including UFW security features.",
        "Locks down incoming networks using a restrictive Default-Deny-Incoming policy.",
        "Blocks outgoing server leaks with a strict Default-Deny-Outgoing policy.",
        "Allows critical connections: SSH admin ports (22) and Web ports (80).",
        "Authorizes secure outbound packages connections over standard HTTP/HTTPS (80/443).",
        "Reloads security states, details current ports rules, and audits local NICs."
      ],
      scriptPath: "setup_firewall.sh",
      code: `#!/bin/bash
# Install UFW package
sudo apt install -y ufw

# Enable UFW daemon
sudo ufw enable

# Allow specific incoming connections
sudo ufw allow 22    # SSH administration
sudo ufw allow 80    # HTTP web traffic

# Impose strict system default security policies
sudo ufw default deny incoming
sudo ufw default deny outgoing

# Allow specific outgoing TCP sockets to fetch package updates
sudo ufw allow out 80/tcp
sudo ufw allow out 443/tcp

# Reload firewall rules to enforce changes
sudo ufw reload

# Display active firewall rules list
sudo ufw status
`
    }
  ];

  // Escape HTML helper
  function escapeHtml(text) {
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // Custom Bash Code Highlighter
  function highlightBash(codeText) {
    const lines = codeText.split('\n');
    const formattedLines = lines.map(line => {
      // 1. Comments
      if (line.trim().startsWith('#')) {
        return `<span class="c-comment">${escapeHtml(line)}</span>`;
      }
      
      let linePart = line;
      let commentPart = '';
      const commentIdx = line.indexOf(' #');
      if (commentIdx !== -1) {
        linePart = line.substring(0, commentIdx);
        commentPart = `<span class="c-comment">${escapeHtml(line.substring(commentIdx))}</span>`;
      }

      // Commands list
      const bashCommands = [
        'sudo', 'apt', 'systemctl', 'chmod', 'chown', 'mkdir', 'cd', 'rm', 'ls', 'cp', 'mv', 'echo', 
        'find', 'grep', 'uname', 'cat', 'df', 'useradd', 'groupadd', 'usermod', 'passwd', 'userdel', 
        'groupdel', 'ip', 'ping', 'curl', 'wget', 'ss', 'nc', 'ssh', 'kill', 'jobs', 'fg', 'bg', 
        'crontab', 'journalctl', 'umask', 'let', 'visudo', 'tar', 'touch', 'service', 'awk', 'hostname'
      ];

      const words = linePart.split(' ');
      const highlightedWords = words.map(word => {
        if (word.startsWith('$') && word.length > 1) {
          return `<span class="c-variable">${escapeHtml(word)}</span>`;
        }

        const cleanWord = word.replace(/['"`;()]/g, '');
        if (bashCommands.includes(cleanWord)) {
          return `<span class="c-command">${escapeHtml(word)}</span>`;
        }

        if (word.startsWith('-')) {
          return `<span class="c-keyword">${escapeHtml(word)}</span>`;
        }

        return escapeHtml(word);
      });

      return highlightedWords.join(' ') + commentPart;
    });

    return formattedLines.join('\n');
  }

  // Render Projects function
  function renderProjects() {
    if (!projectsCatalog) return;
    projectsCatalog.innerHTML = '';

    DEVOPS_PROJECTS.forEach(proj => {
      const item = document.createElement('div');
      item.className = 'project-item';

      // Create Step list items
      const stepsHTML = proj.steps.map(step => `<li>${step}</li>`).join('');

      item.innerHTML = `
        <div class="project-details">
          <span class="project-num">${proj.num}</span>
          <h2>${proj.title}</h2>
          <p>${proj.desc}</p>
          <ul class="project-steps">
            ${stepsHTML}
          </ul>
          
          <p style="font-family: var(--font-mono); font-size: 0.85rem; color: var(--text-muted); margin-top: 1rem;">
            📁 Script File: <a href="https://github.com/PriyanshuKSharma/Linux-Practicals/blob/main/${proj.scriptPath}" target="_blank" style="color: var(--accent-purple); font-weight: bold;">${proj.scriptPath}</a>
          </p>

          <div class="project-actions" style="margin-top: 1rem;">
            <button class="btn btn-copy-script" data-code="${escapeHtml(proj.code)}">Copy Full Script</button>
          </div>
        </div>

        <div class="terminal-block" style="margin: 0;">
          <div class="terminal-header">
            <div class="terminal-dots">
              <span class="terminal-dot"></span>
              <span class="terminal-dot"></span>
              <span class="terminal-dot"></span>
            </div>
            <div class="terminal-title">${proj.scriptPath}</div>
          </div>
          <div class="terminal-content" style="max-height: 450px; overflow-y: auto;">
            <pre><code>${highlightBash(proj.code)}</code></pre>
          </div>
        </div>
      `;

      projectsCatalog.appendChild(item);
    });

    // Setup Copy Script Button events
    const copyBtns = projectsCatalog.querySelectorAll('.btn-copy-script');
    copyBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const codeText = btn.getAttribute('data-code');
        navigator.clipboard.writeText(codeText).then(() => {
          btn.textContent = 'Script Copied!';
          btn.style.background = 'rgba(57, 255, 20, 0.1)';
          btn.style.color = 'var(--accent-green)';
          btn.style.borderColor = 'var(--accent-green)';
          setTimeout(() => {
            btn.textContent = 'Copy Full Script';
            btn.style.background = '';
            btn.style.color = '';
            btn.style.borderColor = '';
          }, 2000);
        }).catch(err => {
          console.error('Failed to copy: ', err);
        });
      });
    });
  }

  // Execute render
  renderProjects();
});
