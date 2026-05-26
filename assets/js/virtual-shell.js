/**
 * Linux For DevOps Notes - High-Fidelity Client-side Virtual Shell Simulator
 * Operates 100% offline, CORS-free, serverless in standard JS memory.
 */

class VirtualShell {
  constructor(outputElement, inputElement, promptElement, statsElement) {
    this.output = outputElement;
    this.input = inputElement;
    this.prompt = promptElement;
    this.stats = statsElement;

    this.currentDir = "/home/devops";
    this.currentUser = "devops";
    this.hostname = "linux-sandbox";
    
    try {
      this.history = JSON.parse(localStorage.getItem("bash_history")) || [];
    } catch (e) {
      this.history = [];
    }
    this.historyIndex = -1;
    this.executedScripts = [];
    this.installedPackages = new Set(["git", "curl", "wget"]);

    // Curated initial Virtual File System (VFS)
    this.vfs = {
      "/": { type: "dir", permissions: this.defaultPerms(755), owner: "root", group: "root" },
      "/etc": { type: "dir", permissions: this.defaultPerms(755), owner: "root", group: "root" },
      "/etc/hostname": { type: "file", permissions: this.defaultPerms(644), owner: "root", group: "root", content: "linux-sandbox\n" },
      "/etc/resolv.conf": { type: "file", permissions: this.defaultPerms(644), owner: "root", group: "root", content: "nameserver 8.8.8.8\nnameserver 1.1.1.1\n" },
      "/var": { type: "dir", permissions: this.defaultPerms(755), owner: "root", group: "root" },
      "/var/log": { type: "dir", permissions: this.defaultPerms(755), owner: "root", group: "root" },
      "/var/log/syslog": { 
        type: "file", 
        permissions: this.defaultPerms(640), 
        owner: "root", 
        group: "adm", 
        content: `May 26 06:30:12 systemd[1]: Started Web Server Daemon.
May 26 06:31:00 systemd[1]: [ERROR] Permission denied trying to bind to port 80.
May 26 06:32:15 nginx[405]: Connection accepted from 192.168.1.50
May 26 06:33:45 sshd[802]: Accepted publickey for devops from 10.0.2.15 port 42890 ssh2
May 26 06:34:02 systemd[1]: Starting Firewall Rule Reload Automation...
May 26 06:34:03 systemd[1]: Firewall Rules Reloaded successfully.
` 
      },
      "/home": { type: "dir", permissions: this.defaultPerms(755), owner: "root", group: "root" },
      "/home/devops": { type: "dir", permissions: this.defaultPerms(755), owner: "devops", group: "devops" },
      "/home/devops/readme.txt": { 
        type: "file", 
        permissions: this.defaultPerms(644), 
        owner: "devops", 
        group: "devops", 
        content: `======================================================
Welcome to the Linux DevOps Virtual Sandbox!
======================================================
Explore standard Linux filesystem hierarchies, run pipeline automations,
edit shell configurations, and challenge your scripting skills.

Type "help" to see a list of simulated console utilities.
Type "challenges" to view your active DevOps objectives list.
Use "cd /home/devops/scripts/learn" to explore 15 shell scripting lessons.
`
      },
      "/home/devops/scripts": { type: "dir", permissions: this.defaultPerms(755), owner: "devops", group: "devops" },
      "/home/devops/scripts/create_user.sh": { 
        type: "file", 
        permissions: this.defaultPerms(644), // NOT executable by default! Needs chmod +x for Level 4!
        owner: "devops", 
        group: "devops", 
        content: `#!/bin/bash
# DevOps Script: Automates Linux user account creation
echo "======================================"
echo "    Linux User Account Creator       "
echo "======================================"
read -p "Enter new account username: " username
if [ -z "$username" ]; then
    echo "ERROR: Username cannot be blank."
    exit 1
fi
echo "[INFO] Creating user account '$username'..."
sleep 1
echo "[INFO] Setting up default home /home/$username..."
sleep 1
echo "[INFO] Appending sudoers entry..."
sleep 0.5
echo "[SUCCESS] DevOps User Account $username configured!"
`
      },
      "/home/devops/scripts/setup_web_server.sh": { 
        type: "file", 
        permissions: this.defaultPerms(755), 
        owner: "devops", 
        group: "devops", 
        content: `#!/bin/bash
# DevOps Script: Configures Nginx Web Server environment
echo "[INFO] Commencing Nginx setup..."
sleep 1
echo "[INFO] Updating package caches..."
sleep 0.8
echo "[INFO] Installing package 'nginx-core'..."
sleep 1.5
echo "[INFO] Writing custom index.html configurations..."
sleep 0.5
echo "[INFO] Re-starting systemd unit 'nginx.service'..."
sleep 1
echo "[SUCCESS] Automated server deployment finished!"
echo "[SUCCESS] Server is active at http://localhost:80"
`
      },
      "/home/devops/scripts/setup_firewall.sh": { 
        type: "file", 
        permissions: this.defaultPerms(755), 
        owner: "devops", 
        group: "devops", 
        content: `#!/bin/bash
# DevOps Script: Automates UFW Firewall settings
echo "[INFO] Initializing firewall configuration..."
sleep 0.5
echo "[INFO] Enabling firewall rules..."
echo "Default incoming: DENY"
echo "Default outgoing: ALLOW"
sleep 0.8
echo "[INFO] Allowing port 22/tcp (SSH)..."
echo "[INFO] Allowing port 80/tcp (HTTP)..."
echo "[INFO] Allowing port 443/tcp (HTTPS)..."
sleep 1
echo "[SUCCESS] UFW firewall automation completed successfully!"
`
      },
      "/home/devops/scripts/project1_automation.sh": { 
        type: "file", 
        permissions: this.defaultPerms(755), 
        owner: "devops", 
        group: "devops", 
        content: `#!/bin/bash
# DevOps Script: Archive & Compression Automation
echo "[INFO] Creating backup directories..."
sleep 0.5
echo "[INFO] Spawning files and monitoring sizes..."
for i in {1..5}; do
    echo "Created file$i.txt inside 'Project2' workspace"
    sleep 0.2
done
echo "[INFO] Compressing 'Project2' to tar archive..."
sleep 0.6
echo "[INFO] Compressing using GZIP..."
sleep 0.8
echo "[INFO] Compressing using BZIP2..."
sleep 0.5
echo "[SUCCESS] Automated archive benchmark completed!"
`
      },
      "/home/devops/scripts/execute_shell_scripts.sh": {
        type: "file",
        permissions: this.defaultPerms(755),
        owner: "devops",
        group: "devops",
        content: `#!/bin/bash
# DevOps Script: Interactive script list validator
echo "======================================"
echo "    DevOps Script Automations List    "
echo "======================================"
echo "  1. create_user.sh"
echo "  2. setup_web_server.sh"
echo "  3. setup_firewall.sh"
echo "  4. project1_automation.sh"
sleep 1
echo "[INFO] Verified 4 standard automations in scripts path."
echo "[SUCCESS] Package validation complete!"
`
      }
    };

    // ── Shell Scripting Learning Scripts (added to VFS at boot) ──────────────
    this._addLearnScripts();


    this.activeChallengeIndex = 0;
    this.completedChallenges = new Set();

    this.initListeners();
    this.updatePrompt();
    this.printWelcome();
    this.updateVfsVisualizer();

    // Check for automatic script trigger via URL query parameters
    const urlParams = new URLSearchParams(window.location.search);
    const runScript = urlParams.get("run");
    if (runScript) {
      setTimeout(() => {
        this.input.value = `./scripts/${runScript}`;
        this.handleCommand();
      }, 1500); // 1.5s delay to let boot animations complete nicely!
    }
  }

