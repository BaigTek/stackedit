const env = require('./config/prod.env');

Object.keys(env).forEach((key) => {
  if (!process.env[key]) {
    process.env[key] = JSON.parse(env[key]);
  }
});

const http = require('http');
const express = require('express');
const WebSocket = require('ws');

const app = express();

require('./server')(app, process.env.SERVE_V4);

const port = parseInt(process.env.PORT || 8080, 10);
const httpServer = http.createServer(app);

const wss = new WebSocket.Server({ server: httpServer });
wss.on('connection', (ws) => {

  // connection is up, let's add a simple simple event
  ws.on('message', (message) => {

    // log the received message and send it back to the client
    console.log('received: %s', message);
    ws.send(`Hello, you sent -> ${message}`);
  });

  // send immediately a feedback to the incoming connection
  ws.send('Hi there, I am a WebSocket server');
});

httpServer.listen(port, null, () => {
  console.log(`HTTP server started: http://localhost:${port}`);
});

// Handle graceful shutdown
process.on('SIGTERM', () => {
  httpServer.close(() => {
    process.exit(0);
  });
});
