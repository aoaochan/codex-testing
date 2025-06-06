const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8080 }, () => {
  console.log('WebSocket server started on ws://localhost:8080');
});

server.on('connection', (ws) => {
  console.log('Client connected');
  ws.on('message', (message) => {
    console.log(`Received: ${message}`);
    ws.send(`Server echo: ${message}`);
  });
  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

