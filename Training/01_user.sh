#!/bin/bash


read -p "Enter username: " uname
sudo useradd $uname

read -p "Enter your passwd: " passwd
echo "$uname:$passwd" | sudo chpasswd 

grep $uname /etc/passwd 