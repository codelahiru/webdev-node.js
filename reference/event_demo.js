const EventEmitter = require('node:events');

// create class
class MyEmitter extends EventEmitter {}

// init object
const myEmitter = new MyEmitter();

// event listener
myEmitter.on('event', function() {console.log('Event Fired!')});

// init event
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');







