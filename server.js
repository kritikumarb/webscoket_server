const WebSocket = require('ws');
const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('WebSocket server is running.\n');
});

// Create a WebSocket server on top of the HTTP server
const wss = new WebSocket.Server({ server });

// When a client connects to the WebSocket server
wss.on('connection', (ws) => {
    console.log('Client connected');

    // When a message is received from a client
    ws.on('message', (message) => {
        console.log('Received:', message);

        const buffer = new Uint8Array(message); 
        // Create a TextDecoder instance for UTF-8 encoding
        const decoder = new TextDecoder('utf-8');
        // Decode the buffer to a string
        const decoded_message = decoder.decode(buffer);

        console.log(decoded_message);

        // Send a response back to the client
        ws.send(`Server received: ${message}`);
    });

    // When the connection is closed
    ws.on('close', () => {
        console.log('Client disconnected');
    });
});

// Start the HTTP and WebSocket server on port 8080
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});
