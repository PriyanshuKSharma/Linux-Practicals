#!/bin/bash

read -p "Enter your username: " uname

if id "$uname" &>/dev/null; then

elif [[ "$uname" == "prikush" || "$uname" == "practice" ]]; then
    echo "You need to change your password"
    # sudo passwd $uname
    
else
   echo "User $uname does not exist."
fi
