const app = require('./app');
const http = require('http');
const DB_PORT = process.env.PORT || 5000;
const HOST = '0.0.0.0';

const server = http.createServer(app)

server.listen(DB_PORT, '0.0.0.0', () => {
    console.log(`server is listening on ${DB_PORT} ....`)
});