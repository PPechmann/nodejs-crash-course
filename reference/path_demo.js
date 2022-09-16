const path = require('path');

// Gets base file name, without the entire path, only the filename
console.log(path.basename(__filename));

// Directory name
console.log(path.dirname(__filename));

// File extension (.js for example)
console.log(path.extname(__filename));

// Create object from the path 
console.log(path.parse(__filename)); //as it returns an object, you can also add .base for example, and it will return onl the base from the object

// Concatenate paths
console.log(path.join(__dirname, 'test', 'hello.html')); //helps when creating path as it detects for windows vs mac for example (/path vs \path)


