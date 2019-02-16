const fs = require('fs');

fs.readFile('./README.md', 'utf8', function(error, contents) {
  console.log(contents);
});

console.log('2');
