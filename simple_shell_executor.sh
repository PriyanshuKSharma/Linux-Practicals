#!/bin/bash

# Simple script to set permissions and execute shell scripts
# Usage: ./simple_shell_executor.sh [script_name]

SCRIPT_DIR="/home/priyanshu-k-sharma/Linux-Practicals/Shell Scripting"

# Set execute permissions for all shell scripts
echo "Setting execute permissions for all shell scripts..."
chmod +x "$SCRIPT_DIR"/*.sh

if [ $? -eq 0 ]; then
    echo "✓ Permissions set successfully"
else
    echo "✗ Failed to set permissions"
    exit 1
fi

# If script name provided, execute it
if [ $# -eq 1 ]; then
    script_name=$1
    script_path="$SCRIPT_DIR/$script_name"
    
    if [ -f "$script_path" ]; then
        echo "Executing: $script_name"
        echo "========================"
        bash "$script_path"
        echo "========================"
        echo "Script execution completed"
    else
        echo "Error: Script '$script_name' not found in $SCRIPT_DIR"
        echo "Available scripts:"
        ls "$SCRIPT_DIR"/*.sh 2>/dev/null | xargs -n 1 basename
        exit 1
    fi
elif [ $# -eq 0 ]; then
    echo "Available scripts:"
    ls "$SCRIPT_DIR"/*.sh 2>/dev/null | xargs -n 1 basename
    echo
    echo "Usage: $0 [script_name]"
    echo "Example: $0 01_basic.sh"
else
    echo "Error: Too many arguments"
    echo "Usage: $0 [script_name]"
    exit 1
fi
