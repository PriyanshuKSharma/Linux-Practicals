const LINUX_NOTES = [
  {
    id: "intro",
    title: "Linux & Unix System Architecture",
    track: "foundation",
    summary: "Understand Linux history, architecture layering (Kernel, Shell, User space), and why it dominates the DevOps ecosystem.",
    readTime: "4 min",
    videoTimestamp: "e01GGTKmtpc&t=3s",
    content: {
      overview: "Linux is a free, open-source, Unix-like operating system kernel first released by Linus Torvalds in 1991. In the DevOps landscape, Linux is the foundational standard powering virtually all cloud infrastructure, container engines (Docker), virtual machines, and deployment pipelines.",
      sections: [
        {
          title: "Operating System Layering",
          text: "A standard Linux system is structured into four main conceptual layers:<br>1. <strong>Hardware</strong>: Physical components (CPU, RAM, Disks, NICs).<br>2. <strong>Kernel</strong>: The core engine of the OS. Manages memory, processes, system calls, device drivers, and directly interfaces with hardware.<br>3. <strong>Shell</strong>: The command interpreter. Serves as the user interface to execute commands by making system calls to the Kernel (e.g. bash, sh, zsh).<br>4. <strong>Application/User Space</strong>: The workspace where user applications, databases, Nginx/Apache servers, and CLI utilities run."
        },
        {
          title: "Why Linux is Essential for DevOps",
          text: "DevOps engineers rely on Linux for:<br>• <strong>Open Source Stability</strong>: No licensing bottlenecks, highly customizable, and extremely stable (runs for years without reboots).<br>• <strong>Command-Line Centric</strong>: Allows headless administration of servers, perfect for remote execution.<br>• <strong>Security model</strong>: Designed as a multi-user OS with robust permission controls, preventing unauthorized access."
        }
      ],
      commands: [
        {
          cmd: "uname -a",
          desc: "Display comprehensive system hardware and kernel release information."
        },
        {
          cmd: "cat /etc/os-release",
          desc: "Display detailed official Linux distribution version and identifiers."
        }
      ]
    }
  },
  {
    id: "fhs",
    title: "File System Hierarchy Standard (FHS)",
    track: "foundation",
    summary: "Navigate the standard directory structure of Linux. Understand what /etc, /var, /bin, /usr, and /home are for.",
    readTime: "5 min",
    videoTimestamp: "e01GGTKmtpc&t=600s",
    content: {
      overview: "Unlike Windows which uses drive letters (C:, D:), Linux structures all directories and files under a single root directory represented by a single forward slash `/`. The File System Hierarchy Standard (FHS) defines the structure and contents of Unix-like operating systems.",
      sections: [
        {
          title: "Core System Directories",
          text: "Here is a breakdown of the standard directories crucial for DevOps engineers:<br>• <strong>`/` (Root)</strong>: The top-level starting point of the entire file system hierarchy.<br>• <strong>`/bin` & `/sbin`</strong>: Essential binary command utilities for all users (bin) and system administration commands (sbin, like systemctl, ifconfig).<br>• <strong>`/etc`</strong>: System configuration files (e.g., `/etc/nginx/nginx.conf`, `/etc/passwd`). All config resides here.<br>• <strong>`/var`</strong>: Variable files that change frequently during runtime, specifically logs (`/var/log`) and database files.<br>• <strong>`/home`</strong>: Personal home directories for standard users (e.g., `/home/priyanshu`).<br>• <strong>`/root`</strong>: The isolated home directory of the superuser (root)."
        },
        {
          title: "Runtime & Dynamic Directories",
          text: "• <strong>`/tmp`</strong>: Temporary files created by programs. Cleared automatically on system reboots.<br>• <strong>`/opt`</strong>: Optional add-on application software packages (e.g., custom enterprise installations).<br>• <strong>`/dev`</strong>: Device files. Linux treats everything as a file, including hardware like hard drives (`/dev/sda`).<br>• <strong>`/proc`</strong>: A virtual filesystem containing run-time information about the system and current active processes."
        }
      ],
      commands: [
        {
          cmd: "ls -ld /etc /var/log /tmp",
          desc: "List directories directly to inspect their file paths and metadata properties."
        },
        {
          cmd: "df -h",
          desc: "Show available disk space on all mounted filesystems in human-readable format."
        }
      ]
    }
  },
  {
    id: "basic-commands",
    title: "File & Directory Navigation",
    track: "foundation",
    summary: "Master navigation and listing commands. Learn to create, copy, move, and delete files and directories safely.",
    readTime: "5 min",
    videoTimestamp: "e01GGTKmtpc&t=1200s",
    content: {
      overview: "Operating via the command line requires familiarity with directory navigation and file manipulation. As a DevOps engineer, you will manage files, write scripts, and configure application systems using these basic building block commands.",
      sections: [
        {
          title: "Navigation & Listing",
          text: "• <strong>`pwd` (Print Working Directory)</strong>: Shows exactly where you currently are in the filesystem.<br>• <strong>`cd` (Change Directory)</strong>: Navigation command. `cd ..` goes up one level, `cd ~` goes to the current user's home directory.<br>• <strong>`ls` (List)</strong>: Lists files. Common flags:<br>&nbsp;&nbsp;&nbsp;&nbsp;- `-l`: Long listing format (shows size, permissions, owner, timestamp).<br>&nbsp;&nbsp;&nbsp;&nbsp;- `-a`: Show hidden files (files starting with a dot, like `.bashrc`).<br>&nbsp;&nbsp;&nbsp;&nbsp;- `-h`: Combined with `-l` to show human-readable file sizes."
        },
        {
          title: "File & Directory Operations",
          text: "• <strong>`mkdir` (Make Directory)</strong>: Use `mkdir -p parent/child` to create nested directory structures automatically.<br>• <strong>`touch`</strong>: Creates empty files or updates existing file timestamps.<br>• <strong>`cp` (Copy)</strong>: Copy files. Use `cp -r` to copy directories recursively.<br>• <strong>`mv` (Move/Rename)</strong>: Moves files to another directory, or renames them in-place.<br>• <strong>`rm` (Remove)</strong>: Delete files. Use `rm -rf` to delete directories recursively and forcefully. <em>Caution: irreversible!</em>"
        }
      ],
      commands: [
        {
          cmd: "pwd",
          desc: "Print current working directory absolute path."
        },
        {
          cmd: "mkdir -p webapp/src webapp/assets",
          desc: "Create nested directories with parents automatically in one command."
        },
        {
          cmd: "ls -la webapp",
          desc: "Show all contents of the created directory including hidden metadata files."
        }
      ]
    }
  },
  {
    id: "users-groups",
    title: "User & Group Administration",
    track: "system-admin",
    summary: "Add, modify, and delete users and groups. Understand the structure of /etc/passwd and manage root access with sudo.",
    readTime: "5 min",
    videoTimestamp: "e01GGTKmtpc&t=2100s",
    content: {
      overview: "Linux is a multi-user operating system. Managing users, service accounts, and system groups is crucial for maintaining security and isolation on production servers.",
      sections: [
        {
          title: "User & Group Creation",
          text: "• <strong>`useradd`</strong>: Adds a new user account (e.g. `sudo useradd devops_user`). Use `-m` to create a home directory.<br>• <strong>`passwd`</strong>: Sets or changes passwords for users (`sudo passwd devops_user`).<br>• <strong>`groupadd`</strong>: Creates a new user group (`sudo groupadd developers`).<br>• <strong>`usermod`</strong>: Modifies an existing user. Very common to add users to groups:<br>&nbsp;&nbsp;&nbsp;&nbsp;`sudo usermod -aG developers devops_user` (appends group, leaving other groups intact).<br>• <strong>`userdel` & `groupdel`</strong>: Deletes user or group accounts. Use `userdel -r` to delete their home directory."
        },
        {
          title: "Security Files & Superuser Access",
          text: "• <strong>`/etc/passwd`</strong>: Stores user account details (username, UID, GID, home dir, default shell).<br>• <strong>`/etc/shadow`</strong>: Stores encrypted user passwords securely, accessible only by root.<br>• <strong>`/etc/group`</strong>: Stores group membership information.<br>• <strong>`sudo` (Superuser Do)</strong>: Executes commands with root privileges. Root access configurations are stored in the `/etc/sudoers` file, editable using the `visudo` command."
        }
      ],
      commands: [
        {
          cmd: "sudo useradd -m -s /bin/bash priyanshu",
          desc: "Add user 'priyanshu' with a home directory and default bash shell."
        },
        {
          cmd: "sudo usermod -aG sudo priyanshu",
          desc: "Add user 'priyanshu' to the 'sudo' group to grant root administration capabilities."
        },
        {
          cmd: "tail -n 3 /etc/passwd",
          desc: "Check the last 3 accounts added to the system user registry."
        }
      ]
    }
  },
  {
    id: "permissions-basics",
    title: "Permissions & Ownership (rwx)",
    track: "system-admin",
    summary: "Decode rwxrwxrwx file permissions. Master chmod and chown to manage reading, writing, and executing.",
    readTime: "6 min",
    videoTimestamp: "e01GGTKmtpc&t=3000s",
    content: {
      overview: "Every file and directory in Linux has permission settings that govern who can read, write, or execute it. Managing these permissions correctly prevents security vulnerabilities in application deployment pipelines.",
      sections: [
        {
          title: "Decoding Permissions (rwx)",
          text: "When you run `ls -l`, you see a string like `-rwxr-xr--`. Let's decode it:<br>• The 1st character indicates the type: `-` for a file, `d` for a directory.<br>• The next 9 characters are divided into 3 groups of 3:<br>&nbsp;&nbsp;&nbsp;&nbsp;1. <strong>User/Owner (u)</strong>: Permissions for the user who owns the file.<br>&nbsp;&nbsp;&nbsp;&nbsp;2. <strong>Group (g)</strong>: Permissions for users in the file's assigned group.<br>&nbsp;&nbsp;&nbsp;&nbsp;3. <strong>Others (o)</strong>: Permissions for all other users on the system.<br><br>Permissions values:<br>• <strong>`r` (Read)</strong>: View file content, list directory contents (value = 4).<br>• <strong>`w` (Write)</strong>: Edit file content, create/delete files inside directory (value = 2).<br>• <strong>`x` (Execute)</strong>: Run file as script/program, enter directory with cd (value = 1)."
        },
        {
          title: "Modifying Permissions & Ownership",
          text: "• <strong>`chmod` (Change Mode)</strong>: Updates permissions. Can be symbolic or numeric:<br>&nbsp;&nbsp;&nbsp;&nbsp;- <em>Symbolic</em>: `chmod u+x script.sh` (adds execute to owner).<br>&nbsp;&nbsp;&nbsp;&nbsp;- <em>Numeric</em>: `chmod 755 script.sh` (User=7 (rwx), Group=5 (r-x), Others=5 (r-x)).<br>• <strong>`chown` (Change Owner)</strong>: Modifies file owner and group:<br>&nbsp;&nbsp;&nbsp;&nbsp;`sudo chown nginx:nginx /var/www/html/index.html` (Sets owner Nginx, group Nginx).<br>• <strong>`chgrp`</strong>: Modifies the group ownership separately."
        }
      ],
      commands: [
        {
          cmd: "chmod 755 deploy.sh",
          desc: "Grant rwx to owner, and r-x to group and others (standard script permission)."
        },
        {
          cmd: "sudo chown -R www-data:www-data /var/www/html",
          desc: "Recursively change owner and group of web directory to Apache/Nginx user."
        }
      ]
    }
  },
  {
    id: "permissions-advanced",
    title: "Advanced Permissions: SUID, SGID & Umask",
    track: "system-admin",
    summary: "Understand special execution flags (SUID, SGID, Sticky bit) and control default permissions using umask.",
    readTime: "5 min",
    videoTimestamp: "e01GGTKmtpc&t=3900s",
    content: {
      overview: "Standard permissions are sometimes not enough. SUID, SGID, and Sticky bits handle special system administrative privileges, while Umask controls the default permissions of newly created files.",
      sections: [
        {
          title: "Special Permission Flags",
          text: "• <strong>SUID (Set User ID)</strong>: The file executes with the permissions of the file owner rather than the user running it. Indicated by an `s` in owner position (e.g. `/usr/bin/passwd` has SUID, allowing users to update their passwords). Numeric representation is 4000.<br>• <strong>SGID (Set Group ID)</strong>: Executed files inherit group permissions. On a directory, files created inside inherit the parent directory's group automatically. Indicated by `s` in group position. Numeric representation is 2000.<br>• <strong>Sticky Bit</strong>: Applied to directories. Only the file owner, directory owner, or root user can delete or rename files inside. Used for shared spaces like `/tmp`. Indicated by `t` in others position. Numeric representation is 1000."
        },
        {
          title: "Umask (User Mask)",
          text: "Umask defines default permissions for newly created files/directories. It is subtracted from maximum permissions (Files max = 666, Directories max = 777).<br>• If umask is `022`:<br>&nbsp;&nbsp;&nbsp;&nbsp;- New file gets: 666 - 022 = 644 (`rw-r--r--`).<br>&nbsp;&nbsp;&nbsp;&nbsp;- New directory gets: 777 - 022 = 755 (`rwxr-xr-x`).<br>• If umask is `077`: New files get 600 (`rw-------`), completely private."
        }
      ],
      commands: [
        {
          cmd: "sudo chmod +t /var/shared_directory",
          desc: "Apply the Sticky Bit to ensure users can only delete their own files."
        },
        {
          cmd: "umask",
          desc: "Display the current active user shell default permission mask."
        }
      ]
    }
  },
  {
    id: "viewing-searching",
    title: "Viewing Files & Pattern Matching",
    track: "foundation",
    summary: "Use cat, less, head, and tail to inspect logs. Master find and grep for powerful pattern matching.",
    readTime: "5 min",
    videoTimestamp: "e01GGTKmtpc&t=4500s",
    content: {
      overview: "Inspecting logs, searching for system errors, and locating configuration files are daily tasks for DevOps engineers. Knowing how to efficiently parse text files is vital.",
      sections: [
        {
          title: "Viewing File Contents",
          text: "• <strong>`cat` (Concatenate)</strong>: Displays entire file contents in the console. Best for small files.<br>• <strong>`less`</strong>: Interactive pager. Allows scrolling up and down, searching (`/pattern`), and navigating large logs.<br>• <strong>`head`</strong>: Displays the first 10 lines of a file (`head -n 20 file.txt`).<br>• <strong>`tail`</strong>: Displays the last 10 lines of a file. Essential DevOps flag:<br>&nbsp;&nbsp;&nbsp;&nbsp;`tail -f /var/log/nginx/error.log` (follows log in real-time, printing new entries as they arrive)."
        },
        {
          title: "Finding Files & Grepping Text",
          text: "• <strong>`find`</strong>: Searches for files in the directory tree based on criteria:<br>&nbsp;&nbsp;&nbsp;&nbsp;`find /etc -name '*.conf'` (finds all .conf files inside /etc directory).<br>• <strong>`grep` (Global Regular Expression Print)</strong>: Searches files for a matching text pattern:<br>&nbsp;&nbsp;&nbsp;&nbsp;- `grep 'ERROR' /var/log/syslog` (finds syslog lines containing 'ERROR').<br>&nbsp;&nbsp;&nbsp;&nbsp;- `-i`: Case-insensitive search.<br>&nbsp;&nbsp;&nbsp;&nbsp;- `-r`: Recursive search in all directory files.<br>&nbsp;&nbsp;&nbsp;&nbsp;- `-v`: Inverse match (lines NOT containing pattern)."
        }
      ],
      commands: [
        {
          cmd: "tail -n 50 -f /var/log/syslog",
          desc: "Follow the system log in real-time starting with the last 50 entries."
        },
        {
          cmd: "find . -type f -name 'setup*.sh'",
          desc: "Locate all regular files in the current folder whose names start with 'setup'."
        },
        {
          cmd: "grep -ri 'failed' /var/log/",
          desc: "Recursively search all log files for case-insensitive occurrences of 'failed'."
        }
      ]
    }
  },
  {
    id: "networking-basics",
    title: "DevOps Networking Utilities",
    track: "networking",
    summary: "Check connectivity with ping, query web servers with curl/wget, and inspect local IP configurations.",
    readTime: "4 min",
    videoTimestamp: "e01GGTKmtpc&t=5400s",
    content: {
      overview: "DevOps pipelines frequently interact with remote services, REST APIs, and external servers. Troubleshooting network connectivity issues is a core administrative skill.",
      sections: [
        {
          title: "Inspecting Local IP & Routes",
          text: "• <strong>`ip addr` (or `ifconfig`)</strong>: Displays active network interfaces, hardware MAC addresses, and assigned IP addresses.<br>• <strong>`ip route`</strong>: Shows local routing tables and gateway configurations."
        },
        {
          title: "Network Connectivity & Data Fetching",
          text: "• <strong>`ping`</strong>: Sends ICMP Echo Requests to verify if a remote server or domain is reachable over the network.<br>• <strong>`curl` (Client URL)</strong>: Powerful CLI data transfer tool. DevOps uses:<br>&nbsp;&nbsp;&nbsp;&nbsp;- `curl http://localhost` (inspect Nginx web output).<br>&nbsp;&nbsp;&nbsp;&nbsp;- `curl -I http://google.com` (shows HTTP response headers only).<br>&nbsp;&nbsp;&nbsp;&nbsp;- `-o file.html` (saves downloaded response to a file).<br>• <strong>`wget`</strong>: Directly downloads files from web servers over HTTP/HTTPS/FTP."
        }
      ],
      commands: [
        {
          cmd: "ip addr show eth0",
          desc: "Display detailed networking configuration for interface 'eth0'."
        },
        {
          cmd: "curl -I https://www.google.com",
          desc: "Fetch response header headers from Google server using HTTP."
        },
        {
          cmd: "ping -c 4 8.8.8.8",
          desc: "Ping Google Public DNS server 4 times to test internet latency."
        }
      ]
    }
  },
  {
    id: "networking-advanced",
    title: "Ports, Sockets & SSH Access",
    track: "networking",
    summary: "Analyze listening ports with netstat/ss, test port reachability with telnet, and connect securely via SSH.",
    readTime: "5 min",
    videoTimestamp: "e01GGTKmtpc&t=6100s",
    content: {
      overview: "Security is paramount. DevOps engineers must know which network ports are open on an application server and how to establish secure encrypted shell connections.",
      sections: [
        {
          title: "Monitoring Ports & Sockets",
          text: "• <strong>`netstat` / `ss`</strong>: Lists active network sockets and listening ports on the host system. Crucial flags:<br>&nbsp;&nbsp;&nbsp;&nbsp;- `-t`: Show TCP sockets.<br>&nbsp;&nbsp;&nbsp;&nbsp;- `-u`: Show UDP sockets.<br>&nbsp;&nbsp;&nbsp;&nbsp;- `-l`: Show listening sockets (services waiting for connections).<br>&nbsp;&nbsp;&nbsp;&nbsp;- `-n`: Show numerical port values (e.g. 80 instead of http).<br>&nbsp;&nbsp;&nbsp;&nbsp;- `-p`: Show process ID (PID) and name running the socket.<br>• <strong>`telnet` / `nc` (Netcat)</strong>: Validates if a specific port is open on a remote machine (e.g. `nc -zv 192.168.1.100 80`)."
        },
        {
          title: "Secure Shell (SSH)",
          text: "SSH establishes encrypted administrative shell connections to remote servers:<br>• <strong>Password-less SSH Auth (Keys)</strong>:<br>&nbsp;&nbsp;&nbsp;&nbsp;1. Generate keys: `ssh-keygen -t rsa`<br>&nbsp;&nbsp;&nbsp;&nbsp;2. Copy key to remote server: `ssh-copy-id username@remote_ip`<br>&nbsp;&nbsp;&nbsp;&nbsp;3. Connect: `ssh username@remote_ip` (no password prompt, secure!)"
        }
      ],
      commands: [
        {
          cmd: "sudo ss -tulpn",
          desc: "Show all active listening TCP/UDP ports, matching processes, and PIDs."
        },
        {
          cmd: "nc -zv 192.168.56.1 22",
          desc: "Test if the SSH port (22) is open and reachable on the target IP."
        },
        {
          cmd: "ssh -i mykey.pem ubuntu@54.120.21.14",
          desc: "Connect to EC2 instance using a secure private key file."
        }
      ]
    }
  },
  {
    id: "package-management",
    title: "Package Management (APT & YUM)",
    track: "process-management",
    summary: "Install, update, and manage dependencies. Master apt-get for Debian/Ubuntu and yum for CentOS/RedHat.",
    readTime: "4 min",
    videoTimestamp: "e01GGTKmtpc&t=6900s",
    content: {
      overview: "Linux systems use package managers to download and install packages from trusted repositories. Automating installations within deployment pipelines requires correct usage of these tools.",
      sections: [
        {
          title: "Debian & Ubuntu (APT)",
          text: "Advanced Package Tool (APT) is the package manager for Ubuntu/Debian:<br>• <strong>`sudo apt update`</strong>: Downloads updated lists of packages from online repositories. Does NOT upgrade any packages.<br>• <strong>`sudo apt upgrade -y`</strong>: Installs updates for all installed packages.<br>• <strong>`sudo apt install <pkg> -y`</strong>: Installs package (`-y` answers 'yes' automatically in CI/CD).<br>• <strong>`sudo apt remove <pkg>`</strong>: Uninstalls package, keeping config files. Use `purge` to delete configurations as well.<br>• <strong>`dpkg`</strong>: Low-level tool used to install offline `.deb` package files (`sudo dpkg -i package.deb`)."
        },
        {
          title: "RedHat & CentOS (YUM / DNF)",
          text: "CentOS/RHEL use YUM (Yellowdog Updater, Modified) or DNF:<br>• `sudo yum check-update`: Check for updates.<br>• `sudo yum install <package> -y`: Install package.<br>• `sudo yum remove <package>`: Uninstall package."
        }
      ],
      commands: [
        {
          cmd: "sudo apt update && sudo apt install -y nginx",
          desc: "Update repository list and install Nginx web server with automatic confirmation."
        },
        {
          cmd: "apt cache search docker",
          desc: "Search package repositories for packages related to 'docker'."
        }
      ]
    }
  },
  {
    id: "process-basics",
    title: "Process Control & Monitoring",
    track: "process-management",
    summary: "Monitor active processes using ps, top, and htop. Manage execution states in foreground and background.",
    readTime: "5 min",
    videoTimestamp: "e01GGTKmtpc&t=7500s",
    content: {
      overview: "Every program running in Linux is a process assigned a unique Process ID (PID). Troubleshooting CPU or memory spikes requires real-time resource analysis.",
      sections: [
        {
          title: "Monitoring Running Processes",
          text: "• <strong>`ps` (Process Status)</strong>: Static snapshot of current processes. Most popular flags:<br>&nbsp;&nbsp;&nbsp;&nbsp;`ps aux` or `ps -ef` (lists all processes running on the system with user, CPU/memory percentage, and command path).<br>• <strong>`top`</strong>: Live interactive monitor showing real-time CPU, memory, swaps, and process threads list.<br>• <strong>`htop`</strong>: Beautiful, interactive CLI color-coded process viewer (requires installation). Supports scrolling and search."
        },
        {
          title: "Job States & Signals",
          text: "• <strong>Foreground vs Background</strong>:<br>&nbsp;&nbsp;&nbsp;&nbsp;- Run process in background: append `&` (`./script.sh &`).<br>&nbsp;&nbsp;&nbsp;&nbsp;- `jobs`: Lists current shell's background jobs.<br>&nbsp;&nbsp;&nbsp;&nbsp;- `fg %1`: Pulls job 1 to foreground. `bg %1` restarts stopped background job.<br>• <strong>`kill`</strong>: Sends signals to terminate processes via PID:<br>&nbsp;&nbsp;&nbsp;&nbsp;- `kill -15 <PID>`: SIGTERM (asks process to shut down gracefully).<br>&nbsp;&nbsp;&nbsp;&nbsp;- `kill -9 <PID>`: SIGKILL (forcefully kills process immediately).<br>• <strong>`killall` / `pkill`</strong>: Kills processes by name instead of PID."
        }
      ],
      commands: [
        {
          cmd: "ps aux | grep nginx",
          desc: "Check if Nginx processes are active and running in memory."
        },
        {
          cmd: "sudo kill -9 2045",
          desc: "Forcefully terminate process with Process ID 2045 immediately."
        }
      ]
    }
  },
  {
    id: "systemd-services",
    title: "Service Management (Systemd)",
    track: "process-management",
    summary: "Control system services with systemctl. Start, stop, enable, and inspect Nginx/Apache logs via journalctl.",
    readTime: "5 min",
    videoTimestamp: "e01GGTKmtpc&t=8300s",
    content: {
      overview: "Modern Linux distributions use Systemd as their system initialization daemon and service manager. Service configurations are defined in unified `.service` unit files.",
      sections: [
        {
          title: "Controlling Services with Systemctl",
          text: "• <strong>`systemctl start <service>`</strong>: Spawns the service in the background.<br>• <strong>`systemctl stop <service>`</strong>: Terminates the running service processes.<br>• <strong>`systemctl restart <service>`</strong>: Restarts the service (often to apply configuration updates).<br>• <strong>`systemctl status <service>`</strong>: Shows active/inactive state, PID, memory, and recent log statements.<br>• <strong>`systemctl enable <service>`</strong>: Configures the service to start automatically during system boot.<br>• <strong>`systemctl disable <service>`</strong>: Disables service autostart at system boot."
        },
        {
          title: "Parsing Systemd Logs (Journalctl)",
          text: "Journalctl manages binary logs collected by systemd-journald:<br>• `journalctl -u nginx.service`: View logs specifically for Nginx.<br>• `journalctl -f -u nginx.service`: Follow Nginx logs in real-time.<br>• `journalctl -p err`: Filter logs to show error messages only."
        }
      ],
      commands: [
        {
          cmd: "sudo systemctl enable --now nginx",
          desc: "Enable Nginx to start on system boot and start it immediately in one command."
        },
        {
          cmd: "sudo systemctl status apache2",
          desc: "Inspect the current runtime status, PID, and latest log snippets of Apache server."
        },
        {
          cmd: "journalctl -n 50 -u nginx",
          desc: "Retrieve the last 50 log lines generated by the Nginx system service."
        }
      ]
    }
  },
  {
    id: "scripting-intro",
    title: "Shell Scripting: Shebang & Execution",
    track: "scripting-basics",
    summary: "Write your first shell script. Understand shebang lines and learn how to grant execute permissions properly.",
    readTime: "4 min",
    videoTimestamp: "e01GGTKmtpc&t=9000s",
    content: {
      overview: "Shell scripting allows DevOps engineers to automate infrastructure setups, backup files, manage logs, and orchestrate deployments. A shell script is simply a text file carrying shell commands.",
      sections: [
        {
          title: "The Shebang Line",
          text: "Every shell script must begin with a Shebang line on line 1: `#!/bin/bash` or `#!/bin/sh`. This instructs the kernel to use the specified shell interpreter to parse and execute the script code."
        },
        {
          title: "Execution Workflow",
          text: "To execute a script:<br>1. Create file: `touch script.sh`<br>2. Add Shebang and code inside using an editor (nano, vim).<br>3. Grant execute permission: `chmod +x script.sh`<br>4. Execute from the current directory: `./script.sh`"
        }
      ],
      commands: [
        {
          cmd: "echo '#!/bin/bash\\necho \"Hello DevOps!\"' > hello.sh",
          desc: "Create a simple shell script with shebang and hello output."
        },
        {
          cmd: "chmod +x hello.sh && ./hello.sh",
          desc: "Add execute permissions and run the script from the current folder."
        }
      ]
    }
  },
  {
    id: "scripting-variables",
    title: "Script Variables & Command Substitution",
    track: "scripting-basics",
    summary: "Use variables, constants with readonly, read user input dynamically, and capture shell command output.",
    readTime: "5 min",
    videoTimestamp: "e01GGTKmtpc&t=9800s",
    content: {
      overview: "Variables store data that can be used or manipulated throughout your script. Command substitution allows storing command output directly in variables.",
      sections: [
        {
          title: "Variables and Constants",
          text: "• <strong>Declaration</strong>: Set variables using `key=value` (Do NOT place spaces around the `=` sign, e.g. `name=\"DevOps\"`).<br>• <strong>Access</strong>: Reference values using the dollar sign prefix (`$name` or `${name}`).<br>• <strong>Constant Readonly</strong>: Declare constants that cannot be changed using `readonly`:<br>&nbsp;&nbsp;&nbsp;&nbsp;`readonly VERSION=\"1.0.0\"`"
        },
        {
          title: "Command Substitution & User Input",
          text: "• <strong>Command Substitution</strong>: Store execution output in a variable using `$(command)` or backticks. Example: `CURRENT_DATE=$(date)`.<br>• <strong>Reading User Input</strong>: Use the `read` command:<br>&nbsp;&nbsp;&nbsp;&nbsp;- `read -p \"Enter IP: \" server_ip` (Prompts user with a message).<br>&nbsp;&nbsp;&nbsp;&nbsp;- `read -s -p \"Password: \" pass` (Hides keystrokes, secure for passwords!)."
        }
      ],
      commands: [
        {
          cmd: "HOSTNAME=$(hostname) && echo \"Host: $HOSTNAME\"",
          desc: "Capture the system hostname in a variable and print it in the console."
        },
        {
          cmd: "read -p \"Username: \" uname",
          desc: "Read input from keyboard and store it in variable 'uname'."
        }
      ]
    }
  },
  {
    id: "scripting-arrays",
    title: "Indexed & Associative Arrays",
    track: "scripting-basics",
    summary: "Store lists of data in arrays, slice array subsets, add elements, and design associative key-value mappings.",
    readTime: "5 min",
    videoTimestamp: "e01GGTKmtpc&t=10600s",
    content: {
      overview: "Arrays allow storing multiple values in a single variable. Bash supports both standard indexed arrays (numbered indices) and associative arrays (custom key-value pairs).",
      sections: [
        {
          title: "Indexed Arrays",
          text: "• <strong>Declaration</strong>: `servers=(srv01 srv02 srv03)`<br>• <strong>Access Index</strong>: `${servers[0]}` (indexes start at 0).<br>• <strong>Retrieve All Elements</strong>: `${servers[*]}` or `${servers[@]}`.<br>• <strong>Array Length</strong>: `${#servers[*]}`.<br>• <strong>Array Slicing</strong>: `${servers[*]:1:2}` (Retrieve 2 elements starting at index 1).<br>• <strong>Adding Elements</strong>: `servers+=(srv04 srv05)`."
        },
        {
          title: "Associative Arrays (Key-Value)",
          text: "Requires explicit declaration with `declare -A`:<br>• `declare -A web_config`<br>• `web_config=([port]=8080 [root]=\"/var/www\" [server]=\"nginx\")`<br>• Access values: `${web_config[port]}`."
        }
      ],
      commands: [
        {
          cmd: "myArray=(A B C D E) && echo \"Length: ${#myArray[*]}\"",
          desc: "Create an indexed array and print the total number of items inside."
        },
        {
          cmd: "echo \"Slice: ${myArray[*]:1:3}\"",
          desc: "Slice and print elements from index 1 to 3."
        }
      ]
    }
  },
  {
    id: "scripting-conditionals",
    title: "Conditionals & Comparison Operators",
    track: "scripting-basics",
    summary: "Write if-elif-else logic. Understand the difference between [ ] and [[ ]] and use file test operators.",
    readTime: "6 min",
    videoTimestamp: "e01GGTKmtpc&t=11400s",
    content: {
      overview: "Conditional blocks enable decision-making. Bash utilizes specialized comparison operators for numbers and strings, alongside file tests to check file system states.",
      sections: [
        {
          title: "Numerical vs String Comparisons",
          text: "Numerical operators use flags because `<` and `>` are reserved for redirection:<br>• <strong>Numerical</strong>: `-eq` (Equal), `-ne` (Not equal), `-lt` (Less than), `-le` (Less or equal), `-gt` (Greater than), `-ge` (Greater or equal).<br>• <strong>String</strong>: `=` (Equal), `!=` (Not equal), `-z` (String is empty/zero length), `-n` (String is NOT empty).<br><br><strong>Note</strong>: Always quote string variables: `\"$str1\"`."
        },
        {
          title: "File Test Operators",
          text: "Check disk files/directories before operations:<br>• `-f \"$file\"`: Checks if the path exists and is a regular file.<br>• `-d \"$dir\"`: Checks if the path exists and is a directory.<br>• `-e \"$path\"`: Checks if path exists (file, directory, or link).<br>• `-r \"$file\"` / `-w` / `-x`: Checks if file is readable, writable, or executable.<br>• `-s \"$file\"`: Checks if file size is greater than 0 (not empty)."
        },
        {
          title: "Comparing [ ] vs [[ ]]",
          text: "• <strong>Single Brackets `[ ]`</strong>: POSIX standard. Requires strict quoting, and doesn't support regular expressions or logical operators directly.<br>• <strong>Double Brackets `[[ ]]`</strong>: Bash extension. More forgiving with spaces, supports logical `&&` and `||` natively, and supports pattern wildcard matching (`*.txt`) and regex parsing (`=~`)."
        }
      ],
      commands: [
        {
          cmd: "if [ -f \"/etc/nginx/nginx.conf\" ]; then echo \"Nginx exists\"; fi",
          desc: "File test checking if Nginx configuration is present on the host."
        },
        {
          cmd: "[[ 10 -gt 5 && \"foo\" != \"bar\" ]] && echo \"True\"",
          desc: "Complex conditional using double brackets with logical AND."
        }
      ]
    }
  },
  {
    id: "scripting-loops",
    title: "Loops: Iteration & Array Traversal",
    track: "advanced-scripting",
    summary: "Write for, while, and infinite loops. Traverse directories and arrays, and master loop control (break/continue).",
    readTime: "5 min",
    videoTimestamp: "e01GGTKmtpc&t=12400s",
    content: {
      overview: "Loops iterate through commands multiple times. DevOps scripts use loops to parse lists of servers, automate file compression, and traverse directory trees.",
      sections: [
        {
          title: "For Loops",
          text: "Iterates through a predefined list of values:<br>• <strong>List Loop</strong>: `for i in 1 2 3 4 5; do echo $i; done`<br>• <strong>Range Loop</strong>: `for i in {1..10}; do echo $i; done`<br>• <strong>Array Traversal</strong>:<br>&nbsp;&nbsp;&nbsp;&nbsp;`for item in \"${myArray[@]}\"; do echo $item; done`<br>• <strong>C-style Loop</strong>: `for ((i=0; i<10; i++)); do echo $i; done`"
        },
        {
          title: "While Loops & Loop Control",
          text: "Executes as long as a condition evaluates to true:<br>• <strong>While Loop</strong>: `while [ $count -lt 5 ]; do count=$((count+1)); done`<br>• <strong>Infinite Loop</strong>: `while true; do ... sleep 1; done` (Common in background monitoring).<br>• <strong>Control Statements</strong>:<br>&nbsp;&nbsp;&nbsp;&nbsp;- `break`: Terminates the loop immediately.<br>&nbsp;&nbsp;&nbsp;&nbsp;- `continue`: Skips the current iteration and jumps to the next."
        }
      ],
      commands: [
        {
          cmd: "for file in *.sh; do echo \"Executing: $file\"; done",
          desc: "Loop through all shell scripts in the current directory and print their names."
        },
        {
          cmd: "count=1 && while [ $count -le 3 ]; do echo $count && let count++; done",
          desc: "Simple while loop printing incrementing counts."
        }
      ]
    }
  },
  {
    id: "scripting-functions",
    title: "Functions, Exit Status & Arguments",
    track: "advanced-scripting",
    summary: "Write modular code with functions. Manage local variables, analyze exit codes, and parse command arguments.",
    readTime: "6 min",
    videoTimestamp: "e01GGTKmtpc&t=13300s",
    content: {
      overview: "Functions modularize code into reusable units. Correct parameter management, localized variables, and verification of exit codes are vital for script reliability.",
      sections: [
        {
          title: "Defining Functions & Local Scope",
          text: "Define functions using syntax:<br>```bash\nmy_function() {\n    local my_var=\"local\" # Local variable scoped to function\n    echo \"Param 1: $1\"\n}\n```<br>Call functions by name: `my_function \"hello\"`. Parameters are referenced using positional variables `$1`, `$2`."
        },
        {
          title: "Exit Status & Error Code ($?)",
          text: "Every command returns an exit status code between 0 and 255:<br>• <strong>`0`</strong>: Success (no errors).<br>• <strong>Non-zero (`1-255`)</strong>: Failure. Different codes signify different error states.<br>• <strong>`$?`</strong>: Access the exit status of the immediately preceding command. Vital for error-checking in pipelines:<br>&nbsp;&nbsp;&nbsp;&nbsp;`apt install -y nginx; if [ $? -ne 0 ]; then echo \"Install Failed!\"; exit 1; fi`"
        },
        {
          title: "Script Positional Arguments",
          text: "When invoking a script (e.g. `./script.sh arg1 arg2`):<br>• `$1`, `$2`: Refer to the first and second arguments.<br>• `$#`: Total count of arguments passed to the script.<br>• `$@`: Array containing all passed arguments.<br>• `$0`: The name/path of the running script itself."
        }
      ],
      commands: [
        {
          cmd: "ls /nonexistent_folder; echo \"Exit status: $?\"",
          desc: "Run a failing command and print its non-zero exit status."
        },
        {
          cmd: "arg_check() { echo \"Args passed: $#\"; } && arg_check A B C",
          desc: "Define helper function and pass it three arguments to check counts."
        }
      ]
    }
  },
  {
    id: "automation-cron",
    title: "Automation: Redirects & Cron Jobs",
    track: "advanced-scripting",
    summary: "Master redirects (stdout, stderr, pipes). Schedule automated script executions using cron syntax.",
    readTime: "6 min",
    videoTimestamp: "e01GGTKmtpc&t=14200s",
    content: {
      overview: "DevOps requires automation. Directing stdout/stderr streams allows logging output, while cron jobs execute these automated tasks on precise recurring schedules.",
      sections: [
        {
          title: "Pipes & I/O Redirection",
          text: "Every Unix program has 3 standard streams: stdin (0), stdout (1), stderr (2):<br>• <strong>`>`</strong>: Redirects stdout to a file (overwrites existing content).<br>• <strong>`>>`</strong>: Redirects stdout to a file (appends content to the end).<br>• <strong>`2>`</strong>: Redirects errors (stderr) only.<br>• <strong>`2>&1`</strong>: Merges stderr and stdout streams. Popular log file sink:<br>&nbsp;&nbsp;&nbsp;&nbsp;`./backup.sh > backup.log 2>&1` (All logs and errors saved to backup.log).<br>• <strong>`/dev/null`</strong>: The system 'black hole'. Discard output: `command > /dev/null 2>&1`.<br>• <strong>`|` (Pipe)</strong>: Takes stdout of command 1 and feeds it as stdin to command 2 (`ls -la | grep '.sh'`)."
        },
        {
          title: "Cron Jobs Scheduling",
          text: "Cron daemon handles automated scheduling via crontab configurations (`crontab -e`).<br>Cron format has 5 fields:<br>```\n* * * * *  /path/to/script.sh\n┬ ┬ ┬ ┬ ┬\n│ │ │ │ └─ Day of Week (0 - 6) (Sunday=0)\n│ │ │ └─── Month (1 - 12)\n│ │ └───── Day of Month (1 - 31)\n│ └─────── Hour (0 - 23)\n└───────── Minute (0 - 59)\n```<br>Examples:<br>• `0 2 * * *`: Run every day at 2:00 AM.<br>• `*/10 * * * *`: Run every 10 minutes."
        }
      ],
      commands: [
        {
          cmd: "echo \"Logging test\" >> myapp.log",
          desc: "Append text to a log file without overwriting existing data."
        },
        {
          cmd: "crontab -l",
          desc: "List all scheduled cron jobs active for the current user."
        }
      ]
    }
  }
];
