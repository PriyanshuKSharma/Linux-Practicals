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
15. [Functions](#15-functions)
16. [Script Arguments and Special Variables](#16-script-arguments-and-special-variables)
17. [Exit Codes and Error Handling](#17-exit-codes-and-error-handling)
18. [Input/Output Redirection](#18-inputoutput-redirection)
19. [Pipes and Filters](#19-pipes-and-filters)
20. [Regular Expressions](#20-regular-expressions)
21. [Process Management](#21-process-management)
22. [Debugging Shell Scripts](#22-debugging-shell-scripts)
23. [Signal Handling](#23-signal-handling)
24. [Advanced File Operations](#24-advanced-file-operations)
25. [Text Processing Mastery](#25-text-processing-mastery)
26. [Networking in Shell Scripts](#26-networking-in-shell-scripts)
27. [Security Best Practices](#27-security-best-practices)
28. [Performance Optimization](#28-performance-optimization)
29. [Real-World Project Examples](#29-real-world-project-examples)
30. [Scheduling and Automation](#30-scheduling-and-automation)
31. [Configuration Management](#31-configuration-management)
32. [Testing Shell Scripts](#32-testing-shell-scripts)
33. [Documentation and Code Organization](#33-documentation-and-code-organization)
34. [Summary and Next Steps](#summary-and-next-steps)

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

### 🔍 **Numerical Comparisons**

Numerical comparisons use special operators because `<` and `>` are used for I/O redirection in bash.

```bash
a=10
b=20

# Equal to
[ $a -eq $b ]     # Returns false (10 is not equal to 20)
if [ $a -eq 10 ]; then echo "a equals 10"; fi

# Not equal to
[ $a -ne $b ]     # Returns true (10 is not equal to 20)
if [ $a -ne $b ]; then echo "a and b are different"; fi

# Less than
[ $a -lt $b ]     # Returns true (10 is less than 20)
if [ $a -lt $b ]; then echo "a is less than b"; fi

# Less than or equal to
[ $a -le $b ]     # Returns true
[ $a -le 10 ]     # Returns true (10 is equal to 10)
if [ $a -le 10 ]; then echo "a is less than or equal to 10"; fi

# Greater than
[ $a -gt $b ]     # Returns false (10 is not greater than 20)
if [ $b -gt $a ]; then echo "b is greater than a"; fi

# Greater than or equal to
[ $a -ge $b ]     # Returns false
[ $a -ge 10 ]     # Returns true (10 is equal to 10)
if [ $a -ge 5 ]; then echo "a is greater than or equal to 5"; fi
```

**Summary Table:**
| Operator | Meaning | Example | Result (if a=10, b=20) |
|----------|---------|---------|------------------------|
| `-eq` | Equal to | `[ $a -eq $b ]` | False |
| `-ne` | Not equal to | `[ $a -ne $b ]` | True |
| `-lt` | Less than | `[ $a -lt $b ]` | True |
| `-le` | Less than or equal | `[ $a -le $b ]` | True |
| `-gt` | Greater than | `[ $a -gt $b ]` | False |
| `-ge` | Greater than or equal | `[ $a -ge $b ]` | False |

### 📝 **String Comparisons**

String comparisons are different from numerical comparisons.

```bash
str1="hello"
str2="world"
str3="hello"
empty=""

# Equal (single = or ==)
[ "$str1" = "$str3" ]      # Returns true
[ "$str1" == "$str3" ]     # Same as above (== is bash extension)
if [ "$str1" = "hello" ]; then echo "String matches"; fi

# Not equal
[ "$str1" != "$str2" ]     # Returns true
if [ "$str1" != "$str2" ]; then echo "Strings are different"; fi

# Empty string check
[ -z "$empty" ]            # Returns true (string is zero length)
if [ -z "$empty" ]; then echo "String is empty"; fi

# Non-empty string check
[ -n "$str1" ]             # Returns true (string is not zero length)
if [ -n "$str1" ]; then echo "String is not empty"; fi

# String is set and not null
[ -v variable_name ]       # Returns true if variable is set

# Lexicographic comparison (requires [[ ]])
[[ "$str1" < "$str2" ]]    # True (h comes before w alphabetically)
[[ "$str2" > "$str1" ]]    # True
```

**Summary Table:**
| Operator | Meaning | Example | Result |
|----------|---------|---------|--------|
| `=` or `==` | Equal | `[ "$str1" = "$str2" ]` | String comparison |
| `!=` | Not equal | `[ "$str1" != "$str2" ]` | Strings differ |
| `-z` | Zero length | `[ -z "$str" ]` | String is empty |
| `-n` | Non-zero length | `[ -n "$str" ]` | String is not empty |
| `<` | Less than (lexicographic) | `[[ "$str1" < "$str2" ]]` | Use only with [[ ]] |
| `>` | Greater than (lexicographic) | `[[ "$str1" > "$str2" ]]` | Use only with [[ ]] |

**Important Notes:**
- Always quote string variables: `"$variable"`
- Use `=` for POSIX compatibility, `==` for bash-specific scripts
- Lexicographic `<` and `>` only work inside `[[ ]]`

### 📁 **File Test Operators**

File test operators check properties of files and directories.

```bash
filename="myfile.txt"
directory="mydir"

# File exists and is a regular file
[ -f "$filename" ]
if [ -f "$filename" ]; then echo "File exists"; fi

# Directory exists
[ -d "$directory" ]
if [ -d "$directory" ]; then echo "Directory exists"; fi

# Path exists (file or directory)
[ -e "$filename" ]
if [ -e "$filename" ]; then echo "Path exists"; fi

# File is readable
[ -r "$filename" ]
if [ -r "$filename" ]; then echo "File is readable"; fi

# File is writable
[ -w "$filename" ]
if [ -w "$filename" ]; then echo "File is writable"; fi

# File is executable
[ -x "$filename" ]
if [ -x "$filename" ]; then echo "File is executable"; fi

# File exists and is not empty
[ -s "$filename" ]
if [ -s "$filename" ]; then echo "File has content"; fi

# File is a symbolic link
[ -L "$filename" ]
if [ -L "$filename" ]; then echo "File is a symlink"; fi

# File is owned by current user
[ -O "$filename" ]
if [ -O "$filename" ]; then echo "You own this file"; fi

# File is owned by current group
[ -G "$filename" ]
if [ -G "$filename" ]; then echo "Your group owns this file"; fi

# File has setuid bit set
[ -u "$filename" ]

# File has setgid bit set
[ -g "$filename" ]

# File has sticky bit set
[ -k "$filename" ]

# File descriptor is open and refers to terminal
[ -t 0 ]  # Check if stdin is a terminal

# File1 is newer than File2
[ "$file1" -nt "$file2" ]
if [ "file1.txt" -nt "file2.txt" ]; then echo "file1 is newer"; fi

# File1 is older than File2
[ "$file1" -ot "$file2" ]
if [ "file1.txt" -ot "file2.txt" ]; then echo "file1 is older"; fi

# Files have same device and inode numbers (hard links)
[ "$file1" -ef "$file2" ]
```

**Complete File Test Operators Table:**
| Operator | Meaning | Example |
|----------|---------|---------|
| `-e` | Path exists | `[ -e "$file" ]` |
| `-f` | Regular file exists | `[ -f "$file" ]` |
| `-d` | Directory exists | `[ -d "$dir" ]` |
| `-L` | Symbolic link | `[ -L "$link" ]` |
| `-S` | Socket file | `[ -S "$socket" ]` |
| `-p` | Named pipe (FIFO) | `[ -p "$pipe" ]` |
| `-b` | Block device | `[ -b "$device" ]` |
| `-c` | Character device | `[ -c "$device" ]` |
| `-r` | Readable | `[ -r "$file" ]` |
| `-w` | Writable | `[ -w "$file" ]` |
| `-x` | Executable | `[ -x "$file" ]` |
| `-s` | Not empty (size > 0) | `[ -s "$file" ]` |
| `-O` | Owned by user | `[ -O "$file" ]` |
| `-G` | Owned by group | `[ -G "$file" ]` |
| `-u` | Setuid bit set | `[ -u "$file" ]` |
| `-g` | Setgid bit set | `[ -g "$file" ]` |
| `-k` | Sticky bit set | `[ -k "$file" ]` |
| `-t` | File descriptor is terminal | `[ -t 0 ]` |
| `-nt` | Newer than | `[ "$f1" -nt "$f2" ]` |
| `-ot` | Older than | `[ "$f1" -ot "$f2" ]` |
| `-ef` | Same file (hard links) | `[ "$f1" -ef "$f2" ]` |

### 🔀 **Difference Between [ ] and [[ ]]**

**Single Brackets `[ ]` (POSIX Compatible):**
```bash
# Requires quoting and proper spacing
[ "$var" = "value" ]

# Word splitting can cause issues
var="hello world"
[ $var = "hello world" ]  # ERROR: too many arguments

# No pattern matching
[ "$var" = *.txt ]  # Literal comparison with "*.txt"
```

**Double Brackets `[[ ]]` (Bash Extension):**
```bash
# More forgiving with quotes
[[ $var = "value" ]]  # Works even without quotes on $var

# Handles spaces better
var="hello world"
[[ $var = "hello world" ]]  # Works fine

# Pattern matching support
[[ "$var" = *.txt ]]  # Matches pattern

# Regular expression support
[[ "$email" =~ ^[a-z]+@[a-z]+\.[a-z]+$ ]]

# Prevents word splitting and pathname expansion
[[ $var = "hello world" ]]  # Safe

# Logical operators work directly
[[ $a -eq 10 && $b -eq 20 ]]  # Cleaner syntax
```

**Recommendation:** Use `[[ ]]` for bash scripts, use `[ ]` for POSIX-compliant scripts.

### ⚠️ **Common Mistakes and Best Practices**

#### **Mistake 1: Using wrong operators for strings/numbers**
```bash
# WRONG: Using string operators for numbers
if [ "10" > "9" ]; then echo "true"; fi  # Actually false (lexicographic)

# CORRECT: Use numerical operators
if [ 10 -gt 9 ]; then echo "true"; fi   # Correct
```

#### **Mistake 2: Not quoting variables**
```bash
# WRONG: Can break with spaces or empty values
if [ $var = "value" ]; then echo "match"; fi

# CORRECT: Always quote
if [ "$var" = "value" ]; then echo "match"; fi
```

#### **Mistake 3: Missing spaces around brackets**
```bash
# WRONG: No spaces
if [$a -eq 10]; then echo "ten"; fi

# CORRECT: Spaces required
if [ $a -eq 10 ]; then echo "ten"; fi
```

#### **Mistake 4: Using = instead of -eq for numbers**
```bash
# WORKS but compares as strings
if [ "$num" = "10" ]; then echo "ten"; fi

# BETTER: Use numerical comparison
if [ "$num" -eq 10 ]; then echo "ten"; fi
```

### ✅ **Practical Examples**

#### **Check if script is run as root**
```bash
if [ $EUID -eq 0 ]; then
    echo "Running as root"
else
    echo "Not running as root"
    exit 1
fi
```

#### **Validate file before processing**
```bash
if [ ! -f "$filename" ]; then
    echo "Error: File does not exist"
    exit 1
elif [ ! -r "$filename" ]; then
    echo "Error: File is not readable"
    exit 1
elif [ ! -s "$filename" ]; then
    echo "Warning: File is empty"
fi
```

#### **Complex condition with multiple checks**
```bash
if [[ -f "$file" && -r "$file" && -s "$file" ]]; then
    echo "File exists, is readable, and has content"
    cat "$file"
else
    echo "File check failed"
fi
```

#### **Pattern matching with [[ ]]**
```bash
read -p "Enter filename: " filename

if [[ "$filename" == *.txt ]]; then
    echo "Text file detected"
elif [[ "$filename" == *.sh ]]; then
    echo "Shell script detected"
else
    echo "Unknown file type"
fi
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

## 15. Functions

### 🔧 **Creating and Using Functions**

Functions are reusable blocks of code that help organize scripts and avoid repetition.

#### **Basic Function Syntax**
```bash
# Method 1: Using 'function' keyword
function greet() {
    echo "Hello, World!"
}

# Method 2: Without 'function' keyword (POSIX compliant)
greet() {
    echo "Hello, World!"
}

# Call the function
greet
```

#### **Functions with Parameters**
```bash
# Parameters are accessed using $1, $2, $3, etc.
greet() {
    echo "Hello, $1!"
    echo "You are $2 years old"
}

# Call with arguments
greet "John" 25

# Output:
# Hello, John!
# You are 25 years old
```

#### **Function with Return Values**
```bash
# Functions can return numeric exit codes (0-255)
add() {
    local result=$(($1 + $2))
    echo $result  # Output result (captured by command substitution)
    return 0      # Return success status
}

# Capture function output
sum=$(add 10 20)
echo "Sum is: $sum"

# Check return status
add 5 3
if [ $? -eq 0 ]; then
    echo "Function executed successfully"
fi
```

#### **Local vs Global Variables**
```bash
global_var="I'm global"

my_function() {
    local local_var="I'm local"
    global_var="Modified global"
    echo "Inside function: $local_var"
}

my_function
echo "Outside function: $global_var"
# echo "$local_var"  # This would fail - local_var doesn't exist here
```

#### **Function with Multiple Return Values**
```bash
# Use echo and command substitution for multiple values
get_system_info() {
    local os=$(uname -s)
    local kernel=$(uname -r)
    local hostname=$(hostname)
    echo "$os|$kernel|$hostname"
}

# Capture and parse output
info=$(get_system_info)
IFS='|' read -r os kernel hostname <<< "$info"
echo "OS: $os, Kernel: $kernel, Hostname: $hostname"
```

#### **Recursive Functions**
```bash
# Calculate factorial recursively
factorial() {
    if [ $1 -le 1 ]; then
        echo 1
    else
        local prev=$(factorial $(($1 - 1)))
        echo $(($1 * prev))
    fi
}

result=$(factorial 5)
echo "5! = $result"  # Output: 120
```

#### **Function Libraries**
```bash
# File: my_library.sh
#!/bin/bash

print_header() {
    echo "================================"
    echo "$1"
    echo "================================"
}

validate_email() {
    [[ "$1" =~ ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$ ]]
}

# Main script
#!/bin/bash
source ./my_library.sh  # Import functions

print_header "User Registration"
read -p "Enter email: " email
if validate_email "$email"; then
    echo "Valid email"
else
    echo "Invalid email"
fi
```

**Key Learning:** Functions promote code reusability, improve organization, and make scripts easier to maintain.

---

## 16. Script Arguments and Special Variables

### 📋 **Command Line Arguments**

#### **Positional Parameters**
```bash
#!/bin/bash
# Script: process.sh
# Usage: ./process.sh arg1 arg2 arg3

echo "Script name: $0"
echo "First argument: $1"
echo "Second argument: $2"
echo "Third argument: $3"
echo "All arguments: $@"
echo "All arguments (quoted): $*"
echo "Number of arguments: $#"
echo "Last exit status: $?"
echo "Process ID: $$"
echo "Background process ID: $!"
```

#### **Special Variables Reference**
| Variable | Description | Example |
|----------|-------------|---------|
| `$0` | Script name | `./script.sh` |
| `$1-$9` | First 9 arguments | `$1`, `$2`, etc. |
| `${10}` | Arguments 10+ (use braces) | `${10}`, `${11}` |
| `$#` | Number of arguments | `3` |
| `$@` | All arguments (separate) | `"arg1" "arg2" "arg3"` |
| `$*` | All arguments (single string) | `"arg1 arg2 arg3"` |
| `$?` | Exit status of last command | `0` (success) |
| `$$` | Current process ID | `12345` |
| `$!` | PID of last background process | `12346` |
| `$_` | Last argument of previous command | `value` |
| `$-` | Current shell options | `himBH` |

#### **Processing Arguments with shift**
```bash
#!/bin/bash
# Process all arguments one by one

while [ $# -gt 0 ]; do
    echo "Processing: $1"
    shift  # Shift arguments left ($2 becomes $1, etc.)
done
```

#### **Using getopts for Options**
```bash
#!/bin/bash
# Script with flags: ./script.sh -u username -p password -v

verbose=false

while getopts "u:p:vh" option; do
    case $option in
        u) username=$OPTARG ;;
        p) password=$OPTARG ;;
        v) verbose=true ;;
        h) 
            echo "Usage: $0 -u username -p password [-v] [-h]"
            exit 0
            ;;
        \?) 
            echo "Invalid option: -$OPTARG"
            exit 1
            ;;
    esac
done

echo "Username: $username"
echo "Password: $password"
$verbose && echo "Verbose mode enabled"
```

#### **Advanced Argument Parsing**
```bash
#!/bin/bash
# Handle long options and mixed arguments

show_help() {
    cat << EOF
Usage: $0 [OPTIONS] file1 file2 ...

OPTIONS:
    -h, --help          Show this help message
    -v, --verbose       Enable verbose output
    -o, --output FILE   Output file
    -n, --number NUM    Number value
EOF
}

# Parse arguments
VERBOSE=false
OUTPUT=""
NUMBER=0
FILES=()

while [[ $# -gt 0 ]]; do
    case $1 in
        -h|--help)
            show_help
            exit 0
            ;;
        -v|--verbose)
            VERBOSE=true
            shift
            ;;
        -o|--output)
            OUTPUT="$2"
            shift 2
            ;;
        -n|--number)
            NUMBER="$2"
            shift 2
            ;;
        -*)
            echo "Unknown option: $1"
            exit 1
            ;;
        *)
            FILES+=("$1")
            shift
            ;;
    esac
done

echo "Verbose: $VERBOSE"
echo "Output: $OUTPUT"
echo "Number: $NUMBER"
echo "Files: ${FILES[@]}"
```

**Key Learning:** Proper argument handling makes scripts more flexible and user-friendly.

---

## 17. Exit Codes and Error Handling

### ⚠️ **Understanding Exit Codes**

#### **Exit Status Basics**
```bash
# Exit codes: 0 = success, 1-255 = error
command_that_succeeds
echo $?  # Output: 0

command_that_fails
echo $?  # Output: non-zero (usually 1)

# Set custom exit code
exit 0   # Success
exit 1   # General error
exit 2   # Misuse of shell command
exit 127 # Command not found
exit 130 # Script terminated by Ctrl+C
```

#### **Checking Command Success**
```bash
# Method 1: Check $?
mkdir /tmp/mydir
if [ $? -eq 0 ]; then
    echo "Directory created successfully"
else
    echo "Failed to create directory"
fi

# Method 2: Direct check (preferred)
if mkdir /tmp/mydir; then
    echo "Directory created successfully"
else
    echo "Failed to create directory"
fi

# Method 3: Using && and ||
mkdir /tmp/mydir && echo "Success" || echo "Failed"
```

#### **Error Handling Patterns**

##### **Basic Error Handling**
```bash
#!/bin/bash

# Exit on error
set -e  # Exit immediately if any command fails

# Exit on undefined variable
set -u  # Treat unset variables as error

# Pipe failures
set -o pipefail  # Return exit code of first failing command in pipe

# Combine all
set -euo pipefail
```

##### **Custom Error Handler**
```bash
#!/bin/bash

# Error handler function
error_exit() {
    echo "Error: $1" >&2
    exit "${2:-1}"  # Use provided exit code or default to 1
}

# Usage
if [ ! -f "$config_file" ]; then
    error_exit "Configuration file not found: $config_file" 2
fi

file_count=$(find /path -type f | wc -l) || error_exit "Failed to count files" 3
```

##### **Trap for Cleanup**
```bash
#!/bin/bash

# Temporary file
TEMP_FILE=$(mktemp)

# Cleanup function
cleanup() {
    echo "Cleaning up..."
    rm -f "$TEMP_FILE"
}

# Trap signals and EXIT
trap cleanup EXIT
trap 'echo "Script interrupted"; exit 130' INT TERM

# Script logic
echo "Working with temp file: $TEMP_FILE"
# ... do work ...

# Cleanup runs automatically on exit
```

##### **Error Handling with try-catch Pattern**
```bash
#!/bin/bash

try() {
    [[ $- = *e* ]]; SAVED_OPT_E=$?
    set +e
}

catch() {
    export exception_code=$?
    (( SAVED_OPT_E )) && set +e
    return $exception_code
}

# Usage
try
(
    # Commands that might fail
    some_command
    another_command
)
catch || {
    case $exception_code in
        1)
            echo "Error code 1"
            ;;
        2)
            echo "Error code 2"
            ;;
        *)
            echo "Unknown error: $exception_code"
            ;;
    esac
}
```

##### **Logging Errors**
```bash
#!/bin/bash

LOG_FILE="/var/log/myscript.log"

log_message() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" | tee -a "$LOG_FILE"
}

log_error() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] ERROR: $1" | tee -a "$LOG_FILE" >&2
}

# Usage
log_message "Script started"
if ! some_command; then
    log_error "Command failed with exit code $?"
    exit 1
fi
log_message "Script completed successfully"
```

**Key Learning:** Proper error handling prevents scripts from continuing with invalid state and helps diagnose issues.

---

## 18. Input/Output Redirection

### 📤 **Redirecting Input and Output**

#### **Standard Streams**
- `stdin` (0): Standard input
- `stdout` (1): Standard output
- `stderr` (2): Standard error

#### **Output Redirection**
```bash
# Redirect stdout to file (overwrite)
echo "Hello" > output.txt

# Redirect stdout to file (append)
echo "World" >> output.txt

# Redirect stderr to file
command_that_fails 2> error.log

# Redirect both stdout and stderr
command > output.txt 2>&1

# Redirect both (shorter syntax)
command &> output.txt

# Discard output
command > /dev/null 2>&1

# Redirect stdout to file, stderr to another
command > output.txt 2> error.txt
```

#### **Input Redirection**
```bash
# Read from file
wc -l < input.txt

# Here document (multi-line input)
cat << EOF > file.txt
Line 1
Line 2
Line 3
EOF

# Here document with variable expansion disabled
cat << 'EOF'
$HOME will not be expanded
EOF

# Here string (single line input)
grep "pattern" <<< "search this string"

# Reading from file into variable
while IFS= read -r line; do
    echo "Line: $line"
done < input.txt
```

#### **File Descriptors**
```bash
# Open file descriptor 3 for reading
exec 3< input.txt

# Read from file descriptor 3
read -u 3 line
echo "$line"

# Close file descriptor
exec 3<&-

# Open file descriptor 4 for writing
exec 4> output.txt

# Write to file descriptor 4
echo "Data" >&4

# Close file descriptor
exec 4>&-

# Duplicate file descriptors
exec 5>&1  # Save stdout to FD 5
exec 1> output.txt  # Redirect stdout to file
echo "Goes to file"
exec 1>&5  # Restore stdout
echo "Goes to terminal"
```

#### **Advanced Redirection**
```bash
# Swap stdout and stderr
command 3>&1 1>&2 2>&3

# Tee: write to both file and stdout
command | tee output.txt

# Append to file and stdout
command | tee -a output.txt

# Multiple outputs
command | tee file1.txt | tee file2.txt | grep pattern

# Process substitution
diff <(command1) <(command2)
cat <(echo "First") <(echo "Second")

# Named pipes (FIFO)
mkfifo mypipe
command1 > mypipe &
command2 < mypipe
```

**Key Learning:** I/O redirection controls where data comes from and goes to, enabling powerful data flow manipulation.

---

## 19. Pipes and Filters

### 🔄 **Combining Commands with Pipes**

#### **Basic Piping**
```bash
# Pipe stdout of one command to stdin of another
ls -l | grep ".txt"

# Chain multiple commands
cat file.txt | grep "pattern" | sort | uniq

# Count lines
command | wc -l

# Page through output
command | less
command | more
```

#### **Common Filter Commands**

##### **grep - Pattern Searching**
```bash
# Basic search
grep "pattern" file.txt

# Case-insensitive
grep -i "pattern" file.txt

# Invert match (show non-matching lines)
grep -v "pattern" file.txt

# Show line numbers
grep -n "pattern" file.txt

# Recursive search in directory
grep -r "pattern" /path/to/dir

# Count matches
grep -c "pattern" file.txt

# Show only matching part
grep -o "pattern" file.txt

# Multiple patterns
grep -e "pattern1" -e "pattern2" file.txt
grep "pattern1\|pattern2" file.txt

# Extended regex
grep -E "pattern1|pattern2" file.txt
egrep "pattern1|pattern2" file.txt

# Context lines
grep -A 2 "pattern" file.txt  # 2 lines after
grep -B 2 "pattern" file.txt  # 2 lines before
grep -C 2 "pattern" file.txt  # 2 lines before and after
```

##### **sed - Stream Editor**
```bash
# Substitute first occurrence on each line
sed 's/old/new/' file.txt

# Substitute all occurrences (global)
sed 's/old/new/g' file.txt

# In-place editing
sed -i 's/old/new/g' file.txt

# Delete lines
sed '/pattern/d' file.txt

# Delete specific line number
sed '5d' file.txt

# Delete range of lines
sed '5,10d' file.txt

# Print specific lines
sed -n '5p' file.txt
sed -n '5,10p' file.txt

# Multiple commands
sed -e 's/old/new/g' -e 's/foo/bar/g' file.txt

# Insert line before pattern
sed '/pattern/i\New line' file.txt

# Append line after pattern
sed '/pattern/a\New line' file.txt

# Replace entire line matching pattern
sed '/pattern/c\Replacement line' file.txt
```

##### **awk - Text Processing**
```bash
# Print specific column
awk '{print $1}' file.txt

# Print multiple columns
awk '{print $1, $3}' file.txt

# Use custom separator
awk -F: '{print $1}' /etc/passwd

# Pattern matching
awk '/pattern/ {print $0}' file.txt

# Conditional processing
awk '$3 > 100 {print $1}' file.txt

# Built-in variables
awk '{print NR, $0}' file.txt  # Line number and line
awk '{print NF}' file.txt      # Number of fields
awk 'END {print NR}' file.txt  # Total lines

# BEGIN and END blocks
awk 'BEGIN {print "Start"} {print} END {print "End"}' file.txt

# Sum column
awk '{sum += $1} END {print sum}' file.txt

# Calculate average
awk '{sum += $1; count++} END {print sum/count}' file.txt

# Complex processing
awk -F: '$3 >= 1000 {print $1, $3}' /etc/passwd
```

##### **sort - Sorting Lines**
```bash
# Basic sort
sort file.txt

# Reverse sort
sort -r file.txt

# Numeric sort
sort -n file.txt

# Sort by specific column
sort -k 2 file.txt

# Sort numerically by column
sort -k 2 -n file.txt

# Unique sort
sort -u file.txt

# Case-insensitive sort
sort -f file.txt

# Sort by multiple columns
sort -k 1,1 -k 2,2n file.txt
```

##### **uniq - Remove Duplicates**
```bash
# Remove consecutive duplicates (file must be sorted)
sort file.txt | uniq

# Count occurrences
sort file.txt | uniq -c

# Show only duplicates
sort file.txt | uniq -d

# Show only unique lines
sort file.txt | uniq -u

# Ignore case
sort file.txt | uniq -i
```

##### **cut - Extract Columns**
```bash
# Extract by character position
cut -c 1-5 file.txt

# Extract by field (default delimiter: tab)
cut -f 1,3 file.txt

# Custom delimiter
cut -d: -f 1 /etc/passwd

# Range of fields
cut -d: -f 1-3 /etc/passwd
```

##### **tr - Translate Characters**
```bash
# Convert to uppercase
echo "hello" | tr 'a-z' 'A-Z'

# Convert to lowercase
echo "HELLO" | tr 'A-Z' 'a-z'

# Delete characters
echo "hello123" | tr -d '0-9'

# Squeeze repeated characters
echo "hello    world" | tr -s ' '

# Replace characters
echo "hello" | tr 'el' 'ip'
```

#### **Complex Pipeline Examples**
```bash
# Find most common words in file
cat file.txt | tr -s ' ' '\n' | sort | uniq -c | sort -rn | head -10

# Top 10 largest files
ls -lh | sort -k 5 -h | tail -10

# Count unique IP addresses in log
grep -oE "\b([0-9]{1,3}\.){3}[0-9]{1,3}\b" access.log | sort | uniq -c | sort -rn

# Process CSV data
cat data.csv | awk -F, '{sum += $3} END {print "Total:", sum}'

# Monitor log file in real-time
tail -f /var/log/syslog | grep --line-buffered "ERROR"

# Extract and process JSON (with jq if available)
curl -s api.example.com | jq '.items[] | {name: .name, value: .value}'
```

**Key Learning:** Pipes and filters enable powerful text processing by chaining simple commands together.

---

## 20. Regular Expressions

### 🔍 **Pattern Matching with Regex**

#### **Basic Regex Patterns**
```bash
# Literal characters
grep "hello" file.txt

# Any single character (.)
grep "h.llo" file.txt  # Matches: hello, hallo, hxllo

# Start of line (^)
grep "^hello" file.txt  # Lines starting with "hello"

# End of line ($)
grep "world$" file.txt  # Lines ending with "world"

# Character class []
grep "[aeiou]" file.txt  # Any vowel
grep "[0-9]" file.txt    # Any digit
grep "[a-z]" file.txt    # Any lowercase letter
grep "[A-Z]" file.txt    # Any uppercase letter

# Negated character class [^]
grep "[^0-9]" file.txt   # Non-digits

# Quantifiers
grep "a*" file.txt       # Zero or more 'a'
grep "a\+" file.txt      # One or more 'a' (basic regex)
grep "a\?" file.txt      # Zero or one 'a' (basic regex)

# Word boundaries
grep "\bword\b" file.txt # Match whole word "word"
```

#### **Extended Regex (ERE)**
```bash
# Use -E flag or egrep
grep -E "pattern" file.txt
egrep "pattern" file.txt

# Alternation (|)
grep -E "cat|dog" file.txt

# Quantifiers (no escaping needed)
grep -E "a+" file.txt    # One or more 'a'
grep -E "a?" file.txt    # Zero or one 'a'
grep -E "a{3}" file.txt  # Exactly 3 'a'
grep -E "a{3,}" file.txt # 3 or more 'a'
grep -E "a{3,5}" file.txt # 3 to 5 'a'

# Grouping
grep -E "(ab)+" file.txt  # One or more "ab"

# Backreferences (basic regex)
grep "\(word\).*\1" file.txt  # Match repeated word
```

#### **Regex in Different Contexts**

##### **Using with grep**
```bash
# Email pattern
grep -E "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" file.txt

# IP address
grep -E "\b([0-9]{1,3}\.){3}[0-9]{1,3}\b" file.txt

# URL
grep -E "https?://[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" file.txt

# Phone number (XXX-XXX-XXXX)
grep -E "[0-9]{3}-[0-9]{3}-[0-9]{4}" file.txt

# Date (YYYY-MM-DD)
grep -E "[0-9]{4}-[0-9]{2}-[0-9]{2}" file.txt
```

##### **Using in Bash [[ ]]**
```bash
#!/bin/bash

email="user@example.com"

if [[ "$email" =~ ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$ ]]; then
    echo "Valid email"
else
    echo "Invalid email"
fi

# Extract captured groups
if [[ "$email" =~ ([^@]+)@(.+) ]]; then
    echo "Username: ${BASH_REMATCH[1]}"
    echo "Domain: ${BASH_REMATCH[2]}"
fi
```

##### **Using with sed**
```bash
# Replace email domain
sed -E 's/@[a-z]+\.com/@newdomain.com/g' file.txt

# Extract phone numbers
sed -n -E 's/.*([0-9]{3}-[0-9]{3}-[0-9]{4}).*/\1/p' file.txt

# Remove HTML tags
sed -E 's/<[^>]+>//g' file.html
```

##### **Using with awk**
```bash
# Match pattern in awk
awk '/^[0-9]+$/ {print}' file.txt

# Extract using regex
awk 'match($0, /[0-9]{3}-[0-9]{3}-[0-9]{4}/) {print substr($0, RSTART, RLENGTH)}' file.txt
```

#### **Common Regex Patterns**
```bash
# Username (alphanumeric, underscore, 3-16 chars)
^[a-zA-Z0-9_]{3,16}$

# Password (min 8 chars, uppercase, lowercase, digit, special)
^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$

# IPv4 address
^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$

# MAC address
^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$

# Credit card (simple validation)
^[0-9]{13,19}$

# Slug (URL-friendly)
^[a-z0-9]+(?:-[a-z0-9]+)*$

# Hex color code
^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$
```

**Key Learning:** Regular expressions provide powerful pattern matching for text search and manipulation.

---

## 21. Process Management

### ⚙️ **Managing Processes in Scripts**

#### **Background Jobs**
```bash
# Run command in background
command &

# Last background process ID
echo $!

# List background jobs
jobs

# Bring job to foreground
fg %1

# Send job to background
bg %1

# Wait for background process to finish
wait $PID

# Wait for all background processes
wait
```

#### **Process Information**
```bash
# Current process ID
echo $$

# Parent process ID
echo $PPID

# List all processes
ps aux

# Process tree
pstree

# Real-time process monitor
top
htop  # If available

# Find process by name
pgrep process_name
ps aux | grep process_name

# Kill process
kill PID
kill -9 PID  # Force kill
killall process_name
pkill process_name
```

#### **Running Commands in Subshell**
```bash
# Subshell (changes don't affect parent)
(
    cd /tmp
    pwd  # Shows /tmp
)
pwd  # Shows original directory

# Command group (runs in current shell)
{
    cd /tmp
    pwd
}
pwd  # Shows /tmp (changed current directory)
```

#### **Parallel Processing**
```bash
#!/bin/bash

# Run multiple commands in parallel
process_file() {
    echo "Processing $1"
    sleep 2
    echo "Done with $1"
}

# Start multiple background processes
for file in file1 file2 file3; do
    process_file "$file" &
done

# Wait for all to complete
wait
echo "All files processed"
```

#### **Process Substitution**
```bash
# Compare output of two commands
diff <(command1) <(command2)

# Multiple inputs
paste <(echo "A B C" | tr ' ' '\n') <(echo "1 2 3" | tr ' ' '\n')

# Read from process output
while read line; do
    echo "Line: $line"
done < <(command)
```

#### **Timeout for Commands**
```bash
# Run command with timeout (requires timeout command)
timeout 10 long_running_command

# Custom timeout implementation
run_with_timeout() {
    local timeout=$1
    shift
    
    "$@" &
    local pid=$!
    
    (
        sleep $timeout
        kill $pid 2>/dev/null
    ) &
    local watcher=$!
    
    if wait $pid 2>/dev/null; then
        kill $watcher 2>/dev/null
        return 0
    else
        echo "Command timed out" >&2
        return 124
    fi
}

# Usage
run_with_timeout 5 sleep 10
```

**Key Learning:** Process management enables running multiple tasks, monitoring execution, and controlling script flow.

---

## 22. Debugging Shell Scripts

### 🐛 **Debugging Techniques**

#### **Enable Debug Mode**
```bash
# Method 1: Run with -x flag
bash -x script.sh

# Method 2: Add to script shebang
#!/bin/bash -x

# Method 3: Enable in script
set -x  # Enable debugging
command1
command2
set +x  # Disable debugging

# Method 4: Debug specific section
{
    set -x
    critical_function
    set +x
} 2> debug.log
```

#### **Verbose Mode**
```bash
# Enable verbose mode (print commands before execution)
set -v
command1
command2
set +v
```

#### **Common Debug Techniques**

##### **Echo Debugging**
```bash
#!/bin/bash

debug() {
    [ "$DEBUG" = "true" ] && echo "DEBUG: $*" >&2
}

DEBUG=true
name="John"
debug "Processing user: $name"
```

##### **Custom Debug Function**
```bash
#!/bin/bash

# Debug levels: 0=off, 1=error, 2=warn, 3=info, 4=debug
DEBUG_LEVEL=3

log_error() { [ $DEBUG_LEVEL -ge 1 ] && echo "[ERROR] $*" >&2; }
log_warn()  { [ $DEBUG_LEVEL -ge 2 ] && echo "[WARN]  $*" >&2; }
log_info()  { [ $DEBUG_LEVEL -ge 3 ] && echo "[INFO]  $*" >&2; }
log_debug() { [ $DEBUG_LEVEL -ge 4 ] && echo "[DEBUG] $*" >&2; }

# Usage
log_info "Starting script"
log_debug "Variable value: $var"
log_warn "Unusual condition detected"
log_error "Operation failed"
```

##### **Stack Trace**
```bash
#!/bin/bash

# Print stack trace
print_trace() {
    local frame=0
    while caller $frame; do
        ((frame++))
    done
}

# Error handler with trace
error_with_trace() {
    echo "Error on line $1" >&2
    print_trace >&2
    exit 1
}

trap 'error_with_trace $LINENO' ERR

# Enable error tracing
set -E
```

##### **Syntax Checking**
```bash
# Check syntax without executing
bash -n script.sh

# Check syntax and show commands
bash -nv script.sh

# ShellCheck (if installed)
shellcheck script.sh
```

#### **Common Debugging Scenarios**

##### **Check Variable Values**
```bash
# Print all variables
set

# Print specific variable with type
declare -p variable_name

# Check if variable is set
if [ -z "${var+x}" ]; then
    echo "var is unset"
else
    echo "var is set to '$var'"
fi
```

##### **Trace Function Calls**
```bash
#!/bin/bash

# Enable function tracing
set -T

trace_begin() {
    echo "==> Entering: ${FUNCNAME[1]}" >&2
}

trace_end() {
    echo "<== Leaving: ${FUNCNAME[1]}" >&2
}

my_function() {
    trace_begin
    # Function code
    echo "Doing work"
    trace_end
}
```

##### **Breakpoints**
```bash
#!/bin/bash

# Simple breakpoint
breakpoint() {
    echo "Breakpoint hit. Press Enter to continue..."
    read
}

# Usage
command1
breakpoint
command2
```

#### **Debug Script Template**
```bash
#!/bin/bash

# Enable strict mode
set -euo pipefail

# Enable debug if DEBUG environment variable is set
[ "${DEBUG:-}" = "true" ] && set -x

# Script directory
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Logging
LOG_FILE="${LOG_FILE:-/tmp/script.log}"

log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $*" | tee -a "$LOG_FILE"
}

# Error handler
error_exit() {
    log "ERROR: $1"
    exit "${2:-1}"
}

# Cleanup
cleanup() {
    log "Cleanup..."
    # Add cleanup code here
}

trap cleanup EXIT
trap 'error_exit "Script interrupted" 130' INT TERM

# Main logic
main() {
    log "Script started"
    
    # Your code here
    
    log "Script completed successfully"
}

main "$@"
```

**Key Learning:** Debugging techniques help identify and fix issues quickly, making scripts more reliable.

---

## 23. Signal Handling

### 📡 **Trapping and Handling Signals**

#### **Common Signals**
| Signal | Number | Description | Default Action |
|--------|--------|-------------|----------------|
| SIGHUP | 1 | Hangup | Terminate |
| SIGINT | 2 | Interrupt (Ctrl+C) | Terminate |
| SIGQUIT | 3 | Quit (Ctrl+\) | Terminate + core dump |
| SIGKILL | 9 | Kill (cannot be caught) | Terminate |
| SIGTERM | 15 | Termination | Terminate |
| SIGSTOP | 19 | Stop (cannot be caught) | Stop |
| SIGCONT | 18 | Continue | Continue |
| SIGUSR1 | 10 | User-defined 1 | Terminate |
| SIGUSR2 | 12 | User-defined 2 | Terminate |

#### **Using trap Command**
```bash
# Basic trap syntax
trap 'commands' SIGNAL

# Trap Ctrl+C (SIGINT)
trap 'echo "Interrupted!"; exit 130' INT

# Trap script exit
trap 'echo "Script exiting"' EXIT

# Trap errors
trap 'echo "Error on line $LINENO"' ERR

# Multiple signals
trap 'cleanup_function' INT TERM EXIT

# Ignore signal
trap '' INT  # Ignore Ctrl+C

# Reset to default behavior
trap - INT
```

#### **Cleanup Handler**
```bash
#!/bin/bash

# Create temporary files
TEMP_FILE=$(mktemp)
TEMP_DIR=$(mktemp -d)

# Cleanup function
cleanup() {
    echo "Cleaning up..."
    rm -f "$TEMP_FILE"
    rm -rf "$TEMP_DIR"
    # Disconnect from database
    # Close file handles
    # Kill child processes
}

# Trap multiple signals
trap cleanup EXIT INT TERM

# Script logic
echo "Working..."
sleep 10
echo "Done"

# Cleanup runs automatically
```

#### **Graceful Shutdown**
```bash
#!/bin/bash

SHUTDOWN=false

handle_shutdown() {
    echo "Shutdown signal received"
    SHUTDOWN=true
}

trap handle_shutdown INT TERM

# Main loop
while [ "$SHUTDOWN" = false ]; do
    echo "Processing..."
    sleep 2
    
    # Check for shutdown
    if [ "$SHUTDOWN" = true ]; then
        echo "Finishing current task..."
        # Complete current task gracefully
        break
    fi
done

echo "Shutdown complete"
```

#### **Reload Configuration on Signal**
```bash
#!/bin/bash

CONFIG_FILE="config.conf"

load_config() {
    echo "Loading configuration from $CONFIG_FILE"
    source "$CONFIG_FILE"
}

handle_reload() {
    echo "Reload signal received"
    load_config
}

# Load initial config
load_config

# Trap USR1 for reload
trap handle_reload USR1

echo "Process ID: $$"
echo "Send USR1 to reload: kill -USR1 $$"

# Main loop
while true; do
    echo "Running with config..."
    sleep 5
done
```

#### **Send Signals**
```bash
# Send signal by PID
kill -TERM 12345
kill -9 12345     # SIGKILL

# Send signal by name
killall -TERM process_name
pkill -TERM process_name

# Send signal to process group
kill -TERM -12345  # Negative PID = process group

# Send signal from script
kill -USR1 $OTHER_PROCESS_PID
```

**Key Learning:** Signal handling enables graceful shutdown, cleanup, and inter-process communication.

---

## 24. Advanced File Operations

### 📂 **Working with Files and Directories**

#### **File Testing**
```bash
# Comprehensive file checks
check_file() {
    local file=$1
    
    if [ -e "$file" ]; then
        echo "$file exists"
        
        [ -f "$file" ] && echo "  - Regular file"
        [ -d "$file" ] && echo "  - Directory"
        [ -L "$file" ] && echo "  - Symbolic link"
        [ -r "$file" ] && echo "  - Readable"
        [ -w "$file" ] && echo "  - Writable"
        [ -x "$file" ] && echo "  - Executable"
        [ -s "$file" ] && echo "  - Not empty"
        
        echo "  - Size: $(stat -f%z "$file" 2>/dev/null || stat -c%s "$file" 2>/dev/null) bytes"
        echo "  - Modified: $(stat -f%Sm "$file" 2>/dev/null || stat -c%y "$file" 2>/dev/null)"
    else
        echo "$file does not exist"
    fi
}
```

#### **File Manipulation**
```bash
# Create directory structure
mkdir -p /path/to/nested/directory

# Create file with content
cat > file.txt << EOF
Line 1
Line 2
EOF

# Touch file (create or update timestamp)
touch file.txt

# Copy with options
cp -r source/ destination/        # Recursive
cp -p file.txt backup/            # Preserve attributes
cp -u source/ destination/        # Update only newer files
cp -v file.txt backup/            # Verbose

# Move/rename
mv oldname newname
mv file.txt /new/location/

# Remove safely
rm -f file.txt                    # Force remove
rm -r directory/                  # Recursive
rm -i file.txt                    # Interactive (ask before delete)

# Find and delete
find /path -name "*.tmp" -delete
find /path -type f -mtime +30 -delete  # Files older than 30 days
```

#### **File Searching**
```bash
# Find by name
find /path -name "pattern"
find /path -iname "pattern"       # Case-insensitive

# Find by type
find /path -type f                # Files
find /path -type d                # Directories
find /path -type l                # Symbolic links

# Find by size
find /path -size +100M            # Larger than 100MB
find /path -size -1k              # Smaller than 1KB
find /path -size 10M              # Exactly 10MB

# Find by time
find /path -mtime -7              # Modified in last 7 days
find /path -mtime +30             # Modified more than 30 days ago
find /path -atime -1              # Accessed in last 24 hours
find /path -ctime -1              # Changed in last 24 hours

# Find by permissions
find /path -perm 644              # Exactly 644
find /path -perm -644             # At least 644
find /path -perm /644             # Any of 644

# Find and execute
find /path -name "*.log" -exec gzip {} \;
find /path -name "*.txt" -exec echo {} \;

# Find with multiple conditions
find /path -name "*.sh" -type f -executable

# Exclude directories
find /path -name "*.txt" -not -path "*/exclude/*"
```

#### **Batch File Processing**
```bash
#!/bin/bash

# Rename multiple files
for file in *.txt; do
    mv "$file" "${file%.txt}.backup"
done

# Process files in directory
process_directory() {
    local dir=$1
    
    find "$dir" -type f -name "*.log" | while read -r file; do
        echo "Processing: $file"
        # Process file
        gzip "$file"
    done
}

# Batch convert images (requires imagemagick)
for img in *.jpg; do
    convert "$img" -resize 800x600 "resized_${img}"
done

# Sync directories
rsync -av --delete source/ destination/
```

#### **File Locking**
```bash
# Simple file lock
LOCKFILE="/var/lock/myscript.lock"

acquire_lock() {
    if [ -e "$LOCKFILE" ]; then
        echo "Script already running"
        exit 1
    fi
    touch "$LOCKFILE"
    trap "rm -f $LOCKFILE" EXIT
}

acquire_lock
# Script logic here

# Advanced locking with flock
{
    flock -n 200 || { echo "Already running"; exit 1; }
    # Script logic here
} 200>/var/lock/myscript.lock
```

#### **File Checksums**
```bash
# Calculate MD5 checksum
md5sum file.txt
md5sum file.txt > file.txt.md5

# Verify checksum
md5sum -c file.txt.md5

# SHA256 checksum
sha256sum file.txt

# Compare files
diff file1.txt file2.txt
cmp file1.txt file2.txt

# Binary diff
diff -u <(xxd file1.bin) <(xxd file2.bin)
```

**Key Learning:** Advanced file operations enable powerful file management and automation.

---

## 25. Text Processing Mastery

### 📄 **Advanced sed Techniques**

#### **Multi-line Operations**
```bash
# Join lines
sed ':a;N;$!ba;s/\n/ /g' file.txt

# Delete empty lines
sed '/^$/d' file.txt

# Delete lines matching pattern
sed '/pattern/d' file.txt

# Print lines between patterns
sed -n '/START/,/END/p' file.txt

# Append line after match
sed '/pattern/a\New line' file.txt

# Insert line before match
sed '/pattern/i\New line' file.txt

# Change matching line
sed '/pattern/c\Replacement line' file.txt
```

#### **Advanced Substitution**
```bash
# Replace with backreferences
sed 's/\([0-9]*\)-\([0-9]*\)/\2-\1/' file.txt

# Conditional replacement
sed '/pattern/s/old/new/g' file.txt

# Multiple replacements
sed -e 's/old1/new1/g' -e 's/old2/new2/g' file.txt

# Use different delimiter
sed 's|/path/old|/path/new|g' file.txt

# Replace only nth occurrence
sed 's/old/new/3' file.txt

# Replace from nth occurrence onward
sed 's/old/new/g3' file.txt
```

### 📊 **Advanced awk Programming**

#### **awk Variables and Arrays**
```bash
# Custom variables
awk 'BEGIN {count=0} {count++} END {print count}' file.txt

# Arrays
awk '{arr[$1]++} END {for (i in arr) print i, arr[i]}' file.txt

# Multi-dimensional arrays
awk '{arr[$1,$2]++} END {for (key in arr) print key, arr[key]}' file.txt

# Built-in variables
awk '{
    print "Filename:", FILENAME
    print "Line number:", NR
    print "Field count:", NF
    print "First field:", $1
    print "Last field:", $NF
}' file.txt
```

#### **awk Functions**
```bash
# String functions
awk '{
    print length($1)           # Length
    print substr($1, 1, 3)     # Substring
    print index($1, "abc")     # Index of substring
    print tolower($1)          # Lowercase
    print toupper($1)          # Uppercase
    gsub(/old/, "new", $1)     # Global substitution
    sub(/old/, "new", $1)      # First substitution
}' file.txt

# Split string
awk '{
    n = split($0, arr, ",")
    for (i=1; i<=n; i++)
        print arr[i]
}' file.txt

# Math functions
awk '{
    print int($1)              # Integer part
    print sqrt($1)             # Square root
    print exp($1)              # Exponential
    print log($1)              # Natural logarithm
    print sin($1)              # Sine
    print rand()               # Random number [0,1)
}' file.txt
```

#### **awk Control Structures**
```bash
# If-else
awk '{
    if ($3 > 100)
        print $1, "HIGH"
    else if ($3 > 50)
        print $1, "MEDIUM"
    else
        print $1, "LOW"
}' file.txt

# Loops
awk '{
    for (i=1; i<=NF; i++)
        print "Field", i":", $i
}' file.txt

# While loop
awk '{
    i = 1
    while (i <= NF) {
        print $i
        i++
    }
}' file.txt

# Do-while loop
awk '{
    i = 1
    do {
        print $i
        i++
    } while (i <= NF)
}' file.txt
```

#### **awk Practical Examples**
```bash
# CSV processing
awk -F, '{sum += $3} END {print "Total:", sum}' data.csv

# Log analysis
awk '$9 == 404 {count++} END {print "404 errors:", count}' access.log

# Remove duplicates
awk '!seen[$0]++' file.txt

# Print unique values
awk '{a[$1]++} END {for (i in a) print i}' file.txt

# Calculate statistics
awk '{
    sum += $1
    sumsq += $1^2
}
END {
    mean = sum / NR
    stddev = sqrt(sumsq/NR - mean^2)
    print "Mean:", mean
    print "StdDev:", stddev
}' numbers.txt

# Format output as table
awk '{printf "%-20s %-10s %10.2f\n", $1, $2, $3}' file.txt

# Join files
awk 'NR==FNR {a[$1]=$2; next} {print $0, a[$1]}' file1.txt file2.txt
```

### 🔧 **Combining Tools**
```bash
# Complex pipeline
cat access.log | \
    grep "200" | \
    awk '{print $1}' | \
    sort | \
    uniq -c | \
    sort -rn | \
    head -10

# Extract and process data
curl -s "https://api.example.com/data" | \
    grep -o '"name":"[^"]*"' | \
    sed 's/"name":"//g' | \
    sed 's/"//g' | \
    sort

# Process CSV with multiple tools
cat data.csv | \
    sed '1d' | \
    awk -F, '$3 > 100 {print $1, $2, $3}' | \
    sort -k3 -rn | \
    head -20 | \
    column -t
```

**Key Learning:** Mastering text processing tools enables powerful data manipulation and analysis.

---

## 26. Networking in Shell Scripts

### 🌐 **Network Operations**

#### **Basic Network Commands**
```bash
# Check connectivity
ping -c 4 google.com

# Test port connectivity
nc -zv hostname 80
telnet hostname 80

# DNS lookup
nslookup example.com
dig example.com
host example.com

# Network interfaces
ipconfig        # Windows
ifconfig        # Unix/Linux (older)
ip addr show    # Linux (modern)

# Routing table
route -n
ip route show

# Active connections
netstat -an
ss -an          # Modern alternative
lsof -i         # Files and ports
```

#### **Downloading Files**
```bash
# wget
wget https://example.com/file.zip
wget -O output.zip https://example.com/file.zip
wget -c https://example.com/file.zip    # Resume download
wget -r https://example.com/            # Recursive download

# curl
curl -O https://example.com/file.zip
curl -o output.zip https://example.com/file.zip
curl -L https://example.com/redirect    # Follow redirects
curl -C - -O https://example.com/file.zip  # Resume download

# Download with authentication
wget --user=username --password=password https://example.com/file.zip
curl -u username:password https://example.com/file.zip

# Download multiple files
while read url; do
    wget "$url"
done < urls.txt
```

#### **API Interactions**
```bash
# GET request
curl -X GET https://api.example.com/data

# POST request
curl -X POST -H "Content-Type: application/json" \
    -d '{"key":"value"}' \
    https://api.example.com/data

# PUT request
curl -X PUT -H "Content-Type: application/json" \
    -d '{"key":"value"}' \
    https://api.example.com/data/123

# DELETE request
curl -X DELETE https://api.example.com/data/123

# With headers
curl -H "Authorization: Bearer TOKEN" \
    https://api.example.com/data

# Save response
curl -o response.json https://api.example.com/data

# Show response headers
curl -i https://api.example.com/data

# Follow redirects
curl -L https://example.com/redirect

# Timeout
curl --max-time 30 https://example.com/data
```

#### **REST API Script Example**
```bash
#!/bin/bash

API_BASE="https://api.example.com"
API_TOKEN="your_token_here"

# Helper function for API calls
api_call() {
    local method=$1
    local endpoint=$2
    local data=$3
    
    curl -s -X "$method" \
        -H "Authorization: Bearer $API_TOKEN" \
        -H "Content-Type: application/json" \
        ${data:+-d "$data"} \
        "$API_BASE$endpoint"
}

# GET request
get_users() {
    api_call GET "/users"
}

# POST request
create_user() {
    local name=$1
    local email=$2
    local data=$(cat <<EOF
{
    "name": "$name",
    "email": "$email"
}
EOF
)
    api_call POST "/users" "$data"
}

# Usage
get_users
create_user "John Doe" "john@example.com"
```

#### **Web Scraping**
```bash
#!/bin/bash

# Download web page
curl -s "https://example.com" > page.html

# Extract links
grep -oP 'href="\K[^"]+' page.html

# Extract emails
grep -oE '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}' page.html

# Extract phone numbers
grep -oE '\([0-9]{3}\) [0-9]{3}-[0-9]{4}' page.html

# Remove HTML tags
sed 's/<[^>]*>//g' page.html

# With htmlq (if available)
curl -s "https://example.com" | htmlq 'a' --attribute href
```

#### **Network Monitoring**
```bash
#!/bin/bash

# Monitor host availability
monitor_host() {
    local host=$1
    local interval=60
    
    while true; do
        if ping -c 1 "$host" > /dev/null 2>&1; then
            echo "[$(date)] $host is UP"
        else
            echo "[$(date)] $host is DOWN"
            # Send alert
        fi
        sleep $interval
    done
}

# Monitor multiple hosts
monitor_hosts() {
    local hosts=("192.168.1.1" "8.8.8.8" "google.com")
    
    for host in "${hosts[@]}"; do
        monitor_host "$host" &
    done
    
    wait
}

# Port scanner
scan_ports() {
    local host=$1
    local start_port=${2:-1}
    local end_port=${3:-1024}
    
    for port in $(seq $start_port $end_port); do
        if timeout 1 bash -c "echo >/dev/tcp/$host/$port" 2>/dev/null; then
            echo "Port $port is open"
        fi
    done
}

# Usage
scan_ports "192.168.1.1" 1 100
```

#### **Simple HTTP Server**
```bash
# Python
python -m http.server 8000
python3 -m http.server 8000

# PHP
php -S localhost:8000

# Ruby
ruby -run -e httpd . -p 8000

# Node.js (with http-server)
npx http-server -p 8000
```

**Key Learning:** Shell scripts can interact with network services, APIs, and perform various network operations.

---

## 27. Security Best Practices

### 🔒 **Writing Secure Shell Scripts**

#### **Input Validation**
```bash
#!/bin/bash

# Validate number
is_number() {
    [[ "$1" =~ ^[0-9]+$ ]]
}

read -p "Enter a number: " num
if is_number "$num"; then
    echo "Valid number: $num"
else
    echo "Invalid input"
    exit 1
fi

# Validate email
is_email() {
    [[ "$1" =~ ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$ ]]
}

# Validate file path
is_valid_path() {
    local path=$1
    # Check for directory traversal
    if [[ "$path" =~ \.\. ]]; then
        return 1
    fi
    # Check if within allowed directory
    [[ "$path" == /allowed/path/* ]]
}

# Sanitize input
sanitize_input() {
    # Remove dangerous characters
    echo "$1" | tr -cd '[:alnum:]._-'
}
```

#### **Secure Password Handling**
```bash
# Read password securely (no echo)
read -s -p "Enter password: " password
echo

# Don't store passwords in scripts
# Use environment variables or secure vaults

# Hash password (requires openssl)
hash_password() {
    echo -n "$1" | openssl dgst -sha256 -binary | base64
}

# Generate random password
generate_password() {
    local length=${1:-16}
    openssl rand -base64 $length | tr -d "=+/" | cut -c1-$length
}

# Use password from file (with restricted permissions)
PASSWORD=$(cat /secure/password.txt)
chmod 600 /secure/password.txt
```

#### **Preventing Code Injection**
```bash
# WRONG - Vulnerable to injection
filename=$1
eval "cat $filename"  # NEVER use eval with user input

# CORRECT - Quote variables
filename=$1
cat "$filename"

# WRONG - Command injection
url=$1
curl $url  # If url is "http://example.com; rm -rf /"

# CORRECT - Validate and quote
url=$1
if [[ "$url" =~ ^https?:// ]]; then
    curl "$url"
else
    echo "Invalid URL"
    exit 1
fi

# Use arrays for commands with arguments
command_args=("grep" "-r" "$user_pattern" "/safe/path")
"${command_args[@]}"
```

#### **File Permission Security**
```bash
# Set secure permissions
chmod 600 sensitive_file.txt      # rw------- (owner only)
chmod 700 sensitive_script.sh     # rwx------ (owner execute only)
chmod 644 public_file.txt         # rw-r--r-- (owner write, others read)

# Check permissions before using file
if [ -r "$file" ] && [ ! -w "$file" ]; then
    echo "File is read-only"
fi

# Create file with specific permissions
(umask 077 && touch secure_file.txt)  # Creates with 600

# Secure temporary files
TMPFILE=$(mktemp) || exit 1
chmod 600 "$TMPFILE"
trap "rm -f $TMPFILE" EXIT
```

#### **Environment Variable Security**
```bash
# Clear sensitive variables after use
PASSWORD="secret"
# ... use password ...
unset PASSWORD

# Don't export sensitive data
export PUBLIC_KEY="..."  # OK
PASSWORD="..."           # Don't export

# Secure PATH
export PATH="/usr/local/bin:/usr/bin:/bin"

# Avoid using IFS unsafely
old_IFS=$IFS
IFS=','
# ... use IFS ...
IFS=$old_IFS
```

#### **Logging Security**
```bash
# Don't log sensitive data
log_message() {
    local message=$1
    echo "[$(date)] $message" >> /var/log/app.log
}

# WRONG
log_message "User password: $password"

# CORRECT
log_message "User authentication attempt"

# Sanitize log output
log_sanitized() {
    local message=$1
    # Remove potential injection attempts
    message=$(echo "$message" | tr -cd '[:print:]' | tr -d '\r\n')
    log_message "$message"
}
```

#### **Secure Script Template**
```bash
#!/bin/bash

# Strict mode
set -euo pipefail

# Secure PATH
export PATH="/usr/local/bin:/usr/bin:/bin"

# Secure temporary directory
TMPDIR=$(mktemp -d)
chmod 700 "$TMPDIR"

# Cleanup on exit
cleanup() {
    rm -rf "$TMPDIR"
}
trap cleanup EXIT

# Validate user
if [ "$EUID" -eq 0 ]; then
    echo "Don't run as root"
    exit 1
fi

# Input validation
validate_input() {
    local input=$1
    if [[ ! "$input" =~ ^[a-zA-Z0-9_-]+$ ]]; then
        echo "Invalid input" >&2
        exit 1
    fi
}

# Main logic with validation
main() {
    local user_input=$1
    validate_input "$user_input"
    
    # Process safely
    echo "Processing: $user_input"
}

# Run if not sourced
if [[ "${BASH_SOURCE[0]}" == "${0}" ]]; then
    main "$@"
fi
```

#### **Security Checklist**
- ✅ Always quote variables: `"$variable"`
- ✅ Use `set -euo pipefail` for strict mode
- ✅ Validate and sanitize all input
- ✅ Use secure file permissions
- ✅ Don't hardcode passwords
- ✅ Clear sensitive data after use
- ✅ Use absolute paths for commands
- ✅ Avoid `eval` with user input
- ✅ Use `mktemp` for temporary files
- ✅ Implement cleanup with `trap`
- ✅ Check return codes
- ✅ Log actions without sensitive data
- ✅ Limit script privileges
- ✅ Regular security audits

**Key Learning:** Security should be a primary consideration when writing shell scripts, especially those handling sensitive data.

---

## 28. Performance Optimization

### ⚡ **Making Scripts Faster**

#### **Avoid Unnecessary Subshells**
```bash
# SLOW - Creates subshell
var=$(cat file.txt)

# FASTER - Use built-in
var=$(< file.txt)

# SLOW - Multiple pipes
cat file.txt | grep pattern | wc -l

# FASTER - Direct input
grep pattern < file.txt | wc -l

# FASTEST - Avoid cat
grep -c pattern file.txt
```

#### **Use Built-in Commands**
```bash
# SLOW - External command
basename /path/to/file.txt

# FAST - Parameter expansion
file="/path/to/file.txt"
echo "${file##*/}"

# SLOW - External dirname
dirname /path/to/file.txt

# FAST - Parameter expansion
echo "${file%/*}"

# SLOW - seq command
for i in $(seq 1 100); do
    echo $i
done

# FAST - Brace expansion or C-style loop
for i in {1..100}; do
    echo $i
done

for ((i=1; i<=100; i++)); do
    echo $i
done
```

#### **Efficient String Operations**
```bash
# SLOW - Using sed
result=$(echo "$string" | sed 's/old/new/g')

# FAST - Built-in substitution
result="${string//old/new}"

# SLOW - grep for substring
if echo "$string" | grep -q "substring"; then
    echo "Found"
fi

# FAST - Built-in pattern matching
if [[ "$string" == *"substring"* ]]; then
    echo "Found"
fi
```

#### **Parallel Processing**
```bash
# SLOW - Sequential processing
for file in *.txt; do
    process_file "$file"
done

# FAST - Parallel processing
for file in *.txt; do
    process_file "$file" &
done
wait

# With GNU parallel (if available)
parallel process_file ::: *.txt

# Limited parallelism
max_jobs=4
for file in *.txt; do
    while [ $(jobs -r | wc -l) -ge $max_jobs ]; do
        sleep 0.1
    done
    process_file "$file" &
done
wait
```

#### **Efficient Loops**
```bash
# SLOW - Reading line by line with command substitution
for line in $(cat file.txt); do
    echo "$line"
done

# FAST - Using while read
while IFS= read -r line; do
    echo "$line"
done < file.txt

# SLOW - Incrementing in loop
count=0
for file in *; do
    count=$((count + 1))
done

# FAST - Use existing count
count=$(ls -1 | wc -l)
```

#### **Caching Results**
```bash
# Cache expensive operations
CACHE_FILE="/tmp/script_cache"
CACHE_TTL=3600  # 1 hour

get_data() {
    if [ -f "$CACHE_FILE" ]; then
        local cache_age=$(($(date +%s) - $(stat -f%m "$CACHE_FILE" 2>/dev/null || stat -c%Y "$CACHE_FILE")))
        if [ $cache_age -lt $CACHE_TTL ]; then
            cat "$CACHE_FILE"
            return
        fi
    fi
    
    # Expensive operation
    expensive_command > "$CACHE_FILE"
    cat "$CACHE_FILE"
}
```

#### **Memory Optimization**
```bash
# SLOW - Store large output in variable
output=$(large_command)

# FAST - Process directly
large_command | while read line; do
    process "$line"
done

# Use temporary files for large data
large_command > /tmp/data.txt
process_file /tmp/data.txt
rm /tmp/data.txt
```

#### **Benchmark Scripts**
```bash
#!/bin/bash

# Simple timing
time_start=$(date +%s.%N)
# ... commands ...
time_end=$(date +%s.%N)
elapsed=$(echo "$time_end - $time_start" | bc)
echo "Elapsed: $elapsed seconds"

# Using time command
time {
    # Commands to benchmark
    command1
    command2
}

# Detailed benchmarking function
benchmark() {
    local description=$1
    shift
    local iterations=${ITERATIONS:-10}
    local total=0
    
    echo "Benchmarking: $description"
    for ((i=1; i<=$iterations; i++)); do
        local start=$(date +%s.%N)
        "$@" > /dev/null 2>&1
        local end=$(date +%s.%N)
        local elapsed=$(echo "$end - $start" | bc)
        total=$(echo "$total + $elapsed" | bc)
        echo "  Run $i: ${elapsed}s"
    done
    
    local average=$(echo "scale=4; $total / $iterations" | bc)
    echo "  Average: ${average}s"
}

# Usage
benchmark "Method 1" method1_function
benchmark "Method 2" method2_function
```

#### **Profiling Scripts**
```bash
# Profile with set -x
#!/bin/bash
PS4='+ $(date "+%s.%N")\011 '
set -x
# ... script commands ...
set +x

# Analyze with custom profiler
#!/bin/bash

# Enable profiling
profile_start() {
    PROFILE_START=$(date +%s.%N)
}

profile_end() {
    local PROFILE_END=$(date +%s.%N)
    local ELAPSED=$(echo "$PROFILE_END - $PROFILE_START" | bc)
    echo "[$1] ${ELAPSED}s" >> profile.log
}

# Usage
profile_start
slow_function
profile_end "slow_function"
```

**Key Learning:** Performance optimization focuses on reducing unnecessary operations and using efficient built-in features.

---

## 29. Real-World Project Examples

### 🚀 **Complete Script Examples**

#### **System Backup Script**
```bash
#!/bin/bash
#
# System Backup Script
# Backs up specified directories to a backup location
#

set -euo pipefail

# Configuration
BACKUP_SOURCE=("/etc" "/home" "/var/www")
BACKUP_DEST="/backup"
BACKUP_NAME="backup-$(date +%Y%m%d-%H%M%S).tar.gz"
LOG_FILE="/var/log/backup.log"
RETENTION_DAYS=7

# Logging function
log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $*" | tee -a "$LOG_FILE"
}

# Error handler
error_exit() {
    log "ERROR: $1"
    exit 1
}

# Check if running as root
if [ "$EUID" -ne 0 ]; then
    error_exit "Must run as root"
fi

# Create backup directory
mkdir -p "$BACKUP_DEST" || error_exit "Cannot create backup directory"

# Start backup
log "Starting backup..."
log "Sources: ${BACKUP_SOURCE[*]}"
log "Destination: $BACKUP_DEST/$BACKUP_NAME"

# Create backup
if tar -czf "$BACKUP_DEST/$BACKUP_NAME" "${BACKUP_SOURCE[@]}" 2>&1 | tee -a "$LOG_FILE"; then
    log "Backup created successfully"
    
    # Calculate size
    size=$(du -h "$BACKUP_DEST/$BACKUP_NAME" | cut -f1)
    log "Backup size: $size"
else
    error_exit "Backup failed"
fi

# Remove old backups
log "Removing backups older than $RETENTION_DAYS days..."
find "$BACKUP_DEST" -name "backup-*.tar.gz" -mtime +$RETENTION_DAYS -delete
log "Cleanup completed"

# Send notification (optional)
#echo "Backup completed: $BACKUP_NAME" | mail -s "Backup Report" admin@example.com

log "Backup process completed successfully"
```

#### **Log Analyzer Script**
```bash
#!/bin/bash
#
# Log Analyzer
# Analyzes web server access logs
#

set -euo pipefail

LOG_FILE="${1:-/var/log/nginx/access.log}"
REPORT_FILE="log_report_$(date +%Y%m%d).txt"

# Check if log file exists
[ -f "$LOG_FILE" ] || { echo "Log file not found: $LOG_FILE"; exit 1; }

# Generate report
{
    echo "================================"
    echo "Log Analysis Report"
    echo "File: $LOG_FILE"
    echo "Generated: $(date)"
    echo "================================"
    echo
    
    echo "Total Requests:"
    wc -l < "$LOG_FILE"
    echo
    
    echo "Top 10 IP Addresses:"
    awk '{print $1}' "$LOG_FILE" | sort | uniq -c | sort -rn | head -10
    echo
    
    echo "Top 10 Requested URLs:"
    awk '{print $7}' "$LOG_FILE" | sort | uniq -c | sort -rn | head -10
    echo
    
    echo "HTTP Status Codes:"
    awk '{print $9}' "$LOG_FILE" | sort | uniq -c | sort -rn
    echo
    
    echo "Top User Agents:"
    awk -F'"' '{print $6}' "$LOG_FILE" | sort | uniq -c | sort -rn | head -10
    echo
    
    echo "Requests by Hour:"
    awk '{print $4}' "$LOG_FILE" | cut -d: -f2 | sort | uniq -c
    echo
    
    echo "404 Errors:"
    grep ' 404 ' "$LOG_FILE" | awk '{print $7}' | sort | uniq -c | sort -rn | head -10
    echo
    
    echo "================================"
    echo "End of Report"
    echo "================================"
} > "$REPORT_FILE"

echo "Report generated: $REPORT_FILE"
cat "$REPORT_FILE"
```

#### **Server Monitoring Script**
```bash
#!/bin/bash
#
# Server Monitor
# Monitors system resources and sends alerts
#

set -euo pipefail

# Thresholds
CPU_THRESHOLD=80
MEMORY_THRESHOLD=80
DISK_THRESHOLD=80

# Alert function
send_alert() {
    local message=$1
    echo "ALERT: $message" | tee -a /var/log/monitor.log
    # Send email or push notification
    # echo "$message" | mail -s "Server Alert" admin@example.com
}

# Check CPU usage
check_cpu() {
    local cpu_usage=$(top -bn1 | grep "Cpu(s)" | sed "s/.*, *\([0-9.]*\)%* id.*/\1/" | awk '{print 100 - $1}')
    local cpu_int=${cpu_usage%.*}
    
    if [ "${cpu_int}" -gt "$CPU_THRESHOLD" ]; then
        send_alert "CPU usage is ${cpu_usage}% (threshold: ${CPU_THRESHOLD}%)"
    fi
}

# Check memory usage
check_memory() {
    local memory_usage=$(free | grep Mem | awk '{print ($3/$2) * 100.0}')
    local memory_int=${memory_usage%.*}
    
    if [ "${memory_int}" -gt "$MEMORY_THRESHOLD" ]; then
        send_alert "Memory usage is ${memory_usage}% (threshold: ${MEMORY_THRESHOLD}%)"
    fi
}

# Check disk usage
check_disk() {
    while read line; do
        local usage=$(echo "$line" | awk '{print $5}' | sed 's/%//')
        local mount=$(echo "$line" | awk '{print $6}')
        
        if [ "$usage" -gt "$DISK_THRESHOLD" ]; then
            send_alert "Disk usage on $mount is ${usage}% (threshold: ${DISK_THRESHOLD}%)"
        fi
    done < <(df -h | grep -vE '^Filesystem|tmpfs|cdrom')
}

# Check services
check_services() {
    local services=("nginx" "mysql" "sshd")
    
    for service in "${services[@]}"; do
        if ! systemctl is-active --quiet "$service"; then
            send_alert "Service $service is not running"
        fi
    done
}

# Main monitoring loop
echo "Starting system monitor..."
while true; do
    check_cpu
    check_memory
    check_disk
    check_services
    
    sleep 60  # Check every minute
done
```

#### **Automated Deployment Script**
```bash
#!/bin/bash
#
# Deployment Script
# Deploys application to production
#

set -euo pipefail

# Configuration
APP_NAME="myapp"
GIT_REPO="https://github.com/user/repo.git"
DEPLOY_PATH="/var/www/$APP_NAME"
BACKUP_PATH="/var/backups/$APP_NAME"

# Logging
LOG_FILE="/var/log/deploy.log"
log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $*" | tee -a "$LOG_FILE"
}

# Pre-deployment checks
pre_deploy_check() {
    log "Running pre-deployment checks..."
    
    # Check if git is installed
    command -v git >/dev/null 2>&1 || { log "Git is not installed"; exit 1; }
    
    # Check if deploy path exists
    [ -d "$DEPLOY_PATH" ] || { log "Deploy path does not exist"; exit 1; }
    
    # Test database connection
    # mysql -u user -p password -e "SELECT 1" >/dev/null 2>&1 || { log "Database connection failed"; exit 1; }
    
    log "Pre-deployment checks passed"
}

# Backup current version
backup() {
    log "Creating backup..."
    local backup_name="$BACKUP_PATH/backup-$(date +%Y%m%d-%H%M%S).tar.gz"
    
    mkdir -p "$BACKUP_PATH"
    tar -czf "$backup_name" -C "$(dirname $DEPLOY_PATH)" "$(basename $DEPLOY_PATH)"
    
    log "Backup created: $backup_name"
}

# Deploy new version
deploy() {
    log "Deploying new version..."
    
    cd "$DEPLOY_PATH"
    
    # Pull latest code
    git fetch origin
    git reset --hard origin/main
    
    # Install dependencies
    # npm install
    # composer install
    
    # Run migrations
    # php artisan migrate --force
    
    # Build assets
    # npm run build
    
    log "Deployment completed"
}

# Post-deployment tasks
post_deploy() {
    log "Running post-deployment tasks..."
    
    # Clear cache
    # php artisan cache:clear
    
    # Restart services
    # systemctl restart php-fpm
    # systemctl restart nginx
    
    # Run tests
    # npm test
    
    log "Post-deployment tasks completed"
}

# Rollback function
rollback() {
    log "Rolling back..."
    
    # Find latest backup
    local latest_backup=$(ls -t "$BACKUP_PATH"/backup-*.tar.gz | head -1)
    
    if [ -n "$latest_backup" ]; then
        rm -rf "$DEPLOY_PATH"
        tar -xzf "$latest_backup" -C "$(dirname $DEPLOY_PATH)"
        log "Rollback completed"
    else
        log "No backup found for rollback"
        exit 1
    fi
}

# Main deployment process
main() {
    log "=== Starting deployment ==="
    
    pre_deploy_check
    backup
    
    if deploy && post_deploy; then
        log "=== Deployment successful ==="
    else
        log "=== Deployment failed, rolling back ==="
        rollback
        exit 1
    fi
}

# Handle script arguments
case "${1:-}" in
    rollback)
        rollback
        ;;
    *)
        main
        ;;
esac
```

**Key Learning:** Real-world scripts combine multiple concepts and require careful error handling, logging, and testing.

---

## 30. Scheduling and Automation

### ⏰ **Automated Task Execution**

#### **Cron Jobs**
```bash
# Edit crontab
crontab -e

# List cron jobs
crontab -l

# Remove all cron jobs
crontab -r

# Cron syntax: minute hour day month weekday command
# * * * * * command

# Examples:
# Run every minute
* * * * * /path/to/script.sh

# Run every hour at minute 0
0 * * * * /path/to/script.sh

# Run every day at 2:30 AM
30 2 * * * /path/to/script.sh

# Run every Monday at 9:00 AM
0 9 * * 1 /path/to/script.sh

# Run on the 1st of every month at midnight
0 0 1 * * /path/to/script.sh

# Run every 15 minutes
*/15 * * * * /path/to/script.sh

# Run every 6 hours
0 */6 * * * /path/to/script.sh

# Run Monday to Friday at 8 AM
0 8 * * 1-5 /path/to/script.sh

# Run on specific days
0 8 * * 1,3,5 /path/to/script.sh

# Advanced: Run every 2 hours between 9 AM and 5 PM on weekdays
0 9-17/2 * * 1-5 /path/to/script.sh
```

#### **Cron Job Best Practices**
```bash
# Use absolute paths
0 2 * * * /usr/local/bin/backup.sh

# Redirect output to log
0 2 * * * /path/to/script.sh >> /var/log/script.log 2>&1

# Set environment variables
SHELL=/bin/bash
PATH=/usr/local/bin:/usr/bin:/bin
MAILTO=admin@example.com

0 2 * * * /path/to/script.sh

# Use flock to prevent overlapping executions
*/5 * * * * /usr/bin/flock -n /tmp/script.lock /path/to/script.sh
```

#### **At Command (One-time Scheduling)**
```bash
# Schedule command for specific time
echo "/path/to/script.sh" | at 10:00 PM
echo "/path/to/script.sh" | at now + 1 hour
echo "/path/to/script.sh" | at 2:30 PM tomorrow
echo "/path/to/script.sh" | at 9:00 AM 07/25/2026

# List scheduled jobs
atq

# Remove scheduled job
atrm job_number

# Interactive scheduling
at 10:00 PM
> /path/to/script.sh
> Ctrl+D
```

#### **Systemd Timers (Modern Alternative to Cron)**
```bash
# Timer unit file: /etc/systemd/system/backup.timer
[Unit]
Description=Run backup daily

[Timer]
OnCalendar=daily
OnCalendar=*-*-* 02:00:00
Persistent=true

[Install]
WantedBy=timers.target

# Service unit file: /etc/systemd/system/backup.service
[Unit]
Description=Backup Service

[Service]
Type=oneshot
ExecStart=/usr/local/bin/backup.sh

# Enable and start timer
systemctl enable backup.timer
systemctl start backup.timer

# Check timer status
systemctl list-timers
systemctl status backup.timer
```

#### **Watch Command (Repeated Execution)**
```bash
# Run command every 2 seconds
watch -n 2 date

# Highlight differences
watch -d -n 2 df -h

# Precise timing
watch -p -n 1 command

# Exit on error
watch -e command
```

#### **Creating Self-Scheduling Scripts**
```bash
#!/bin/bash
#
# Self-scheduling script example
#

SCRIPT_PATH="$(readlink -f "$0")"
CRON_SCHEDULE="0 2 * * *"  # Daily at 2 AM

# Function to install as cron job
install_cron() {
    # Check if already installed
    if crontab -l 2>/dev/null | grep -q "$SCRIPT_PATH"; then
        echo "Already installed in crontab"
        return 0
    fi
    
    # Add to crontab
    (crontab -l 2>/dev/null; echo "$CRON_SCHEDULE $SCRIPT_PATH") | crontab -
    echo "Installed to crontab: $CRON_SCHEDULE $SCRIPT_PATH"
}

# Function to uninstall from cron
uninstall_cron() {
    crontab -l 2>/dev/null | grep -v "$SCRIPT_PATH" | crontab -
    echo "Removed from crontab"
}

# Main script logic
main() {
    echo "Running scheduled task at $(date)"
    # Add your task here
}

# Handle arguments
case "${1:-}" in
    install)
        install_cron
        ;;
    uninstall)
        uninstall_cron
        ;;
    *)
        main
        ;;
esac
```

**Key Learning:** Scheduling enables automatic execution of scripts at specified times without manual intervention.

---

## 31. Configuration Management

### ⚙️ **Managing Script Configuration**

#### **Configuration File Formats**

##### **Simple Key-Value Configuration**
```bash
# config.conf
APP_NAME=myapp
APP_VERSION=1.0
DATABASE_HOST=localhost
DATABASE_PORT=3306
DEBUG_MODE=true

# Load configuration
source config.conf

echo "App: $APP_NAME v$APP_VERSION"
echo "DB: $DATABASE_HOST:$DATABASE_PORT"
```

##### **INI-style Configuration**
```bash
# config.ini
[database]
host=localhost
port=3306
user=dbuser

[application]
name=myapp
debug=true

# Parse INI file
parse_ini() {
    local file=$1
    local section=""
    
    while IFS='=' read -r key value; do
        # Skip comments and empty lines
        [[ "$key" =~ ^[[:space:]]*# ]] && continue
        [[ -z "$key" ]] && continue
        
        # Handle sections
        if [[ "$key" =~ ^\[(.*)\]$ ]]; then
            section="${BASH_REMATCH[1]}"
            continue
        fi
        
        # Remove leading/trailing whitespace
        key=$(echo "$key" | xargs)
        value=$(echo "$value" | xargs)
        
        # Create variable name
        local var_name="${section}_${key}"
        declare -g "$var_name=$value"
        
    done < "$file"
}

# Usage
parse_ini "config.ini"
echo "Database host: $database_host"
echo "App name: $application_name"
```

##### **JSON Configuration**
```bash
# config.json
{
    "database": {
        "host": "localhost",
        "port": 3306
    },
    "application": {
        "name": "myapp",
        "debug": true
    }
}

# Parse JSON (requires jq)
if command -v jq >/dev/null 2>&1; then
    DB_HOST=$(jq -r '.database.host' config.json)
    DB_PORT=$(jq -r '.database.port' config.json)
    APP_NAME=$(jq -r '.application.name' config.json)
    
    echo "Database: $DB_HOST:$DB_PORT"
    echo "App: $APP_NAME"
fi
```

#### **Environment-based Configuration**
```bash
#!/bin/bash

# Get environment (default to development)
ENVIRONMENT="${ENVIRONMENT:-development}"

# Load environment-specific configuration
case "$ENVIRONMENT" in
    production)
        source config/production.conf
        ;;
    staging)
        source config/staging.conf
        ;;
    development)
        source config/development.conf
        ;;
    *)
        echo "Unknown environment: $ENVIRONMENT"
        exit 1
        ;;
esac

echo "Running in $ENVIRONMENT mode"
```

#### **Configuration Validation**
```bash
#!/bin/bash

# Configuration file
CONFIG_FILE="config.conf"

# Required configuration keys
REQUIRED_KEYS=("DATABASE_HOST" "DATABASE_PORT" "API_KEY")

# Validate configuration
validate_config() {
    local missing=()
    
    for key in "${REQUIRED_KEYS[@]}"; do
        if [ -z "${!key}" ]; then
            missing+=("$key")
        fi
    done
    
    if [ ${#missing[@]} -gt 0 ]; then
        echo "Error: Missing required configuration:" >&2
        printf '  - %s\n' "${missing[@]}" >&2
        exit 1
    fi
    
    # Validate values
    if ! [[ "$DATABASE_PORT" =~ ^[0-9]+$ ]]; then
        echo "Error: DATABASE_PORT must be a number" >&2
        exit 1
    fi
    
    echo "Configuration validated successfully"
}

# Load and validate
source "$CONFIG_FILE"
validate_config
```

#### **Dynamic Configuration Updates**
```bash
#!/bin/bash

CONFIG_FILE="config.conf"

# Update configuration value
update_config() {
    local key=$1
    local value=$2
    
    if grep -q "^${key}=" "$CONFIG_FILE"; then
        # Update existing key
        sed -i "s/^${key}=.*/${key}=${value}/" "$CONFIG_FILE"
    else
        # Add new key
        echo "${key}=${value}" >> "$CONFIG_FILE"
    fi
    
    echo "Updated: ${key}=${value}"
}

# Get configuration value
get_config() {
    local key=$1
    grep "^${key}=" "$CONFIG_FILE" | cut -d= -f2
}

# Usage
update_config "DATABASE_HOST" "192.168.1.100"
value=$(get_config "DATABASE_HOST")
echo "Database host: $value"
```

**Key Learning:** Proper configuration management makes scripts flexible and easier to maintain across different environments.

---

## 32. Testing Shell Scripts

### 🧪 **Ensuring Script Quality**

#### **Manual Testing Checklist**
```bash
# Test cases to verify:
# ✓ Script runs without errors
# ✓ All functions work as expected
# ✓ Error handling works correctly
# ✓ Edge cases are handled
# ✓ Invalid input is rejected
# ✓ Files are created/deleted properly
# ✓ Output is correct
# ✓ Exit codes are appropriate
```

#### **Unit Testing with Bash**
```bash
#!/bin/bash
#
# Simple testing framework
#

# Test counters
TESTS_RUN=0
TESTS_PASSED=0
TESTS_FAILED=0

# Assert functions
assert_equals() {
    local expected=$1
    local actual=$2
    local message=${3:-"Assertion failed"}
    
    ((TESTS_RUN++))
    
    if [ "$expected" = "$actual" ]; then
        ((TESTS_PASSED++))
        echo "✓ PASS: $message"
    else
        ((TESTS_FAILED++))
        echo "✗ FAIL: $message"
        echo "  Expected: $expected"
        echo "  Actual: $actual"
    fi
}

assert_true() {
    ((TESTS_RUN++))
    
    if "$@"; then
        ((TESTS_PASSED++))
        echo "✓ PASS: $*"
    else
        ((TESTS_FAILED++))
        echo "✗ FAIL: $*"
    fi
}

assert_false() {
    ((TESTS_RUN++))
    
    if ! "$@"; then
        ((TESTS_PASSED++))
        echo "✓ PASS: ! $*"
    else
        ((TESTS_FAILED++))
        echo "✗ FAIL: ! $*"
    fi
}

# Test report
test_report() {
    echo "================================"
    echo "Test Results:"
    echo "  Total: $TESTS_RUN"
    echo "  Passed: $TESTS_PASSED"
    echo "  Failed: $TESTS_FAILED"
    echo "================================"
    
    [ $TESTS_FAILED -eq 0 ]
}

# Example: Testing a function
add() {
    echo $(($1 + $2))
}

# Run tests
echo "Running tests..."
echo

result=$(add 2 3)
assert_equals 5 "$result" "add 2 + 3 should equal 5"

result=$(add 0 0)
assert_equals 0 "$result" "add 0 + 0 should equal 0"

result=$(add -1 1)
assert_equals 0 "$result" "add -1 + 1 should equal 0"

assert_true [ -d "/tmp" ]
assert_false [ -f "/nonexistent/file" ]

echo
test_report
```

#### **Testing with BATS (Bash Automated Testing System)**
```bash
# test_script.bats
#!/usr/bin/env bats

# Setup function (runs before each test)
setup() {
    # Create test fixtures
    TEST_DIR=$(mktemp -d)
}

# Teardown function (runs after each test)
teardown() {
    # Cleanup
    rm -rf "$TEST_DIR"
}

@test "addition works correctly" {
    source script.sh
    result=$(add 2 3)
    [ "$result" -eq 5 ]
}

@test "script creates output file" {
    run ./script.sh --output "$TEST_DIR/output.txt"
    [ "$status" -eq 0 ]
    [ -f "$TEST_DIR/output.txt" ]
}

@test "script handles missing arguments" {
    run ./script.sh
    [ "$status" -eq 1 ]
    [[ "$output" =~ "Error" ]]
}

# Run tests:
# bats test_script.bats
```

#### **Mocking External Commands**
```bash
#!/bin/bash

# Mock function
mock_command() {
    local command=$1
    local output=$2
    local exit_code=${3:-0}
    
    eval "$command() { echo '$output'; return $exit_code; }"
}

# Example: Mock curl
mock_command "curl" '{"status":"success"}' 0

# Test script that uses curl
result=$(curl https://api.example.com/data)
echo "Result: $result"

# Restore original command
unset -f curl
```

#### **Integration Testing**
```bash
#!/bin/bash
#
# Integration test for deployment script
#

setup_test_environment() {
    TEST_DIR=$(mktemp -d)
    export DEPLOY_PATH="$TEST_DIR/app"
    mkdir -p "$DEPLOY_PATH"
    
    # Create fake git repo
    cd "$DEPLOY_PATH"
    git init
    echo "test" > README.md
    git add .
    git commit -m "Initial commit"
}

cleanup_test_environment() {
    rm -rf "$TEST_DIR"
}

test_deployment() {
    echo "Testing deployment..."
    
    # Run deployment script
    if ./deploy.sh; then
        echo "✓ Deployment successful"
    else
        echo "✗ Deployment failed"
        return 1
    fi
    
    # Verify deployment
    if [ -f "$DEPLOY_PATH/README.md" ]; then
        echo "✓ Files deployed"
    else
        echo "✗ Files not found"
        return 1
    fi
}

# Run integration test
setup_test_environment
test_deployment
test_result=$?
cleanup_test_environment

exit $test_result
```

#### **Code Coverage Analysis**
```bash
#!/bin/bash
#
# Simple coverage tracking
#

# Enable coverage tracking
COVERAGE_FILE="coverage.txt"
: > "$COVERAGE_FILE"

# Wrap functions to track execution
track_function() {
    echo "$1" >> "$COVERAGE_FILE"
}

# Example functions
function1() {
    track_function "function1"
    echo "Function 1"
}

function2() {
    track_function "function2"
    echo "Function 2"
}

# Run tests
function1
function2

# Report coverage
echo "Functions executed:"
sort "$COVERAGE_FILE" | uniq
```

**Key Learning:** Testing ensures scripts work correctly and helps catch bugs before production deployment.

---

## 33. Documentation and Code Organization

### 📖 **Writing Maintainable Scripts**

#### **Script Header Template**
```bash
#!/bin/bash
################################################################################
# Script Name:  backup.sh
# Description:  Automated backup script for system files
# Author:       Your Name <your.email@example.com>
# Created:      2024-01-01
# Modified:     2024-03-01
# Version:      1.2.0
# Usage:        ./backup.sh [OPTIONS]
# Options:      -s, --source    Source directory to backup
#               -d, --dest      Destination directory
#               -v, --verbose   Enable verbose output
#               -h, --help      Show this help message
# Example:      ./backup.sh --source /home --dest /backup
# Dependencies: tar, gzip
# Notes:        Requires root privileges for system directories
################################################################################
```

#### **Function Documentation**
```bash
################################################################################
# Function:     process_file
# Description:  Processes a file and generates output
# Parameters:   $1 - Input file path (required)
#               $2 - Output file path (optional)
# Returns:      0 on success, 1 on error
# Example:      process_file "input.txt" "output.txt"
################################################################################
process_file() {
    local input_file=$1
    local output_file=${2:-"default_output.txt"}
    
    # Validate input
    if [ ! -f "$input_file" ]; then
        echo "Error: Input file not found" >&2
        return 1
    fi
    
    # Process file
    cat "$input_file" | sort | uniq > "$output_file"
    return 0
}
```

#### **Inline Comments Best Practices**
```bash
#!/bin/bash

# Good comments explain WHY, not WHAT

# WRONG: This creates a directory
mkdir -p /tmp/data

# RIGHT: Ensure temp directory exists for processing large data sets
mkdir -p /tmp/data

# WRONG: Loop through files
for file in *.txt; do
    # Process file
    process_file "$file"
done

# RIGHT: Process all text files in batch for performance
for file in *.txt; do
    # Skip files larger than 100MB to avoid memory issues
    if [ $(stat -f%z "$file") -lt 104857600 ]; then
        process_file "$file"
    fi
done
```

#### **Help Message Function**
```bash
show_help() {
    cat << EOF
Usage: ${0##*/} [OPTIONS]

Backup script for system files.

OPTIONS:
    -s, --source DIR      Source directory to backup (required)
    -d, --dest DIR        Destination directory (required)
    -r, --retention DAYS  Retention period in days (default: 7)
    -v, --verbose         Enable verbose output
    -h, --help            Display this help message
    
EXAMPLES:
    ${0##*/} --source /home --dest /backup
    ${0##*/} -s /etc -d /backup -r 30 -v
    
NOTES:
    - Requires sufficient disk space in destination
    - May require root privileges for system directories
    - Creates compressed tar.gz archives
    
EXIT CODES:
    0   Success
    1   General error
    2   Invalid arguments
    3   Insufficient permissions

AUTHOR:
    Your Name <your.email@example.com>

VERSION:
    1.0.0
EOF
}
```

#### **README Template**
```markdown
# Script Name

Brief description of what the script does.

## Features

- Feature 1
- Feature 2
- Feature 3

## Requirements

- Bash 4.0+
- Required commands: tar, gzip, curl
- Root privileges (for system directories)

## Installation

\`\`\`bash
git clone https://github.com/user/repo.git
cd repo
chmod +x script.sh
\`\`\`

## Usage

\`\`\`bash
./script.sh [OPTIONS]
\`\`\`

### Options

| Option | Description | Default |
|--------|-------------|---------|
| `-s, --source` | Source directory | Required |
| `-d, --dest` | Destination directory | Required |
| `-v, --verbose` | Verbose output | false |

### Examples

\`\`\`bash
# Basic usage
./script.sh --source /home --dest /backup

# With verbose output
./script.sh -s /etc -d /backup -v
\`\`\`

## Configuration

Edit `config.conf` to customize settings:

\`\`\`bash
RETENTION_DAYS=7
COMPRESSION_LEVEL=9
LOG_FILE=/var/log/script.log
\`\`\`

## Troubleshooting

### Error: Permission denied
Run with sudo: `sudo ./script.sh`

### Error: Command not found
Install required packages: `apt-get install tar gzip`

## Contributing

Pull requests are welcome. For major changes, please open an issue first.

## License

[MIT](LICENSE)

## Changelog

### Version 1.0.0 (2024-01-01)
- Initial release

### Version 1.1.0 (2024-02-01)
- Added retention policy
- Improved error handling
```

#### **Code Organization Structure**
```bash
#!/bin/bash
################################################################################
# 1. HEADER AND METADATA
################################################################################

# Script metadata and documentation

################################################################################
# 2. CONFIGURATION AND CONSTANTS
################################################################################

# Global configuration
readonly SCRIPT_NAME="$(basename "$0")"
readonly SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
readonly VERSION="1.0.0"

# Default values
DEFAULT_TIMEOUT=30
DEFAULT_RETRIES=3

################################################################################
# 3. GLOBAL VARIABLES
################################################################################

# Initialize global variables
DEBUG_MODE=false
VERBOSE=false
OUTPUT_FILE=""

################################################################################
# 4. HELPER FUNCTIONS
################################################################################

# Logging functions
log_info() { echo "[INFO] $*"; }
log_error() { echo "[ERROR] $*" >&2; }

# Utility functions
is_number() { [[ "$1" =~ ^[0-9]+$ ]]; }

################################################################################
# 5. CORE FUNCTIONS
################################################################################

# Main business logic functions
process_data() {
    # Implementation
    return 0
}

################################################################################
# 6. VALIDATION FUNCTIONS
################################################################################

validate_input() {
    # Input validation logic
    return 0
}

################################################################################
# 7. MAIN FUNCTION
################################################################################

main() {
    # Parse arguments
    # Validate input
    # Execute logic
    # Handle errors
    return 0
}

################################################################################
# 8. SCRIPT ENTRY POINT
################################################################################

# Only run main if script is executed (not sourced)
if [[ "${BASH_SOURCE[0]}" == "${0}" ]]; then
    main "$@"
    exit $?
fi
```

**Key Learning:** Good documentation and code organization make scripts easier to understand, maintain, and debug.

---

## 📚 **Summary of Commands and Concepts**

### **Essential Commands**
- `echo` - Output text and variables
- `read` - Capture user input  
- `let` - Arithmetic operations
- `readonly` - Create immutable constants
- `case` - Pattern matching and multi-way branching
- `if/then/else/fi` - Conditional logic
- `for/while/until` - Loop constructs
- `function` - Define reusable code blocks
- `$(command)` - Command substitution
- `$((expression))` - Arithmetic expansion
- `source` / `.` - Load external scripts
- `trap` - Handle signals and cleanup
- `shift` - Process command line arguments
- `getopts` - Parse command options
- `exit` - Terminate script with status code

### **Key Symbols and Operators**

#### **Variable Operations**
- `$variable` / `${variable}` - Variable access
- `${#variable}` - String/array length
- `${variable:start:length}` - Slicing
- `${variable/old/new}` - Replace first occurrence
- `${variable//old/new}` - Replace all occurrences
- `${variable^^}` - Convert to uppercase
- `${variable,,}` - Convert to lowercase
- `${variable:-default}` - Use default if unset
- `${variable:=default}` - Assign default if unset
- `${variable#pattern}` - Remove shortest match from start
- `${variable##pattern}` - Remove longest match from start
- `${variable%pattern}` - Remove shortest match from end
- `${variable%%pattern}` - Remove longest match from end

#### **Array Operations**
- `${array[*]}` / `${array[@]}` - All array elements
- `${#array[*]}` - Array length
- `${array[index]}` - Access specific element
- `${array[*]:start:length}` - Array slicing
- `array+=(elements)` - Append to array

#### **Arithmetic Operators**
- `+` Addition
- `-` Subtraction
- `*` Multiplication
- `/` Division
- `%` Modulus
- `**` Exponentiation
- `++` Increment
- `--` Decrement

#### **Comparison Operators**

**Numerical:**
- `-eq` Equal to
- `-ne` Not equal to
- `-lt` Less than
- `-le` Less than or equal to
- `-gt` Greater than
- `-ge` Greater than or equal to

**String:**
- `=` / `==` Equal
- `!=` Not equal
- `-z` Empty string
- `-n` Non-empty string
- `<` Less than (lexicographic, use with `[[ ]]`)
- `>` Greater than (lexicographic, use with `[[ ]]`)

**File Test:**
- `-e` Path exists
- `-f` Regular file exists
- `-d` Directory exists
- `-L` Symbolic link
- `-r` Readable
- `-w` Writable
- `-x` Executable
- `-s` Not empty
- `-O` Owned by user
- `-G` Owned by group
- `-nt` Newer than
- `-ot` Older than
- `-ef` Same file

#### **Logical Operators**
- `&&` AND operator
- `||` OR operator
- `!` NOT operator
- `-a` AND (within single `[ ]`)
- `-o` OR (within single `[ ]`)

### **I/O Redirection**
- `>` Redirect stdout (overwrite)
- `>>` Redirect stdout (append)
- `<` Redirect stdin
- `2>` Redirect stderr
- `2>&1` Redirect stderr to stdout
- `&>` Redirect both stdout and stderr
- `|` Pipe output to next command
- `<< EOF` Here document
- `<<< "string"` Here string
- `<(command)` Process substitution
- `>(command)` Process substitution (output)

### **Essential Text Processing Tools**

#### **grep - Pattern Searching**
- `grep pattern file` - Basic search
- `grep -i` - Case-insensitive
- `grep -v` - Invert match
- `grep -r` - Recursive
- `grep -n` - Show line numbers
- `grep -c` - Count matches
- `grep -E` - Extended regex
- `grep -A/-B/-C` - Context lines

#### **sed - Stream Editor**
- `sed 's/old/new/'` - Substitute
- `sed 's/old/new/g'` - Global substitute
- `sed '/pattern/d'` - Delete lines
- `sed -n 'p'` - Print specific lines
- `sed -i` - In-place editing
- `sed '/pattern/a\text'` - Append line
- `sed '/pattern/i\text'` - Insert line

#### **awk - Text Processing**
- `awk '{print $1}'` - Print column
- `awk -F:` - Set field separator
- `awk '/pattern/'` - Pattern matching
- `awk '$3 > 100'` - Conditional processing
- `NR` - Line number
- `NF` - Number of fields
- `BEGIN{...}` - Before processing
- `END{...}` - After processing

#### **Other Useful Commands**
- `sort` - Sort lines
- `uniq` - Remove duplicates
- `cut` - Extract columns
- `tr` - Translate characters
- `wc` - Count lines/words/characters
- `head` / `tail` - First/last lines
- `find` - Search for files
- `xargs` - Build command lines

### **Process Management**
- `$!` - PID of last background process
- `$$` - Current process ID
- `$PPID` - Parent process ID
- `jobs` - List background jobs
- `fg` / `bg` - Foreground/background jobs
- `wait` - Wait for process completion
- `kill` - Send signal to process
- `ps` - List processes
- `top` / `htop` - Process monitor

### **Debugging & Development**
- `set -e` - Exit on error
- `set -u` - Exit on undefined variable
- `set -x` - Print commands before execution
- `set -o pipefail` - Pipe failure detection
- `bash -n script.sh` - Syntax check
- `bash -x script.sh` - Debug mode
- `shellcheck` - Static analysis tool

### **Signal Handling**
- `SIGINT` (2) - Ctrl+C
- `SIGTERM` (15) - Termination
- `SIGKILL` (9) - Force kill
- `SIGHUP` (1) - Hangup
- `SIGUSR1/2` (10/12) - User-defined
- `trap 'commands' SIGNAL` - Handle signals

### **Common Patterns**

#### **Iterate Over Files**
```bash
for file in *.txt; do
    echo "$file"
done
```

#### **Read File Line by Line**
```bash
while IFS= read -r line; do
    echo "$line"
done < file.txt
```

#### **Command with Timeout**
```bash
timeout 10 command
```

#### **Check if Command Exists**
```bash
command -v cmd >/dev/null 2>&1
```

#### **Get Script Directory**
```bash
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
```

#### **Parallel Processing**
```bash
for item in "${items[@]}"; do
    process "$item" &
done
wait
```

#### **Retry Logic**
```bash
for ((i=1; i<=3; i++)); do
    command && break
    sleep 2
done
```

---

## 🎯 **Next Steps for Learning**

### **Beginner Level (Completed)**
✅ Basic script structure and syntax  
✅ Variables and data types  
✅ Input/output operations  
✅ Conditional statements  
✅ Loops and iteration  
✅ Arrays and strings  

### **Intermediate Level (Covered)**
✅ Functions and modularization  
✅ Command line arguments  
✅ Error handling and exit codes  
✅ I/O redirection and pipes  
✅ Regular expressions  
✅ Text processing (grep, sed, awk)  

### **Advanced Level (Covered)**
✅ Process management  
✅ Signal handling  
✅ Debugging techniques  
✅ Advanced file operations  
✅ Networking operations  
✅ Security best practices  
✅ Performance optimization  

### **Expert Level (Next Steps)**

#### **1. Advanced Scripting Techniques**
- **Subshells and Job Control**
  - Complex background job management
  - Process groups and sessions
  - Job control in scripts

- **Advanced Parameter Expansion**
  - Indirect variable references
  - Parameter transformation
  - Nameref variables (Bash 4.3+)

- **Associative Arrays and Hash Maps**
  - Complex data structures
  - Multi-dimensional arrays
  - Data serialization

#### **2. System Administration**
- **User and Permission Management**
  - User account automation
  - Permission auditing
  - ACL management

- **System Monitoring and Alerts**
  - Resource monitoring
  - Log aggregation
  - Alert systems
  - Dashboard creation

- **Backup and Recovery**
  - Incremental backups
  - Remote backup strategies
  - Disaster recovery scripts
  - Backup verification

#### **3. DevOps Practices**
- **CI/CD Integration**
  - Git hooks
  - Build automation
  - Deployment pipelines
  - Release management

- **Infrastructure as Code**
  - Server provisioning
  - Configuration management
  - Container orchestration
  - Cloud resource management

- **Monitoring and Logging**
  - Centralized logging
  - Log analysis automation
  - Metrics collection
  - Performance tracking

#### **4. Advanced Text Processing**
- **Complex AWK Programs**
  - Multi-file processing
  - Report generation
  - Data transformation
  - Statistical analysis

- **Advanced Sed Techniques**
  - Multi-line operations
  - Complex substitutions
  - Script files
  - Automation workflows

- **Parsing Structured Data**
  - JSON/XML/YAML processing
  - CSV manipulation
  - API response parsing
  - Data format conversion

#### **5. Networking and APIs**
- **Web Services Integration**
  - RESTful API clients
  - OAuth authentication
  - Webhook handlers
  - API rate limiting

- **Network Automation**
  - SSH automation
  - Remote execution
  - Network configuration
  - Firewall management

- **Web Scraping**
  - HTML parsing
  - Data extraction
  - Automated crawling
  - Content monitoring

#### **6. Database Operations**
- **SQL Database Interaction**
  - MySQL/PostgreSQL scripting
  - Backup and restore
  - Migration scripts
  - Query automation

- **NoSQL Databases**
  - MongoDB operations
  - Redis management
  - Key-value store automation

#### **7. Security and Compliance**
- **Security Auditing**
  - Vulnerability scanning
  - Compliance checking
  - Security hardening
  - Certificate management

- **Encryption and Secrets**
  - GPG automation
  - Secrets management
  - Password rotation
  - Key management

- **Access Control**
  - RBAC implementation
  - Audit logging
  - Security policies
  - Identity management

#### **8. Testing and Quality Assurance**
- **Automated Testing Frameworks**
  - BATS (Bash Automated Testing System)
  - ShUnit2
  - Custom test frameworks
  - Integration testing

- **Code Quality Tools**
  - ShellCheck integration
  - Code linting
  - Style guides
  - Static analysis

- **Continuous Testing**
  - Test automation
  - Coverage analysis
  - Performance testing
  - Regression testing

#### **9. Performance and Optimization**
- **Profiling and Benchmarking**
  - Performance measurement
  - Bottleneck identification
  - Optimization strategies
  - Resource usage analysis

- **Caching Strategies**
  - Result caching
  - Memoization
  - Cache invalidation
  - Distributed caching

- **Concurrency and Parallelism**
  - Parallel processing patterns
  - Thread-safe operations
  - Resource locking
  - Load balancing

#### **10. Modern Shell Features**
- **Bash 5.x Features**
  - Associative array improvements
  - New parameter expansions
  - Performance enhancements
  - Compatibility modes

- **Alternative Shells**
  - Zsh scripting
  - Fish shell features
  - POSIX compliance
  - Shell portability

#### **11. Containerization and Cloud**
- **Docker Integration**
  - Container automation
  - Image building
  - Docker Compose
  - Container orchestration

- **Kubernetes Operations**
  - Cluster management
  - Deployment automation
  - Resource scaling
  - Health checking

- **Cloud Platform Automation**
  - AWS CLI scripting
  - Azure automation
  - GCP operations
  - Multi-cloud strategies

#### **12. Real-World Projects**
Build complete solutions:
- **Automated Deployment System** - Full CI/CD pipeline
- **System Monitoring Dashboard** - Real-time monitoring
- **Backup and Recovery Solution** - Enterprise-grade backups
- **Log Analysis Platform** - Automated log processing
- **Security Audit Tool** - Compliance checking
- **API Integration Framework** - RESTful service automation
- **Database Management System** - Automated DBA tasks
- **Network Configuration Tool** - Infrastructure automation

### **Learning Resources**

#### **Online Resources**
- Advanced Bash-Scripting Guide
- ShellCheck Wiki
- Greg's Wiki (Bash Guide)
- Bash Reference Manual
- Linux Documentation Project

#### **Practice Platforms**
- HackerRank Shell Practice
- LeetCode Shell Problems
- CodingBat Shell Exercises
- Exercism Bash Track

#### **Books**
- "Pro Bash Programming" by Chris F.A. Johnson
- "Bash Cookbook" by Carl Albing
- "Shell Scripting Expert Recipes" by Steve Parker
- "Unix Shell Programming" by Stephen G. Kochan

#### **Community**
- Stack Overflow (bash tag)
- Unix & Linux Stack Exchange
- Reddit r/bash
- Bash Hackers IRC/Discord

### **Development Workflow**

1. **Plan** - Define requirements and design
2. **Prototype** - Create basic working version
3. **Implement** - Add features incrementally
4. **Test** - Write and run tests
5. **Debug** - Fix issues and edge cases
6. **Document** - Write clear documentation
7. **Review** - Code review and refactoring
8. **Deploy** - Release to production
9. **Monitor** - Track performance and errors
10. **Maintain** - Update and improve

### **Best Practices Checklist**

✅ Use `set -euo pipefail` for strict mode  
✅ Quote all variables: `"$variable"`  
✅ Use meaningful variable names  
✅ Add comments explaining WHY, not WHAT  
✅ Validate all input  
✅ Handle errors gracefully  
✅ Use functions for reusability  
✅ Implement logging  
✅ Write tests for critical functions  
✅ Use version control (Git)  
✅ Follow a consistent style guide  
✅ Document usage and examples  
✅ Implement cleanup with trap  
✅ Avoid eval with user input  
✅ Use shellcheck for linting  
✅ Keep scripts under 500 lines (split if larger)  
✅ Use absolute paths for production scripts  
✅ Implement help messages  
✅ Return appropriate exit codes  
✅ Test on target environment  

---

## 🏆 **Mastery Milestones**

### **Level 1: Beginner** ⭐
- Can write basic scripts with variables, loops, and conditions
- Understands input/output operations
- Can read and modify existing scripts

### **Level 2: Intermediate** ⭐⭐
- Writes functions and modular scripts
- Handles errors and edge cases
- Uses text processing tools effectively
- Understands I/O redirection and pipes

### **Level 3: Advanced** ⭐⭐⭐
- Implements complex workflow automation
- Writes secure and robust scripts
- Optimizes for performance
- Handles signals and process management
- Integrates with external systems

### **Level 4: Expert** ⭐⭐⭐⭐
- Designs scalable automation frameworks
- Implements testing and CI/CD
- Solves complex system administration problems
- Contributes to open-source shell projects
- Mentors others in shell scripting

### **Level 5: Master** ⭐⭐⭐⭐⭐
- Creates industry-standard tools and frameworks
- Deep understanding of shell internals
- Optimization and performance expert
- Recognized in the community
- Innovates new approaches and solutions

---

## 📝 **Final Notes**

**Shell scripting is a journey, not a destination.** The concepts in this guide provide a solid foundation from beginner to advanced levels. Continue practicing, building real projects, and learning from the community.

**Remember:**
- Start simple and iterate
- Practice regularly
- Read others' code
- Ask questions
- Share your knowledge
- Never stop learning

**Your path forward:**
1. Master the basics first
2. Build practical projects
3. Solve real problems
4. Contribute to open source
5. Teach others what you learn

---

*This comprehensive guide covers shell scripting from fundamental concepts to advanced techniques. Practice these concepts regularly to build strong shell scripting skills. Good luck on your journey to shell scripting mastery!*

**Version:** 2.0  
**Last Updated:** March 4, 2026  
**Author:** Created for Linux Practicals Learning  
**License:** Free for educational use
