const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'file-01.txt');

function showContent(err, content) {
  console.log(content.toString());
}

fs.readFile(filePath, {}, showContent);

const filePath02 = path.join(__dirname, 'file-02.txt');
fs.readFile(filePath02, {}, (_, content) => console.log(content.toString()));
