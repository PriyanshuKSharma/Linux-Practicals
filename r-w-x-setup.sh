#!/bin/bash

# Create file1.txt
touch file1.txt

# Set full permissions initially (rwx for user, group, others)
chmod 777 file1.txt

# Display file details before changing permissions
echo "File details before changing permissions:"
ls -lh file1.txt

# Set rwx for user (7), r-w for group (5), rw- for others (6)
chmod 756 file1.txt

# Display file details after changing permissions
echo "File details after changing permissions:"
ls -lh file1.txt



echo "Permissions in numerical format:"
stat -c %a file1.txt
