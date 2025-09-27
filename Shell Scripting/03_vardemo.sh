#!/bin/bash

#Script to show how to use variables

a=10
name="Priyanshu Kumar Sharma"
age="19"

echo "My name is $name and my age is $age"

#Var to store the output of a command
hostname=$(hostname)

name="Tony Stark"
read name 
echo "My name is $name"
echo "Name of this machine is $hostname"
