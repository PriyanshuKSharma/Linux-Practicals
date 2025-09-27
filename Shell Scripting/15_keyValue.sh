#!/bin/bash

#How to store key values pairs
declare -A myArray2
myArray2=([name]=Priyanshu [age]=21 [city]=Paris)

echo "Name is ${myArray2[name]}"
echo "Age is ${myArray2[age]}"
echo "City is ${myArray2[city]}"
