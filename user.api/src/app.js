const express = require('express');
const redis = require('redis');
const config = require('./config');

const redisClient = redis.createClient({
    host: config.redis.host, port: config.redis.port
});
redisClient.on('error', (err) => { console.log(err); });

const sharedNumbers = [];
redisClient.on('message', (chanel, message) => {
    console.log({ chanel, message });
    sharedNumbers.push(message);
});
redisClient.subscribe('number');

const app = express();

app.get('/', (req, res) => {
    res.send(`Shared Numbers: ${sharedNumbers}`);
});

app.listen(process.env['PORT'] || 8080, () => {
    console.log(
        `Listening on port: ${process.env['PORT'] || 8080}`
    );
});