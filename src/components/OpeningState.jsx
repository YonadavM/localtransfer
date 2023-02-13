import { useState, useEffect } from 'react';
import io from 'socket.io-client';

export default function OpeningState(props) {
    const [serverIp, setServerIp] = useState(null);
   
    useEffect(() => {
        props.socket.on('recive-ip-addr', (ip) => {
        setServerIp(ip);
        });
    }, []);

    return (
        <>
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
        </>
    );
}