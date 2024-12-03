#!/bin/bash

# Create fonts directory if it doesn't exist
mkdir -p assets/fonts

# Download Recursive font
curl -L https://github.com/arrowtype/recursive/releases/download/v1.085/RecursiveMonoLnr-Regular.ttf -o assets/fonts/RecursiveMonoLinear-Regular.ttf
