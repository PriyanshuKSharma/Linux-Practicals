#!/bin/bash

<<comment

create a shell script that will create a data4 directory and inside data4 it will create file "workstation"
add 5 contacts in file workstation
make a copy of data4 directory as databkp 
rename the databkp as sep25
list the content of sep25 directory
comment


read -p "Enter directory name: " dirname   # Take input from user
mkdir -p "$dirname"                        # Create the directory
echo "Directory '$dirname' created successfully."


echo "9876543210, 9875643210, 9876542310, 9876504321, 9087654321" >> $dirname/workstation

echo "make a copy of $dirname directory as $dirnamebkp->" && cp -r $dirname dirname_bkp

echo "rename the $dirname to sep25_bkp" && mv dirname_bkp sep25_bkp

echo "list the content of sep25 directory" && ls sep25_bkp
