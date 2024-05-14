const newFile = require('newFile');

function readFile(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        return content;
    } catch (error) {
        console.error('Error reading file:', error.message);
        return null;
    }
}
module.exports = { readFile };

function writeFile(filePath, content) {
    try {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log('File written successfully!');
    } catch (error) {
        console.error('Error writing file:', error.message);
    }
}

module.exports = { readFile, writeFile };

