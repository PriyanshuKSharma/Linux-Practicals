#!/bin/bash

# The && operator is used to combine two conditions. The command following the && operator will only run if the command preceding the && operator is successful. In this case, the command preceding the && operator is [ $age -ge 18 ] and the command following the && operator is [ $country == "India" ]. Both conditions must be true for the echo "You are eligible to vote" command to run. If either condition is false, the echo "You are not eligible to vote" command will run.

# The || operator is used to combine two conditions. The command following the || operator will only run if the command preceding the || operator is unsuccessful. In this case, the command preceding the || operator is [ $age -ge 18 ] and the command following the || operator is [ $country == "India" ]. If either condition is true, the echo "You are eligible to vote" command will run. If both conditions are false, the echo "You are not eligible to vote" command will run.

# The ! operator is used to negate a condition. In this case, the condition [ $age -ge 18 ] is negated by the ! operator, so the echo "You are not eligible to vote" command will run if the age is less than 18. If the age is 18 or greater, the echo "You are eligible to vote" command will run.

# The -a and -o operators are used to combine conditions in an if statement. The -a operator is equivalent to the && operator, and the -o operator is equivalent to the || operator. These operators are used to combine multiple conditions in an if statement. For example, [ $age -ge 18 -a $country == "India" ] is equivalent to [ $age -ge 18 ] && [ $country == "India" ].

# The -eq, -ne, -lt, -le, -gt, and -ge operators are used to compare numerical values in an if statement. These operators are used to compare two values and determine if they are equal, not equal, less than, less than or equal to, greater than, or greater than or equal to each other. For example, [ $age -ge 18 ] is used to check if the age is greater than or equal to 18.

# The == operator is used to compare strings in an if statement. This operator is used to check if two strings are equal to each other. For example, [ $country == "India" ] is used to check if the country is equal to "India".

# The -z operator is used to check if a string is empty in an if statement. This operator is used to check if a string has zero length. For example, [ -z $country ] is used to check if the country is empty.

# The -n operator is used to check if a string is not empty in an if statement. This operator is used to check if a string has a non-zero length. For example, [ -n $country ] is used to check if the country is not empty.

# The -r, -w, and -x operators are used to check if a file is readable, writable, or executable in an if statement. These operators are used to check the permissions of a file. For example, [ -r file.txt ] is used to check if the file.txt file is readable.

# The -f, -d, and -e operators are used to check if a file is a regular file, a directory, or exists in an if statement. These operators are used to check the type of a file. For example, [ -f file.txt ] is used to check if the file.txt file is a regular file.

# The -s operator is used to check if a file is not empty in an if statement. This operator is used to check if a file has a non-zero size. For example, [ -s file.txt ] is used to check if the file.txt file is not empty.

# The -o operator is used to combine conditions in an if statement. The -o operator is equivalent to the || operator. This operator is used to combine multiple conditions in an if statement. For example, [ $age -ge 18 -o $country == "India" ] is equivalent to [ $age -ge 18 ] || [ $country == "India"].

## Logical Operators
# && - Logical AND
read -p "Enter your age: " age
read -p "Enter your country: " country

if [ $age -ge 18 ] && [ $country == "India" ]
then
    echo "You are eligible to vote"
else
    echo "You are not eligible to vote"
fi

# || - Logical OR
if [ $age -ge 18 ] || [ $country == "India" ]
then
    echo "You are eligible to vote"
else
    echo "You are not eligible to vote"
fi

# ! - Logical NOT
if [ ! $age -ge 18 ]
then
    echo "You are not eligible to vote"
else
    echo "You are eligible to vote"
fi

# Combining conditions with && and ||
if [ [[$age -ge 18]] &&  [$country == "India"] || [$country == "Nepal"] ]
then
    echo "You are eligible to vote"
else
    echo "You are not eligible to vote"
fi
