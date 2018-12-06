const express = require('express');
const redis = require('redis');
const config = require('./config');

const redisClient = redis.createClient({
    host: config.redis.host, port: config.redis.port
});
redisClient.on('error', (err) => { console.log(err); });

const app = express();

const sharedNumbers = [];

app.get('/', (req, res) => {
    if (!req.query.number) {
        res.status(400).send("A number is required!");
        return;
    }
    sharedNumbers.push(req.query.number);
    redisClient.publish('number', req.query.number);
    res.send(
        `
        Number: ${req.query.number} inserted successfully.
        <br>Shared Numbers: ${sharedNumbers}
        `
    );
});

app.listen(process.env['PORT'] || 8080, () => {
    console.log(
        `Listening on port: ${process.env['PORT'] || 8080}`
    );
});