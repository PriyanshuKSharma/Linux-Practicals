#!/bin/bash

myVar="Hello World"
echo "${myVar[*]}"

length=${#myVar}
echo "Length of the string is $length"

#Slicing
echo "First character of the string is ${myVar:0:1}"
echo "Last character of the string is ${myVar:$length-1:1}"

slice=${myVar:4:11}
echo "Sliced string is $slice"

#Replace
echo "Replace World with Universe: ${myVar/World/Universe}"

#Upper case and lower case
Upper=${myVar^^}
lower=${myVar,,}

echo "Upper case and lower are: $Upper and $lower"
