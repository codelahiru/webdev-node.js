const fs = require('fs');
const path = require('node:path');

// Create a folder

// fs.mkdir(path.join(__dirname, '/test'), {}, function(err){
//     if(err) throw err;
//     console.log('folder created...')
// });

// Create and Write file

// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'hello world!', function(err){
//     if(err) throw err;
//     console.log('File written to...')
// });

// Read File

fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', function(err, data){
    if(err) throw err;
    console.log(data)
});