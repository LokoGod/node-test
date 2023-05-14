const EventEmitter = require('events');

const customEmitter = new EventEmitter();

// on   - listen for an event
// emit - emit an event
// The order matters (Listen, Emit)
// Built-in modules utilize it

customEmitter.on('response', (name, id) => {
    console.log(`data recieved user ${name} with id: ${id}`);
});


customEmitter.on('response', () => {
    console.log(`some other logic here`);
});


customEmitter.emit('response', 'john', 34);