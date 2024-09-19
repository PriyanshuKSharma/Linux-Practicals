#!/bin/bash

# Create file1.txt
touch file1.txt

# List the file with detailed information
ls -lh file1.txt

# Set permissions using absolute method
chmod 754 file1.txt

# Check the permissions
echo "Permissions:"
ls -l file1.txt


echo "Permissions in numerical format:"
stat -c %a file1.txt
