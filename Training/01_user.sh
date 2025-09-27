#!/bin/bash


read -p "Enter username: " uname
sudo useradd $uname

read -p "Enter your passwd: " passwd 
sudo passwd $passwd



