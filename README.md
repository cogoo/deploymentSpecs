# Chambers deploymentDetails (Chrome Extension)

## deploymentDetails File.

> Config file on server

: For this extension to work. You need a file named deploymentSpecs.json in your application root with the following structure:

** You can use and build process to create this file

```js
{
"version" : "GitBranch Name",
"deployedBy" : "Test Developer",
"deployedOn" : "08 August 2016 12:12:43",
"octopusReleaseNumber" : "1.0.59",
"environmentName" : "Development"
}

```

## Installation

> Unzip

: Unzip folder to any location

> Enable developer mode on chrome

: Navigate to: chrome://extensions/ in your browser, and tick the Developer mode checkbox

> Add to chrome

: a) Click load unpacked extensions

: b) Navigate to folder you unzipped in step 1

: Tada! Extension installed.

## How to use

: You will notice an icon next to the chrome menu bar.

: Navigate to the 'Home URL'

: e.g. https://www.google.co.uk/

: Then click the icon and watch the magic!

## Modification

You can have any structure in your deploymentSpecs.JSON file, just make sure that its reflected in popup.js

