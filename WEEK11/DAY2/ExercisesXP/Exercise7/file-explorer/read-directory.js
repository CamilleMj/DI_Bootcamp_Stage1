const fs = require('fs');

const directoryPath = 'file-explorer';

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  console.log('Files in the directory:');
  files.forEach((file) => {
    console.log(file);
  });
});