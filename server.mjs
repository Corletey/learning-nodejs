import { createServer } from 'node:http';
import {unlink,writeFile} from 'node:fs';


// Define request handler
const server = createServer((req, res) => {
    console.log(req.url);
    if (req.url.includes('create')) {
        //create file
        writeFile('./hello.html', '<h1>Learning Node.js</h1>', () => {
            //return response
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end('<h1>We have an HTTP Server</h1>');
        });
    }
    else {
        //delete file
        unlink('./hello.html', () => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            
        });
    }
});

// Listen for incoming request 
server.listen(3000, '127.0.0.1', () => {
    console.log('Server is running');
});

// Normal function vs Arrow function 
// function handleRequest() { }
const handleRequest = () => { }
