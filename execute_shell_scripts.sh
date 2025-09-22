#!/bin/bash

# Script to manage permissions and execute shell scripts from Shell Scripting directory
# Author: Generated for Linux Practicals
# Date: $(date)

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Directory containing shell scripts
SCRIPT_DIR="/home/priyanshu-k-sharma/Linux-Practicals/Shell Scripting"

# Function to print colored output
print_message() {
    local color=$1
    local message=$2
    echo -e "${color}${message}${NC}"
}

# Function to set execute permissions
set_permissions() {
    print_message $BLUE "Setting execute permissions for all shell scripts..."
    
    if [ ! -d "$SCRIPT_DIR" ]; then
        print_message $RED "Error: Shell Scripting directory not found at $SCRIPT_DIR"
        exit 1
    fi
    
    # Set execute permissions for all .sh files
    chmod +x "$SCRIPT_DIR"/*.sh
    
    if [ $? -eq 0 ]; then
        print_message $GREEN "✓ Execute permissions set successfully for all shell scripts"
    else
        print_message $RED "✗ Failed to set permissions"
        exit 1
    fi
}

# Function to list all available scripts
list_scripts() {
    print_message $BLUE "Available shell scripts in $SCRIPT_DIR:"
    echo
    local count=1
    for script in "$SCRIPT_DIR"/*.sh; do
        if [ -f "$script" ]; then
            basename_script=$(basename "$script")
            echo "  $count. $basename_script"
            ((count++))
        fi
    done
    echo
}

# Function to execute a specific script by number
execute_script_by_number() {
    local script_number=$1
    
    # Validate input is a number
    if ! [[ "$script_number" =~ ^[0-9]+$ ]]; then
        print_message $RED "Error: Please enter a valid number"
        return 1
    fi
    
    # Get all script files in an array
    local scripts=()
    for script in "$SCRIPT_DIR"/*.sh; do
        if [ -f "$script" ]; then
            scripts+=($(basename "$script"))
        fi
    done
    
    # Check if number is in valid range
    if [ "$script_number" -lt 1 ] || [ "$script_number" -gt "${#scripts[@]}" ]; then
        print_message $RED "Error: Please enter a number between 1 and ${#scripts[@]}"
        return 1
    fi
    
    # Get the script name (arrays are 0-indexed, so subtract 1)
    local script_name="${scripts[$((script_number - 1))]}"
    
    # Execute the script
    execute_script "$script_name"
}

# Function to execute a specific script by number
execute_script_by_number() {
    local script_number=$1
    
    # Validate input is a number
    if ! [[ "$script_number" =~ ^[0-9]+$ ]]; then
        print_message $RED "Error: Please enter a valid number"
        return 1
    fi
    
    # Get all script files in an array
    local scripts=()
    for script in "$SCRIPT_DIR"/*.sh; do
        if [ -f "$script" ]; then
            scripts+=($(basename "$script"))
        fi
    done
    
    # Check if number is in valid range
    if [ "$script_number" -lt 1 ] || [ "$script_number" -gt "${#scripts[@]}" ]; then
        print_message $RED "Error: Please enter a number between 1 and ${#scripts[@]}"
        return 1
    fi
    
    # Get the script name (arrays are 0-indexed, so subtract 1)
    local script_name="${scripts[$((script_number - 1))]}"
    
    # Execute the script
    execute_script "$script_name"
}

# Function to execute a specific script
execute_script() {
    local script_name=$1
    local script_path="$SCRIPT_DIR/$script_name"
    
    if [ ! -f "$script_path" ]; then
        print_message $RED "Error: Script '$script_name' not found"
        return 1
    fi
    
    if [ ! -x "$script_path" ]; then
        print_message $YELLOW "Warning: Script '$script_name' is not executable. Setting permissions..."
        chmod +x "$script_path"
    fi
    
    print_message $GREEN "Executing: $script_name"
    echo "----------------------------------------"
    
    # Execute the script
    bash "$script_path"
    local exit_code=$?
    
    echo "----------------------------------------"
    if [ $exit_code -eq 0 ]; then
        print_message $GREEN "✓ Script '$script_name' executed successfully"
    else
        print_message $RED "✗ Script '$script_name' failed with exit code: $exit_code"
    fi
    
    return $exit_code
}

# Function to execute all scripts
execute_all_scripts() {
    print_message $BLUE "Executing all shell scripts..."
    echo
    
    local success_count=0
    local total_count=0
    
    for script in "$SCRIPT_DIR"/*.sh; do
        if [ -f "$script" ]; then
            script_name=$(basename "$script")
            ((total_count++))
            
            print_message $YELLOW "Running script #$total_count: $script_name"
            execute_script "$script_name"
            
            if [ $? -eq 0 ]; then
                ((success_count++))
            fi
            
            echo
            read -p "Press Enter to continue to next script (or Ctrl+C to stop)..."
            echo
        fi
    done
    
    print_message $BLUE "Execution Summary:"
    print_message $GREEN "✓ Successful: $success_count/$total_count scripts"
    
    if [ $success_count -lt $total_count ]; then
        local failed_count=$((total_count - success_count))
        print_message $RED "✗ Failed: $failed_count/$total_count scripts"
    fi
}

# Function to show usage
show_usage() {
    echo "Usage: $0 [OPTION] [SCRIPT_NAME]"
    echo
    echo "Options:"
    echo "  -h, --help              Show this help message"
    echo "  -l, --list              List all available shell scripts"
    echo "  -p, --permissions       Set execute permissions for all scripts"
    echo "  -e, --execute SCRIPT    Execute a specific script (by name or number)"
    echo "  -a, --all               Execute all scripts sequentially"
    echo "  -i, --interactive       Interactive mode (default)"
    echo
    echo "Examples:"
    echo "  $0 -p                   # Set permissions for all scripts"
    echo "  $0 -e 01_basic.sh       # Execute script by name"
    echo "  $0 -e 1                 # Execute script by number"
    echo "  $0 -a                   # Execute all scripts"
    echo "  $0 -l                   # List all scripts"
    echo
}

# Interactive mode
interactive_mode() {
    clear
    print_message $BLUE "=== Shell Script Manager ==="
    echo
    print_message $GREEN "Welcome to the Shell Script Manager!"
    echo "This tool helps you manage and execute shell scripts from the Shell Scripting directory."
    echo
    
    while true; do
        echo
        print_message $YELLOW "What would you like to do?"
        echo "1. Set execute permissions for all scripts"
        echo "2. List all available scripts"
        echo "3. Execute a specific script (by number)"
        echo "4. Execute all scripts"
        echo "5. Exit"
        echo
        read -p "Enter your choice (1-5): " choice
        
        case $choice in
            1)
                set_permissions
                ;;
            2)
                list_scripts
                ;;
            3)
                list_scripts
                read -p "Enter the script number (1-14): " script_number
                if [ -n "$script_number" ]; then
                    execute_script_by_number "$script_number"
                    print_message $GREEN "Exiting Shell Script Manager..."
                    exit 0
                else
                    print_message $RED "No script number provided"
                fi
                ;;
            4)
                read -p "Are you sure you want to execute all scripts? (y/N): " confirm
                if [[ $confirm =~ ^[Yy]$ ]]; then
                    execute_all_scripts
                else
                    print_message $YELLOW "Operation cancelled"
                fi
                ;;
            5)
                print_message $GREEN "Goodbye!"
                exit 0
                ;;
            *)
                print_message $RED "Invalid choice. Please enter 1-5."
                ;;
        esac
    done
}

# Main script logic
main() {
    # Check if no arguments provided, start interactive mode
    if [ $# -eq 0 ]; then
        interactive_mode
        exit 0
    fi
    
    # Parse command line arguments
    case $1 in
        -h|--help)
            show_usage
            ;;
        -l|--list)
            list_scripts
            ;;
        -p|--permissions)
            set_permissions
            ;;
        -e|--execute)
            if [ -z "$2" ]; then
                print_message $RED "Error: Script name or number required for execute option"
                show_usage
                exit 1
            fi
            set_permissions
            # Check if input is a number or script name
            if [[ "$2" =~ ^[0-9]+$ ]]; then
                execute_script_by_number "$2"
            else
                execute_script "$2"
            fi
            ;;
        -a|--all)
            set_permissions
            execute_all_scripts
            ;;
        -i|--interactive)
            interactive_mode
            ;;
        *)
            print_message $RED "Error: Unknown option '$1'"
            show_usage
            exit 1
            ;;
    esac
}

# Run the main function with all arguments
main "$@"
