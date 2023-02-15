const os = require('os');

const interfaces = os.networkInterfaces();
let wifiAddress = null;

for (const key in interfaces) {
  if (key.includes('Wi-Fi') || key.includes('Wireless LAN')) {
    for (const addr of interfaces[key]) {
      if (addr.family === 'IPv4' && !addr.internal) {
        wifiAddress = addr.address;
        break;
      }
    }
    break;
  }
}

const io = require('socket.io')(5000, {
  cors: {
    origin: ['http://localhost:3000', 'http://localhost:3001']
  }
})

io.on('connection', socket => {
  socket.emit('recive-ip-addr', wifiAddress)

  socket.on('send-text-changes', (delta) => {
    console.log(delta);
    socket.broadcast.emit('receive-text-changes', delta)
  });
