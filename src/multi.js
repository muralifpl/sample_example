import React, { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';

function App() {
  const [response, setResponse] = useState('');
  const [message, setMessage] = useState('');
  const [endpoint] = useState('http://localhost:3001');

  useEffect(() => {
    const socket = socketIOClient(endpoint);
    socket.on('chat message', (msg) => {
      setResponse(response + msg + '\n');
    });
  }, [endpoint, response]);

  const sendMessage = () => {
    const socket = socketIOClient(endpoint);
    socket.emit('chat message', message);
    setMessage('');
  };

  return (
    <div>
      <h2>React + Express + Socket.IO + Node.js Chat</h2>
      <textarea
        rows={10}
        value={response}
        readOnly
      />
      <br />
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <br />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default App;
