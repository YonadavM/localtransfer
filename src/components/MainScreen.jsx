import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

export default function MainScreen() {
    const [serverIp, setServerIp] = useState(null);
    const socket = io('http://localhost:3001');

  useEffect(() => {
    socket.on('recive-ip-addr', (ip) => {
      setServerIp(ip);
    });
  }, []);

  return (
    <div className="main-container">
      {serverIp ? (
        <pre>
          <h1>
            1. Connect the other device/s to the same network as the server.
            <br />
            2. Go to http://{serverIp}:3000
            <br />
            3. Start Transfer
          </h1>
        </pre>
      ) : (
        <h1>
        1. Connect the other device/s to the same network as the server.
        <br />
        2. Go to http://{"<server ip>"}:3000
        <br />
        3. Start Transfer
        </h1>
      )}
    </div>
  );
}
