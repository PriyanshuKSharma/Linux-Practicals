#!/bin/bash

# Step 1: Create "Project1" directory
mkdir -p Project2
echo "Created 'Project2' directory."

# Step 2: Create five files in "Project1" directory
for i in {1..5}; do
    touch Project2/file$i.txt
    echo "Created 'file$i.txt' in 'Project1'."
    
    # Step 3: Check disk space occupied by the directory after each file creation
    echo "Checking disk space after creating file$i.txt:"
    du -sh Project1
done

# Step 4: Archive 'Project1' using tar
echo "Archiving 'Project1' using tar..."
tar -cvf Project1.tar Project1
echo "'Project1' has been archived as 'Project1.tar'."

# Step 5: Check disk space occupied after creating the tar archive
echo "Checking disk space after creating 'Project1.tar':"
du -sh Project1.tar

# Step 6: Compress the archive using tar.gz
echo "Compressing 'Project1.tar' using gzip..."
tar -czvf Project1.tar.gz Project1
echo "'Project1.tar' has been compressed as 'Project1.tar.gz'."

# Step 7: Check disk space after gzip compression
echo "Checking disk space after creating 'Project1.tar.gz':"
du -sh Project1.tar.gz

# Step 8: Compress the archive using tar.bz2
echo "Compressing 'Project1.tar' using bzip2..."
tar -cjvf Project1.tar.bz2 Project1
echo "'Project1.tar' has been compressed as 'Project1.tar.bz2'."

# Step 9: Check disk space after bzip2 compression
echo "Checking disk space after creating 'Project1.tar.bz2':"
du -sh Project1.tar.bz2

# Step 10: Display archive contents using 'tar -tf'
echo "Contents of 'Project1.tar.gz':"
tar -tf Project1.tar.gz

echo "Contents of 'Project1.tar.bz2':"
tar -tf Project1.tar.bz2

# Step 11: Extract files (if needed) using 'tar -xvf'
echo "Extracting 'Project1.tar.gz'..."
tar -xvf Project1.tar.gz

echo "Extracting 'Project1.tar.bz2'..."
tar -xvf Project1.tar.bz2

echo "Script execution complete!"
