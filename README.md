# Linux Practicals

Welcome to the **Linux Practicals** repository! This repository contains practical exercises, scripts, and configurations designed to help you understand and manage various aspects of Linux systems. Whether you're learning Linux or need hands-on practice, this repository provides a set of useful tools and exercises to enhance your skills.

## Contents

- **Setup Scripts**: Scripts for setting up and configuring Linux environments.
- **Practicals**: Various practical exercises related to Linux administration.
- **Documentation**: Guides and explanations for the scripts and exercises provided.

---

## Getting Started

### Prerequisites

Ensure you have the following installed:
- A Linux-based operating system (Ubuntu, Debian, CentOS, etc.)
- Basic knowledge of Linux commands and shell scripting

### Clone the Repository

To get started, clone the repository using Git:

```bash
git clone https://github.com/PriyanshuKSharma/Linux-Practicals.git
cd Linux-Practicals
```
---
### Downloading Scripts Using `curl`

If you prefer not to clone the entire repository, you can download individual scripts directly using `curl`. For example, to download a script:

```bash
curl -O https://raw.githubusercontent.com/PriyanshuKSharma/Linux-Practicals/main/setup-web-server.sh
```

Replace `setup-web-server.sh` with the script you wish to download. You can find the script names in the repository’s directory structure.

---
### Running Scripts

Most scripts are executable and can be run directly from the terminal. For example, to run a script:

```bash
sudo ./setup-web-server.sh
```
---
### Alternative Way

Either way to do is by making it executable with

```bash
chmod +x set_permissions.sh
```

And Running it with

```bash
./filename.sh
```

Make sure to review the script content before executing it to understand its purpose and potential impacts.

---
### Example Practicals

1. **Web Server Setup**: Set up a basic Apache web server with PHP.
   - Script: `setup-web-server.sh`

2. **File System Management**: Practice managing file systems and partitions.
   - Script: `manage-file-systems.sh`

3. **User Management**: Create, delete, and manage user accounts.
   - Script: `manage-users.sh`
  
---

## Directory Shell Scripting

Shell scripting allows for efficient management of directories in Linux. Below are some common tasks and examples:

### 1. Creating a Single Directory

To create a new directory, use the `mkdir` command:

```bash
mkdir directory_name
```

This command creates a directory named `directory_name` in the current working directory. 

### 2. Creating Nested Directories

To create a nested directory structure, use the `-p` option with `mkdir`:

```bash
mkdir -p parent_directory/child_directory
```

This command creates both `parent_directory` and `child_directory` inside it. If `parent_directory` doesn't exist, it will be created. 

### 3. Creating Multiple Directories at Once

You can create multiple directories simultaneously by specifying their names separated by spaces:

```bash
mkdir dir1 dir2 dir3
```

This command creates three directories named `dir1`, `dir2`, and `dir3` in the current working directory. 

### 4. Creating a Directory Hierarchy Using a Shell Script

To automate the creation of a directory hierarchy, you can write a shell script. Here's an example script that creates a parent directory with multiple subdirectories:

```bash
#!/bin/bash

# Define the parent directory
parent_dir="project"

# Define an array of subdirectories
subdirs=("src" "bin" "docs" "tests")

# Create the parent directory
mkdir -p "$parent_dir"

# Loop through the array and create subdirectories
for dir in "${subdirs[@]}"; do
    mkdir -p "$parent_dir/$dir"
done

echo "Directory hierarchy created successfully."
```

Save this script to a file, for example, `create_dirs.sh`, and make it executable:

```bash
chmod +x create_dirs.sh
```

Then run the script:

```bash
./create_dirs.sh
```

This script will create a `project` directory with subdirectories `src`, `bin`, `docs`, and `tests`. 

### 5. Traversing Directories in a Shell Script

To perform operations on files within a directory structure, you can traverse directories using a loop. Here's an example script that counts the number of files in each subdirectory:

```bash
#!/bin/bash

# Define the parent directory
parent_dir="project"

# Traverse each subdirectory
for dir in "$parent_dir"/*/; do
    # Count the number of files in the subdirectory
    file_count=$(find "$dir" -type f | wc -l)
    echo "Directory: $dir contains $file_count files."
done
```

This script iterates through each subdirectory of `project` and counts the number of files it contains. 

### 6. Deleting Directories

To remove an empty directory, use the `rmdir` command:

```bash
rmdir directory_name
```

To remove a directory and its contents recursively, use the `rm` command with the `-r` option:

```bash
rm -r directory_name
```

**Caution:** Be careful when using the `rm -r` command, as it will delete the directory and all of its contents without prompting for confirmation.

### Additional Resources

For more detailed information on shell scripting and directory management, consider the following resources:

- [Shell Scripting for Beginners – How to Write Bash Scripts in Linux](https://www.freecodecamp.org/news/shell-scripting-crash-course-how-to-write-bash-scripts-in-linux/)
- [Implementing Directory Management using Shell Script](https://www.geeksforgeeks.org/implementing-directory-management-using-shell-script/)
- [How to Walk Through a Directory Structure in a Shell Script](https://www.baeldung.com/linux/shell-traverse-directory-tree)

These resources provide comprehensive guides on shell scripting and directory management in Linux.

---

## Contributing

Contributions are welcome! If you have suggestions for improvements or new practicals, please fork the repository and create a pull request. Follow these steps to contribute:

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Create a new Pull Request.
---
## License

This project is not licensed.

---

## Contact

For any questions or feedback, you can reach out to me via [GitHub Issues](https://github.com/PriyanshuKSharma/Linux-Practicals/issues) or directly at [Email](priyanshu17ks@gmail.com).
