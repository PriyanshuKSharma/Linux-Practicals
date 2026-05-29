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
          text: `A standard Linux system is structured into four main conceptual layers:<br><br>
<div class='cheat-table-wrapper' style='margin: 1rem 0;'>
  <table class='cheat-table'>
    <thead>
      <tr>
        <th style='width: 25%;'>Layer</th>
        <th style='width: 35%;'>Function</th>
        <th style='width: 40%;'>DevOps Components / Examples</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>User Space</strong></td>
        <td>User applications and CLI utilities reside and run here.</td>
        <td>Nginx, Docker engine, Bash CLI, Jenkins runner processes.</td>
      </tr>
      <tr>
        <td><strong>Shell</strong></td>
        <td>Command interpreter. Serves as user interface to the Kernel.</td>
        <td><code>bash</code>, <code>sh</code>, <code>zsh</code> scripting environments.</td>
      </tr>
      <tr>
        <td><strong>Kernel</strong></td>
        <td>Core OS engine. Manages CPU, memory, disks, and system calls.</td>
        <td>Monolithic kernel (allocates memory and drives physical interfaces).</td>
      </tr>
      <tr>
        <td><strong>Hardware</strong></td>
        <td>Physical/virtual resources.</td>
        <td>AWS EC2 resources, CPUs, RAM, NVMe disks, NICs.</td>
      </tr>
    </tbody>
  </table>
</div>`
        },
        {
          title: "Why Linux is Essential for DevOps",
          text: `DevOps engineers rely on Linux for:<br>
<ul class='project-steps' style='margin: 1rem 0;'>
  <li><strong>Open Source & Free</strong>: Customization without license fees, enabling lightweight containers.</li>
  <li><strong>Stability & Reliability</strong>: Can run indefinitely without memory leaks, requiring zero restarts during hot upgrades.</li>
  <li><strong>Multi-User Security</strong>: Restrictive POSIX permission policies, protecting databases and app states.</li>
  <li><strong>CLI-First Design</strong>: Allows headless administration of servers, perfect for automated pipeline executions.</li>
</ul>`
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
          title: "FHS Core Directories Mappings",
          text: `DevOps engineers must memorize the locations of configurations, logs, and executable binaries:<br><br>
<div class='cheat-table-wrapper' style='margin: 1rem 0;'>
  <table class='cheat-table'>
    <thead>
      <tr>
        <th style='width: 20%;'>Directory</th>
        <th style='width: 40%;'>Official Standard Purpose</th>
        <th style='width: 40%;'>DevOps Real-World Example</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>/etc</code></td>
        <td>System and application configuration files.</td>
        <td><code>/etc/nginx/nginx.conf</code>, <code>/etc/hosts</code></td>
      </tr>
      <tr>
        <td><code>/var</code></td>
        <td>Variable data (changing logs, transient files).</td>
        <td><code>/var/log/nginx/error.log</code>, <code>/var/lib/docker</code></td>
      </tr>
      <tr>
        <td><code>/bin</code></td>
        <td>Essential user binary command utilities.</td>
        <td><code>ls</code>, <code>grep</code>, <code>cat</code>, <code>cp</code>, <code>mv</code></td>
      </tr>
      <tr>
        <td><code>/sbin</code></td>
        <td>Essential system admin binary commands.</td>
        <td><code>systemctl</code>, <code>iptables</code>, <code>ifconfig</code>, <code>ip</code></td>
      </tr>
      <tr>
        <td><code>/home</code></td>
        <td>Home directories for standard shell users.</td>
        <td><code>/home/priyanshuksharma/</code></td>
      </tr>
      <tr>
        <td><code>/root</code></td>
        <td>Isolated home directory of the root superuser.</td>
        <td>Admin scripts workspace.</td>
      </tr>
      <tr>
        <td><code>/tmp</code></td>
        <td>Temporary space, cleared on reboots.</td>
        <td>Pipeline artifacts build cache.</td>
      </tr>
      <tr>
        <td><code>/proc</code></td>
        <td>Virtual filesystem mapping active processes.</td>
        <td><code>/proc/cpuinfo</code>, <code>/proc/meminfo</code></td>
      </tr>
    </tbody>
  </table>
</div>`
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
          title: "Navigation & File Control Operations",
          text: `Master the following basic command blocks for daily folder tasks:<br><br>
<div class='cheat-table-wrapper' style='margin: 1rem 0;'>
  <table class='cheat-table'>
    <thead>
      <tr>
        <th style='width: 25%;'>Command Block</th>
        <th style='width: 75%;'>Operation & Key DevOps Flags</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>pwd</code></td>
        <td><strong>Print Working Directory</strong>. Displays the absolute path of your current shell environment.</td>
      </tr>
      <tr>
        <td><code>cd</code></td>
        <td><strong>Change Directory</strong>. <code>cd ..</code> goes up one parent directory level, <code>cd ~</code> hops to home folder.</td>
      </tr>
      <tr>
        <td><code>ls</code></td>
        <td><strong>List Files</strong>. Flags:<br>• <code>-l</code>: Detailed long layout list.<br>• <code>-a</code>: Show hidden configuration files.<br>• <code>-h</code>: Human-readable file sizes.</td>
      </tr>
      <tr>
        <td><code>mkdir</code></td>
        <td><strong>Make Directory</strong>. Always use the <code>-p</code> flag (e.g. <code>mkdir -p parent/child</code>) to create nested paths.</td>
      </tr>
      <tr>
        <td><code>cp</code></td>
        <td><strong>Copy Files</strong>. Use the recursive <code>-r</code> flag (e.g. <code>cp -r src/ dest/</code>) to copy entire directories.</td>
      </tr>
      <tr>
        <td><code>mv</code></td>
        <td><strong>Move/Rename</strong>. Moves files to folders, or renames them in-place (e.g. <code>mv config.json old_config.json</code>).</td>
      </tr>
      <tr>
        <td><code>rm</code></td>
        <td><strong>Remove</strong>. Flags:<br>• <code>-r</code>: Recursive directory deletion.<br>• <code>-f</code>: Forcefully bypass confirmation checks. (Use carefully!)</td>
      </tr>
    </tbody>
  </table>
</div>`
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
          title: "User Administration Commands",
          text: `DevOps service accounts management requires the following commands:<br><br>
<div class='cheat-table-wrapper' style='margin: 1rem 0;'>
  <table class='cheat-table'>
    <thead>
      <tr>
        <th style='width: 25%;'>Command</th>
        <th style='width: 35%;'>DevOps Function</th>
        <th style='width: 40%;'>Command Syntax & Options</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>useradd</code></td>
        <td>Create new user account.</td>
        <td><code>sudo useradd -m -s /bin/bash jenkins</code> (adds user with home & bash shell).</td>
      </tr>
      <tr>
        <td><code>passwd</code></td>
        <td>Configure password credentials.</td>
        <td><code>sudo passwd jenkins</code> (sets credentials for account).</td>
      </tr>
      <tr>
        <td><code>groupadd</code></td>
        <td>Create new user security groups.</td>
        <td><code>sudo groupadd developers</code> (adds user group).</td>
      </tr>
      <tr>
        <td><code>usermod</code></td>
        <td>Modify user accounts and groups.</td>
        <td><code>sudo usermod -aG docker jenkins</code> (appends user to 'docker' group).</td>
      </tr>
      <tr>
        <td><code>userdel</code></td>
        <td>Delete user accounts completely.</td>
        <td><code>sudo userdel -r jenkins</code> (deletes user and wipes home folder).</td>
      </tr>
    </tbody>
  </table>
</div>`
        },
        {
          title: "Security Files Structure",
          text: "User registries are stored in standard text files:<br>• <strong>`/etc/passwd`</strong>: Stores user settings. Structured as 7 fields: <code>username:x:UID:GID:comment:home_dir:shell</code>.<br>• <strong>`/etc/shadow`</strong>: Stores encrypted credentials passwords, readable only by root.<br>• <strong>`/etc/group`</strong>: Stores group registers and user group associations."
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
          title: "Decoding the POSIX Permission String",
          text: `When running <code>ls -l</code>, the permissions string (like <code>-rwxr-xr--</code>) is split into structured blocks:<br><br>
<div class='cheat-table-wrapper' style='margin: 1rem 0;'>
  <table class='cheat-table' style='text-align: center;'>
    <thead>
      <tr>
        <th>Index</th>
        <th>Block</th>
        <th>Represented Entity</th>
        <th>Example</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1st character</td>
        <td><code>Type</code></td>
        <td>File Type</td>
        <td><code>-</code> = File, <code>d</code> = Directory, <code>l</code> = Symlink</td>
      </tr>
      <tr>
        <td>2nd to 4th</td>
        <td><code>User (u)</code></td>
        <td>File Owner permissions</td>
        <td><code>rwx</code> = Read, Write, and Execute rights</td>
      </tr>
      <tr>
        <td>5th to 7th</td>
        <td><code>Group (g)</code></td>
        <td>Assigned Group permissions</td>
        <td><code>r-x</code> = Read and Execute rights (no writing)</td>
      </tr>
      <tr>
        <td>8th to 10th</td>
        <td><code>Others (o)</code></td>
        <td>All other system users permissions</td>
        <td><code>r--</code> = Read-only rights</td>
      </tr>
    </tbody>
  </table>
</div>`
        },
        {
          title: "Octal Permissions Calculation Matrix",
          text: `Permissions can be set using numeric codes. The numeric value is the sum of permissions values (Read=4, Write=2, Execute=1):<br><br>
<div class='cheat-table-wrapper' style='margin: 1rem 0;'>
  <table class='cheat-table' style='text-align: center;'>
    <thead>
      <tr>
        <th>Octal Sum</th>
        <th>Binary Representation</th>
        <th>rwx Mapping</th>
        <th>Permissions Meaning</th>
        <th>DevOps Example Scenario</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>7</strong></td>
        <td><code>111</code></td>
        <td><code>rwx</code></td>
        <td>Read, Write, and Execute</td>
        <td>Full administrator permissions.</td>
      </tr>
      <tr>
        <td><strong>6</strong></td>
        <td><code>110</code></td>
        <td><code>rw-</code></td>
        <td>Read and Write</td>
        <td>Standard source files permissions (e.g. index.php).</td>
      </tr>
      <tr>
        <td><strong>5</strong></td>
        <td><code>101</code></td>
        <td><code>r-x</code></td>
        <td>Read and Execute</td>
        <td>Executable shell scripts & directories access.</td>
      </tr>
      <tr>
        <td><strong>4</strong></td>
        <td><code>100</code></td>
        <td><code>r--</code></td>
        <td>Read-Only</td>
        <td>Secure credential config files (e.g. read-only tokens).</td>
      </tr>
      <tr>
        <td><strong>0</strong></td>
        <td><code>000</code></td>
        <td><code>---</code></td>
        <td>No access rights</td>
        <td>Private folders blocked from other users.</td>
      </tr>
    </tbody>
  </table>
</div>`
        }
      ],
      commands: [
        {
          cmd: "chmod 755 deploy.sh",
          desc: "Grant rwx to owner, and r-x to group and others (standard script permission)."
        },
        {
          cmd: "sudo chown -R www-data:www-data /var/www",
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
          title: "Special Security Execution Flags",
          text: `Linux administrators use SUID, SGID, and Sticky Bits to handle automated execution environments:<br><br>
<div class='cheat-table-wrapper' style='margin: 1rem 0;'>
  <table class='cheat-table'>
    <thead>
      <tr>
        <th style='width: 25%;'>Flag Type</th>
        <th style='width: 35%;'>Description</th>
        <th style='width: 40%;'>DevOps Practical Usage</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>SUID</strong> (SetUID)</td>
        <td>File runs with the permissions of the file owner.</td>
        <td>Allowing non-root users to execute password resets via <code>passwd</code>. (Octal 4000)</td>
      </tr>
      <tr>
        <td><strong>SGID</strong> (SetGID)</td>
        <td>New files inherit the parent folder's group automatically.</td>
        <td>Enforces shared team group ownerships in build workspace folders. (Octal 2000)</td>
      </tr>
      <tr>
        <td><strong>Sticky Bit</strong></td>
        <td>Only the file creator or root can delete files inside.</td>
        <td>Hardening shared scratch spaces like <code>/tmp</code>. (Octal 1000)</td>
      </tr>
    </tbody>
  </table>
</div>`
        },
        {
          title: "Default Creation Permissions (Umask)",
          text: "Umask filters permissions values subtraction when spawning new directories or files:<br>• Maximum possible: Files = <code>666</code>, Directories = <code>777</code>.<br>• <strong>Default umask (022)</strong>:<br>&nbsp;&nbsp;&nbsp;&nbsp;- File gets: 666 - 022 = <code>644</code> (Owner Read/Write, others Read-only).<br>&nbsp;&nbsp;&nbsp;&nbsp;- Directory gets: 777 - 022 = <code>755</code> (Owner Full access, others enter & read).<br>• <strong>Secure umask (077)</strong>: File gets <code>600</code> (Wiped accesses for group/others)."
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
          title: "Text & Logs Parsing Reference",
          text: `Use the appropriate parser utility for inspecting configurations and system log flows:<br><br>
<div class='cheat-table-wrapper' style='margin: 1rem 0;'>
  <table class='cheat-table'>
    <thead>
      <tr>
        <th style='width: 20%;'>Utility</th>
        <th style='width: 40%;'>Action Purpose</th>
        <th style='width: 40%;'>Common DevOps Syntax</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>cat</code></td>
        <td>Display whole file contents in terminal.</td>
        <td><code>cat /etc/hosts</code></td>
      </tr>
      <tr>
        <td><code>less</code></td>
        <td>Interactive multi-directional file pager.</td>
        <td><code>less /var/log/syslog</code> (press 'q' to quit)</td>
      </tr>
      <tr>
        <td><code>head</code></td>
        <td>View the starting rows of files.</td>
        <td><code>head -n 20 /etc/passwd</code> (shows first 20 lines)</td>
      </tr>
      <tr>
        <td><code>tail</code></td>
        <td>View the ending rows of files.</td>
        <td><code>tail -f /var/log/nginx/error.log</code> (follows logs in real-time)</td>
      </tr>
      <tr>
        <td><code>grep</code></td>
        <td>Search inside files for text patterns.</td>
        <td><code>grep -ri 'failed' /var/log/nginx/</code> (case-insensitive recursive)</td>
      </tr>
      <tr>
        <td><code>find</code></td>
        <td>Search file system paths for matching names.</td>
        <td><code>find /etc -name '*.conf'</code> (finds system config files)</td>
      </tr>
    </tbody>
  </table>
</div>`
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
    track: "networking",
    readTime: "4 min",
    videoTimestamp: "e01GGTKmtpc&t=5400s",
    content: {
      overview: "DevOps pipelines frequently interact with remote services, REST APIs, and external servers. Troubleshooting network connectivity issues is a core administrative skill.",
      sections: [
        {
          title: "Network connectivity Troubleshooting Flow",
          text: `DevOps engineers follow this standard logical path to diagnose network and gateway blocks:<br><br>
<div class='cheat-table-wrapper' style='margin: 1rem 0;'>
  <table class='cheat-table'>
    <thead>
      <tr>
        <th style='width: 25%;'>Diagnostic Step</th>
        <th style='width: 40%;'>Action Details</th>
        <th style='width: 35%;'>Linux Utility Command</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>1. Interface Check</strong></td>
        <td>Confirm that the local networking interface is online and has an assigned IP address.</td>
        <td><code>ip addr show</code></td>
      </tr>
      <tr>
        <td><strong>2. Ping Local</strong></td>
        <td>Ping the local gateway router to ensure local packet delivery works.</td>
        <td><code>ping -c 4 192.168.1.1</code></td>
      </tr>
      <tr>
        <td><strong>3. Ping Remote</strong></td>
        <td>Ping public DNS nodes to ensure packet delivery passes through the gateway.</td>
        <td><code>ping -c 4 8.8.8.8</code></td>
      </tr>
      <tr>
        <td><strong>4. API Response</strong></td>
        <td>Verify that external web services are responding with valid HTTP headers.</td>
        <td><code>curl -I https://www.google.com</code></td>
      </tr>
      <tr>
        <td><strong>5. Fetch Templates</strong></td>
        <td>Test actual file downloads through the gateway configurations.</td>
        <td><code>wget -O template.json http://api.com</code></td>
      </tr>
    </tbody>
  </table>
</div>`
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
          title: "System Socket Analysis Tools",
          text: "When troubleshooting web servers, databases, or firewalls, you must audit active ports:<br>• <strong>`ss` / `netstat`</strong>: Audit local network socket registers. Crucial flags:<br>&nbsp;&nbsp;&nbsp;&nbsp;- <code>-t</code>: Show TCP connections.<br>&nbsp;&nbsp;&nbsp;&nbsp;- <code>-u</code>: Show UDP connections.<br>&nbsp;&nbsp;&nbsp;&nbsp;- <code>-l</code>: Show active listening sockets (waiting for connections).<br>&nbsp;&nbsp;&nbsp;&nbsp;- <code>-p</code>: Show active processes, PIDs, and commands owning the socket.<br>&nbsp;&nbsp;&nbsp;&nbsp;- <code>-n</code>: Render values as numbers (e.g. port 80 rather than 'http').<br>• <strong>`nc` (Netcat)</strong>: Verify remote port connections immediately without initiating formal data transfers (e.g. <code>nc -zv 192.168.1.100 80</code>)."
        },
        {
          title: "Secure Shell (SSH) Key Authentication",
          text: `To automate deployments without passwords inside Jenkins or GitHub Actions, configure secure Key-Based Auth:<br><br>
<div class='cheat-table-wrapper' style='margin: 1rem 0;'>
  <table class='cheat-table'>
    <thead>
      <tr>
        <th style='width: 30%;'>Key Authentication Step</th>
        <th style='width: 35%;'>Command Syntax</th>
        <th style='width: 35%;'>Action Details</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>1. Generate Keys</strong></td>
        <td><code>ssh-keygen -t rsa -b 4096</code></td>
        <td>Generates a secure RSA keypair inside <code>~/.ssh/</code> folder.</td>
      </tr>
      <tr>
        <td><strong>2. Replicate Key</strong></td>
        <td><code>ssh-copy-id deployer@54.21.32.4</code></td>
        <td>Appends your public key to remote server's <code>authorized_keys</code> registry.</td>
      </tr>
      <tr>
        <td><strong>3. Secure Connect</strong></td>
        <td><code>ssh deployer@54.21.32.4</code></td>
        <td>Logs in instantly without password prompts, perfect for automations.</td>
      </tr>
    </tbody>
  </table>
</div>`
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
          title: "APT vs YUM Command Reference",
          text: `Map package actions across various Linux server families inside your automations:<br><br>
<div class='cheat-table-wrapper' style='margin: 1rem 0;'>
  <table class='cheat-table'>
    <thead>
      <tr>
        <th style='width: 30%;'>Administrative Action</th>
        <th style='width: 35%;'>Ubuntu/Debian (APT)</th>
        <th style='width: 35%;'>CentOS/RHEL (YUM)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>1. Update Metadata lists</strong></td>
        <td><code>sudo apt update</code></td>
        <td><code>sudo yum check-update</code></td>
      </tr>
      <tr>
        <td><strong>2. Upgrade Packages</strong></td>
        <td><code>sudo apt upgrade -y</code></td>
        <td><code>sudo yum update -y</code></td>
      </tr>
      <tr>
        <td><strong>3. Install Package</strong></td>
        <td><code>sudo apt install <pkg> -y</code></td>
        <td><code>sudo yum install <pkg> -y</code></td>
      </tr>
      <tr>
        <td><strong>4. Remove Package</strong></td>
        <td><code>sudo apt remove <pkg></code></td>
        <td><code>sudo yum remove <pkg></code></td>
      </tr>
      <tr>
        <td><strong>5. Search Repositories</strong></td>
        <td><code>apt cache search <pkg></code></td>
        <td><code>yum search <pkg></code></td>
      </tr>
    </tbody>
  </table>
</div>`
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
          title: "System Resource Monitoring Tools",
          text: "DevOps engineers use specific tools based on interactive needs:<br>• <strong>`ps aux` (Process Status)</strong>: Static snapshot of active systems. The flags: <code>a</code> = all users, <code>u</code> = detailed column user layout, <code>x</code> = show processes run outside the terminal (like Nginx, Docker).<br>• <strong>`top`</strong>: Live process viewer. Shows CPU/Memory statistics dynamically. Navigate with sorting commands (press 'M' to sort processes by Memory usage, 'P' for CPU usage).<br>• <strong>`htop`</strong>: Rich color-coded system visualizer showing processor threads, thread trees, and active loads. Supports direct searching ('/') and secure kills ('k')."
        },
        {
          title: "Shell execution Background States",
          text: `When starting long-running server backups or deployment operations inside interactive shells, manage their running states:<br><br>
<div class='cheat-table-wrapper' style='margin: 1rem 0;'>
  <table class='cheat-table'>
    <thead>
      <tr>
        <th style='width: 25%;'>State Operation</th>
        <th style='width: 35%;'>Command / Shortcut</th>
        <th style='width: 40%;'>DevOps Administrative Action</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Background Launch</strong></td>
        <td><code>./backup.sh &</code></td>
        <td>Appends an ampersand to run a script in background instantly, keeping active shell open.</td>
      </tr>
      <tr>
        <td><strong>Suspend Active</strong></td>
        <td><code>Ctrl + Z</code></td>
        <td>Temporarily stops and suspends an active foreground task.</td>
      </tr>
      <tr>
        <td><strong>List Active Jobs</strong></td>
        <td><code>jobs</code></td>
        <td>Inspects current jobs running in the active shell environment.</td>
      </tr>
      <tr>
        <td><strong>Resume background</strong></td>
        <td><code>bg %1</code></td>
        <td>Resumes a suspended job index 1 directly in the background.</td>
      </tr>
      <tr>
        <td><strong>Pull to Foreground</strong></td>
        <td><code>fg %1</code></td>
        <td>Restores job 1 control directly to active shell foreground terminal.</td>
      </tr>
    </tbody>
  </table>
</div>`
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
          title: "Service Controls Reference (Systemctl)",
          text: `Systemctl is the principal tool to control server configurations daemons:<br><br>
<div class='cheat-table-wrapper' style='margin: 1rem 0;'>
  <table class='cheat-table'>
    <thead>
      <tr>
        <th style='width: 30%;'>Service Operation</th>
        <th style='width: 35%;'>Command Syntax</th>
        <th style='width: 35%;'>DevOps Operational Result</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Start Service</strong></td>
        <td><code>sudo systemctl start nginx</code></td>
        <td>Spawns server background processes immediately.</td>
      </tr>
      <tr>
        <td><strong>Stop Service</strong></td>
        <td><code>sudo systemctl stop nginx</code></td>
        <td>Shuts down running daemon and stops ports listening.</td>
      </tr>
      <tr>
        <td><strong>Restart Service</strong></td>
        <td><code>sudo systemctl restart nginx</code></td>
        <td>Restarts process immediately (applies configurations).</td>
      </tr>
      <tr>
        <td><strong>Auto-start on Boot</strong></td>
        <td><code>sudo systemctl enable nginx</code></td>
        <td>Registers Nginx to start automatically on system reboot.</td>
      </tr>
      <tr>
        <td><strong>Status Audit</strong></td>
        <td><code>systemctl status nginx</code></td>
        <td>Shows running state, active PID, memory, and logs.</td>
      </tr>
    </tbody>
  </table>
</div>`
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
          text: "To execute a script:<br>1. Open the practice folder: `cd /home/devops/scripts/learn`<br>2. Read a lesson script: `cat 01_basic.sh`<br>3. Grant execute permission if needed: `chmod +x script.sh`<br>4. Execute from the current directory: `./script.sh`<br><br>In this browser sandbox, `nano` and `vim` are not installed. Create your own practice files with `echo` redirection: `echo '#!/bin/bash' > script.sh` and append more lines with `echo 'echo hello' >> script.sh`."
        }
      ],
      commands: [
        {
          cmd: "cd /home/devops/scripts/learn",
          desc: "Open the shell scripting lesson directory. Run ls -l next to list the 15 scripts from basic to advanced."
        },
        {
          cmd: "echo '#!/bin/bash' > hello.sh",
          desc: "Create a simple shell script file with the required shebang line."
        },
        {
          cmd: "chmod +x hello.sh",
          desc: "Add execute permissions. Run ./hello.sh next to execute it from the current folder."
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
          text: "• <strong>Declaration</strong>: Set variables using `key=value` (Do NOT place spaces around the `=` sign, e.g. `name=\"DevOps\"`).<br>• <strong>Access</strong>: Reference values using the dollar sign prefix (`$name` or `\${name}`).<br>• <strong>Constant Readonly</strong>: Declare constants that cannot be changed using `readonly`:<br>&nbsp;&nbsp;&nbsp;&nbsp;`readonly VERSION=\"1.0.0\"`"
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
          text: "• <strong>Declaration</strong>: `servers=(srv01 srv02 srv03)`<br>• <strong>Access Index</strong>: `\${servers[0]}` (indexes start at 0).<br>• <strong>Retrieve All Elements</strong>: `\${servers[*]}` or `\${servers[@]}`.<br>• <strong>Array Length</strong>: `\${#servers[*]}`.<br>• <strong>Array Slicing</strong>: `\${servers[*]:1:2}` (Retrieve 2 elements starting at index 1).<br>• <strong>Adding Elements</strong>: `servers+=(srv04 srv05)`."
        },
        {
          title: "Associative Arrays (Key-Value)",
          text: "Requires explicit declaration with `declare -A`:<br>• `declare -A web_config`<br>• `web_config=([port]=8080 [root]=\"/var/www\" [server]=\"nginx\")`<br>• Access values: `\${web_config[port]}`."
        }
      ],
      commands: [
        {
          cmd: "myArray=(A B C D E) && echo \"Length: \${#myArray[*]}\"",
          desc: "Create an indexed array and print the total number of items inside."
        },
        {
          cmd: "echo \"Slice: \${myArray[*]:1:3}\"",
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
          title: "Numerical vs String Comparisons Reference",
          text: `In Bash conditional blocks, choose the appropriate operators based on data types:<br><br>
<div class='cheat-table-wrapper' style='margin: 1rem 0;'>
  <table class='cheat-table'>
    <thead>
      <tr>
        <th style='width: 30%;'>Numerical Flag</th>
        <th style='width: 30%;'>String Operator</th>
        <th style='width: 40%;'>Represented Logic Meaning</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>-eq</code></td>
        <td><code>=</code> or <code>==</code></td>
        <td>Logical equality verification.</td>
      </tr>
      <tr>
        <td><code>-ne</code></td>
        <td><code>!=</code></td>
        <td>Logical inequality verification.</td>
      </tr>
      <tr>
        <td><code>-lt</code></td>
        <td><code>&lt;</code> (inside [[ ]])</td>
        <td>Strictly less-than comparison.</td>
      </tr>
      <tr>
        <td><code>-le</code></td>
        <td>-</td>
        <td>Less-than or equal to comparison.</td>
      </tr>
      <tr>
        <td><code>-gt</code></td>
        <td><code>&gt;</code> (inside [[ ]])</td>
        <td>Strictly greater-than comparison.</td>
      </tr>
      <tr>
        <td><code>-ge</code></td>
        <td>-</td>
        <td>Greater-than or equal to comparison.</td>
      </tr>
      <tr>
        <td>-</td>
        <td><code>-z</code></td>
        <td>Empty string length validation (zero-length).</td>
      </tr>
      <tr>
        <td>-</td>
        <td><code>-n</code></td>
        <td>Non-empty string length validation.</td>
      </tr>
    </tbody>
  </table>
</div>`
        },
        {
          title: "File Test Operators Reference",
          text: `DevOps automation scripts regularly verify path existences before operations:<br><br>
<div class='cheat-table-wrapper' style='margin: 1rem 0;'>
  <table class='cheat-table'>
    <thead>
      <tr>
        <th style='width: 25%;'>Operator</th>
        <th style='width: 75%;'>File system verification target</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>-e "$path"</code></td>
        <td>Evaluates True if the path actually exists on filesystem (file, directory, or link).</td>
      </tr>
      <tr>
        <td><code>-f "$file"</code></td>
        <td>Evaluates True if target exists and is a regular file (e.g. standard scripting file).</td>
      </tr>
      <tr>
        <td><code>-d "$dir"</code></td>
        <td>Evaluates True if target exists and is a directory.</td>
      </tr>
      <tr>
        <td><code>-s "$file"</code></td>
        <td>Evaluates True if file exists and has size greater than 0 bytes (not empty).</td>
      </tr>
      <tr>
        <td><code>-r "$file"</code></td>
        <td>Evaluates True if target file is readable by current user shell process.</td>
      </tr>
      <tr>
        <td><code>-x "$script"</code></td>
        <td>Evaluates True if script is executable (rwx permissions have execute bit set).</td>
      </tr>
    </tbody>
  </table>
</div>`
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
          title: "Loop Iteration Types",
          text: "Choose the loop block structure based on target lists:<br>• <strong>`for` Loops</strong>: Iterates through a fixed set of items or array lists. Standard for traversing folder files (e.g. <code>for file in *.sh; do ... done</code>).<br>• <strong>`while` Loops</strong>: Loops as long as a condition resolves to true. Perfect for parsing file rows or creating infinite loops for active background systems monitoring."
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
          title: "Functions and Arguments",
          text: "• <strong>Positional Arguments</strong>: In functions and scripts, arguments are mapped sequentially to numeric parameters: <code>$1</code> = first parameter, <code>$2</code> = second parameter.<br>• <strong>Arguments Metadata</strong>:<br>&nbsp;&nbsp;&nbsp;&nbsp;- <code>$#</code>: Total count of arguments passed.<br>&nbsp;&nbsp;&nbsp;&nbsp;- <code>$@</code>: Represents all parameters passed as an array.<br>&nbsp;&nbsp;&nbsp;&nbsp;- <code>$0</code>: The absolute script name path currently executing.<br>• <strong>Local Scope</strong>: Always prefix variables in functions with the <code>local</code> keyword (e.g. <code>local name=\"local\"</code>) to isolate execution scopes."
        },
        {
          title: "Exit Status Checks ($?)",
          text: "Every command returns an exit status code between <code>0</code> and <code>255</code>:<br>• <strong>`0`</strong>: Success state. The task executed perfectly.<br>• <strong>Non-zero (`1-255`)</strong>: Error state. Different codes reflect specific exit failures.<br>• <strong>`$?`</strong>: Accesses the exit status of the immediately preceding statement. Essential for pipeline gates."
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
          title: "Standard Input / Output Redirection Reference",
          text: `Unix commands communicate through standard streams: stdin (0), stdout (1), and stderr (2):<br><br>
<div class='cheat-table-wrapper' style='margin: 1rem 0;'>
  <table class='cheat-table'>
    <thead>
      <tr>
        <th style='width: 25%;'>Redirection Operator</th>
        <th style='width: 35%;'>Execution Action</th>
        <th style='width: 40%;'>DevOps Pipeline Example</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>&gt;</code></td>
        <td>Redirects stdout to a file (overwrites existing contents).</td>
        <td><code>echo "1.0.0" &gt; version.txt</code></td>
      </tr>
      <tr>
        <td><code>&gt;&gt;</code></td>
        <td>Redirects stdout to a file (appends data to the end).</td>
        <td><code>echo "Deploy successful" &gt;&gt; deploy.log</code></td>
      </tr>
      <tr>
        <td><code>2&gt;</code></td>
        <td>Redirects only system error codes (stderr).</td>
        <td><code>./backup.sh 2&gt; error.log</code></td>
      </tr>
      <tr>
        <td><code>2&gt;&amp;1</code></td>
        <td>Merges standard errors (2) into standard output (1).</td>
        <td><code>./deploy.sh &gt; execution.log 2&gt;&amp;1</code> (captures logs and errors).</td>
      </tr>
      <tr>
        <td><code>/dev/null</code></td>
        <td>System 'black hole'. Discards all outputs completely.</td>
        <td><code>./cron_check.sh &gt; /dev/null 2&gt;&amp;1</code> (fully silent run).</td>
      </tr>
      <tr>
        <td><code>|</code> (Pipe)</td>
        <td>Feeds the stdout of command 1 as stdin to command 2.</td>
        <td><code>ps aux | grep nginx</code></td>
      </tr>
    </tbody>
  </table>
</div>`
        },
        {
          title: "Crontab Scheduling Syntax Matrix",
          text: `Cron daemon schedules automated scripts execution via recurring crontab configuration files (<code>crontab -e</code>).<br><br>
<div class='cheat-table-wrapper' style='margin: 1rem 0;'>
  <table class='cheat-table' style='text-align: center;'>
    <thead>
      <tr>
        <th>Minute</th>
        <th>Hour</th>
        <th>Day of Month</th>
        <th>Month</th>
        <th>Day of Week</th>
        <th>Syntax Command String</th>
        <th>DevOps Operations Timing</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>*</code></td>
        <td><code>*</code></td>
        <td><code>*</code></td>
        <td><code>*</code></td>
        <td><code>*</code></td>
        <td><code>* * * * * run.sh</code></td>
        <td>Runs script continuously every minute.</td>
      </tr>
      <tr>
        <td><code>*/15</code></td>
        <td><code>*</code></td>
        <td><code>*</code></td>
        <td><code>*</code></td>
        <td><code>*</code></td>
        <td><code>*/15 * * * * run.sh</code></td>
        <td>Runs script every 15 minutes.</td>
      </tr>
      <tr>
        <td><code>0</code></td>
        <td><code>2</code></td>
        <td><code>*</code></td>
        <td><code>*</code></td>
        <td><code>*</code></td>
        <td><code>0 2 * * * run.sh</code></td>
        <td>Runs script daily at 2:00 AM.</td>
      </tr>
      <tr>
        <td><code>0</code></td>
        <td><code>0</code></td>
        <td><code>*</code></td>
        <td><code>*</code></td>
        <td><code>1</code></td>
        <td><code>0 0 * * 1 run.sh</code></td>
        <td>Runs script weekly at midnight on Mondays.</td>
      </tr>
    </tbody>
  </table>
</div>`
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
  },
  {
    id: "os-core",
    title: "Linux OS Core: Kernel, Inodes & Syscalls",
    track: "foundation",
    summary: "Explore Operating System internals: Kernel vs User Space, System Calls, File Descriptors, Inodes, and Links.",
    readTime: "6 min",
    videoTimestamp: "e01GGTKmtpc&t=15000s",
    content: {
      overview: "The operating system coordinates resource allocation between applications and physical hardware. Understanding how Linux abstracts resources via Inodes, File Descriptors, and System Calls is vital for cloud engineering and troubleshooting pipelines.",
      sections: [
        {
          title: "Kernel Space vs User Space",
          text: `To protect the system stability and prevent hardware corruption, memory is partitioned into two distinct security privilege levels:<br><br>
<div class='cheat-table-wrapper' style='margin: 1rem 0;'>
  <table class='cheat-table'>
    <thead>
      <tr>
        <th style='width: 25%;'>Privilege Level</th>
        <th style='width: 35%;'>Security Ring Access</th>
        <th style='width: 40%;'>DevOps Components & Details</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Kernel Space</strong></td>
        <td>Ring 0 (Most privileged). Direct access to RAM, CPU registers, disks, and physical hardware.</td>
        <td>Linux Kernel processes, system device drivers, file system modules.</td>
      </tr>
      <tr>
        <td><strong>User Space</strong></td>
        <td>Ring 3 (Least privileged). Isolated execution environment with restricted resource access.</td>
        <td>Application microservices, Nginx web servers, Docker container processes, Bash shell.</td>
      </tr>
    </tbody>
  </table>
</div>
<br>
<strong>System Calls (Syscalls)</strong> serve as the bridge: when a user-space application needs to write a file, spin up a socket connection, or launch a container, it must invoke a privileged <em>System Call</em> (e.g. <code>sys_write</code>, <code>sys_fork</code>) to request the Kernel to execute the task on its behalf.`
        },
        {
          title: "Inodes & Links Abstraction Matrix",
          text: `Linux abstracts storage blocks using Inodes (Index Nodes). An Inode contains file metadata (owner, permissions, blocks pointers, size) but does not store the file name. Directory records map user file names to Inode index numbers.<br><br>
<div class='cheat-table-wrapper' style='margin: 1rem 0;'>
  <table class='cheat-table'>
    <thead>
      <tr>
        <th style='width: 25%;'>Link Type</th>
        <th style='width: 35%;'>Definition</th>
        <th style='width: 40%;'>DevOps Practical Impact</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Hard Link</strong></td>
        <td>A new filename pointing directly to an existing Inode number.</td>
        <td>Deleting the original file keeps the Hard Link active. Cannot span across different mount partitions.</td>
      </tr>
      <tr>
        <td><strong>Soft Link (Symlink)</strong></td>
        <td>A pointer file pointing to the path name of another file.</td>
        <td>Deleting the original file breaks (orphans) the Symlink. Can span across separate mount partitions.</td>
      </tr>
    </tbody>
  </table>
</div>`
        },
        {
          title: "File Descriptors (FDs)",
          text: `A File Descriptor is a non-negative integer representing an open file stream in an active process. Every process starts with 3 default FDs:
<ul class='project-steps' style='margin: 1rem 0;'>
  <li><strong>0 (Stdin)</strong>: Standard input stream, usually keyboard input.</li>
  <li><strong>1 (Stdout)</strong>: Standard output stream, usually terminal display.</li>
  <li><strong>2 (Stderr)</strong>: Standard error logging stream, usually terminal output.</li>
</ul>
Linux processes have an 'open file descriptors limit' (viewable via <code>ulimit -n</code>). If a database or web application leaks open sockets, it throws a fatal <em>'Too many open files'</em> error, crashing the process.`
        }
      ],
      commands: [
        {
          cmd: "ls -i index.html",
          desc: "Display the unique Inode record number of a file."
        },
        {
          cmd: "strace -c ls",
          desc: "Trace and count system calls executed by a command utility."
        },
        {
          cmd: "ulimit -n",
          desc: "Show the maximum allowed open file descriptors limit in the current shell session."
        }
      ]
    }
  },
  {
    id: "os-memory",
    title: "OS Memory: Virtual RAM, Cache & OOM Killer",
    track: "process-management",
    summary: "Understand Virtual Memory, RAM allocation, Swapping, Buffers, Page Cache, and the Out-of-Memory (OOM) Killer.",
    readTime: "6 min",
    videoTimestamp: "e01GGTKmtpc&t=16200s",
    content: {
      overview: "Memory management determines how the OS maps volatile RAM to running container applications. Understanding how swap memory operates and why the OOM Killer terminates processes is a vital DevOps survival skill.",
      sections: [
        {
          title: "Operating System Memory Layout",
          text: `Volatile physical memory is divided into fixed-size blocks called <strong>Pages</strong> (typically 4KB). The OS manages physical memory using several abstraction layers:<br><br>
<div class='cheat-table-wrapper' style='margin: 1rem 0;'>
  <table class='cheat-table'>
    <thead>
      <tr>
        <th style='width: 25%;'>Memory Type</th>
        <th style='width: 35%;'>Mechanism</th>
        <th style='width: 40%;'>DevOps Troubleshooting Impact</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Virtual Memory</strong></td>
        <td>Maps process memory addresses to physical RAM blocks, isolating process spaces.</td>
        <td>Enables apps to utilize memory address spaces larger than physical RAM via Swapping.</td>
      </tr>
      <tr>
        <td><strong>Swap Space</strong></td>
        <td>Disk space used as overflow storage when physical RAM is exhausted.</td>
        <td>Slows system execution significantly (Disk I/O is much slower than RAM). Prevents outright crashes.</td>
      </tr>
      <tr>
        <td><strong>Page Cache</strong></td>
        <td>RAM used to cache files read from disk storage.</td>
        <td>Speeds up subsequent reads of configuration/database files. Avoids disk disk latency.</td>
      </tr>
      <tr>
        <td><strong>Buffer Cache</strong></td>
        <td>RAM used to cache block device operations.</td>
        <td>Optimizes write requests before sinking them to raw disks blocks.</td>
      </tr>
    </tbody>
  </table>
</div>`
        },
        {
          title: "The Out-of-Memory (OOM) Killer",
          text: `When physical memory and Swap Space are completely exhausted, the Linux kernel triggers the <strong>OOM Killer</strong> daemon to prevent system freeze or kernel panic. 
<br><br>
<strong>The OOM Mechanism</strong>:
<ul class='project-steps' style='margin: 1rem 0;'>
  <li>The kernel monitors RAM utilization. When free space reaches critical thresholds, it calculates an <strong>OOM Score</strong> for every active process (stored in <code>/proc/&lt;PID&gt;/oom_score</code>).</li>
  <li>Processes that consume massive RAM but have low administrative priority are assigned higher scores (e.g. database engines, Nginx processes).</li>
  <li>The OOM Killer selects the highest-scoring process and terminates it forcefully (sending <code>SIGKILL</code> / exit code 137).</li>
</ul>
<strong>DevOps Tip</strong>: To investigate OOM kills, check system logs with <code>dmesg -T | grep -i oom</code>. You can customize a process's vulnerability using <code>oom_score_adj</code>.`
        }
      ],
      commands: [
        {
          cmd: "free -h",
          desc: "Display total, used, free, and cached memory statistics in human-readable units."
        },
        {
          cmd: "vmstat 1 5",
          desc: "Monitor active process swaps, disk I/O, and CPU load trends every second for 5 counts."
        },
        {
          cmd: "dmesg -T | grep -i oom",
          desc: "Search kernel ring logs with timestamps to detect forceful OOM Killer terminations."
        }
      ]
    }
  },
  {
    id: "os-history",
    title: "Linux Evolution, FHS Comparisons & Shell Auditing",
    track: "foundation",
    summary: "Learn the history of UNIX and Linux, comparisons with Windows, distributions list, and essential user auditing utilities.",
    readTime: "6 min",
    videoTimestamp: "e01GGTKmtpc&t=17000s",
    content: {
      overview: "Linux was written from scratch in 1991 by Linus Torvalds to provide a free Unix-like system. Today, it operates as a combined effort with Richard Stallman's GNU free utilities, creating the GNU/Linux distribution families. Understanding its history and comparison to commercial OS architectures clarifies why Linux powers active DevOps servers globally.",
      sections: [
        {
          title: "The Unix & Linux History Roadmap",
          text: `The family tree of modern computing arose from research constraints:<br>
<ul class='project-steps' style='margin: 1rem 0;'>
  <li><strong>UNIX (1969)</strong>: Dennis Ritchie and Ken Thompson created UNICS / UNIX at AT&T Bell Labs after the Multics project fail. They released it as open-source, which quickly gained popularity.</li>
  <li><strong>Commercialization</strong>: In the late 70s, commercialized 'flavors' of UNIX emerged (IBM AIX, HP-UX, Sun Solaris, MacOS), locking the source code and costing thousands of dollars.</li>
  <li><strong>GNU Project (1983)</strong>: Richard Stallman launched the Free Software Movement to compile a completely free Unix-compatible software suite.</li>
  <li><strong>Linux Kernel (1991)</strong>: Linus Torvalds (a student in Helsinki doing MINIX research) built a free kernel from scratch. Collaborating with GNU's software suite spawned the full <strong>GNU/Linux Operating System</strong>.</li>
</ul>`
        },
        {
          title: "Comparative Matrix: Linux vs Windows",
          text: `Linux and Windows operate under divergent design philosophies, file systems, and command standards:<br><br>
<div class='cheat-table-wrapper' style='margin: 1rem 0;'>
  <table class='cheat-table'>
    <thead>
      <tr>
        <th style='width: 25%;'>Property</th>
        <th style='width: 38%;'>Linux System Architecture</th>
        <th style='width: 37%;'>Windows OS Architecture</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Open Source</strong></td>
        <td>100% Free Open-Source. Code is viewable and modifiable globally.</td>
        <td>Proprietary closed-source. Requires costly licensing fees per host.</td>
      </tr>
      <tr>
        <td><strong>Path Separator</strong></td>
        <td>Uses the Forward Slash (<code>/</code>) (e.g. <code>/var/log</code>).</td>
        <td>Uses the Backslash (<code>\\</code>) (e.g. <code>C:\\Windows</code>).</td>
      </tr>
      <tr>
        <td><strong>Case-Sensitivity</strong></td>
        <td>Fully Case-Sensitive. <code>index.html</code> and <code>INDEX.HTML</code> are unique files.</td>
        <td>Case-Insensitive. Cannot have files with conflicting casing in one folder.</td>
      </tr>
      <tr>
        <td><strong>Accounts Model</strong></td>
        <td>Three types: 1. Regular, 2. Root (Superuser), 3. Service accounts.</td>
        <td>Four types: 1. Administrator, 2. Standard, 3. Child, 4. Guest.</td>
      </tr>
      <tr>
        <td><strong>Core Performance</strong></td>
        <td>Extremely lightweight, stable, runs headless (CLI) with minimal RAM.</td>
        <td>Heavy graphic-interface GUI reliance, higher RAM consumption.</td>
      </tr>
    </tbody>
  </table>
</div>`
        },
        {
          title: "System & Active User Auditing Utilities",
          text: `DevOps system logging requires immediate tracking of active logins, uptime health, and loads. These commands are essential:<br><br>
<div class='cheat-table-wrapper' style='margin: 1rem 0;'>
  <table class='cheat-table'>
    <thead>
      <tr>
        <th style='width: 20%;'>Command</th>
        <th style='width: 40%;'>Action Details</th>
        <th style='width: 40%;'>DevOps Scenario / Output</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>whoami</code></td>
        <td>Display the username of the current active terminal owner.</td>
        <td>Verify shell privilege levels inside scripts before actions.</td>
      </tr>
      <tr>
        <td><code>who</code></td>
        <td>Identify which users are currently logged into separate TTY terminals.</td>
        <td>Audits external team login states on shared deploy hosts.</td>
      </tr>
      <tr>
        <td><code>w</code></td>
        <td>Displays active logins (like 'who') but appends CPU uptime and load ratios.</td>
        <td>Combines login auditing with quick system capacity analysis.</td>
      </tr>
      <tr>
        <td><code>uptime</code></td>
        <td>Query length of time system has been active without rebooting.</td>
        <td>Monitors server stability. Displays 1, 5, and 15-minute CPU loads.</td>
      </tr>
      <tr>
        <td><code>alias</code></td>
        <td>Configure nickname shortcuts for lengthy shell commands.</td>
        <td>Define build shortcuts (e.g. <code>alias deploy='./gradlew bootRun'</code>).</td>
      </tr>
      <tr>
        <td><code>man</code></td>
        <td>Display the interactive system reference manual for a command.</td>
        <td>Syntax verification (e.g. <code>man systemctl</code>).</td>
      </tr>
    </tbody>
  </table>
</div>`
        }
      ],
      commands: [
        {
          cmd: "w",
          desc: "Audit currently logged-in users, active shell terminals, and load averages."
        },
        {
          cmd: "uptime",
          desc: "Display system runtime statistics, active user counts, and 1/5/15-minute load averages."
        },
        {
          cmd: "alias ll='ls -la'",
          desc: "Register a shortcut nickname for a verbose directory listing command."
        }
      ]
    }
  },
  {
    id: "devops-troubleshooting",
    title: "DevOps Troubleshooting & SSH Security Guide",
    track: "process-management",
    summary: "Step-by-step diagnostic workflows for server slowness, full storage drives, non-starting daemons, and host security policies.",
    readTime: "6 min",
    videoTimestamp: "e01GGTKmtpc&t=18000s",
    content: {
      overview: "Troubleshooting unresponsive services and securing SSH interfaces are core responsibilities for DevOps engineers. This guide compiles industry-standard resolution protocols based on typical high-stakes system failures.",
      sections: [
        {
          title: "1. Diagnostic Workflow: Server Running Slow",
          text: `When application latency spikes or server nodes become sluggish, follow this step-by-step resolution path:<br>
<ul class='project-steps' style='margin: 1rem 0;'>
  <li><strong>Check CPU Load</strong>: Execute <code>uptime</code> to inspect load averages. If ratios exceed total cores (e.g. load of 8 on a 4-core CPU), the processor is bottlenecked.</li>
  <li><strong>Identify Spikers</strong>: Run <code>top</code> or <code>htop</code>. Press 'P' to sort by CPU usage to locate rogue processes.</li>
  <li><strong>Audit Memory & Swapping</strong>: Run <code>free -h</code>. If 'available' memory is near zero and swap usage is high, the system is 'thrashing' (constantly reading/writing swap files to disk), causing slowness.</li>
  <li><strong>Check Disk I/O Wait</strong>: Run <code>vmstat 1 5</code>. Inspect the <code>wa</code> (I/O wait) column under CPU. If it is consistently high (e.g., >20%), the server is throttled by slow disk read/writes.</li>
</ul>`
        },
        {
          title: "2. Diagnostic Workflow: Disk Space Is 100% Full",
          text: `A full disk partition blocks new log writing and database inserts, instantly crashing services. Recover using this checklist:<br>
<ul class='project-steps' style='margin: 1rem 0;'>
  <li><strong>Find Mount Point</strong>: Run <code>df -h</code> to identify which mount point (e.g. <code>/</code>, <code>/var</code>) is at 100%.</li>
  <li><strong>Isolate Heavy Directories</strong>: Run <code>sudo du -sh /* 2>/dev/null | sort -h</code> to find which top-level folders consume the most space. Repeat in deep subfolders.</li>
  <li><strong>Locate Large Files</strong>: Search specifically for files exceeding 100MB: <code>find / -type f -size +100M -exec ls -lh {} \\; 2>/dev/null</code>.</li>
  <li><strong>Safe Space Recovery</strong>: Do NOT delete active application logs using <code>rm</code> (processes keep the file descriptor open, retaining the disk blocks in memory). Instead, truncate the file safely: <code>&gt; /var/log/heavy_app.log</code>.</li>
</ul>`
        },
        {
          title: "3. Hardening SSH Connections Security",
          text: `SSH is the primary target for server brute-force scans. Implement these configurations inside <code>/etc/ssh/sshd_config</code> to secure remote server networks:<br><br>
<div class='cheat-table-wrapper' style='margin: 1rem 0;'>
  <table class='cheat-table'>
    <thead>
      <tr>
        <th style='width: 30%;'>SSH Hardening Policy</th>
        <th style='width: 35%;'>Configuration Directive</th>
        <th style='width: 35%;'>Security Impact Details</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Disable Password Logins</strong></td>
        <td><code>PasswordAuthentication no</code></td>
        <td>Enforces key-based private logins, rendering brute-force attacks completely ineffective.</td>
      </tr>
      <tr>
        <td><strong>Disable Root Logins</strong></td>
        <td><code>PermitRootLogin no</code></td>
        <td>Blocks direct root login. Admins must log in as regular users and use <code>sudo</code>, generating trail audit logs.</td>
      </tr>
      <tr>
        <td><strong>Move Default Port</strong></td>
        <td><code>Port 2222</code> (e.g.)</td>
        <td>Changes port from default 22 to block 99% of automated mass-internet script scans.</td>
      </tr>
      <tr>
        <td><strong>Limit Allowed Users</strong></td>
        <td><code>AllowUsers priyanshu jenkins</code></td>
        <td>Explicitly lists only authorized users permitted to log in, dropping connection attempts for others.</td>
      </tr>
    </tbody>
  </table>
</div>
<br>
<strong>Important</strong>: Always run <code>sudo sshd -t</code> to verify sshd config syntax before restarting services. A syntax error will lock you out of the server on your next connection!`
        }
      ],
      commands: [
        {
          cmd: "find /var/log -type f -size +100M",
          desc: "Search specifically for files exceeding 100MB inside the logs directory tree."
        },
        {
          cmd: "sudo sshd -t",
          desc: "Validate the syntax of the SSH configuration file to prevent remote administration lockouts."
        },
        {
          cmd: "free -h && df -h",
          desc: "Quickly review active memory capacities and disk mount spaces together."
        }
      ]
    }
  },

  // ════════════════════════════════════════════════════════════
  //  SHELL SCRIPTING — Scripts 01 → 15
  // ════════════════════════════════════════════════════════════
  {
    id: "shell-01-basic",
    title: "Shell Scripting #01 — Your First Bash Script",
    track: "shell-scripting",
    summary: "Write your very first shell script. Understand the shebang line, how to print output with echo, and how to make a script executable.",
    readTime: "3 min",
    videoTimestamp: "",
    content: {
      overview: "A shell script is a plain text file containing a sequence of commands the Bash interpreter executes top-to-bottom. Every Bash script starts with a special first line called the <strong>shebang</strong>, which tells the OS exactly which interpreter to use. This is the foundational starting point for all automation work.",
      sections: [
        {
          title: "Script Breakdown — 01_basic.sh",
          text: `<pre class="code-block">#!/bin/bash

echo "hello World!!"</pre>
<br>
<div class='cheat-table-wrapper' style='margin: 1rem 0;'>
  <table class='cheat-table'>
    <thead><tr><th style='width:35%;'>Line</th><th>Explanation</th></tr></thead>
    <tbody>
      <tr><td><code>#!/bin/bash</code></td><td><strong>Shebang line</strong> — always the very first line. Tells the OS to run this file with the <code>/bin/bash</code> interpreter. Without it, the script may run under the wrong shell.</td></tr>
      <tr><td><code>echo "hello World!!"</code></td><td>Prints the string to <strong>stdout</strong> (standard output) followed by a newline. The most basic output command in Bash.</td></tr>
    </tbody>
  </table>
</div>`
        },
        {
          title: "Creating & Running a Script — Step by Step",
          text: `To create and execute your own script follow these four steps:<br><br>
<div class='cheat-table-wrapper' style='margin: 1rem 0;'>
  <table class='cheat-table'>
    <thead><tr><th style='width:5%;'>Step</th><th style='width:40%;'>Command</th><th>What it Does</th></tr></thead>
    <tbody>
      <tr><td>1</td><td><code>echo '#!/bin/bash' &gt; hello.sh</code></td><td>Create the script file with a Bash shebang.</td></tr>
      <tr><td>2</td><td><code>echo 'echo "Hello World"' &gt;&gt; hello.sh</code></td><td>Append script commands one line at a time.</td></tr>
      <tr><td>3</td><td><code>chmod +x hello.sh</code></td><td>Grant execute permission so the OS can run it.</td></tr>
      <tr><td>4</td><td><code>./hello.sh</code></td><td>Run the script from the current directory.</td></tr>
    </tbody>
  </table>
</div>
<strong>Tip:</strong> This browser sandbox does not include nano or vim, so echo redirection is the built-in way to create practice scripts.`
        }
      ],
      commands: [
        { cmd: "#!/bin/bash", desc: "Shebang — place as the very first line of every Bash script." },
        { cmd: "echo \"Hello World\"", desc: "Print text to standard output (stdout)." },
        { cmd: "chmod +x script.sh", desc: "Make a script executable. Run ./script.sh next." }
      ]
    }
  },
  {
    id: "shell-02-comments",
    title: "Shell Scripting #02 — Comments",
    track: "shell-scripting",
    summary: "Document your scripts using single-line and multi-line (heredoc) comments. Learn why commenting is non-negotiable in production scripts.",
    readTime: "3 min",
    videoTimestamp: "",
    content: {
      overview: "Comments are lines in your script that the Bash interpreter completely ignores. They are written purely for human readers — teammates, future you, or code reviewers. Well-commented scripts are the hallmark of a professional DevOps engineer.",
      sections: [
        {
          title: "Types of Comments in Bash",
          text: `<pre class="code-block">#!/bin/bash

echo "Checking comments"

# This is a single-line comment

&lt;&lt;comment
This is a multi-line
comment block using heredoc syntax
comment</pre>
<br>
<div class='cheat-table-wrapper' style='margin: 1rem 0;'>
  <table class='cheat-table'>
    <thead><tr><th style='width:35%;'>Syntax</th><th>Usage</th></tr></thead>
    <tbody>
      <tr><td><code># Your comment here</code></td><td><strong>Single-line comment.</strong> The <code>#</code> character makes Bash skip the entire line. The shebang <code>#!/bin/bash</code> is technically a special comment too.</td></tr>
      <tr><td><code>&lt;&lt;LABEL ... LABEL</code></td><td><strong>Multi-line comment (heredoc trick).</strong> Everything between the two matching labels is treated as a here-document string fed to nothing — effectively ignored. The label name (e.g. <code>comment</code>) is your choice.</td></tr>
    </tbody>
  </table>
</div>`
        },
        {
          title: "Commenting Best Practices",
          text: `Good commenting habits separate maintainable automation from throwaway scripts:<br>
<ul class='project-steps' style='margin: 1rem 0;'>
  <li><strong>Comment the "why", not the "what"</strong>: <code># Retry 3 times because API rate-limits at 60 req/min</code> is useful. <code># add 1 to x</code> is noise.</li>
  <li><strong>Add a header block</strong>: Include script name, author, date, and purpose at the top.</li>
  <li><strong>Comment before complex logic</strong>: Any loops, conditionals, or pipelines more than 2 lines should have a comment above them.</li>
  <li><strong>Keep comments updated</strong>: A wrong comment is worse than no comment.</li>
</ul>`
        }
      ],
      commands: [
        { cmd: "# Single-line comment", desc: "Bash ignores everything after # on that line." },
        { cmd: "<<BLOCK\n  multi-line comment\nBLOCK", desc: "Heredoc trick for block comments — nothing is executed between the labels." }
      ]
    }
  },
  {
    id: "shell-03-variables",
    title: "Shell Scripting #03 — Variables",
    track: "shell-scripting",
    summary: "Declare and use variables in Bash. Store strings, numbers, and command output. Learn variable expansion and dynamic reassignment.",
    readTime: "4 min",
    videoTimestamp: "",
    content: {
      overview: "Variables are named containers that store data a script can reference and reuse. Unlike Python or JavaScript, Bash variables are untyped — everything is stored as a string by default. Understanding variable syntax is the most critical foundation for scripting.",
      sections: [
        {
          title: "Variable Syntax Rules",
          text: `<pre class="code-block">#!/bin/bash

name="Priyanshu Kumar Sharma"
age="19"

echo "My name is $name and my age is $age"

# Store command output in a variable
hostname=$(hostname)
echo "Machine name: $hostname"

# Reassign a variable
name="Tony Stark"
echo "Name is now: $name"</pre>
<br>
<div class='cheat-table-wrapper' style='margin: 1rem 0;'>
  <table class='cheat-table'>
    <thead><tr><th style='width:35%;'>Rule</th><th>Details</th></tr></thead>
    <tbody>
      <tr><td><strong>No spaces around <code>=</code></strong></td><td><code>name="Priyanshu"</code> ✅ &nbsp; <code>name = "Priyanshu"</code> ❌ (Bash treats <code>name</code> as a command to run)</td></tr>
      <tr><td><strong>Access with <code>$</code></strong></td><td>Use <code>$varname</code> or <code>\${varname}</code> to expand a variable's value. The curly-brace form is safer inside complex strings.</td></tr>
      <tr><td><strong>Command substitution</strong></td><td><code>var=$(command)</code> runs the command and stores its output in <code>var</code>. The modern preferred form — older scripts use backticks <code>\`command\`</code>.</td></tr>
      <tr><td><strong>Reassignment</strong></td><td>Simply write <code>varname="new_value"</code> again — the old value is overwritten (unless <code>readonly</code>, see Script #04).</td></tr>
      <tr><td><strong>Quoting</strong></td><td>Use <strong>double quotes</strong> <code>"..."</code> for strings that contain spaces. Single quotes <code>'...'</code> suppress all variable expansion.</td></tr>
    </tbody>
  </table>
</div>`
        }
      ],
      commands: [
        { cmd: "name=\"Priyanshu\"", desc: "Declare a variable — no spaces around the equals sign." },
        { cmd: "echo \"Hello $name\"", desc: "Expand variable inside a double-quoted string." },
        { cmd: "hostname=$(hostname)", desc: "Command substitution — store command output in a variable." },
        { cmd: "echo \${name}", desc: "Curly-brace expansion — safer form for complex string contexts." }
      ]
    }
  },
  {
    id: "shell-04-constvar",
    title: "Shell Scripting #04 — Constant (Readonly) Variables",
    track: "shell-scripting",
    summary: "Use the readonly keyword to declare immutable variables. Understand why constants matter for safe, predictable scripting.",
    readTime: "3 min",
    videoTimestamp: "",
    content: {
      overview: "Sometimes a variable should never change after being set — database credentials, file paths, API endpoints. The <code>readonly</code> keyword locks a variable so that any attempt to modify it causes the script to throw an error, protecting you from accidental overwrites in large scripts.",
      sections: [
        {
          title: "Declaring Constants with readonly",
          text: `<pre class="code-block">#!/bin/bash

readonly name="Priyanshu K Sharma"
echo $name

# Attempting to change a readonly variable:
name="Sharma"
# bash: name: readonly variable  ← Error! Script may exit.</pre>
<br>
<div class='cheat-table-wrapper' style='margin: 1rem 0;'>
  <table class='cheat-table'>
    <thead><tr><th style='width:35%;'>Concept</th><th>Details</th></tr></thead>
    <tbody>
      <tr><td><code>readonly varname="value"</code></td><td>Declares the variable and immediately marks it as immutable. Assignment and readonly can be combined in one step.</td></tr>
      <tr><td>Reassignment attempt</td><td>Bash prints <code>bash: varname: readonly variable</code> and the script exits with a non-zero error code if <code>set -e</code> is active.</td></tr>
      <tr><td><code>declare -r varname</code></td><td>Alternative syntax — <code>declare -r</code> is equivalent to <code>readonly</code> and is preferred in modern scripts.</td></tr>
      <tr><td>Naming convention</td><td>By convention, constants are written in <strong>UPPER_SNAKE_CASE</strong>: e.g. <code>readonly MAX_RETRIES=3</code></td></tr>
    </tbody>
  </table>
</div>`
        },
        {
          title: "Real-World DevOps Usage",
          text: `Constants protect configuration values from accidental mutation inside complex pipelines:<br>
<pre class="code-block">#!/bin/bash
readonly DB_HOST="prod-db.internal"
readonly MAX_CONNECTIONS=50
readonly LOG_DIR="/var/log/myapp"

# These cannot be changed later — safe to reference everywhere
echo "Connecting to $DB_HOST with max $MAX_CONNECTIONS connections"</pre>`
        }
      ],
      commands: [
        { cmd: "readonly API_KEY=\"abc123\"", desc: "Lock a variable as immutable — any reassignment triggers an error." },
        { cmd: "declare -r MAX_RETRIES=3", desc: "Modern alternative to readonly for declaring constants." },
        { cmd: "readonly -p", desc: "List all currently declared readonly variables in the shell." }
      ]
    }
  },
  {
    id: "shell-05-arrays",
    title: "Shell Scripting #05 — Arrays",
    track: "shell-scripting",
    summary: "Store ordered collections of values in indexed arrays. Access, slice, update, and iterate over array elements.",
    readTime: "5 min",
    videoTimestamp: "",
    content: {
      overview: "Arrays let you store multiple values under a single variable name, accessing each element by its numeric index (starting at 0). They are essential for processing lists of servers, files, users, or any collection of data inside automation scripts.",
      sections: [
        {
          title: "Array Fundamentals",
          text: `<pre class="code-block">#!/bin/bash

myArray=(1 2 30.5 Hello "Hey man")

echo "\${myArray[*]}"      # All elements
echo "\${myArray[0]}"      # Index 0 → 1
echo "\${myArray[4]}"      # Index 4 → Hey man
echo "\${#myArray[*]}"     # Length → 5
echo "\${myArray[*]:2:2}"  # Slice from index 2, take 2

myArray+=(New 30 40)       # Append elements
echo "\${myArray[*]}"</pre>
<br>
<div class='cheat-table-wrapper' style='margin: 1rem 0;'>
  <table class='cheat-table'>
    <thead><tr><th style='width:40%;'>Syntax</th><th>Meaning</th></tr></thead>
    <tbody>
      <tr><td><code>arr=(a b c)</code></td><td>Declare an indexed array with space-separated values.</td></tr>
      <tr><td><code>\${arr[0]}</code></td><td>Access element at index 0 (zero-based).</td></tr>
      <tr><td><code>\${arr[*]}</code> or <code>\${arr[@]}</code></td><td>Expand <strong>all elements</strong>. Use <code>[@]</code> in for-loops to correctly handle elements with spaces.</td></tr>
      <tr><td><code>\${#arr[*]}</code></td><td>Get the <strong>number of elements</strong> (length) of the array.</td></tr>
      <tr><td><code>\${arr[*]:start:count}</code></td><td><strong>Slice</strong> — extract <code>count</code> elements beginning at <code>start</code>.</td></tr>
      <tr><td><code>arr+=(x y z)</code></td><td><strong>Append</strong> new elements to the end of the array.</td></tr>
    </tbody>
  </table>
</div>`
        },
        {
          title: "Associative Arrays (Key-Value)",
          text: `Bash also supports associative (key → value) arrays using named keys:<br>
<pre class="code-block">myArray1=([1]=A [2]=B [3]=C [name]=paul)
echo "\${myArray1[name]}"   # → paul
echo "\${myArray1[1]}"      # → A</pre>
<br><strong>Note:</strong> For fully-typed associative arrays, use <code>declare -A</code> (covered in Script #15).`
        }
      ],
      commands: [
        { cmd: "arr=(apple banana cherry)", desc: "Declare an indexed array." },
        { cmd: "echo \${arr[1]}", desc: "Access the second element (index 1)." },
        { cmd: "echo \${#arr[@]}", desc: "Print the total number of elements." },
        { cmd: "arr+=(date elderberry)", desc: "Append two new elements to the array." },
        { cmd: "echo \${arr[@]:1:2}", desc: "Slice: print 2 elements starting at index 1." }
      ]
    }
  },
  {
    id: "shell-06-strings",
    title: "Shell Scripting #06 — String Operations",
    track: "shell-scripting",
    summary: "Manipulate strings: measure length, slice substrings, replace text, and convert case — all without external tools.",
    readTime: "4 min",
    videoTimestamp: "",
    content: {
      overview: "Bash provides rich built-in string manipulation without needing <code>awk</code>, <code>sed</code>, or Python. Understanding these parameter expansion techniques lets you transform filenames, parse outputs, and format data entirely within your scripts.",
      sections: [
        {
          title: "String Manipulation Reference",
          text: `<pre class="code-block">#!/bin/bash

myVar="Hello World"

echo "\${#myVar}"             # Length → 11
echo "\${myVar:0:5}"          # Slice → Hello
echo "\${myVar:6}"            # From index 6 → World
echo "\${myVar/World/Linux}"  # Replace → Hello Linux
echo "\${myVar^^}"            # Uppercase → HELLO WORLD
echo "\${myVar,,}"            # Lowercase → hello world</pre>
<br>
<div class='cheat-table-wrapper' style='margin: 1rem 0;'>
  <table class='cheat-table'>
    <thead><tr><th style='width:40%;'>Syntax</th><th>Operation</th></tr></thead>
    <tbody>
      <tr><td><code>\${#varname}</code></td><td><strong>Length</strong> — returns the number of characters in the string.</td></tr>
      <tr><td><code>\${var:offset:length}</code></td><td><strong>Substring</strong> — extract <em>length</em> chars starting at <em>offset</em> (0-based). Omit length to get everything from offset to end.</td></tr>
      <tr><td><code>\${var/find/replace}</code></td><td><strong>Replace first match</strong> — replaces only the first occurrence.</td></tr>
      <tr><td><code>\${var//find/replace}</code></td><td><strong>Replace all matches</strong> — double slash replaces every occurrence globally.</td></tr>
      <tr><td><code>\${var^^}</code></td><td><strong>UPPERCASE</strong> all characters.</td></tr>
      <tr><td><code>\${var,,}</code></td><td><strong>lowercase</strong> all characters.</td></tr>
      <tr><td><code>\${var^}</code></td><td><strong>Capitalize</strong> only the first character.</td></tr>
    </tbody>
  </table>
</div>`
        }
      ],
      commands: [
        { cmd: "echo \${#myVar}", desc: "Get the character length of a string variable." },
        { cmd: "echo \${myVar:0:5}", desc: "Slice the first 5 characters of the string." },
        { cmd: "echo \${myVar/World/Linux}", desc: "Replace the first occurrence of 'World' with 'Linux'." },
        { cmd: "echo \${myVar^^}", desc: "Convert entire string to UPPERCASE." },
        { cmd: "echo \${myVar,,}", desc: "Convert entire string to lowercase." }
      ]
    }
  },
  {
    id: "shell-07-user-input",
    title: "Shell Scripting #07 — User Input with read",
    track: "shell-scripting",
    summary: "Accept interactive input from users using the read command. Build interactive menu-driven scripts with prompts and silent password entry.",
    readTime: "3 min",
    videoTimestamp: "",
    content: {
      overview: "The <code>read</code> command pauses script execution and waits for the user to type a value, then stores it in a variable. This is how interactive shell scripts — like installers, deploy prompts, and configuration wizards — work.",
      sections: [
        {
          title: "Using read for Interactive Input",
          text: `<pre class="code-block">#!/bin/bash

read -p "Enter your name: " name
echo "Your name is $name"</pre>
<br>
<div class='cheat-table-wrapper' style='margin: 1rem 0;'>
  <table class='cheat-table'>
    <thead><tr><th style='width:35%;'>read Flag</th><th>Effect</th></tr></thead>
    <tbody>
      <tr><td><code>-p "prompt"</code></td><td>Display a <strong>prompt string</strong> before waiting for input. No newline is added before the cursor.</td></tr>
      <tr><td><code>-s</code></td><td><strong>Silent mode</strong> — input characters are not echoed. Used for password entry.</td></tr>
      <tr><td><code>-t N</code></td><td><strong>Timeout</strong> — automatically stop waiting after N seconds.</td></tr>
      <tr><td><code>-n N</code></td><td><strong>Character limit</strong> — stop reading after exactly N characters (no Enter needed).</td></tr>
      <tr><td><code>-r</code></td><td><strong>Raw mode</strong> — disable backslash escape interpretation (recommended for file paths).</td></tr>
      <tr><td><code>-a arrayname</code></td><td>Read space-separated input directly into an <strong>array</strong>.</td></tr>
    </tbody>
  </table>
</div>`
        },
        {
          title: "Real-World Example — Deployment Prompt",
          text: `<pre class="code-block">#!/bin/bash
read -p "Enter server IP: " SERVER
read -s -p "Enter deploy password: " PASS
echo ""   # newline after silent input
echo "Connecting to $SERVER..."</pre>`
        }
      ],
      commands: [
        { cmd: "read -p \"Enter username: \" USER", desc: "Display a prompt and store input in $USER." },
        { cmd: "read -s -p \"Password: \" PASS", desc: "Silent read — characters not shown on screen (for passwords)." },
        { cmd: "read -t 10 -p \"Continue? [y/n]: \" ans", desc: "Auto-timeout after 10 seconds if no response." },
        { cmd: "read -r -p \"Enter path: \" filepath", desc: "Raw mode — safely read file paths with backslashes." }
      ]
    }
  },
  {
    id: "shell-08-arithmetic",
    title: "Shell Scripting #08 — Arithmetic Operations",
    track: "shell-scripting",
    summary: "Perform integer arithmetic in Bash using let, $(( )) expansion, and expr. Understand why direct * syntax fails.",
    readTime: "4 min",
    videoTimestamp: "",
    content: {
      overview: "Bash treats all variables as strings by default — you cannot simply write <code>result=$x*$y</code> and expect a numeric answer. You must use one of three arithmetic mechanisms: <code>let</code>, arithmetic expansion <code>$(( ))</code>, or the external <code>expr</code> command. The <code>$(( ))</code> form is the modern standard.",
      sections: [
        {
          title: "Arithmetic Methods Compared",
          text: `<pre class="code-block">#!/bin/bash
x=10
y=3

# Method 1: let
let mul=$x*$y
echo "Product: $mul"         # → 30

# Method 2: Arithmetic Expansion (preferred)
sum=$((x+y))
echo "Sum: $sum"             # → 13
diff=$(($x-$y))
echo "Difference: $diff"     # → 7
div=$(($x/$y))
echo "Division: $div"        # → 3  (integer, truncates decimal)</pre>
<br>
<div class='cheat-table-wrapper' style='margin: 1rem 0;'>
  <table class='cheat-table'>
    <thead><tr><th style='width:35%;'>Method</th><th style='width:30%;'>Syntax</th><th>Notes</th></tr></thead>
    <tbody>
      <tr><td><strong>Arithmetic Expansion</strong></td><td><code>$(( expr ))</code></td><td>✅ <strong>Modern standard.</strong> No spaces required around operators. Supports all arithmetic operators.</td></tr>
      <tr><td><strong>let</strong></td><td><code>let var=expr</code></td><td>Older style. Works but quoting rules can be tricky.</td></tr>
      <tr><td><strong>expr</strong></td><td><code>result=$(expr $x + $y)</code></td><td>External command — slow. Requires spaces around operators. Use <code>*</code> as <code>\*</code> to avoid glob expansion.</td></tr>
    </tbody>
  </table>
</div>
<strong>⚠ Important:</strong> Bash only does <strong>integer arithmetic</strong>. For floating-point, pipe to <code>bc</code>: <code>echo "scale=2; 10/3" | bc</code>`
        },
        {
          title: "All Arithmetic Operators",
          text: `<div class='cheat-table-wrapper' style='margin: 1rem 0;'>
  <table class='cheat-table'>
    <thead><tr><th>Operator</th><th>Operation</th><th>Example</th><th>Result</th></tr></thead>
    <tbody>
      <tr><td><code>+</code></td><td>Addition</td><td><code>$((10+3))</code></td><td>13</td></tr>
      <tr><td><code>-</code></td><td>Subtraction</td><td><code>$((10-3))</code></td><td>7</td></tr>
      <tr><td><code>*</code></td><td>Multiplication</td><td><code>$((10*3))</code></td><td>30</td></tr>
      <tr><td><code>/</code></td><td>Integer Division</td><td><code>$((10/3))</code></td><td>3</td></tr>
      <tr><td><code>%</code></td><td>Modulus (Remainder)</td><td><code>$((10%3))</code></td><td>1</td></tr>
      <tr><td><code>**</code></td><td>Exponentiation</td><td><code>$((2**8))</code></td><td>256</td></tr>
    </tbody>
  </table>
</div>`
        }
      ],
      commands: [
        { cmd: "result=$((10 + 5))", desc: "Integer addition using arithmetic expansion (preferred method)." },
        { cmd: "echo $((100 % 7))", desc: "Modulus — prints the remainder of 100 ÷ 7." },
        { cmd: "echo \"scale=2; 10/3\" | bc", desc: "Floating-point division using the bc calculator." },
        { cmd: "((count++))", desc: "Increment a variable using arithmetic context — no $ needed inside (( ))." }
      ]
    }
  },
  {
    id: "shell-09-conditionals",
    title: "Shell Scripting #09 — Conditional Statements (if / elif / else)",
    track: "shell-scripting",
    summary: "Control script flow with if, elif, and else blocks. Master numeric and string comparison operators inside [ ] test expressions.",
    readTime: "5 min",
    videoTimestamp: "",
    content: {
      overview: "Conditional statements allow a script to make decisions — running different code depending on whether a condition is true or false. The Bash <code>if</code> statement evaluates the exit code of a command or a <code>[ test ]</code> expression.",
      sections: [
        {
          title: "if / elif / else Syntax",
          text: `<pre class="code-block">#!/bin/bash

marks=75

if [ $marks -gt 80 ]; then
    echo "A grade"
elif [ $marks -gt 60 ]; then
    echo "B grade"
elif [ $marks -gt 40 ]; then
    echo "C grade"
else
    echo "Failed"
fi</pre>
<br>
<div class='cheat-table-wrapper' style='margin: 1rem 0;'>
  <table class='cheat-table'>
    <thead><tr><th style='width:35%;'>Numeric Operator</th><th>Meaning</th></tr></thead>
    <tbody>
      <tr><td><code>-eq</code></td><td>Equal to ( == )</td></tr>
      <tr><td><code>-ne</code></td><td>Not equal to ( != )</td></tr>
      <tr><td><code>-gt</code></td><td>Greater than ( &gt; )</td></tr>
      <tr><td><code>-ge</code></td><td>Greater than or equal to ( &gt;= )</td></tr>
      <tr><td><code>-lt</code></td><td>Less than ( &lt; )</td></tr>
      <tr><td><code>-le</code></td><td>Less than or equal to ( &lt;= )</td></tr>
    </tbody>
  </table>
</div>`
        },
        {
          title: "String & File Test Operators",
          text: `<div class='cheat-table-wrapper' style='margin: 1rem 0;'>
  <table class='cheat-table'>
    <thead><tr><th style='width:35%;'>Operator</th><th>Tests</th></tr></thead>
    <tbody>
      <tr><td><code>[ "$a" == "$b" ]</code></td><td>String equality</td></tr>
      <tr><td><code>[ "$a" != "$b" ]</code></td><td>String inequality</td></tr>
      <tr><td><code>[ -z "$var" ]</code></td><td>String is <strong>empty</strong> (zero length)</td></tr>
      <tr><td><code>[ -n "$var" ]</code></td><td>String is <strong>not empty</strong></td></tr>
      <tr><td><code>[ -f file ]</code></td><td>File exists and is a regular file</td></tr>
      <tr><td><code>[ -d path ]</code></td><td>Path exists and is a directory</td></tr>
      <tr><td><code>[ -r file ]</code></td><td>File is readable</td></tr>
      <tr><td><code>[ -x file ]</code></td><td>File is executable</td></tr>
    </tbody>
  </table>
</div>
<strong>Tip:</strong> Always quote your variables inside <code>[ ]</code> — e.g. <code>[ "$name" == "admin" ]</code> — to avoid word-splitting errors when the variable is empty.`
        }
      ],
      commands: [
        { cmd: "if [ $x -eq 10 ]; then echo \"ten\"; fi", desc: "Single-line if statement checking numeric equality." },
        { cmd: "if [ -f /etc/passwd ]; then echo \"exists\"; fi", desc: "Check if a file exists before reading it." },
        { cmd: "if [ -z \"$USER\" ]; then echo \"Not set\"; fi", desc: "Check if a variable is empty before using it." }
      ]
    }
  },
  {
    id: "shell-10-case",
    title: "Shell Scripting #10 — Case Statements",
    track: "shell-scripting",
    summary: "Replace chains of if-elif with cleaner case statements. Build multi-option menus and handle wildcard fallbacks.",
    readTime: "4 min",
    videoTimestamp: "",
    content: {
      overview: "The <code>case</code> statement is the Bash equivalent of a switch statement in other languages. It is ideal when you need to match a variable against several possible values — much cleaner than long <code>if-elif</code> chains, especially for interactive menus.",
      sections: [
        {
          title: "Case Statement Structure",
          text: `<pre class="code-block">#!/bin/bash

echo "Choose: a) Date  b) Time  c) Directory"
read choice

case $choice in
    a)
        echo "Date: $(date +%D)"
        ;;
    b)
        echo "Time: $(date +%T)"
        ;;
    c)
        echo "Dir: $(pwd)"
        ;;
    *)
        echo "Invalid choice"
        ;;
esac</pre>
<br>
<div class='cheat-table-wrapper' style='margin: 1rem 0;'>
  <table class='cheat-table'>
    <thead><tr><th style='width:35%;'>Part</th><th>Role</th></tr></thead>
    <tbody>
      <tr><td><code>case $var in</code></td><td>Begin the statement — <code>$var</code> is the value being matched.</td></tr>
      <tr><td><code>pattern)</code></td><td>Each pattern ends with a <code>)</code>. The pattern can be a literal string, wildcard, or pipe-separated alternatives.</td></tr>
      <tr><td><code>;;</code></td><td>Terminates a case block (like <code>break</code> in switch). Required after each block.</td></tr>
      <tr><td><code>*)</code></td><td>Wildcard — the <strong>default fallback</strong> case, like <code>default:</code> in other languages.</td></tr>
      <tr><td><code>esac</code></td><td>Closes the case statement (<code>case</code> spelled backwards).</td></tr>
    </tbody>
  </table>
</div>`
        },
        {
          title: "Pattern Matching in case",
          text: `Case patterns support wildcards and alternatives:<br><br>
<pre class="code-block">case $answer in
    [Yy]|yes|YES)   echo "Confirmed" ;;
    [Nn]|no|NO)     echo "Cancelled" ;;
    [0-9]*)         echo "Numeric input detected" ;;
    *)              echo "Unrecognised" ;;
esac</pre>
<br>
<code>[Yy]</code> matches either <code>Y</code> or <code>y</code>. The pipe <code>|</code> separates alternative patterns within one branch.`
        }
      ],
      commands: [
        { cmd: "case $var in\n  a) echo A ;;\n  b) echo B ;;\n  *) echo Other ;;\nesac", desc: "Basic case structure matching variable against patterns." }
      ]
    }
  },
  {
    id: "shell-11-logical-ops",
    title: "Shell Scripting #11 — Logical Operators (&& / || / !)",
    track: "shell-scripting",
    summary: "Combine and negate conditions using AND (&&), OR (||), and NOT (!) operators for complex conditional logic.",
    readTime: "4 min",
    videoTimestamp: "",
    content: {
      overview: "Real-world scripts rarely test just one condition. Logical operators let you combine multiple conditions into a single <code>if</code> statement — checking eligibility, verifying multiple file paths, or guarding against multiple error conditions simultaneously.",
      sections: [
        {
          title: "The Three Logical Operators",
          text: `<pre class="code-block">#!/bin/bash

age=20
country="India"

# && — AND: both conditions must be true
if [ $age -ge 18 ] && [ $country == "India" ]; then
    echo "Eligible to vote in India"
fi

# || — OR: at least one condition must be true
if [ $age -ge 18 ] || [ $country == "India" ]; then
    echo "Passes at least one check"
fi

# ! — NOT: negates the condition
if [ ! $age -ge 18 ]; then
    echo "Under 18"
fi</pre>
<br>
<div class='cheat-table-wrapper' style='margin: 1rem 0;'>
  <table class='cheat-table'>
    <thead><tr><th style='width:20%;'>Operator</th><th style='width:40%;'>Behaviour</th><th>Equivalent</th></tr></thead>
    <tbody>
      <tr><td><code>&&</code></td><td>Logical AND — right side only runs if left side succeeds (exit 0).</td><td><code>-a</code> inside <code>[ ]</code></td></tr>
      <tr><td><code>||</code></td><td>Logical OR — right side only runs if left side fails (non-zero exit).</td><td><code>-o</code> inside <code>[ ]</code></td></tr>
      <tr><td><code>!</code></td><td>Logical NOT — inverts the exit code of the following expression.</td><td>N/A</td></tr>
    </tbody>
  </table>
</div>`
        },
        {
          title: "Short-Circuit Evaluation — DevOps Power Trick",
          text: `<code>&&</code> and <code>||</code> can be used <em>outside</em> of <code>if</code> statements as one-liners:<br><br>
<pre class="code-block"># Run deploy ONLY if build succeeds
./build.sh && ./deploy.sh

# Show error ONLY if mkdir fails
mkdir /opt/app || echo "ERROR: Could not create directory"

# Safe chained operations — any failure stops the chain
apt update && apt install -y nginx && systemctl start nginx</pre>
<br>
This pattern is widely used in CI/CD pipelines and Docker RUN layers.`
        }
      ],
      commands: [
        { cmd: "[ $a -gt 0 ] && [ $b -gt 0 ]", desc: "Both conditions must be true (AND)." },
        { cmd: "[ -f file.sh ] || echo \"Missing!\"", desc: "Print error if file does not exist (OR short-circuit)." },
        { cmd: "[ ! -d /tmp/build ] && mkdir /tmp/build", desc: "Create directory only if it does not already exist." }
      ]
    }
  },
  {
    id: "shell-12-forloop-basic",
    title: "Shell Scripting #12 — For Loops (Basics)",
    track: "shell-scripting",
    summary: "Repeat commands for every item in a list. Iterate over values, strings, and numeric ranges using the for loop.",
    readTime: "4 min",
    videoTimestamp: "",
    content: {
      overview: "The <code>for</code> loop is the most common looping construct in shell scripting. It cycles through a list of items and executes a block of commands for each one — essential for batch processing servers, files, or configuration values.",
      sections: [
        {
          title: "Three Forms of the for Loop",
          text: `<pre class="code-block">#!/bin/bash

# Form 1: Explicit list of values
for i in 1 2 3 4 5; do
    echo "Number: $i"
done

# Form 2: List of strings
for name in Raju Sham Baburao; do
    echo "Name: $name"
done

# Form 3: Brace expansion range
for i in {1..10}; do
    echo "Range: $i"
done</pre>
<br>
<div class='cheat-table-wrapper' style='margin: 1rem 0;'>
  <table class='cheat-table'>
    <thead><tr><th style='width:40%;'>Syntax</th><th>Description</th></tr></thead>
    <tbody>
      <tr><td><code>for var in list</code></td><td>Loop over space-separated values. Each iteration assigns the next value to <code>$var</code>.</td></tr>
      <tr><td><code>for i in {1..N}</code></td><td>Brace expansion generates a range from 1 to N inclusive.</td></tr>
      <tr><td><code>for i in {1..10..2}</code></td><td>Range with step — generates 1 3 5 7 9 (step of 2).</td></tr>
      <tr><td><code>do ... done</code></td><td>Keywords wrapping the loop body — all commands between them execute each iteration.</td></tr>
    </tbody>
  </table>
</div>`
        },
        {
          title: "Looping Over Files — Real DevOps Use",
          text: `<pre class="code-block">#!/bin/bash
# Deploy all configs in a directory
for config in /etc/nginx/conf.d/*.conf; do
    echo "Validating: $config"
    nginx -t -c "$config"
done

# Ping a list of servers
for server in web01 web02 web03; do
    ping -c 1 "$server" &>/dev/null && echo "$server UP" || echo "$server DOWN"
done</pre>`
        }
      ],
      commands: [
        { cmd: "for i in {1..5}; do echo $i; done", desc: "Print numbers 1 through 5 on separate lines." },
        { cmd: "for f in *.log; do rm \"$f\"; done", desc: "Delete all .log files in the current directory." },
        { cmd: "for s in server1 server2 server3; do ssh $s 'uptime'; done", desc: "Run uptime command on three remote servers." }
      ]
    }
  },
  {
    id: "shell-13-forloop-array",
    title: "Shell Scripting #13 — For Loops with Arrays",
    track: "shell-scripting",
    summary: "Iterate over all elements of an array using for-in loops. Handle elements with spaces correctly using [@] expansion.",
    readTime: "3 min",
    videoTimestamp: "",
    content: {
      overview: "Combining for loops with arrays is one of the most practical scripting patterns. You populate an array with your data (servers, packages, filenames) and then loop through it — processing each item uniformly.",
      sections: [
        {
          title: "Iterating Over an Array",
          text: `<pre class="code-block">#!/bin/bash

items=("apple" "banana" "cherry" "date" "elderberry")

for item in "\${items[@]}"; do
    echo "Fruit: $item"
done</pre>
<br>
<div class='cheat-table-wrapper' style='margin: 1rem 0;'>
  <table class='cheat-table'>
    <thead><tr><th style='width:40%;'>Key Point</th><th>Details</th></tr></thead>
    <tbody>
      <tr><td><strong>Use <code>"\${arr[@]}"</code></strong></td><td>The double-quoted <code>[@]</code> form correctly handles elements that contain spaces — each element is treated as a single word.</td></tr>
      <tr><td><strong>Avoid <code>\${arr[*]}</code> in loops</strong></td><td><code>[*]</code> joins all elements into a single string split by IFS (usually a space), breaking elements that contain spaces.</td></tr>
      <tr><td><strong>Iterate with index</strong></td><td>Use <code>for i in "\${!arr[@]}"</code> to loop over indices — gives access to both <code>$i</code> (index) and <code>\${arr[$i]}</code> (value).</td></tr>
    </tbody>
  </table>
</div>`
        },
        {
          title: "Looping with Index Access",
          text: `<pre class="code-block">#!/bin/bash

servers=("web01" "db01" "cache01")

for i in "\${!servers[@]}"; do
    echo "Server $i: \${servers[$i]}"
done
# Output:
# Server 0: web01
# Server 1: db01
# Server 2: cache01</pre>`
        }
      ],
      commands: [
        { cmd: "for item in \"\${arr[@]}\"; do echo $item; done", desc: "Safe iteration over all array elements, preserving spaces." },
        { cmd: "for i in \"\${!arr[@]}\"; do echo \"$i: \${arr[$i]}\"; done", desc: "Loop with both index and value access." }
      ]
    }
  },
  {
    id: "shell-14-cstyle-for",
    title: "Shell Scripting #14 — C-Style For Loop with Arrays",
    track: "shell-scripting",
    summary: "Use the C-style for((i=0;i<N;i++)) loop to iterate arrays by index. Full control over iteration direction and step size.",
    readTime: "3 min",
    videoTimestamp: "",
    content: {
      overview: "Bash supports a C-language style <code>for</code> loop using double parentheses <code>(( ))</code>. This gives you explicit control over the counter variable — useful when you need the index value, want to skip elements, iterate backwards, or use a step size other than 1.",
      sections: [
        {
          title: "C-Style For Loop Syntax",
          text: `<pre class="code-block">#!/bin/bash

myArray=(1 2 3 Hello Hi)
length=\${#myArray[*]}

for((i=0; i&lt;$length; i++)); do
    echo "Item [$i]: \${myArray[$i]}"
done

# Output:
# Item [0]: 1
# Item [1]: 2
# Item [2]: 3
# Item [3]: Hello
# Item [4]: Hi</pre>
<br>
<div class='cheat-table-wrapper' style='margin: 1rem 0;'>
  <table class='cheat-table'>
    <thead><tr><th style='width:35%;'>Part</th><th>Meaning</th></tr></thead>
    <tbody>
      <tr><td><code>i=0</code></td><td><strong>Initializer</strong> — runs once before the loop begins.</td></tr>
      <tr><td><code>i&lt;$length</code></td><td><strong>Condition</strong> — checked before each iteration. Loop continues while true.</td></tr>
      <tr><td><code>i++</code></td><td><strong>Post-step</strong> — runs after each iteration. Can also be <code>i--</code>, <code>i+=2</code>, etc.</td></tr>
    </tbody>
  </table>
</div>`
        },
        {
          title: "Advanced Patterns",
          text: `<pre class="code-block"># Reverse iteration
for((i=$length-1; i>=0; i--)); do
    echo "\${myArray[$i]}"
done

# Step of 2 (every other element)
for((i=0; i&lt;$length; i+=2)); do
    echo "\${myArray[$i]}"
done</pre>`
        }
      ],
      commands: [
        { cmd: "for((i=0; i<\${#arr[@]}; i++)); do echo \${arr[$i]}; done", desc: "C-style loop iterating an array by index." },
        { cmd: "for((i=\${#arr[@]}-1; i>=0; i--)); do echo \${arr[$i]}; done", desc: "Reverse iteration over an array." },
        { cmd: "for((i=1; i<=100; i++)); do echo $i; done", desc: "Print numbers 1 to 100 — C-style counter loop." }
      ]
    }
  },
  {
    id: "shell-15-keyvalue",
    title: "Shell Scripting #15 — Associative Arrays (Key-Value Maps)",
    track: "shell-scripting",
    summary: "Use declare -A to create associative arrays that map named keys to values. Iterate over keys and build configuration maps.",
    readTime: "4 min",
    videoTimestamp: "",
    content: {
      overview: "Associative arrays (also called dictionaries or hash maps) store data as key→value pairs rather than numeric indices. They are ideal for storing structured configuration data — server names mapped to IPs, package names mapped to versions, or user names mapped to roles.",
      sections: [
        {
          title: "Declaring and Using Associative Arrays",
          text: `<pre class="code-block">#!/bin/bash

declare -A myArray2
myArray2=([name]=Priyanshu [age]=21 [city]=Paris)

echo "Name: \${myArray2[name]}"    # → Priyanshu
echo "Age:  \${myArray2[age]}"     # → 21
echo "City: \${myArray2[city]}"    # → Paris

# Iterate over all key-value pairs
for key in "\${!myArray2[@]}"; do
    echo "Key: $key  =>  Value: \${myArray2[$key]}"
done</pre>
<br>
<div class='cheat-table-wrapper' style='margin: 1rem 0;'>
  <table class='cheat-table'>
    <thead><tr><th style='width:40%;'>Syntax</th><th>Operation</th></tr></thead>
    <tbody>
      <tr><td><code>declare -A mapname</code></td><td><strong>Required declaration</strong> — you MUST declare associative arrays with <code>declare -A</code> before using them. (Unlike indexed arrays.)</td></tr>
      <tr><td><code>map=([key]=value)</code></td><td>Assign key-value pairs using the bracket syntax.</td></tr>
      <tr><td><code>\${map[key]}</code></td><td>Access the value associated with a named key.</td></tr>
      <tr><td><code>\${!map[@]}</code></td><td>Expand to <strong>all keys</strong> of the associative array.</td></tr>
      <tr><td><code>\${map[@]}</code></td><td>Expand to <strong>all values</strong> of the associative array.</td></tr>
      <tr><td><code>map[newkey]="val"</code></td><td>Add or update a single key-value pair dynamically.</td></tr>
    </tbody>
  </table>
</div>`
        },
        {
          title: "DevOps Use Case — Server Config Map",
          text: `<pre class="code-block">#!/bin/bash

declare -A servers
servers=([web]="192.168.1.10" [db]="192.168.1.20" [cache]="192.168.1.30")

for role in "\${!servers[@]}"; do
    echo "Pinging $role server at \${servers[$role]}..."
    ping -c 1 "\${servers[$role]}" &>/dev/null \
        && echo "  ✓ \${servers[$role]} is UP" \
        || echo "  ✗ \${servers[$role]} is DOWN"
done</pre>
<br>
<strong>Tip:</strong> Key iteration order in associative arrays is <em>not guaranteed</em> — do not rely on a specific order. If order matters, use an indexed array for keys alongside the associative array.`
        }
      ],
      commands: [
        { cmd: "declare -A config", desc: "Declare an associative array — required before use." },
        { cmd: "config[host]=\"localhost\"", desc: "Set a key-value pair in the associative array." },
        { cmd: "echo \${config[host]}", desc: "Access a value by its named key." },
        { cmd: "for k in \"\${!config[@]}\"; do echo \"$k=\${config[$k]}\"; done", desc: "Iterate over all key-value pairs." },
        { cmd: "unset config[host]", desc: "Remove a specific key from the associative array." }
      ]
    }
  },
  {
    id: "shell-16-test-operators",
    title: "Shell Scripting #16 — File, String & Logical Operators (-f, -d, -z, -n, -a, -o)",
    track: "shell-scripting",
    summary: "Master test flags and logical operators in shell scripting. Check file existence, type, permissions, string length, and combine conditions.",
    readTime: "5 min",
    videoTimestamp: "",
    content: {
      overview: "In shell scripting, standard alphanumeric flags prefixed with a hyphen (such as <code>-f</code>, <code>-d</code>, <code>-z</code>) are called <strong>Test Operators</strong>. They are used inside square brackets <code>[ ... ]</code> or double square brackets <code>[[ ... ]]</code> (which evaluate test expressions) to determine file characteristics, check string states, perform numeric matches, and structure complex conditional logic.",
      sections: [
        {
          title: "1. File existence & Type Tests",
          text: `File test operators are the most widely used flags in automation scripts. They allow you to safely verify that a configuration file, logs folder, database socket, or symlink is present and of the correct type before performing read/write operations:<br><br>
<div class='cheat-table-wrapper' style='margin: 1rem 0;'>
  <table class='cheat-table'>
    <thead>
      <tr>
        <th style='width: 25%;'>Operator</th>
        <th style='width: 35%;'>Meaning</th>
        <th style='width: 40%;'>Real-World DevOps Scenario</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>-e path</code></td>
        <td><strong>Exists:</strong> True if the target path exists, regardless of whether it's a file, directory, link, etc.</td>
        <td>Check if any resource exists at a target location before running actions.</td>
      </tr>
      <tr>
        <td><code>-f path</code></td>
        <td><strong>Regular File:</strong> True if path exists and is a regular data file (not a folder, socket, or device block).</td>
        <td>Verify a configuration file (like <code>config.json</code>) is a real file before reading it.</td>
      </tr>
      <tr>
        <td><code>-d path</code></td>
        <td><strong>Directory:</strong> True if path exists and is a folder/directory.</td>
        <td>Ensure a backup folder (like <code>/var/backups</code>) exists before exporting archives to it.</td>
      </tr>
      <tr>
        <td><code>-s path</code></td>
        <td><strong>Non-Empty:</strong> True if file exists and has a size greater than 0 bytes.</td>
        <td>Check if a logs file is not empty before parsing it, or check if a downloaded asset has data.</td>
      </tr>
      <tr>
        <td><code>-L path</code> or <code>-h</code></td>
        <td><strong>Symbolic Link:</strong> True if path exists and is a symlink.</td>
        <td>Validate shared service configurations or mounted pointer directories.</td>
      </tr>
      <tr>
        <td><code>-S path</code></td>
        <td><strong>Socket:</strong> True if path exists and is a Unix domain socket.</td>
        <td>Verify that service sockets (like Docker socket <code>/var/run/docker.sock</code>) are active.</td>
      </tr>
      <tr>
        <td><code>-p path</code></td>
        <td><strong>Named Pipe (FIFO):</strong> True if path is a named pipe.</td>
        <td>Confirm inter-process communication channels.</td>
      </tr>
    </tbody>
  </table>
</div>
<br>
<strong>Hands-on Example — Verifying Logs and Configs:</strong>
<pre class="code-block">#!/bin/bash

config_path="/etc/nginx/nginx.conf"
log_path="/var/log/nginx/error.log"

if [ -f "$config_path" ]; then
    echo "✓ Configuration file found at $config_path."
else
    echo "✗ Error: Configuration file is missing!"
    exit 1
fi

if [ -s "$log_path" ]; then
    echo "ℹ Error logs found and they contain active records. Printing last 5 lines:"
    tail -n 5 "$log_path"
else
    echo "✓ Error log is empty. No issues detected."
fi</pre>`
        },
        {
          title: "2. File Permission & Ownership Tests",
          text: `These operators check if the current user running the script has adequate POSIX permissions or ownership rights on a file or folder. This is critical for diagnosing permission blocks in CI/CD runners (like Jenkins or GitHub Actions runners):<br><br>
<div class='cheat-table-wrapper' style='margin: 1rem 0;'>
  <table class='cheat-table'>
    <thead>
      <tr>
        <th style='width: 25%;'>Operator</th>
        <th style='width: 35%;'>Meaning</th>
        <th style='width: 40%;'>Practical Shell Application</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>-r path</code></td>
        <td><strong>Readable:</strong> True if file exists and read permission is granted.</td>
        <td>Ensure secret keys can be read by the deployment script.</td>
      </tr>
      <tr>
        <td><code>-w path</code></td>
        <td><strong>Writable:</strong> True if file exists and write permission is granted.</td>
        <td>Verify that a lockfile or report folder can be written to.</td>
      </tr>
      <tr>
        <td><code>-x path</code></td>
        <td><strong>Executable:</strong> True if file exists and execute permission is granted.</td>
        <td>Ensure a dependency binary or helper script can be executed directly.</td>
      </tr>
      <tr>
        <td><code>-O path</code></td>
        <td><strong>Owned by You:</strong> True if the file is owned by the current active user.</td>
        <td>Confirm the runner owns the repository files before performing Git changes.</td>
      </tr>
      <tr>
        <td><code>-G path</code></td>
        <td><strong>Group Matches:</strong> True if the file is owned by your current user group.</td>
        <td>Ensure group permissions align with shared service requirements.</td>
      </tr>
    </tbody>
  </table>
</div>
<br>
<strong>Hands-on Example — Safe Script Execution Runner:</strong>
<pre class="code-block">#!/bin/bash

runner_script="./deploy-app.sh"

if [ ! -e "$runner_script" ]; then
    echo "✗ Script $runner_script does not exist."
    exit 1
fi

if [ -x "$runner_script" ]; then
    echo "🚀 Executing script..."
    "$runner_script"
else
    echo "⚠ Script is not executable. Granting execution rights and running..."
    chmod +x "$runner_script"
    "$runner_script"
fi</pre>`
        },
        {
          title: "3. String Validation Operators",
          text: `String test operators check the length of strings and compare text. The most powerful flags here are <code>-z</code> and <code>-n</code>, which are crucial for validating that environment variables are set and that user input is present:<br><br>
<div class='cheat-table-wrapper' style='margin: 1rem 0;'>
  <table class='cheat-table'>
    <thead>
      <tr>
        <th style='width: 25%;'>Operator</th>
        <th style='width: 35%;'>Meaning</th>
        <th style='width: 40%;'>Practical DevOps Example</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>-z "$str"</code></td>
        <td><strong>Zero Length:</strong> True if string is empty or variable is unset.</td>
        <td>Verify if an environment variable (like <code>$DB_PASSWORD</code>) is missing.</td>
      </tr>
      <tr>
        <td><code>-n "$str"</code></td>
        <td><strong>Non-Zero Length:</strong> True if string contains characters (not empty).</td>
        <td>Ensure that critical parameters (like <code>$TARGET_IP</code>) are fully defined.</td>
      </tr>
      <tr>
        <td><code>"$a" == "$b"</code></td>
        <td><strong>Equality:</strong> True if strings are identical. (Use <code>=</code> in POSIX sh).</td>
        <td>Match build profiles: <code>[ "$ENV" == "production" ]</code></td>
      </tr>
      <tr>
        <td><code>"$a" != "$b"</code></td>
        <td><strong>Inequality:</strong> True if strings are different.</td>
        <td>Verify user role is not blocked: <code>[ "$role" != "guest" ]</code></td>
      </tr>
    </tbody>
  </table>
</div>
<br>
<strong>Hands-on Example — Environment Variable Guard:</strong>
<pre class="code-block">#!/bin/bash

# Guard clause to ensure AWS_ACCESS_KEY_ID is configured
if [ -z "$AWS_ACCESS_KEY_ID" ]; then
    echo "✗ Error: AWS_ACCESS_KEY_ID environment variable is not defined!"
    echo "Please set it using: export AWS_ACCESS_KEY_ID='your_key'"
    exit 1
fi

echo "✓ AWS Credentials detected. Proceeding to terraform deploy..."</pre>
<br>
<blockquote><strong>CRITICAL TIP:</strong> Always wrap variable expansions in double quotes inside test brackets, like <code>[ -z "$my_var" ]</code> instead of <code>[ -z $my_var ]</code>. If the variable is empty and unquoted, the shell expands it to <code>[ -z ]</code> which evaluates to true/error due to missing arguments!</blockquote>`
        },
        {
          title: "4. Logical Operators (-a, -o vs &&, ||)",
          text: `Logical operators allow you to join multiple test conditions inside a single <code>if</code> statement. Depending on whether you use single brackets <code>[ ]</code> or double brackets <code>[[ ]]</code>, the syntax changes:<br><br>
<div class='cheat-table-wrapper' style='margin: 1rem 0;'>
  <table class='cheat-table'>
    <thead>
      <tr>
        <th style='width: 25%;'>Operator</th>
        <th style='width: 30%;'>Brackets Context</th>
        <th style='width: 15%;'>Logical Role</th>
        <th style='width: 30%;'>DevOps Sample</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>-a</code></td>
        <td>Single Brackets: <code>[ cond1 -a cond2 ]</code></td>
        <td><strong>AND</strong></td>
        <td><code>[ -f file -a -x file ]</code></td>
      </tr>
      <tr>
        <td><code>-o</code></td>
        <td>Single Brackets: <code>[ cond1 -o cond2 ]</code></td>
        <td><strong>OR</strong></td>
        <td><code>[ -z "$user" -o -z "$pass" ]</code></td>
      </tr>
      <tr>
        <td><code>&&</code></td>
        <td>Double Brackets: <code>[[ cond1 && cond2 ]]</code></td>
        <td><strong>AND</strong></td>
        <td><code>[[ -f file && -x file ]]</code></td>
      </tr>
      <tr>
        <td><code>||</code></td>
        <td>Double Brackets: <code>[[ cond1 || cond2 ]]</code></td>
        <td><strong>OR</strong></td>
        <td><code>[[ -z "$user" || -z "$pass" ]]</code></td>
      </tr>
      <tr>
        <td><code>!</code></td>
        <td>Both contexts: <code>[ ! cond ]</code></td>
        <td><strong>NOT</strong></td>
        <td><code>[ ! -d /var/www ]</code></td>
      </tr>
    </tbody>
  </table>
</div>
<br>
<strong>Hands-on Example — Multiple Checks:</strong>
<pre class="code-block">#!/bin/bash

# Enforce script is run by root AND on a system that has apt installed
if [ "$(id -u)" -eq 0 -a -x "/usr/bin/apt" ]; then
    echo "✓ Running as root. Installing updates..."
    apt-get update && apt-get upgrade -y
elif [[ "$(id -u)" -eq 0 && ! -x "/usr/bin/apt" ]]; then
    echo "✓ Running as root, but apt package manager was not found."
else
    echo "✗ Error: You must run this script as root (sudo)!"
    exit 1
fi</pre>`
        },
        {
          title: "5. Binary File Comparison Operators",
          text: `In advanced build scripting, you sometimes need to compare two files directly (e.g. comparing source files to generated build targets to determine if a recompilation/rsync is necessary). Bash provides unique operators for this:<br><br>
<div class='cheat-table-wrapper' style='margin: 1rem 0;'>
  <table class='cheat-table'>
    <thead>
      <tr>
        <th style='width: 30%;'>Operator</th>
        <th style='width: 35%;'>Condition Evaluated</th>
        <th style='width: 35%;'>DevOps Real-World Application</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>file1 -nt file2</code></td>
        <td>True if <code>file1</code> is <strong>Newer Than</strong> (newer modification time) <code>file2</code> or if <code>file2</code> does not exist.</td>
        <td>Trigger rebuilds: Run a compile script only if the source code file is newer than the executable.</td>
      </tr>
      <tr>
        <td><code>file1 -ot file2</code></td>
        <td>True if <code>file1</code> is <strong>Older Than</strong> <code>file2</code>.</td>
        <td>Validate cache freshness: Check if a local cache file is older than the remote source index.</td>
      </tr>
      <tr>
        <td><code>file1 -ef file2</code></td>
        <td>True if both files have the <strong>Equal File</strong> descriptors (pointing to the same device and inode, like hard links).</td>
        <td>Verify path duplicates and deep linked file configurations in workspace structures.</td>
      </tr>
    </tbody>
  </table>
</div>
<br>
<strong>Hands-on Example — Smart Rebuild Compiler:</strong>
<pre class="code-block">#!/bin/bash

source_code="app.c"
compiled_binary="app"

if [ ! -f "$compiled_binary" -o "$source_code" -nt "$compiled_binary" ]; then
    echo "🛠 Source file has changed or binary is missing. Compiling..."
    gcc "$source_code" -o "$compiled_binary"
    echo "✓ Compilation finished successfully."
else
    echo "✓ Compiled binary is up-to-date. Skipping compilation."
fi</pre>`
        }
      ],
      commands: [
        { cmd: "[ -f config.env ] && source config.env", desc: "If config.env exists and is a regular file, read its environment variables." },
        { cmd: "[ ! -d /var/www/html ] && mkdir -p /var/www/html", desc: "If the HTML deployment directory does not exist, create it recursively." },
        { cmd: "[ -z \"$API_TOKEN\" ] && echo \"Warning: API Token is empty!\"", desc: "Verify if API_TOKEN environment variable is empty." },
        { cmd: "[[ $OS == \"Linux\" && $USER == \"root\" ]]", desc: "Evaluate if running on Linux OS with root administrative permissions using double brackets." },
        { cmd: "[ file.txt -nt backup.txt ] && cp file.txt backup.txt", desc: "Copy file.txt to backup.txt only if file.txt is newer than the backup file." }
      ]
    }
  }
];
