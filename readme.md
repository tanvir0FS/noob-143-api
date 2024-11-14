# noob-143-api

`noob-143-api` is a simple Node.js package designed to download media content from a specified URL using a custom API endpoint.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Example](#example)
- [API Reference](#api-reference)
- [Error Handling](#error-handling)
- [License](#license)

---

## Installation

Install the package via npm:

```bash
npm install noob-143-api

Usage

This package provides an asynchronous function, downloadMedia, to download media content from a given URL. You can import and use it directly in your project.

Importing the Package

const downloadMedia = require('noob-143-api');

Calling the downloadMedia Function

The function takes a URL as input and returns the downloaded media data if successful.

const url = "YOUR_MEDIA_URL"; // Replace with your media URL

downloadMedia(url)
    .then(data => console.log("Downloaded data:", data))
    .catch(error => console.error("Error:", error.message));

Example

This example demonstrates how to use the downloadMedia function to download media content:

1. Create a file named example.js.


2. Add the following code to example.js:

const downloadMedia = require('noob-143-api');

async function main() {
    const url = "YOUR_MEDIA_URL"; // Replace with your media URL
    try {
        const result = await downloadMedia(url);
        console.log("Download successful:", result);
    } catch (error) {
        console.error("Download failed:", error.message);
    }
}

main();


3. Run the example:

node example.js



Replace YOUR_MEDIA_URL with the actual URL of the media you want to download.

API Reference

downloadMedia(url)

Downloads media content from the specified URL.

Parameters:

url (string): The URL of the media to download.


Returns: A Promise that resolves with the downloaded media data or rejects with an error.


Example

const downloadMedia = require('noob-143-api');

downloadMedia("YOUR_MEDIA_URL")
    .then(data => console.log("Downloaded data:", data))
    .catch(error => console.error("Error:", error.message));

Error Handling

If the URL is missing, an error is thrown with the message: "URL is required."

If the download fails, an error is thrown with a detailed message: "Error downloading media: [error details]".


License

This project is licensed under the MIT License. See the LICENSE file for details.