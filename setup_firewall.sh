#!/bin/bash

# Display UFW status
sudo ufw status

# Install UFW if not already installed
sudo apt install -y ufw

# Enable UFW
sudo ufw enable

# Allow specific ports
sudo ufw allow 22 #ssh port
sudo ufw allow 20
sudo ufw allow 80 #HTTP port

# Set default UFW policies
sudo ufw default deny incoming
sudo ufw default deny outgoing

# Allow specific outgoing connections
sudo ufw allow out 80/tcp
sudo ufw allow out 443/tcp

# Reload UFW rules
sudo ufw reload

# Check UFW status again
sudo ufw status

# Show network interfaces
ifconfig

# Update and upgrade system packages
sudo apt update
sudo apt upgrade -y

# SSH into a remote machine (replace with actual IP and username)
ssh priyanshu@192.168.56.1
