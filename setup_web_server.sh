```bash
#!/bin/bash

# Suppress details of the user and hostname during script execution
export PS1=''

# Check if the script is run as root
if [ "$EUID" -ne 0 ]; then
  echo "Please run as root"
  exit 1
fi

# Update system packages
echo "Updating system packages..."
sudo apt update -y || { echo "Failed to update packages"; exit 1; }

# Install Apache Web Server and PHP
echo "Installing Apache and PHP..."
sudo apt install apache2 php libapache2-mod-php -y || { echo "Failed to install Apache or PHP"; exit 1; }

# Start or restart Apache using 'service' command
echo "Starting Apache web server..."
sudo service apache2 start || { echo "Failed to start Apache"; exit 1; }

# Install PHP-FPM (for newer PHP versions)
echo "Installing PHP-FPM..."
sudo apt install php-fpm -y || { echo "Failed to install PHP-FPM"; exit 1; }

# Create a static HTML page
echo "Creating a static HTML page..."
cat <<EOL > /var/www/html/index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to Static Website</title>
</head>
<body>
    <h1>Welcome to the Static Web Page!</h1>
    <p>This is served by Apache web server.</p>
</body>
</html>
EOL

# Create a dynamic PHP page
echo "Creating a dynamic PHP page..."
cat <<EOL > /var/www/html/index.php
<?php
echo "<h1>Welcome to the Dynamic Web Page!</h1>";
echo "<p>This is a PHP page served by Apache.</p>";
?>
EOL

# Set appropriate permissions
echo "Setting permissions for web directory..."
sudo chown -R www-data:www-data /var/www/html/ || { echo "Failed to set permissions"; exit 1; }

# Restart Apache to apply changes
echo "Restarting Apache web server..."
sudo service apache2 restart || { echo "Failed to restart Apache"; exit 1; }

# Display success message
echo "Web server setup complete! Access the static page via your server's IP or domain name (http://your-server-ip), and the dynamic PHP page at http://your-server-ip/index.php."
