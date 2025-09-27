#!/bin/bash

#Arrays
#How to define an array
myArray=(1 2 30.5 Hello "Hey man")
echo "All the values in array are ${myArray[*]}"

#How to get values from an array at the specific index
echo "Values at index 0 is ${myArray[0]}"
echo "Values at index 1 is ${myArray[1]}"
echo "Values at index 3 is ${myArray[3]}"
echo "Values at index 4 is ${myArray[4]}"

#How to get all the values in an array
echo "All the values in array are ${myArray[*]}"

#How to find no of values in array
echo "No of values, length of the array is ${#myArray[*]}"

#How to get specific values
echo "Values starting from index 1 are ${myArray[*]:1}"
echo "Values from index 2 to 3 ${myArray[*]:2:2}"
echo "Values from index 2 to 4 ${myArray[*]:2:3}"

#Updating existing array with new values
myArray+=(New 30 40)
echo "Updated array ${myArray[*]}"

#Arrays key-value
myArray1=( [1]=A [2]=B [3]=C [name]=paul)
echo "All the values in array are ${myArray1[*]}"
echo "Values at index 1 is ${myArray1[1]}"
echo "Values at index 3 is ${myArray1[name]}"

