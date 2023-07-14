const fs = require('fs');
const path = require('node:path');

// create a folder

fs.mkdir(path.join(__dirname, '/test'), {}, function(err){
    if(err) throw err;
    console.log('folder created...')
});

// create and write file

