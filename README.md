# Figma Customize Script for macOS

## Overview
This script adds the following shortcut keys to the Figma desktop app for macOS.

| Shortcut Key | Function                     |
|--------------|------------------------------|
| `F4`         | Select Frame Section         |
| `F8`         | Select Instance Section      |
| `F12`        | Select Auto Layout Section   |

> [!IMPORTANT]
> Please note that this script has not been tested on the Windows version of the desktop app or on the browser version of the app.

<br />
<br />

## Usage

### 1. Open the macOS desktop app and the Developer Tools console
1. Open Developer Tools (macOS: `Command` + `Option` + `I`)
2. Select the Console tab  
   ![Console Tab](https://github.com/nokki-y/figma-customize-script/assets/125117799/f37d54bc-901e-4a38-bc5d-f4c921ec85b2)

<br />

### 2. Copy the script from the Dist folder of this repository
1. Script path: `https://github.com/nokki-y/figma-customize-script/blob/main/dist/main.js`
2. Copy it  
   ![Copy Script](https://github.com/nokki-y/figma-customize-script/assets/125117799/4b8bb300-bb7e-471d-9e6f-80428d41db21)

<br />

### 3. Execute the script from the console
1. Paste the copied script into the console  
   ![Paste Script](https://github.com/nokki-y/figma-customize-script/assets/125117799/09bc7cdf-e857-4ba3-85f3-61310400833f)
2. Press Enter to execute  


<br />
<br />

## Important Notes
- The script will deactivate once the Figma file is closed. Therefore, it needs to be re-executed every time you open a file.
  - The Developer Tools console keeps a history of executed scripts, allowing you to rerun the script from the history in subsequent uses (press `↑` in the console to see the last executed command).

