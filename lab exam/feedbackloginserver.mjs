import { createServer } from 'node:http';
import fs from 'node:fs/promises';

const writeToFile = async (data) => {
    try {
        await fs.writeFile('data.txt', data, { flag: 'a+' });
    } catch (e) {
        console.log(e);
    }
}
 
const hostname = '127.0.0.1';
const port = 3000;

const server = createServer(async (req, res) => {
    console.log('Received request...', req.url, req.method);

    if (req.url === '/') {
        if (req.method === 'GET') {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.end('Dhanu');
        } else if (req.method === 'OPTIONS') {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
            res.setHeader('Access-Control-Allow-Headers', '*');
            res.end('OK');
        } else if (req.method === 'POST') {
            let data = '';
            req.on('data', chunk => {
                data += chunk;
            });
            req.on('end', async () => {
                try {
                    const userData = JSON.parse(data);
                    const { name, email, message } = userData;
                    console.log('Name:', name);
                    console.log('Email:', email);
                    console.log('Message:', message);
                    await writeToFile(`Name: ${name}\n`);
                    await writeToFile(`Email: ${email}\n`);
                    await writeToFile(`Message: ${message}\n`);
                    let surname = 'Shree';
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.setHeader('Access-Control-Allow-Origin', '*');
                    res.end(JSON.stringify({ surname }));
                } catch (e) {
                    console.error('Error parsing JSON:', e.message);
                    res.writeHead(400, { 'Content-Type': 'text/plain' });
                    res.end('Invalid JSON data');
                }
            });
        } else {
            res.statusCode = 405;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Method Not Allowed');
        }
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Not Found');
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});