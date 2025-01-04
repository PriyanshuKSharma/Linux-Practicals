#!/bin/bash

#Script to show how to use variables

a=10
name="Priyanshu Kumar Sharma"
age="19"

echo "My name is $name and my age is $age"

#Var to stor the output of a command
hostname=$(hostname)

name="Tony Stark"
echo "Name of this machine is $hostname"
