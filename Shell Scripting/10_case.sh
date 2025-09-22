#!bin/bash

echo "Hey choose an option"
echo "a = To see current date"
echo "b = To see current time"
echo "c = To see the current directory"


read choice
case $choice in
    a) 
        echo "Current date is $(date +%D)"
        ;;
    b) 
        echo "Current time is $(date +%T)"
        ;;
    c) 
        echo "Current directory is $(pwd)"
        ;;
    *) 
        echo "Invalid choice"
        ;;
esac