  // Parse octal permissions (e.g. 755) to readable object structures
  defaultPerms(octal) {
    const parseDigit = (d) => ({
      read: (d & 4) !== 0,
      write: (d & 2) !== 0,
      execute: (d & 1) !== 0
    });
    const str = octal.toString();
    return {
      owner: parseDigit(parseInt(str[0])),
      group: parseDigit(parseInt(str[1])),
      other: parseDigit(parseInt(str[2]))
    };
  }

  // Get permissions string (e.g. -rwxr-xr-x)
  permsToString(type, p) {
    const formatPart = (part) => {
      return (part.read ? "r" : "-") + (part.write ? "w" : "-") + (part.execute ? "x" : "-");
    };
    return (type === "dir" ? "d" : "-") + formatPart(p.owner) + formatPart(p.group) + formatPart(p.other);
  }

  initListeners() {
    this.input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        this.handleCommand();
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        this.traverseHistory(-1);
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        this.traverseHistory(1);
      } else if (e.key === "Tab") {
        e.preventDefault();
        this.autocomplete();
      }
    });

    // Auto-focus input on clicking anything inside the terminal window
    document.querySelector(".terminal-window").addEventListener("click", () => {
      this.input.focus();
    });
  }

  updatePrompt() {
    const cleanDir = this.currentDir === `/home/${this.currentUser}` ? "~" : this.currentDir;
    this.prompt.innerHTML = `<span class="prompt-user">${this.currentUser}@${this.hostname}</span>:<span class="prompt-dir">${cleanDir}</span>$ `;
  }

  printWelcome() {
    this.writeLine("Initializing secure pseudo-terminal subsystem... Completed.");
    this.writeLine("Host: linux-sandbox | Sandbox environment active.");
    this.writeLine("Logged in as user: devops. Shell: /bin/bash");
    this.writeLine('Type <span class="highlight-green">help</span> to list terminal utilities or <span class="highlight-purple">challenges</span> to start practices!');
    this.writeLine("----------------------------------------------------------------------");
  }

  writeLine(text, className = "") {
    const line = document.createElement("div");
    line.className = `terminal-line ${className}`;
    line.innerHTML = text;
    this.output.appendChild(line);
    // Smooth scroll to bottom
    this.output.scrollTop = this.output.scrollHeight;
  }

  writePromptLine(commandText) {
    const cleanDir = this.currentDir === `/home/${this.currentUser}` ? "~" : this.currentDir;
    const promptPrefix = `<span class="prompt-user">${this.currentUser}@${this.hostname}</span>:<span class="prompt-dir">${cleanDir}</span>$ `;
    this.writeLine(promptPrefix + commandText, "input-line");
  }

  traverseHistory(direction) {
    if (this.history.length === 0) return;
    
    if (this.historyIndex === -1 && direction === -1) {
      this.historyIndex = this.history.length - 1;
    } else {
      this.historyIndex += direction;
    }

    if (this.historyIndex >= this.history.length) {
      this.historyIndex = -1;
      this.input.value = "";
    } else if (this.historyIndex < 0) {
      this.historyIndex = -1;
      this.input.value = "";
    } else {
      this.input.value = this.history[this.historyIndex];
    }
  }

  autocomplete() {
    const inputValue = this.input.value.trim();
    if (!inputValue) return;

    const parts = inputValue.split(/\s+/);
    const lastWord = parts[parts.length - 1];

    if (parts.length === 1) {
      // Autocomplete command names
      const commands = [
        "ls", "cd", "pwd", "mkdir", "rmdir", "touch", "rm", "cat", "echo", 
        "chmod", "chown", "grep", "wc", "clear", "history", "whoami", 
        "hostname", "uname", "date", "apt", "ps", "top", "challenges", "help"
      ];
      const matches = commands.filter(c => c.startsWith(lastWord));
      if (matches.length === 1) {
        this.input.value = matches[0] + " ";
      } else if (matches.length > 1) {
        this.writeLine(matches.join("   "), "terminal-msg-muted");
      }
    } else {
      // Autocomplete file names in current VFS directory
      const absoluteBase = this.resolvePath(this.currentDir, lastWord);
      // Get directory path and filename fragment
      let dirPath = this.currentDir;
      let fragment = lastWord;

      if (lastWord.includes("/")) {
        const lastSlash = lastWord.lastIndexOf("/");
        dirPath = this.resolvePath(this.currentDir, lastWord.substring(0, lastSlash) || "/");
        fragment = lastWord.substring(lastSlash + 1);
      }

      const files = Object.keys(this.vfs).filter(p => {
        if (p === "/") return false;
        const lastSlash = p.lastIndexOf("/");
        const parent = p.substring(0, lastSlash) || "/";
        const filename = p.substring(lastSlash + 1);
        return parent === dirPath && filename.startsWith(fragment);
      }).map(p => p.substring(p.lastIndexOf("/") + 1));

      if (files.length === 1) {
        // Complete current word
        const before = inputValue.substring(0, inputValue.length - fragment.length);
        const appendType = this.vfs[this.resolvePath(dirPath, files[0])].type === "dir" ? "/" : "";
        this.input.value = before + files[0] + appendType;
      } else if (files.length > 1) {
        this.writeLine(files.join("   "), "terminal-msg-muted");
      }
    }
  }

  // Resolves a relative path to absolute path safely
  resolvePath(current, target) {
    if (!target) return current;
    target = target.trim();
    if (target.startsWith("/")) {
      current = "/";
    }

    const segments = target.split("/").filter(s => s && s !== ".");
    const currentSegments = current.split("/").filter(s => s);

    for (const segment of segments) {
      if (segment === "..") {
        currentSegments.pop();
      } else {
        currentSegments.push(segment);
      }
    }

    return "/" + currentSegments.join("/");
  }

  handleCommand() {
    const rawCmd = this.input.value;
    this.input.value = "";
    this.historyIndex = -1;

    if (!rawCmd.trim()) return;

    this.history.push(rawCmd);
    if (this.history.length > 500) {
      this.history.shift();
    }
    try {
      localStorage.setItem("bash_history", JSON.stringify(this.history));
    } catch (e) {}
    this.writePromptLine(rawCmd);

    // Parse redirections: > (overwrite) and >> (append)
    let commandStr = rawCmd.trim();
    let redirectMode = null; // 'overwrite' or 'append'
    let redirectFile = null;

    if (commandStr.includes(">>")) {
      const idx = commandStr.indexOf(">>");
      redirectMode = "append";
      redirectFile = commandStr.substring(idx + 2).trim();
      commandStr = commandStr.substring(0, idx).trim();
    } else if (commandStr.includes(">")) {
      const idx = commandStr.indexOf(">");
      redirectMode = "overwrite";
      redirectFile = commandStr.substring(idx + 1).trim();
      commandStr = commandStr.substring(0, idx).trim();
    }

    const args = this.tokenizeCommand(commandStr);
    if (args.length === 0) return;

    const baseCmd = args[0];
    let outputBuffer = "";
    let errorBuffer = "";
    let htmlBuffer = "";

    // Command Dispatcher
    try {
      const result = this.executeCommand(baseCmd, args.slice(1));
      if (result) {
        outputBuffer = result.stdout || "";
        errorBuffer = result.stderr || "";
        htmlBuffer = result.html || "";
      }
    } catch (e) {
      errorBuffer = `shell error: internal crash executing '${baseCmd}'\n`;
      console.error(e);
    }

    // Handle Redirection logic or Print to screen
    if (redirectFile && !errorBuffer) {
      const targetAbs = this.resolvePath(this.currentDir, redirectFile);
      const parentSlash = targetAbs.lastIndexOf("/");
      const parentDir = targetAbs.substring(0, parentSlash) || "/";

      if (!this.vfs[parentDir] || this.vfs[parentDir].type !== "dir") {
        this.writeLine(`bash: ${redirectFile}: No such file or directory`, "terminal-msg-error");
      } else {
        if (!this.vfs[targetAbs]) {
          // Create file if missing
          this.vfs[targetAbs] = {
            type: "file",
            permissions: this.defaultPerms(644),
            owner: this.currentUser,
            group: this.currentUser,
            content: ""
          };
        }

        if (this.vfs[targetAbs].type === "dir") {
          this.writeLine(`bash: ${redirectFile}: Is a directory`, "terminal-msg-error");
        } else {
          if (redirectMode === "overwrite") {
            this.vfs[targetAbs].content = outputBuffer;
          } else {
            this.vfs[targetAbs].content += outputBuffer;
          }
          this.updateVfsVisualizer();
        }
      }
    } else {
      // Print stdout and stderr
      if (errorBuffer) {
        this.writeLine(errorBuffer, "terminal-msg-error");
      }
      if (htmlBuffer) {
        // If pre-formatted htmlBuffer is returned, render it directly
        const formatted = htmlBuffer.replace(/\n/g, "<br>");
        this.writeLine(formatted);
      } else if (outputBuffer) {
        // Convert newlines to HTML line breaks
        const formatted = this.escapeHtml(outputBuffer).replace(/\n/g, "<br>");
        this.writeLine(formatted);
      }
    }

    this.updatePrompt();
    this.checkChallengeProgress();
  }

  tokenizeCommand(cmdStr) {
    const matches = cmdStr.match(/"[^"]*"|'[^']*'|[^\s]+/g) || [];
    return matches.map(m => {
      if (m.startsWith('"') && m.endsWith('"')) return m.slice(1, -1);
      if (m.startsWith("'") && m.endsWith("'")) return m.slice(1, -1);
      return m;
    });
  }

  executeCommand(cmd, args) {
    const cmdLower = cmd.toLowerCase().trim();
    // 1. Script mock executions check (e.g. ./setup_web_server.sh)
    if (cmdLower.startsWith("./") || cmdLower.startsWith("/")) {
      const scriptAbs = this.resolvePath(this.currentDir, cmd);
      const script = this.vfs[scriptAbs];
      if (script && script.type === "file") {
        if (!script.permissions.owner.execute) {
          return { stderr: `bash: ${cmd}: Permission denied (missing executable bit)` };
        }
        this.runAnimatedScript(scriptAbs, script.content);
        return null;
      } else {
        return { stderr: `bash: ${cmd}: No such file or directory` };
      }
    }

    // 2. Standard interactive utilities routing
    switch (cmdLower) {
      case "help":
        return {
          stdout: `Available utilities:
  ls           List directory contents (flags: -l, -a, -la)
  cd [path]    Change active directory
  pwd          Print current working directory path
  mkdir [path] Create directory 
  touch [path] Create empty file
  rm [path]    Remove files
  rmdir [path] Remove directories
  cat [path]   Display file contents
  echo [text]  Print text lines to screen
  echo "line" > file     Write/overwrite a file
  echo "line" >> file    Append a line to a file
  chmod [bits] Change file permission bits (e.g. +x, 755)
  chown [user] Change file ownership configurations
  grep [pat]   Search text matching regex patterns
  wc [path]    Count lines/words/chars (flags: -l)
  clear        Clear console terminal log lines
  whoami       Print active session user
  hostname     Print sandbox system hostname
  uname        Print kernel system settings
  date         Print calendar system configurations
  apt install  Mock deploy packages (e.g. apt install docker)
  ps / top     Display operating process statistics
  challenges   List hands-on objectives list
`
        };

      case "clear":
        this.output.innerHTML = "";
        if (typeof this.output.replaceChildren === "function") {
          this.output.replaceChildren();
        }
        setTimeout(() => {
          this.input.focus();
        }, 50);
        return null;

      case "pwd":
        return { stdout: this.currentDir + "\n" };

      case "whoami":
        return { stdout: this.currentUser + "\n" };

      case "hostname":
        return { stdout: this.hostname + "\n" };

      case "uname":
        return { stdout: "Linux linux-sandbox 5.15.0-88-generic #98-Ubuntu SMP x86_64 x86_64 GNU/Linux\n" };

      case "date":
        return { stdout: new Date().toString() + "\n" };

      case "history": {
        if (args[0] === "-c") {
          this.history = [];
          try {
            localStorage.removeItem("bash_history");
          } catch (e) {}
          return { stdout: "History cleared successfully.\n" };
        }
        return { stdout: this.history.map((h, i) => `  ${i + 1}  ${h}`).join("\n") + "\n" };
      }

      case "cd": {
        const dest = args[0] ? args[0] : `/home/${this.currentUser}`;
        const abs = this.resolvePath(this.currentDir, dest);
        if (this.vfs[abs] && this.vfs[abs].type === "dir") {
          this.currentDir = abs;
          return null;
        }
        return { stderr: `cd: ${dest}: No such directory\n` };
      }

      case "ls": {
        const flags = args.filter(a => a.startsWith("-")).join("");
        const paths = args.filter(a => !a.startsWith("-"));
        
        const isLong = flags.includes("l");
        const showHidden = flags.includes("a");

        const targetPath = paths[0] ? this.resolvePath(this.currentDir, paths[0]) : this.currentDir;
        if (!this.vfs[targetPath]) {
          return { stderr: `ls: ${paths[0]}: No such file or directory\n` };
        }

        if (this.vfs[targetPath].type === "file") {
          if (isLong) {
            const f = this.vfs[targetPath];
            const size = f.content ? f.content.length : 0;
            return { stdout: `${this.permsToString("file", f.permissions)} 1 ${f.owner} ${f.group} ${size} May 26 06:30 ${paths[0]}\n` };
          }
          return { stdout: paths[0] + "\n" };
        }

        // Directory listing
        const children = Object.keys(this.vfs).filter(p => {
          if (p === "/") return false;
          const slashIdx = p.lastIndexOf("/");
          const parent = p.substring(0, slashIdx) || "/";
          return parent === targetPath;
        });

        let plainLines = [];
        let htmlLines = [];
        if (showHidden) {
          children.unshift(targetPath + "/..");
          children.unshift(targetPath + "/.");
        }

        for (const childPath of children) {
          const item = this.vfs[childPath] || { type: "dir", permissions: this.defaultPerms(755), owner: "root", group: "root", content: "" };
          let name = childPath.substring(childPath.lastIndexOf("/") + 1);
          if (childPath.endsWith("/.")) name = ".";
          if (childPath.endsWith("/..")) name = "..";

          if (isLong) {
            const size = item.content ? item.content.length : 0;
            const permStr = this.permsToString(item.type, item.permissions);
            const colorClass = item.type === "dir" ? "highlight-blue" : (item.permissions.owner.execute ? "highlight-green" : "");
            const coloredName = colorClass ? `<span class="${colorClass}">${name}</span>` : name;
            
            plainLines.push(`${permStr} 1 ${item.owner} ${item.group} ${size} May 26 06:30 ${name}`);
            htmlLines.push(`${permStr} 1 ${item.owner} ${item.group} ${size} May 26 06:30 ${coloredName}`);
          } else {
            const colorClass = item.type === "dir" ? "highlight-blue" : (item.permissions.owner.execute ? "highlight-green" : "");
            const coloredName = colorClass ? `<span class="${colorClass}">${name}</span>` : name;
            
            plainLines.push(name);
            htmlLines.push(coloredName);
          }
        }

        const separator = isLong ? "\n" : "   ";
        const suffix = isLong ? "\n" : "\n\n";

        return { 
          stdout: plainLines.join(separator) + suffix,
          html: htmlLines.join(separator) + suffix
        };
      }

      case "cat": {
        if (!args[0]) return { stderr: "cat: missing file operand\n" };
        const abs = this.resolvePath(this.currentDir, args[0]);
        const item = this.vfs[abs];
        if (item && item.type === "file") {
          return { stdout: item.content };
        } else if (item && item.type === "dir") {
          return { stderr: `cat: ${args[0]}: Is a directory\n` };
        }
        return { stderr: `cat: ${args[0]}: No such file or directory\n` };
      }

      case "touch": {
        if (!args[0]) return { stderr: "touch: missing file operand\n" };
        const abs = this.resolvePath(this.currentDir, args[0]);
        if (!this.vfs[abs]) {
          this.vfs[abs] = {
            type: "file",
            permissions: this.defaultPerms(644),
            owner: this.currentUser,
            group: this.currentUser,
            content: ""
          };
          this.updateVfsVisualizer();
        }
        return null;
      }

      case "mkdir": {
        if (!args[0]) return { stderr: "mkdir: missing operand\n" };
        const abs = this.resolvePath(this.currentDir, args[0]);
        if (this.vfs[abs]) return { stderr: `mkdir: cannot create directory '${args[0]}': File exists\n` };
        this.vfs[abs] = {
          type: "dir",
          permissions: this.defaultPerms(755),
          owner: this.currentUser,
          group: this.currentUser
        };
        this.updateVfsVisualizer();
        return null;
      }

      case "rm": {
        if (!args[0]) return { stderr: "rm: missing operand\n" };
        const abs = this.resolvePath(this.currentDir, args[0]);
        const item = this.vfs[abs];
        if (!item) return { stderr: `rm: cannot remove '${args[0]}': No such file or directory\n` };
        if (item.type === "dir") return { stderr: `rm: cannot remove '${args[0]}': Is a directory\n` };
        delete this.vfs[abs];
        this.updateVfsVisualizer();
        return null;
      }

      case "rmdir": {
        if (!args[0]) return { stderr: "rmdir: missing operand\n" };
        const abs = this.resolvePath(this.currentDir, args[0]);
        const item = this.vfs[abs];
        if (!item) return { stderr: `rmdir: failed to remove '${args[0]}': No such directory\n` };
        if (item.type !== "dir") return { stderr: `rmdir: failed to remove '${args[0]}': Not a directory\n` };
        
        // Check if empty
        const children = Object.keys(this.vfs).filter(p => p.startsWith(abs + "/"));
        if (children.length > 0) return { stderr: `rmdir: failed to remove '${args[0]}': Directory not empty\n` };
        
        delete this.vfs[abs];
        this.updateVfsVisualizer();
        return null;
      }

      case "echo": {
        return { stdout: args.join(" ") + "\n" };
      }

      case "chmod": {
        if (args.length < 2) return { stderr: "chmod: missing operand\nUsage: chmod [octal/symbolic] [file]\n" };
        const mod = args[0];
        const target = args[1];
        const abs = this.resolvePath(this.currentDir, target);
        const item = this.vfs[abs];

        if (!item) return { stderr: `chmod: cannot access '${target}': No such file or directory\n` };

        if (/^\d{3}$/.test(mod)) {
          item.permissions = this.defaultPerms(parseInt(mod));
        } else if (mod === "+x") {
          item.permissions.owner.execute = true;
          item.permissions.group.execute = true;
          item.permissions.other.execute = true;
        } else if (mod === "-x") {
          item.permissions.owner.execute = false;
          item.permissions.group.execute = false;
          item.permissions.other.execute = false;
        } else {
          return { stderr: `chmod: invalid permission mode '${mod}'\n` };
        }
        this.updateVfsVisualizer();
        return null;
      }

      case "chown": {
        if (args.length < 2) return { stderr: "chown: missing ownership operand\nUsage: chown [user] [file]\n" };
        const user = args[0];
        const target = args[1];
        const abs = this.resolvePath(this.currentDir, target);
        const item = this.vfs[abs];
        if (!item) return { stderr: `chown: cannot access '${target}': No such file or directory\n` };
        item.owner = user;
        this.updateVfsVisualizer();
        return null;
      }

      case "grep": {
        if (args.length < 2) return { stderr: "grep: missing pattern or file operand\n" };
        const pattern = args[0];
        const target = args[1];
        const abs = this.resolvePath(this.currentDir, target);
        const item = this.vfs[abs];

        if (!item) return { stderr: `grep: ${target}: No such file or directory\n` };
        if (item.type === "dir") return { stderr: `grep: ${target}: Is a directory\n` };

        const regex = new RegExp(pattern, "i");
        const lines = item.content.split("\n");
        const matchingLines = lines.filter(l => regex.test(l));

        return { stdout: matchingLines.join("\n") + (matchingLines.length > 0 ? "\n" : "") };
      }

      case "wc": {
        if (!args[0]) return { stderr: "wc: missing file operand\n" };
        const target = args[0];
        const abs = this.resolvePath(this.currentDir, target);
        const item = this.vfs[abs];

        if (!item) return { stderr: `wc: ${target}: No such file or directory\n` };
        if (item.type === "dir") return { stderr: `wc: ${target}: Is a directory\n` };

        const lines = item.content.split("\n").length - 1;
        const words = item.content.split(/\s+/).filter(w => w).length;
        const chars = item.content.length;

        return { stdout: `  ${lines}   ${words}  ${chars} ${target}\n` };
      }

      case "apt":
      case "apt-get": {
        if (args[0] === "install") {
          const pkg = args[1];
          if (!pkg) return { stderr: "apt install: missing package name\n" };
          this.runAnimatedApt(pkg);
          return null;
        }
        return { stdout: "apt options: install [package]\n" };
      }

      case "ps":
        return {
          stdout: `  PID TTY          TIME CMD
    1 pts/0    00:00:02 init
  105 pts/0    00:00:00 systemd-daemon
  405 pts/0    00:00:04 nginx
  802 pts/0    00:00:00 sshd
  901 pts/0    00:00:00 bash (sandbox)
 1024 pts/0    00:00:00 ps
`
        };

      case "top":
        return {
          stdout: `top - 06:35:12 up 2 days, 1:40, 1 user, load average: 0.05, 0.02, 0.00
Tasks:   7 total,   1 running,   6 sleeping
%Cpu(s):  0.8 us,  0.5 sy,  0.0 ni, 98.7 id,  0.0 wa,  0.0 hi
MiB Mem :   7960.5 total,   4215.2 free,   1520.8 used
MiB Swap:   2048.0 total,   2048.0 free,      0.0 used

  PID USER      PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+ COMMAND
  405 root      20   0  145212   8904   4201 S   0.5   0.1   0:04.12 nginx
  901 devops    20   0   18402   4102   3015 R   0.2   0.1   0:00.32 bash
    1 root      20   0    8915   2012   1210 S   0.0   0.0   0:00.02 init
`
        };

      case "challenges": {
        const lines = [
          "======================================================",
          "            DEVOPS SANDBOX OBJECTIVES                 ",
          "======================================================"
        ];
        window.TERMINAL_CHALLENGES.forEach(ch => {
          const status = this.completedChallenges.has(ch.id) ? " [ COMPLETED (✔) ] " : " [ ACTIVE (x) ] ";
          lines.push(`${ch.level}: ${ch.name} - ${status}`);
        });
        lines.push("======================================================");
        return { stdout: lines.join("\n") + "\n" };
      }

      case "tree": {
        if (!this.installedPackages.has("tree")) {
          return { stderr: "bash: tree: command not found (try: apt install tree)\n" };
        }
        const target = args[0] ? this.resolvePath(this.currentDir, args[0]) : this.currentDir;
        if (!this.vfs[target]) {
          return { stderr: `tree: ${args[0]}: No such file or directory\n` };
        }
        if (this.vfs[target].type === "file") {
          return { stdout: `${args[0]}\n\n0 directories, 1 file\n` };
        }
        const treeHtml = this.generateTreeHtml(target);
        const treePlain = treeHtml.replace(/<[^>]*>/g, "");
        return { stdout: treePlain, html: treeHtml + "\n" };
      }

      case "cowsay": {
        if (!this.installedPackages.has("cowsay")) {
          return { stderr: "bash: cowsay: command not found (try: apt install cowsay)\n" };
        }
        const text = args.join(" ") || "Moo!";
        const border = "-".repeat(text.length + 2);
        const speech = ` _${border}_\n< ${text} >\n -${border}-\n        \\   ^__^\n         \\  (oo)\\_______\n            (__)\\       )\\/\\\n                ||----w |\n                ||     ||\n`;
        return { stdout: speech };
      }

      default: {
        const suggestions = {
          "nano": "use echo redirection: echo \"#!/bin/bash\" > script.sh",
          "vim": "use echo redirection: echo \"#!/bin/bash\" > script.sh",
          "vi": "use echo redirection: echo \"#!/bin/bash\" > script.sh",
          "tree": "try: apt install tree",
          "cowsay": "try: apt install cowsay",
          "docker": "try: apt install docker",
          "nginx": "try: apt install nginx",
          "ansible": "try: apt install ansible"
        };
        const hint = suggestions[cmdLower] ? ` (${suggestions[cmdLower]})` : "";
        return { stderr: `bash: ${cmd}: command not found${hint} (type 'help' for terminal manual)\n` };
      }
    }
  }

  // Animated command executor for mock running automation scripts
  runAnimatedScript(scriptPath, content) {
    this.input.disabled = true;
    this.writeLine(`bash: executing local file '${scriptPath}'...`, "terminal-msg-muted");

    const lines = content.split("\n").filter(l => l.trim() && !l.startsWith("#"));
    let idx = 0;

    const runNext = () => {
      if (idx >= lines.length) {
        this.input.disabled = false;
        this.input.focus();
        this.executedScripts.push(scriptPath);
        this.checkChallengeProgress();
        return;
      }

      const rawLine = lines[idx++];
      if (rawLine.startsWith("echo ")) {
        // Clean echoes
        const echoText = rawLine.substring(5).replace(/"/g, "").replace(/'/g, "");
        const formatted = this.escapeHtml(echoText);
        
        let colorClass = "";
        if (formatted.includes("[SUCCESS]")) colorClass = "highlight-green";
        else if (formatted.includes("[INFO]")) colorClass = "highlight-blue";
        else if (formatted.includes("ERROR")) colorClass = "terminal-msg-error";

        this.writeLine(formatted, colorClass);
        setTimeout(runNext, 400);
      } else if (rawLine.startsWith("sleep ")) {
        const secs = parseFloat(rawLine.substring(6)) || 0.5;
        setTimeout(runNext, secs * 800); // Scale down sleep time slightly for nice flow
      } else {
        // Mock command execution text
        this.writeLine(`+ ${rawLine}`, "terminal-msg-muted");
        setTimeout(runNext, 300);
      }
    };

    runNext();
  }

  // Animated apt package installer
  runAnimatedApt(pkg) {
    this.input.disabled = true;
    this.writeLine(`Reading package indexes... Done`);
    this.writeLine(`Resolving dependencies... Done`);
    this.writeLine(`The following NEW packages will be installed:`);
    this.writeLine(`  <span class="highlight-blue">${pkg}</span>`);
    
    let progress = 0;
    const barLength = 40;
    
    const drawProgress = () => {
      if (progress > 100) {
        this.installedPackages.add(pkg.toLowerCase().trim());
        this.writeLine(`Unpacking ${pkg} configurations... Done`);
        this.writeLine(`Setting up binaries and environment libraries... Done`);
        this.writeLine(`[SUCCESS] Package <strong class="highlight-green">${pkg}</strong> has been successfully installed in system path!`, "highlight-green");
        this.input.disabled = false;
        this.input.focus();
        return;
      }
      
      const loaded = Math.round((progress / 100) * barLength);
      const dots = barLength - loaded;
      const barStr = `Progress: [${"=".repeat(loaded)}${".".repeat(dots)}] ${progress}%`;
      
      // Update or print last line
      if (progress > 0) {
        this.output.removeChild(this.output.lastChild);
      }
      this.writeLine(barStr, "terminal-msg-muted");
      
      progress += 10;
      setTimeout(drawProgress, 250);
    };

    setTimeout(drawProgress, 500);
  }

  checkChallengeProgress() {
    if (this.activeChallengeIndex >= window.TERMINAL_CHALLENGES.length) return;

    const currentChallenge = window.TERMINAL_CHALLENGES[this.activeChallengeIndex];
    if (currentChallenge.validate(this, this.history)) {
      this.completedChallenges.add(currentChallenge.id);
      
      // Cyberpunk success notification
      this.writeLine(`\n🏆 [OBJECTIVE MET] Level ${currentChallenge.id} complete: ${currentChallenge.name}!`, "highlight-green font-bold text-shadow-glow");
      this.writeLine(`Congratulations! You've unlocked the next tier of DevOps challenges.\n`, "highlight-green");

      // Trigger standard retro cyber reward sound in client
      try {
        const audio = new Audio("https://actions.google.com/sounds/v1/alarms/digital_watch_alarm_long.ogg");
        audio.volume = 0.15;
        audio.play().catch(() => {}); // prevent browser autoplay block error
      } catch (e) {}

      this.activeChallengeIndex++;
      this.renderChallenges();
      this.updateStats();
    }
  }

  renderChallenges() {
    const listContainer = document.getElementById("challengesList");
    if (!listContainer) return;

    listContainer.innerHTML = "";
    
    window.TERMINAL_CHALLENGES.forEach((ch, idx) => {
      const isCompleted = this.completedChallenges.has(ch.id);
      const isActive = idx === this.activeChallengeIndex;
      
      let stateClass = "locked";
      let statusIcon = "🔒";

      if (isCompleted) {
        stateClass = "completed";
        statusIcon = "✔";
      } else if (isActive) {
        stateClass = "active";
        statusIcon = "⚡";
      }

      const item = document.createElement("div");
      item.className = `challenge-item ${stateClass}`;
      
      item.innerHTML = `
        <div class="challenge-header">
          <span class="challenge-badge">${ch.level}</span>
          <span class="challenge-status">${statusIcon}</span>
        </div>
        <h3 class="challenge-title">${ch.name}</h3>
        <p class="challenge-desc">${ch.description}</p>
        
        ${isActive ? `
          <div class="challenge-guide">
            <strong>Actionable checklist:</strong>
            <ul>
              ${ch.instructions.map(ins => `<li>${ins}</li>`).join("")}
            </ul>
            <div class="challenge-hint">💡 Hint: ${ch.hint}</div>
          </div>
        ` : ""}
      `;

      listContainer.appendChild(item);
    });

    // Handle end game state
    if (this.activeChallengeIndex >= window.TERMINAL_CHALLENGES.length) {
      const victoryCard = document.createElement("div");
      victoryCard.className = "challenge-item victory text-center";
      victoryCard.innerHTML = `
        <div style="font-size: 3rem; margin-bottom: 1rem;">👑</div>
        <h3 class="highlight-green font-bold text-shadow-glow">DevOps Shell Scripting Master!</h3>
        <p style="margin-top: 0.5rem; color: var(--text-secondary);">
          You successfully cleared all hands-on exercises, mastered Unix hierarchical filesystems, populating redirection assets, securing script access permissions, and automated deployments!
        </p>
        <button class="btn primary" onclick="location.reload()" style="margin-top: 1.25rem;">Restart Sandbox Challenges</button>
      `;
      listContainer.appendChild(victoryCard);
    }
  }

  updateStats() {
    if (!this.stats) return;
    this.stats.innerHTML = `
      <div><strong>${this.completedChallenges.size} / ${window.TERMINAL_CHALLENGES.length}</strong><span>Cleared</span></div>
      <div><strong>${this.history.length}</strong><span>Ran</span></div>
      <div><strong>${Object.keys(this.vfs).length}</strong><span>VFS Nodes</span></div>
    `;
  }

  updateVfsVisualizer() {
    const listNode = document.getElementById("vfsList");
    if (!listNode) return;

    listNode.innerHTML = "";

    // Sort absolute paths alphabetically
    const paths = Object.keys(this.vfs).sort();

    paths.forEach(p => {
      const item = this.vfs[p];
      const name = p === "/" ? "/" : p.substring(p.lastIndexOf("/") + 1);
      const isDir = item.type === "dir";

      const slashMatches = p.match(/\//g) || [];
      const depth = slashMatches.length - (p === "/" ? 1 : 0);

      const li = document.createElement("div");
      li.className = `vfs-node-line ${isDir ? "vfs-dir" : "vfs-file"}`;
      li.style.paddingLeft = `${depth * 1.25}rem`;

      const permStr = this.permsToString(item.type, item.permissions);
      const icon = isDir ? "📁" : (item.permissions.owner.execute ? "⚙" : "📄");

      li.innerHTML = `
        <span class="vfs-node-perms">[${permStr}]</span>
        <span class="vfs-node-owner">${item.owner}:${item.group}</span>
        <span class="vfs-node-name">${icon} ${name}</span>
      `;

      // Quick trigger to type cat / cd command when file/directory is clicked!
      li.addEventListener("click", () => {
        if (isDir) {
          this.input.value = `cd ${p}`;
        } else {
          this.input.value = `cat ${p}`;
        }
        this.input.focus();

        // Auto-close slide drawer on click ONLY on smaller screens (width <= 768px) where the drawer covers the full screen.
        // On wider viewports, keep the drawer open so users can easily browse multiple files/folders continuously!
        if (document.body.classList.contains("terminal-maximized-active") && window.innerWidth <= 768) {
          const controlColumn = document.getElementById("controlColumn");
          const drawerToggle = document.getElementById("drawerToggle");
          if (controlColumn && drawerToggle) {
            controlColumn.classList.remove("drawer-open");
            drawerToggle.style.display = "flex";
          }
        }
      });

      listNode.appendChild(li);
    });

    this.updateStats();
  }

  generateTreeHtml(dirPath) {
    const getChildren = (parentDir) => {
      return Object.keys(this.vfs).filter(p => {
        if (p === "/" || p === parentDir) return false;
        const lastSlash = p.lastIndexOf("/");
        const parent = p.substring(0, lastSlash) || "/";
        return parent === parentDir;
      }).map(p => p.substring(p.lastIndexOf("/") + 1)).sort();
    };

    const buildTree = (currentDir, prefix = "") => {
      const children = getChildren(currentDir);
      let result = "";
      children.forEach((child, idx) => {
        const isLast = idx === children.length - 1;
        const childPath = currentDir === "/" ? `/${child}` : `${currentDir}/${child}`;
        const isDir = this.vfs[childPath].type === "dir";
        const colorClass = isDir ? "highlight-blue" : (this.vfs[childPath].permissions.owner.execute ? "highlight-green" : "");
        
        let formattedName = child;
        if (colorClass) {
          formattedName = `<span class="${colorClass}">${child}</span>`;
        }

        result += `${prefix}${isLast ? "└── " : "├── "}${formattedName}\n`;
        if (isDir) {
          result += buildTree(childPath, prefix + (isLast ? "    " : "│   "));
        }
      });
      return result;
    };

    const cleanName = dirPath === "/" ? "/" : dirPath.substring(dirPath.lastIndexOf("/") + 1);
    return `<span class="highlight-blue">${cleanName}</span>\n` + buildTree(dirPath);
  }

  _addLearnScripts() {
    // Directory entry
    this.vfs["/home/devops/scripts/learn"] = {
      type: "dir", permissions: this.defaultPerms(755), owner: "devops", group: "devops"
    };

    const scripts = [
      {
        name: "README.md",
        perms: 644,
        content: `# Shell Scripting Learning Path

Use these 15 scripts in order, from basic Bash syntax to loops and associative arrays.

Recommended commands:
  ls -l
  cat 01_basic.sh
  ./01_basic.sh

If you want to create your own practice script in this browser sandbox, use echo redirection:
  echo '#!/bin/bash' > my_script.sh
  echo 'echo "Practice time"' >> my_script.sh
  chmod +x my_script.sh
  ./my_script.sh

Lessons:
  01_basic.sh              Basic shebang and echo
  02_comments.sh           Single-line and multi-line comments
  03_vardemo.sh            Variables and command substitution
  04_constvar.sh           Readonly variables
  05_arrays.sh             Indexed arrays and array slicing
  06_strings.sh            String length, slicing, replace, case conversion
  07_user_int.sh           User input with read
  08_arith_ops.sh          Arithmetic operations
  09_condnal_state.sh      If, elif, else, and nested conditions
  10_case.sh               Case statements
  11_logical_ops.sh        AND, OR, and NOT operators
  12_forloop1.sh           For loops over values and ranges
  13_forloop2.sh           For loops over arrays
  14_for_with_array.sh     C-style loop with array indexes
  15_keyValue.sh           Associative arrays and key-value traversal

Add script 16 onward when you are ready for while loops, functions, arguments, exits, traps, and real automation projects.
`
      },
      {
        name: "01_basic.sh",
        perms: 755,
        content: `#!/bin/bash

echo "hello World!!"
`
      },
      {
        name: "02_comments.sh",
        perms: 755,
        content: `#!/bin/bash

echo "Checking comments"

# This is single line comment

<<comment
This is multi-line
comments

comment
`
      },
      {
        name: "03_vardemo.sh",
        perms: 755,
        content: `#!/bin/bash

#Script to show how to use variables

a=10
name="Priyanshu Kumar Sharma"
age="19"

echo "My name is $name and my age is $age"

#Var to store the output of a command
hostname=$(hostname)

name="Tony Stark"
echo "My name is $name"
echo "Name of this machine is $hostname"
`
      },
      {
        name: "04_constvar.sh",
        perms: 755,
        content: `#!/bin/bash

#Constant variable
readonly name="Priyanshu K Sharma"
echo $name

#Try to change variable value will throw: line X: name: readonly variable
name="Sharma"
`
      },
      {
        name: "05_arrays.sh",
        perms: 755,
        content: `#!/bin/bash

#Arrays - How to define an array
myArray=(1 2 30.5 Hello "Hey man")
echo "All the values in array are \${myArray[*]}"

#How to get values at specific index
echo "Values at index 0 is \${myArray[0]}"
echo "Values at index 4 is \${myArray[4]}"

#How to find no of values in array
echo "Length of the array is \${#myArray[*]}"

#Slice from index 2, take 2 items
echo "Slice [2:2] => \${myArray[*]:2:2}"

#Append new values
myArray+=(New 30 40)
echo "Updated array: \${myArray[*]}"

#Arrays key-value
myArray1=([1]=A [2]=B [3]=C [name]=paul)
echo "Key 'name' => \${myArray1[name]}"
`
      },
      {
        name: "06_strings.sh",
        perms: 755,
        content: `#!/bin/bash

myVar="Hello World"

length=\${#myVar}
echo "Length of the string is $length"

#Slicing
echo "First character: \${myVar:0:1}"
echo "Last character:  \${myVar:$length-1:1}"

#Slice from index 4 to 14
slice=\${myVar:4:11}
echo "Sliced string is $slice"

#Replace
echo "Replace World with Universe: \${myVar/World/Universe}"

#Upper case and lower case
Upper=\${myVar^^}
lower=\${myVar,,}
echo "Upper: $Upper | Lower: $lower"
`
      },
      {
        name: "07_user_int.sh",
        perms: 755,
        content: `#!/bin/bash

read -p "Enter your name: " name
echo "Your name is $name"
`
      },
      {
        name: "08_arith_ops.sh",
        perms: 755,
        content: `#!/bin/bash

x=10
y=3

let mul=$x*$y
echo "Product is: $mul"

sum=$((x+y))
echo "Sum is: $sum"

difference=$(($x-$y))
echo "Difference is: $difference"

division=$(($x/$y))
echo "Division (integer) is: $division"
`
      },
      {
        name: "09_condnal_state.sh",
        perms: 755,
        content: `#!/bin/bash

#Conditional statements - if/elif/else
marks=75

if [ $marks -gt 80 ]
then
    echo "You got A grade"
elif [ $marks -gt 60 ]
then
    echo "You got B grade"
elif [ $marks -gt 40 ]
then
    echo "You got C grade"
else
    echo "You failed"
fi

#nested if-else
age=25
if [ $age -lt 18 ]
then
    echo "You are a minor"
else
    if [ $age -ge 18 ] && [ $age -le 60 ]
    then
        echo "You are an adult"
    else
        echo "You are a senior citizen"
    fi
fi
`
      },
      {
        name: "10_case.sh",
        perms: 755,
        content: `#!/bin/bash

echo "Choose an option:"
echo "  a) See current date"
echo "  b) See current time"
echo "  c) See current directory"

choice="a"
case $choice in
    a)
        echo "Current date: $(date +%D)"
        ;;
    b)
        echo "Current time: $(date +%T)"
        ;;
    c)
        echo "Current directory: $(pwd)"
        ;;
    *)
        echo "Invalid choice"
        ;;
esac
`
      },
      {
        name: "11_logical_ops.sh",
        perms: 755,
        content: `#!/bin/bash

# Logical Operators: &&  ||  !

age=20
country="India"

# && - Logical AND (both must be true)
if [ $age -ge 18 ] && [ $country == "India" ]
then
    echo "[AND]  You are eligible to vote in India"
else
    echo "[AND]  Not eligible"
fi

# || - Logical OR (at least one must be true)
if [ $age -ge 18 ] || [ $country == "India" ]
then
    echo "[OR]   You are eligible to vote"
else
    echo "[OR]   Not eligible"
fi

# ! - Logical NOT (negation)
if [ ! $age -ge 18 ]
then
    echo "[NOT]  You are not eligible to vote"
else
    echo "[NOT]  You are eligible to vote"
fi
`
      },
      {
        name: "12_forloop1.sh",
        perms: 755,
        content: `#!/bin/bash

#For Loop - iterating over values
for i in 1 2 3 4 5
do
    echo "Number: $i"
done

#Loop in Strings
for j in Raju Sham Baburao
do
    echo "Name: $j"
done

#Loop in a range
for i in {1..5}
do
    echo "Range item: $i"
done
`
      },
      {
        name: "13_forloop2.sh",
        perms: 755,
        content: `#!/bin/bash

#Reading values from an array using for loop
items=("apple" "banana" "cherry" "date" "elderberry")

for item in "\${items[@]}"
do
    echo "Fruit: $item"
done
`
      },
      {
        name: "14_for_with_array.sh",
        perms: 755,
        content: `#!/bin/bash

myArray=(1 2 3 Hello Hi)

length=\${#myArray[*]}

for((i=0;i<$length;i++))
do
    echo "Array item [$i]: \${myArray[$i]}"
done
`
      },
      {
        name: "15_keyValue.sh",
        perms: 755,
        content: `#!/bin/bash

#How to store key-value pairs using associative arrays
declare -A myArray2
myArray2=([name]=Priyanshu [age]=21 [city]=Paris)

echo "Name: \${myArray2[name]}"
echo "Age:  \${myArray2[age]}"
echo "City: \${myArray2[city]}"

#Iterate over all keys
for key in "\${!myArray2[@]}"
do
    echo "Key: $key => Value: \${myArray2[$key]}"
done
`
      }
    ];

    scripts.forEach(s => {
      this.vfs[`/home/devops/scripts/learn/${s.name}`] = {
        type: "file",
        permissions: this.defaultPerms(s.perms),
        owner: "devops",
        group: "devops",
        content: s.content
      };
    });
  }

  escapeHtml(unsafe) {
    return unsafe
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
}

// Global Launcher
document.addEventListener("DOMContentLoaded", () => {
  const output = document.getElementById("terminalOutput");
  const input = document.getElementById("terminalInput");
  const prompt = document.getElementById("terminalPrompt");
  const stats = document.getElementById("terminalStats");

  if (output && input && prompt) {
    const shell = new VirtualShell(output, input, prompt, stats);
    window.VIRTUAL_SHELL = shell;
    shell.renderChallenges();
  }
});
