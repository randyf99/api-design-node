const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');
const app = express();
const port = 3000;

app.use(express.static('client'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var lions = []; // array of objects
var id = 0;

app.listen(port, () => {
    console.log('Listening on http://localhost', port);
});
