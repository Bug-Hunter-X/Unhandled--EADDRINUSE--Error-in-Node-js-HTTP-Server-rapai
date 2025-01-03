# Unhandled 'EADDRINUSE' Error in Node.js HTTP Server

This repository demonstrates a common error in Node.js HTTP servers: the `EADDRINUSE` error, which occurs when the server attempts to bind to a port that is already in use. The provided solution demonstrates how to handle this error gracefully.

## Bug

The `bug.js` file contains a simple HTTP server that listens on port 8080. If another process is already using this port, the server will throw an `EADDRINUSE` error and crash without providing user-friendly feedback.

## Solution

The `bugSolution.js` file shows how to use the `'error'` event of the `http.Server` object to handle the `EADDRINUSE` error, providing more informative messages to the user.