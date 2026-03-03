#!/bin/bash

x=10
y=3

#mul=$x*$y
#echo "$mul" #Wrong way to perform arithmetic problems

let mul=$x*$y
echo "Product is: $mul"

#Another way to perform arithmetic operations
sum=$((x+y))
echo "Sum is: $sum"

difference=$(($x-$y))
echo "Difference is: $difference"

division=$(($x/$y))
echo "Division is: $division"
