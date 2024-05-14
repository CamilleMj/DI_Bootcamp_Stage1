const { readFile, writeFile } = require('./fileManager');

const helloContent = readFile('Hello World.txt');

writeFile('Bye World.txt', 'Writing to the file');
