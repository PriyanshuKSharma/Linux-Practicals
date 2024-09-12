#!/bin/bash

# Create a file named "Weeks"
touch Weeks

# Open the file in vi or vim to insert the days of the week
# Automatically adding days into the file
echo "Inserting days of the week into the 'Weeks' file..."
cat <<EOL > Weeks
Monday
Tuesday
Wednesday
Thursday
Friday
Saturday
Sunday
EOL

# Use cat to display the file contents
echo "Displaying the contents of the 'Weeks' file:"
cat Weeks

# Use cat | tac to display the contents in reverse order
echo "Displaying the contents in reverse order using tac:"
cat Weeks | tac
