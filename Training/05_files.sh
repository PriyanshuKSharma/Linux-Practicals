#!/bin/bash

read -p "Enter the package name: " pkg
sudo apt install $pkg
echo "Checking the status of the service: $(sudo systemctl status $pkg)"
echo "Enable the service: $(sudo systemctl enable $pkg)"
echo "Start the service: $(sudo systemctl start $pkg)"
