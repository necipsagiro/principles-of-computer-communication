import fs from 'fs';
import path from 'path';
import net from 'net';

const client = new net.Socket();
const clientFilesPath = path.join(import.meta.dirname, 'client-files');

fs.mkdirSync(clientFilesPath, { recursive: true });

const FILE_CONTENTS = [
  'Necip Sagiroglu',
  '150220727',
  'Computer Engineering'
];

function createLocalFiles() {
  for (let i = 1; i <= 5; i++) {
    const filename = `file${i}.txt`;

    const content = FILE_CONTENTS
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value)
      .join('\n');

    fs.writeFileSync(path.join(clientFilesPath, filename), content);
  }
};
async function uploadFilesToServer() {
  for (let i = 1; i <= 5; i++) {
    const filename = `file${i}.txt`;

    client.write(JSON.stringify({
      type: 'upload',
      filename: filename,
      content: fs.readFileSync(path.join(clientFilesPath, filename), 'utf-8')
    }));

    await new Promise(resolve => {
      client.once('data', data => {
        const message = JSON.parse(data.toString());

        if (message.type === 'upload' && message.filename === filename) {
          console.log(`File ${filename} uploaded to server.`);
          resolve();
        };
      });
    })
  };
};
async function requestServerToModifyFiles() {
  client.write(JSON.stringify({
    type: 'modify'
  }));

  await new Promise(resolve => {
    client.once('data', data => {
      const message = JSON.parse(data.toString());

      if (message.type === 'modify') {
        console.log('All files modified.');
        resolve();
      };
    });
  });
};
async function requestFilesAndLogDifferences() {
  for (let i = 1; i <= 5; i++) {
    const filename = `file${i}.txt`;

    client.write(JSON.stringify({
      type: 'retrieve',
      filename: filename
    }));

    await new Promise(resolve => {
      client.once('data', data => {
        const message = JSON.parse(data.toString());

        if (message.type === 'retrieve' && message.filename === filename) {
          console.log(`File ${filename} retrieved from server.`);

          const localContent = fs.readFileSync(path.join(clientFilesPath, filename), 'utf-8');
          const remoteContent = message.content;

          if (localContent === remoteContent) {
            console.log(`File ${filename} is the same.`);
          } else {
            console.log(`File ${filename} has a new line:`, remoteContent.split('\n').filter((line, index) => line !== localContent.split('\n')[index]));
          };

          resolve();
        };
      });
    });
  };
};

client.connect(8080, '127.0.0.1', async () => {
  createLocalFiles();

  await uploadFilesToServer();
  // await new Promise(resolve => setTimeout(resolve, 1000));
  await requestServerToModifyFiles();
  // await new Promise(resolve => setTimeout(resolve, 1000));
  await requestFilesAndLogDifferences();

  client.end();
});
