const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('batman', () => {console.log('batman event occured')});
myEmitter.addListener('spiderman', () => {console.log('spiderman event occured')});

// getting the number of listeners for 
console.log('batman count', myEmitter.listenerCount('batman'));
console.log('spiderman count', myEmitter.listenerCount('spiderman'));
console.log('events count', myEmitter.eventsCount());
//emitting the events
//emit is used to trigger the event
myEmitter.emit('batman');
myEmitter.emit('spiderman');

