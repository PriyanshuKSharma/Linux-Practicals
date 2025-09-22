#!/bin/bash

#Getting values from the file
items=/home/virtualuser/myscripts/file.txt

for item in $(cat $items)
do
    echo "item: $item"
done
