/**
 * Linux For DevOps Notes - Interactive Sandbox Challenges Database
 * Exposes a global array of challenges with validation functions.
 */

window.TERMINAL_CHALLENGES = [
  {
    id: 1,
    level: "Level 1",
    name: "FHS Explorer",
    category: "Foundation",
    description: "In the Filesystem Hierarchy Standard (FHS), <code>/var/log</code> contains system logs and <code>/etc</code> contains configuration files. <br><br><strong>Your Task:</strong> Navigate to <code>/var/log</code> and print the system's hostname config file located at <code>/etc/hostname</code>.",
    instructions: [
      "Navigate to the log directory: <code>cd /var/log</code>",
      "Print the hostname configuration: <code>cat /etc/hostname</code>"
    ],
    hint: "Use <code>cd /var/log</code> followed by <code>cat /etc/hostname</code>. You can also run <code>hostname</code> to check it.",
    validate: (shellState, commandHistory) => {
      // Checked: current directory is /var/log and they have printed /etc/hostname or run hostname
      const hasVisitedVarLog = shellState.currentDir === "/var/log";
      const hasCatHostname = commandHistory.some(cmd => 
        (cmd.includes("cat") && cmd.includes("/etc/hostname")) || 
        cmd.trim() === "hostname"
      );
      return hasVisitedVarLog && hasCatHostname;
    }
  },
  {
    id: 2,
    level: "Level 2",
    name: "File Architect",
    category: "File System",
    description: "Every DevOps engineer needs to manage environment config directories. <br><br><strong>Your Task:</strong> Create a new directory named <code>workspace</code> inside your home directory (<code>/home/devops</code>), and then create an empty file named <code>config.env</code> inside it.",
    instructions: [
      "Create the directory: <code>mkdir /home/devops/workspace</code>",
      "Create the empty file: <code>touch /home/devops/workspace/config.env</code>"
    ],
    hint: "You can do this using absolute paths or by navigating into the directory first with <code>cd</code>.",
    validate: (shellState, commandHistory) => {
      // Find workspace directory and config.env file in VFS
      const workspaceDir = shellState.vfs["/home/devops/workspace"];
      if (!workspaceDir || workspaceDir.type !== "dir") return false;
      
      const configEnv = shellState.vfs["/home/devops/workspace/config.env"];
      return configEnv && configEnv.type === "file";
    }
  },
  {
    id: 3,
    level: "Level 3",
    name: "Environment Configurator",
    category: "Automation",
    description: "Now that your <code>config.env</code> file is created, you must populate it with credentials or configurations using bash redirections.<br><br><strong>Your Task:</strong> Write the environment string <code>ENV=production</code> inside your <code>/home/devops/workspace/config.env</code> file using output redirection (<code>&gt;</code>).",
    instructions: [
      "Use echo and redirection: <code>echo 'ENV=production' &gt; /home/devops/workspace/config.env</code>",
      "Verify the file contents: <code>cat /home/devops/workspace/config.env</code>"
    ],
    hint: "Make sure there are no spaces around the '=' inside your echo statement. The redirect symbol <code>&gt;</code> will overwrite the file contents.",
    validate: (shellState, commandHistory) => {
      const configEnv = shellState.vfs["/home/devops/workspace/config.env"];
      if (!configEnv || configEnv.type !== "file") return false;
      return configEnv.content.trim().includes("ENV=production");
    }
  },
  {
    id: 4,
    level: "Level 4",
    name: "Securing Automations",
    category: "Permissions",
    description: "Security is a core pillar in DevOps. Your shell script <code>/home/devops/scripts/create_user.sh</code> needs to be executed, but currently, it has read/write permissions only. <br><br><strong>Your Task:</strong> Grant executable permissions to <code>/home/devops/scripts/create_user.sh</code> so it can be run.",
    instructions: [
      "Add execute permissions: <code>chmod +x /home/devops/scripts/create_user.sh</code> (or octal <code>chmod 755 ...</code>)",
      "List the file details to verify permissions: <code>ls -l /home/devops/scripts/create_user.sh</code>"
    ],
    hint: "You can use symbolic mode (<code>chmod +x filename</code>) or absolute octal mode (<code>chmod 755 filename</code>). Observe the green output color when it becomes executable!",
    validate: (shellState, commandHistory) => {
      const script = shellState.vfs["/home/devops/scripts/create_user.sh"];
      if (!script) return false;
      // Checks if permissions have execute bit (755 or +x)
      return script.permissions.owner.execute === true;
    }
  },
  {
    id: 5,
    level: "Level 5",
    name: "Deploy Infrastructure",
    category: "DevOps Scripting",
    description: "Congratulations on securing your scripts! Now, it's time to run the automated web server deployment process. <br><br><strong>Your Task:</strong> Execute the web server setup script located at <code>/home/devops/scripts/setup_web_server.sh</code>.",
    instructions: [
      "Run the script: <code>/home/devops/scripts/setup_web_server.sh</code> or navigate there and type <code>./setup_web_server.sh</code>"
    ],
    hint: "You can run a script directly by using its absolute path, or navigate to <code>cd /home/devops/scripts</code> and run it with <code>./setup_web_server.sh</code>.",
    validate: (shellState, commandHistory) => {
      return shellState.executedScripts.includes("/home/devops/scripts/setup_web_server.sh");
    }
  }
];
