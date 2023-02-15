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
    origin: ['http://localhost:3000', 'http://localhost:3001', `http://${wifiAddress}:3000`]
  }
})

io.on('connection', socket => {
  socket.emit('recive-ip-addr', wifiAddress)

  socket.on('send-text-changes', (delta) => {
    console.log(delta);
    socket.broadcast.emit('receive-text-changes', delta)
  });
  socket.on('send-file', (data) => {
    console.log(`Received file ${data.filename} from client ${socket.id}`);

    // Broadcast the file data to all connected clients
    socket.broadcast.emit('recive-file', { filename: data.filename, file: data.file });
  });
  socket.on("connect_error", (err) => {
    console.log(`connect_error due to ${err.message}`);
  });
});
