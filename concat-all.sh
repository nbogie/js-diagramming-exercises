#!/bin/bash
# Get a list of all text files in the current directory
files=$(find src -maxdepth 1 -type f -name "*.js" | sort)
# Loop through each file and concatenate its contents with the header
for file in $files; do
    filename=$(basename "$file")
    echo "### $filename "
    echo "\`\`\`js"
    cat "$file"
    echo
    echo "\`\`\`"
    echo
done
