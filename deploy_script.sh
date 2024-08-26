#!/bin/bash

# Prompt for commit message
read -p "Enter commit message: " commit_message

# Execute the commands
git add .
git commit -m "$commit_message"
git push origin main
npm run deploy