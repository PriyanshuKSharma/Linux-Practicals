#!/bin/bash

#Arrays
#How to define an array
myArray=(1 2 30.5 Hello "Hey man")
echo "All the values in array are ${myArray[*]}"

#How to get values from an array
echo "${myArray[2]}"
echo "${myArray[4]}"

#How to fund no of values in array
echo "No of values, length of the array is ${#myArray[*]}"

#How to get specific values
echo "Values starting from index 1 are ${myArray[*]:1}"
echo "${myArray[*]:2:3}"

#Updating existing array with new values
myArray+=(New 30 40)
echo "Updated array ${myArray[*]}"

#Arrays key-value
myArray1=( [1]=A [2]=B [3]=C [name]=paul)
echo "All the values in array are ${myArray1[*]}"

