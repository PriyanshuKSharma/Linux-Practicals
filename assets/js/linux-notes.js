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
  }
];
