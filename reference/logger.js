const EventEmitter = require('node:events');
const uuid = require('node:uuid');

console.log(uuid.v4());
console.log(uuid.v6());

class Logger extends EventEmitter{
    log(msg){
        // call event
        this.emit('message', {id: uuid.v6(), msg});
    }
}

module.exports = Logger;


