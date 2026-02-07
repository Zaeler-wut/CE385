// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('content-Type', 'text/plain');
//     res.end('Hello world');
// });

// server.listen(3000, '127.0.0.1', () => {
//     console.log('Server running at http://127.0.0.1:3000/')
// });

const express = require('express');

const app = express();

const port = 3000;

app.get('/', (req,res) => {
    res.send('Hello,world!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
});


const operation = require('./3-1');

console.log(operation('add', 4, 5));
console.log(operation('subtract', 10, 3));
console.log(operation('multiply', 5, 6));
console.log(operation('divide', 8, 2));
console.log(operation('mod', 5, 2));
