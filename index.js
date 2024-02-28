// const http = require('http');
// const path = require('path');
// const fs = require('fs');
const Logger = require('./logger');

// const server =  http.createServer((req, res) => {
//     console.log(req.url);
// });

// const PORT = process.env.PORT || 5001;

// server.listen(PORT, () => {
//     console.log(`Server running on ${PORT}`);
// });

// const Person = require('./person');

// // extantiate
// const person1 = new Person('John Doe', 31);

// person1.greeting();

const logger = new Logger();

logger.on('message', function(data){
    console.log('called listener: ', data);
});

logger.log('Hello world');



