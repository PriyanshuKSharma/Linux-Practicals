#!/bin/bash

# Create file2.txt
touch file2.txt

# Display file details before changing permissions
echo "File details before changing permissions:"
ls -lh file2.txt

# Set permissions using the graphical method
# User: r-w
# Group: r-w
# Others: rw-
chmod u=rw,g=rw,o=rw- file2.txt

# Display file details after changing permissions
echo "File details after changing permissions:"
ls -lh file2.txt

# Commit message example
echo "Commit message: Set 'rw-' for others, 'r-w' for user and group"
