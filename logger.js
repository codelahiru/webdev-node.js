const EventEmitter = require('node:events');
const uuid = require('uuid');

console.log(uuid.v4());

class Logger extends EventEmitter{
    log(msg) {
        // call event
        this.emit('message', {id: uuid.v4(), msg});

    }
}

module.exports = Logger;

// //console.log("Hello from Node.js!");

// const Person = require('./person');

// // Instantiate

// const person1 = new Person('John Doe', 30);

// person1.greeting();

// const Logger = require('./logger');

// const logger = new Logger();    // Instantiation

// logger.on('message', data => console.log('Called listener ', data));

// logger.log('Hello World');