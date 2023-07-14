const path = require('node:path');

// Base File name
console.log(path.basename(__filename));

// Directory name
console.log(path.dirname(__filename));

// File extension
console.log(path.extname(__filename));

// create path object
console.log(path.parse(__filename).base);
