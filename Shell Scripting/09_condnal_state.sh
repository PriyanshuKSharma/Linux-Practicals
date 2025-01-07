#!/bin/bash

#Conditional statements
read -p "Enter your marks: " marks

#if-else
if [ $marks -gt 40 ]
then
	echo "You got passed"
else
	echo "You failed"
fi

#Using elif
if [ $marks -gt 80 ]
then
	echo "You got A grade"
elif [ $marks -gt 60 ]
then
	echo "You got B grade"
elif [ $marks -gt 40 ]
then
	echo "You got C grade"
else
	echo "You failed"
fi


#nested if else
read -p "Enter your age: " age
if [ $age -lt 18 ]
then
    echo "You are a minor"
else
    if [ $age -ge 18 -a $age -le 60 ]
    then
        echo "You are an adult"
    else
        echo "You are a senior citizen"
    fi
fi
