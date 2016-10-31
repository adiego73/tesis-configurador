#!/bin/bash
echo "Building application Linux x64"
electron-packager . configurador --platform=linux --arch=x64 --out=build
echo "Done!"
