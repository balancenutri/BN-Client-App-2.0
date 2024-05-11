#!/bin/bash

# Navigate to deployment directory

# Pull changes from GitHub repository
git pull origin main

# Restart relevant services (e.g., Node.js, Apache, etc.)
# systemctl restart your_service_name

# Print success message
echo "Deployment successful"
