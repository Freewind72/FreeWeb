#!/bin/bash

# One-click NVM and Node.js installer script

# Function to print colored messages
print_message() {
    local color=$1
    local message=$2
    case $color in
        "green") echo -e "\033[1;32m${message}\033[0m" ;;
        "red") echo -e "\033[1;31m${message}\033[0m" ;;
        "blue") echo -e "\033[1;34m${message}\033[0m" ;;
        *) echo -e "${message}" ;;
    esac
}

# Check if nvm is already installed
if [ -d "$HOME/.nvm" ]; then
    print_message "blue" "nvm is already installed. Checking for updates..."
    # Update nvm
    (cd "$HOME/.nvm" && git fetch --tags origin && git checkout `git describe --abbrev=0 --tags --match "v[0-9]*" $(git rev-list --tags --max-count=1)` && . "$HOME/.nvm/nvm.sh")
else
    # Install nvm
    print_message "green" "Installing nvm..."
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash || {
        print_message "red" "Failed to install nvm"
        exit 1
    }
    
    # Load nvm
    export NVM_DIR="$HOME/.nvm"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
fi

# Load nvm in current shell
\. "$HOME/.nvm/nvm.sh" 2>/dev/null || {
    print_message "red" "Failed to load nvm"
    exit 1
}

# Install Node.js v22
print_message "green" "Installing Node.js v22..."
nvm install 22 || {
    print_message "red" "Failed to install Node.js v22"
    exit 1
}

# Use Node.js v22
nvm use 22 || {
    print_message "red" "Failed to switch to Node.js v22"
    exit 1
}

# Verify installations
print_message "blue" "\nVerifying installations..."
node_version=$(node -v)
npm_version=$(npm -v)
nvm_current=$(nvm current)

print_message "green" "Node.js version: $node_version"
print_message "green" "npm version: $npm_version"
print_message "green" "nvm current version: $nvm_current"

# Check if versions match expected
if [[ "$node_version" == "v22.16.0" ]]; then
    print_message "green" "Node.js installation successful!"
else
    print_message "red" "Node.js version mismatch. Expected v22.16.0 but got $node_version"
fi

if [[ "$npm_version" == "10.9.2" ]]; then
    print_message "green" "npm installation successful!"
else
    print_message "yellow" "npm version mismatch. Expected 10.9.2 but got $npm_version (this might be okay)"
fi

print_message "blue" "\nInstallation complete! You may need to restart your terminal or run:"
print_message "blue" "source ~/.bashrc (or ~/.zshrc depending on your shell)"