const fs = require('fs');
const path = require('path');

//create a folder
fs.mkdir(path.join(__dirname, '/test'), {}, function(err) {
    if(err) throw err;
    console.log('Folder created');
});

//create and write to new file
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World', function(err) {
    if(err) throw err;
    console.log('File written to...');
});

//append new text to file, as when we again rewrite the upper create and write file, it will rewrite it
fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), '\nThis is another text which is appended', function(err) {
    if(err) throw err;
    console.log('File written to...');
});

//read a file
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', function(err, data) {
    if(err) throw err;
    console.log(data);
});

//rename a file
fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'hello2.txt'), function(err) {
    if(err) throw err;
    console.log('File renamed');
});
