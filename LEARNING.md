# Shell Scripting Learning Guide

This document contains all the shell scripting concepts, commands, and techniques learned through the practical exercises in the `Shell Scripting/` directory.

---

## Table of Contents

1. [Basic Shell Scripting](#1-basic-shell-scripting)
2. [Comments](#2-comments)
3. [Variables](#3-variables)
4. [Constant Variables](#4-constant-variables)
5. [Arrays](#5-arrays)
6. [String Operations](#6-string-operations)
7. [User Input](#7-user-input)
8. [Arithmetic Operations](#8-arithmetic-operations)
9. [Conditional Statements](#9-conditional-statements)
10. [Case Statements](#10-case-statements)
11. [Logical Operators](#11-logical-operators)
12. [Loops](#12-loops)
13. [Advanced Loop Concepts](#13-advanced-loop-concepts)
14. [Best Practices](#14-best-practices)

---

## 1. Basic Shell Scripting

### 📝 **Script Structure**
Every bash script should start with a shebang:

```bash
#!/bin/bash
```

### 🖨️ **Output Commands**
```bash
# Basic output
echo "hello World!!"

# Echo without newline
echo -n "Text without newline"

# Echo with variables
echo "My name is $name"
```

**Key Learning:** The `echo` command is the fundamental way to display output in shell scripts.

---

## 2. Comments

### 📄 **Single Line Comments**
```bash
# This is a single line comment
echo "This line will execute"
```

### 📄 **Multi-line Comments**
```bash
<<comment
This is a multi-line comment
Everything between these tags is ignored
You can write multiple lines here
comment
```

**Key Learning:** Comments are essential for code documentation and explaining script logic.

---

## 3. Variables

### 🔢 **Variable Declaration and Usage**
```bash
# Variable assignment (no spaces around =)
a=10
name="Priyanshu Kumar Sharma"
age="19"

# Using variables
echo "My name is $name and my age is $age"

# Variable can be updated
name="Tony Stark"
echo "Updated name: $name"
```

### 🖥️ **Command Substitution**
```bash
# Store command output in variable
hostname=$(hostname)
echo "Name of this machine is $hostname"

# Alternative syntax (older method)
current_date=`date`
echo "Current date: $current_date"
```

**Key Learning:** Variables store data and command outputs. Use `$variable` or `${variable}` to access values.

---

## 4. Constant Variables

### 🔒 **Read-only Variables**
```bash
# Declare a constant variable
readonly name="Priyanshu K Sharma"
echo $name

# Attempting to change will cause an error
# name="Sharma"  # This will fail
```

**Key Learning:** Use `readonly` to create constants that cannot be modified during script execution.

---

## 5. Arrays

### 📋 **Array Declaration and Operations**

#### **Basic Array Operations**
```bash
# Define an array
myArray=(1 2 30.5 Hello "Hey man")

# Display all values
echo "All values: ${myArray[*]}"
echo "All values: ${myArray[@]}"  # Alternative syntax

# Access specific elements
echo "Third element: ${myArray[2]}"
echo "Fifth element: ${myArray[4]}"

# Get array length
echo "Array length: ${#myArray[*]}"
```

#### **Array Slicing**
```bash
# Get values starting from index 1
echo "From index 1: ${myArray[*]:1}"

# Get 3 values starting from index 2
echo "Slice [2:3]: ${myArray[*]:2:3}"
```

#### **Array Modification**
```bash
# Add new elements to existing array
myArray+=(New 30 40)
echo "Updated array: ${myArray[*]}"
```

#### **Associative Arrays (Key-Value)**
```bash
# Create associative array
myArray1=([1]=A [2]=B [3]=C [name]=paul)
echo "Associative array: ${myArray1[*]}"
echo "Value for 'name': ${myArray1[name]}"
```

**Key Learning:** Arrays can store multiple values, support indexing, slicing, and can be both indexed and associative.

---

## 6. String Operations

### 🔤 **String Manipulation**

#### **String Length**
```bash
myVar="Hello World"
length=${#myVar}
echo "Length: $length"
```

#### **String Slicing**
```bash
# First character
echo "First char: ${myVar:0:1}"

# Last character
echo "Last char: ${myVar:$((length-1)):1}"

# Substring
slice=${myVar:4:5}  # From index 4, take 5 characters
echo "Slice: $slice"
```

#### **String Replacement**
```bash
# Replace first occurrence
echo "Replace: ${myVar/World/Universe}"

# Replace all occurrences (use // instead of /)
echo "Replace all: ${myVar//l/L}"
```

#### **Case Conversion**
```bash
# Convert to uppercase
Upper=${myVar^^}

# Convert to lowercase
lower=${myVar,,}

echo "Upper: $Upper, Lower: $lower"
```

**Key Learning:** Bash provides powerful built-in string manipulation capabilities without external tools.

---

## 7. User Input

### ⌨️ **Reading User Input**
```bash
# Basic input
echo "Enter your name"
read name

# Input with prompt
read -p "Enter your name: " name
echo "Your name is $name"

# Silent input (for passwords)
read -s -p "Enter password: " password

# Read multiple values
read -p "Enter name and age: " name age
```

**Key Learning:** The `read` command captures user input and stores it in variables.

---

## 8. Arithmetic Operations

### 🧮 **Mathematical Calculations**

#### **Wrong Way (String Concatenation)**
```bash
x=10
y=2
mul=$x*$y  # This creates "10*2" string, not 20
echo "$mul"  # Outputs: 10*2
```

#### **Correct Methods**

##### **Using `let` Command**
```bash
let mul=$x*$y
echo "Product: $mul"
```

##### **Using `$(())` Syntax**
```bash
sum=$((x + y))
echo "Sum: $sum"

difference=$((x - y))
echo "Difference: $difference"

division=$((x / y))
echo "Division: $division"

modulus=$((x % y))
echo "Modulus: $modulus"
```

##### **Using `expr` Command**
```bash
result=$(expr $x + $y)
echo "Result: $result"
```

**Key Learning:** Use `let`, `$(())`, or `expr` for arithmetic operations. Direct assignment creates strings, not numbers.

---

## 9. Conditional Statements

### 🔀 **Decision Making**

#### **Basic If-Else**
```bash
read -p "Enter your marks: " marks

if [ $marks -gt 40 ]
then
    echo "You got passed"
else
    echo "You failed"
fi
```

#### **If-Elif-Else Chain**
```bash
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
```

#### **Nested If Statements**
```bash
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
```

#### **Comparison Operators**
```bash
# Numerical comparisons
[ $a -eq $b ]  # Equal
[ $a -ne $b ]  # Not equal
[ $a -lt $b ]  # Less than
[ $a -le $b ]  # Less than or equal
[ $a -gt $b ]  # Greater than
[ $a -ge $b ]  # Greater than or equal

# String comparisons
[ "$str1" = "$str2" ]   # Equal
[ "$str1" != "$str2" ]  # Not equal
[ -z "$str" ]           # Empty string
[ -n "$str" ]           # Non-empty string

# File tests
[ -f "$file" ]    # File exists and is regular file
[ -d "$dir" ]     # Directory exists
[ -e "$path" ]    # Path exists
[ -r "$file" ]    # File is readable
[ -w "$file" ]    # File is writable
[ -x "$file" ]    # File is executable
[ -s "$file" ]    # File exists and is not empty
```

**Key Learning:** Conditional statements control program flow based on conditions. Use appropriate comparison operators for different data types.

---

## 10. Case Statements

### 🔄 **Multi-way Branching**
```bash
echo "Choose an option:"
echo "a = Current date"
echo "b = Current time"
echo "c = Current directory"

read choice
case $choice in
    a) 
        echo "Current date is $(date +%D)"
        ;;
    b) 
        echo "Current time is $(date +%T)"
        ;;
    c) 
        echo "Current directory is $(pwd)"
        ;;
    *) 
        echo "Invalid choice"
        ;;
esac
```

#### **Pattern Matching in Case**
```bash
case $filename in
    *.txt)
        echo "Text file"
        ;;
    *.jpg|*.png|*.gif)
        echo "Image file"
        ;;
    [0-9]*)
        echo "Starts with number"
        ;;
    *)
        echo "Unknown file type"
        ;;
esac
```

**Key Learning:** Case statements provide cleaner syntax than multiple if-elif statements for pattern matching.

---

## 11. Logical Operators

### 🔗 **Combining Conditions**

#### **AND Operator (`&&`)**
```bash
if [ $age -ge 18 ] && [ $country == "India" ]
then
    echo "You are eligible to vote"
else
    echo "You are not eligible to vote"
fi
```

#### **OR Operator (`||`)**
```bash
if [ $age -ge 18 ] || [ $country == "India" ]
then
    echo "You are eligible to vote"
else
    echo "You are not eligible to vote"
fi
```

#### **NOT Operator (`!`)**
```bash
if [ ! $age -ge 18 ]
then
    echo "You are not eligible to vote"
else
    echo "You are eligible to vote"
fi
```

#### **Using `-a` and `-o` within Test**
```bash
# AND within single test
if [ $age -ge 18 -a $country == "India" ]
then
    echo "Eligible"
fi

# OR within single test
if [ $age -ge 18 -o $country == "India" ]
then
    echo "Eligible"
fi
```

#### **Complex Logical Combinations**
```bash
if [[ $age -ge 18 && ($country == "India" || $country == "Nepal") ]]
then
    echo "You are eligible to vote"
else
    echo "You are not eligible to vote"
fi
```

**Key Learning:** Logical operators allow combining multiple conditions for complex decision making.

---

## 12. Loops

### 🔄 **Iteration Constructs**

#### **For Loop with List**
```bash
# Loop through numbers
for i in 1 2 3 4 5
do 
    echo $i
done

# Loop through strings
for name in Raju Sham Baburao
do 
    echo $name
done
```

#### **For Loop with Range**
```bash
# Simple range
for i in {1..10}
do
    echo $i
done

# Range with step
for i in {1..20..2}  # 1 to 20, step by 2
do
    echo $i
done

# Reverse range
for i in {10..1}
do
    echo $i
done
```

#### **C-style For Loop**
```bash
for((i=0; i<10; i++))
do
    echo "Number: $i"
done
```

#### **While Loop**
```bash
counter=1
while [ $counter -le 5 ]
do
    echo "Counter: $counter"
    ((counter++))
done
```

#### **Until Loop**
```bash
counter=1
until [ $counter -gt 5 ]
do
    echo "Counter: $counter"
    ((counter++))
done
```

**Key Learning:** Different loop types serve different purposes - for loops for known iterations, while/until for condition-based loops.

---

## 13. Advanced Loop Concepts

### 📁 **File Processing with Loops**
```bash
# Reading from file (line by line)
while IFS= read -r line
do
    echo "Line: $line"
done < /path/to/file.txt

# Processing file items
items=/home/virtualuser/myscripts/file.txt
for item in $(cat $items)
do
    echo "Item: $item"
done
```

### 🗂️ **Array Iteration**
```bash
myArray=(1 2 3 Hello Hi)
length=${#myArray[*]}

# Method 1: Using array length
for((i=0; i<$length; i++))
do
    echo "Array item: ${myArray[$i]}"
done

# Method 2: Direct iteration
for item in "${myArray[@]}"
do
    echo "Item: $item"
done
```

### 🎮 **Loop Control**
```bash
for i in {1..10}
do
    if [ $i -eq 3 ]
    then
        continue  # Skip iteration
    fi
    
    if [ $i -eq 8 ]
    then
        break     # Exit loop
    fi
    
    echo $i
done
```

**Key Learning:** Loops can process files, arrays, and include control statements for complex iteration logic.

---

## 14. Best Practices

### ✅ **Code Quality Guidelines**

#### **Variable Naming**
```bash
# Good
user_name="John"
file_count=10
MAX_RETRIES=3

# Avoid
a="John"
x=10
```

#### **Quoting Variables**
```bash
# Always quote variables to handle spaces
if [ "$user_input" = "expected value" ]
then
    echo "Match found"
fi

# Use arrays properly
for file in "${file_array[@]}"
do
    echo "Processing: $file"
done
```

#### **Error Handling**
```bash
# Check if file exists before processing
if [ ! -f "$filename" ]
then
    echo "Error: File $filename does not exist"
    exit 1
fi

# Check command success
if ! mkdir "$directory_name"
then
    echo "Failed to create directory"
    exit 1
fi
```

#### **Function Usage**
```bash
# Define reusable functions
print_header() {
    echo "=============================="
    echo "$1"
    echo "=============================="
}

# Use the function
print_header "Starting Script"
```

#### **Script Structure**
```bash
#!/bin/bash

# Script description and author info
# Global variables
readonly SCRIPT_NAME="$(basename "$0")"
readonly VERSION="1.0"

# Functions
main() {
    # Main logic here
    echo "Script execution completed"
}

# Script execution
main "$@"
```

**Key Learning:** Following best practices makes scripts more reliable, maintainable, and professional.

---

## 📚 **Summary of Commands and Concepts**

### **Essential Commands**
- `echo` - Output text
- `read` - Get user input  
- `let` - Arithmetic operations
- `readonly` - Create constants
- `case` - Pattern matching
- `if/then/else/fi` - Conditional logic
- `for/while/until` - Loops
- `$(command)` - Command substitution
- `$((expression))` - Arithmetic expansion

### **Key Symbols**
- `$variable` - Variable access
- `${variable}` - Variable expansion
- `${#variable}` - Length
- `${variable:start:length}` - Slicing
- `${variable/old/new}` - Replacement
- `${variable^^}` - Uppercase
- `${variable,,}` - Lowercase
- `${array[*]}` - All array elements
- `${#array[*]}` - Array length

### **Operators**
- **Arithmetic:** `+`, `-`, `*`, `/`, `%`
- **Comparison:** `-eq`, `-ne`, `-lt`, `-le`, `-gt`, `-ge`
- **String:** `=`, `!=`, `-z`, `-n`
- **File:** `-f`, `-d`, `-e`, `-r`, `-w`, `-x`, `-s`
- **Logical:** `&&`, `||`, `!`, `-a`, `-o`

---

## 🎯 **Next Steps for Learning**

1. **Functions and Script Modularization**
2. **Advanced File Operations**
3. **Regular Expressions in Shell**
4. **Process Management**
5. **Network Operations**
6. **Database Interactions**
7. **Error Handling and Logging**
8. **Script Optimization and Performance**

---

*This learning guide covers all the fundamental shell scripting concepts demonstrated in the practical exercises. Practice these concepts to build strong shell scripting skills!*
