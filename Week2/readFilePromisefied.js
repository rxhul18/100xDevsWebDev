const MyPromise = require('./MyPromise/MyPromise');

const fs = require('fs');

function readFilePromise(filePath) {
  return new MyPromise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

readFilePromise('./100xDevs.txt').then(data => {
    console.log('File content:', data);
  }).catch(error => {
    console.error('Error reading file:', error);
  });
