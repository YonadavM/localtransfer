const io = require('socket.io')(5000, {
  cors: {
    origin: ['http://localhost:3000', 'http://localhost:3001']
  }
})
