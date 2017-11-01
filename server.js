const express = require('express');
const app = express();
const port = 3000;

const jsonData = {count: 12, message: 'Hey'};

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html', (err) => {
        res.status(500).send(err);
    })
});

app.get('/data', (req, res) => {
    res.json(jsonData);
});

app.listen(port, () => {
    console.log('Listening on http://localhost', port);
});
