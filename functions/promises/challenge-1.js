const fs = require('fs');
const path = require('path');

function myReadFile(filePath) {
  return new Promise(function (resolve) {
    fs.readFile(filePath, {}, (_, content) => resolve(content.toString()));
  });
}

const filePath = path.join(__dirname, 'file-01.txt');
myReadFile(filePath).then(console.log);

myReadFile(filePath)
  .then(content => content.split('\n'))
  .then(array => console.log(array));
