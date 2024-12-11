# Socket Homework Report

## Overview

In this project, i built a simple client-server system using socket programming where the client can upload files to the server, request modifications to those files, and then compare the modified versions with the originals. The system works by sending and receiving data in JSON format through TCP sockets.

## How it works

- Client
    - Creates 5 `.txt` files with my name, student id, and department in random order.
    - Uploads the files to the server.
    - Requests the server to modify files.
    - Retrieves the modified files and compares them to the original ones.
- Server
    - Receives the uploaded files from the client and stores them.
    - Modifies the files by adding a new line (\n2021) to each one when asked.
    - Sends the modified files back to the client for comparison.

## System Design
- Server
    - The server listens on port `8080` for client requests. Accepts three type of requests: `upload`, `modify` and `retrieve`.
    - The client creates files, uploads them to the server, requests modifications, retrieves the modified files, and compares them to the originals and prints the new lines.

## Testing and Results

1. The client created five text files, each containing the name, student ID, and department in a random order, and uploaded them to the server.
2. After the upload, the client requested that the server modify all files. The server appended a new line (`\n2021`) to each file.
3. The client retrieved the modified files and compared them with the originals. It successfully identified that the only modification was the addition of the new line (`2021`).

Sample client output:

```
File file1.txt uploaded to server.
File file2.txt uploaded to server.
File file3.txt uploaded to server.
File file4.txt uploaded to server.
File file5.txt uploaded to server.
All files modified.
File file1.txt retrieved from server.
File file1.txt has a new line: ['2021']
File file2.txt retrieved from server.
File file2.txt has a new line: ['2021']
File file3.txt retrieved from server.
File file3.txt has a new line: ['2021']
File file4.txt retrieved from server.
File file4.txt has a new line: ['2021']
File file5.txt retrieved from server.
File file5.txt has a new line: ['2021']
```

## Conclusion

The system fulfills the requirements of the assignment, demonstrating the use of socket programming for file transfer, modification, and comparison. The modifications were correctly identified and logged, confirming that the application works as expected.
