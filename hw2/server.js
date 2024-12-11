import fs from 'fs';
import path from 'path';
import net from 'net';

const serverFilesPath = path.join(import.meta.dirname, 'server-files');

fs.mkdirSync(serverFilesPath, { recursive: true });

const server = net.createServer((socket) => {
  console.log('Client connected');

  socket.on('data', (data) => {
    try {
      const message = JSON.parse(data.toString());

      if (message.type === 'upload') {
        const filePath = path.join(serverFilesPath, message.filename);

        fs.writeFileSync(filePath, message.content);
        console.log(`File ${message.filename} received and saved.`);

        socket.write(JSON.stringify({
          type: 'upload',
          filename: message.filename
        }));
      } else if (message.type === 'modify') {
        console.log(`File modification requested for all files.`);

        const files = fs.readdirSync(serverFilesPath)
          .filter(filename => filename.endsWith('.txt'))

        for (const filename of files) {
          const filePath = path.join(serverFilesPath, filename);
          const content = fs.readFileSync(filePath, 'utf-8');

          const modifiedContent = content
            .concat('\n2021');

          fs.writeFileSync(filePath, modifiedContent);
        };

        socket.write(JSON.stringify({
          type: 'modify'
        }));
      } else if (message.type === 'retrieve') {
        console.log(`File ${message.filename} retrieval requested.`);

        socket.write(JSON.stringify({
          type: 'retrieve',
          filename: message.filename,
          content: fs.readFileSync(path.join(serverFilesPath, message.filename), 'utf-8')
        }));
      };
    } catch (err) {
      console.error('Error processing data:', err);
    };
  });

  socket.on('end', () => {
    console.log('Client disconnected');
  });

  socket.on('error', (err) => {
    console.error(`Socket error: ${err.message}`);
  });
});

server.listen(8080, () => {
  console.log('Server listening on port 8080');
});
