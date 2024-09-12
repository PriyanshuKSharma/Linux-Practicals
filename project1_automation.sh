#!/bin/bash

# Step 1: Create "Project2" directory
mkdir -p Project2
echo "Created 'Project2' directory."

# Step 2: Create five files in "Project2" directory
for i in {1..5}; do
    touch Project2/file$i.txt
    echo "Created 'file$i.txt' in 'Project2'."
    
    # Step 3: Check disk space occupied by the directory after each file creation
    echo "Checking disk space after creating file$i.txt:"
    du -sh Project2
done

# Step 4: Archive 'Project2' using tar
echo "Archiving 'Project2' using tar..."
tar -cvf Project2.tar Project2
echo "'Project2' has been archived as 'Project2.tar'."

# Step 5: Check disk space occupied after creating the tar archive
echo "Checking disk space after creating 'Project2.tar':"
du -sh Project2.tar

# Step 6: Compress the archive using tar.gz
echo "Compressing 'Project2.tar' using gzip..."
tar -czvf Project2.tar.gz Project2
echo "'Project2.tar' has been compressed as 'Project2.tar.gz'."

# Step 7: Check disk space after gzip compression
echo "Checking disk space after creating 'Project2.tar.gz':"
du -sh Project2.tar.gz

# Step 8: Compress the archive using tar.bz2
echo "Compressing 'Project2.tar' using bzip2..."
tar -cjvf Project2.tar.bz2 Project2
echo "'Project2.tar' has been compressed as 'Project2.tar.bz2'."

# Step 9: Check disk space after bzip2 compression
echo "Checking disk space after creating 'Project2.tar.bz2':"
du -sh Project2.tar.bz2

# Step 10: Display archive contents using 'tar -tf'
echo "Contents of 'Project2.tar.gz':"
tar -tf Project2.tar.gz

echo "Contents of 'Project2.tar.bz2':"
tar -tf Project2.tar.bz2

# Step 11: Extract files (if needed) using 'tar -xvf'
echo "Extracting 'Project2.tar.gz'..."
tar -xvf Project2.tar.gz

echo "Extracting 'Project2.tar.bz2'..."
tar -xvf Project2.tar.bz2

echo "Script execution complete!"
