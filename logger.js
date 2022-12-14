const Logger =  require('./logger');

const EventEmitter = require('events');
const uuid = require('uuid');

class Logger extends EventEmitter {
    log(msg) {
        //call Event
        this.emit('message', {id: uuid.v4(), msg});
    }
}

/* module.exports = Logger; */

const logger = new Logger();

logger.on('message', (data) => console.log('Called Listener:', data));

logger.log('Hello World');