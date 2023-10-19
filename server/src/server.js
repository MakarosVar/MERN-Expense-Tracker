import http from 'http';
import app from './app.js';

const PORT=process.env.PORT || 5000;

const server = http.createServer();

server.listen(PORT, () => {console.log(`Server running on port ${PORT}`)});