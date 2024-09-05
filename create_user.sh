#!/bin/bash

# Ensure the script is run as root
if [ "$EUID" -ne 0 ]; then
  echo "Please run as root or with sudo"
  exit
fi

# Prompt for the username
read -p "Enter the new username: " username

# Check if the user already exists
if id "$username" &>/dev/null; then
  echo "User $username already exists."
  exit
fi

# Create the new user with a home directory and bash shell
adduser --home "/home/$username" --shell /bin/bash "$username"

# Set the password for the new user
passwd "$username"

# Add the new user to the sudo group for administrative privileges
usermod -aG sudo "$username"

# Confirmation message
echo "User $username has been created and added to the sudo group."

# Optional: Switch to the new user for testing
echo "You can now switch to the new user by running: su - $username"
