const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', (name, Id) => {
    console.log(`data recieved ${name} with id:${Id}`)
})
customEmitter.emit('response', 'john', 34)